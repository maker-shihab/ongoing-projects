import { error } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"
import type { Database } from "../../../DatabaseDefinitions"
import {
  CompanySize,
  EligibleApplicantsShort,
  EligibleSectorsShort,
  FinancialInstrumentType,
  TargetStageShort,
} from "$lib/filters"

const ITEMS_PER_PAGE = 5

// Define a type for the items we expect from the foerderdatenbank_processed table
type FoerderdatenbankProcessedItem =
  Database["public"]["Tables"]["foerderdatenbank_processed"]["Row"]

// Define a type for the active filters
type ActiveFilters = Record<string, string | string[]>

// Helper function to parse filter values from URL
function parseFilterFromUrl(
  searchParams: URLSearchParams,
  filterId: string,
  sanitize = true,
): string[] {
  const values = searchParams.getAll(filterId)
  if (sanitize) {
    return values.map((t) => t?.replace(/[^a-zA-Z0-9 _-]/g, ""))
  }
  return values
}

// Helper function to validate enum values
function validateEnumValues<T>(values: string[], enumObject: T): string[] {
  return values.filter((value) =>
    Object.values(enumObject as Record<string, string>).includes(value),
  )
}

// Helper function to apply filter to query
// Using a more pragmatic approach with type assertions to avoid complex typing issues
function applyFilterToQuery<T>(
  query: T,
  filterConfig: {
    values: string[]
    dbField: string
    useContainsOperator?: boolean
  },
): T {
  const { values, dbField, useContainsOperator = false } = filterConfig

  if (values.length === 0) {
    return query
  }

  // Use type assertion to tell TypeScript that the query has these methods
  type QueryWithMethods = T & {
    or: (conditions: string) => T
    in: (column: string, values: string[]) => T
  }

  const typedQuery = query as QueryWithMethods

  if (useContainsOperator) {
    // Use ANY operator for array fields with contains
    return typedQuery.or(
      values.map((value) => `${dbField}.cs.{${value}}`).join(","),
    ) as T
  } else {
    // Use in operator for direct value matching
    return typedQuery.in(dbField, values) as T
  }
}

export const load: PageServerLoad = async (event) => {
  const {
    url,
    locals: { supabaseServiceRole, session },
  } = event
  const rawSearchQuery = url.searchParams.get("q")
  const searchQuery = (rawSearchQuery || "").trim()
  const currentPage = parseInt(url.searchParams.get("page") || "1", 10)

  if (isNaN(currentPage) || currentPage < 1) {
    error(400, "Invalid page number")
  }

  const offset = (currentPage - 1) * ITEMS_PER_PAGE

  // Parse filter parameters from URL
  const activeFilters: ActiveFilters = {}

  // Define filter configurations
  const filterConfigs = [
    { id: "region", validate: false },
    { id: "company_size", validate: true, enumObject: CompanySize },
    {
      id: "financial_instrument",
      validate: true,
      enumObject: FinancialInstrumentType,
    },
    { id: "program_status", validate: false },
    {
      id: "eligible_applicants",
      validate: true,
      enumObject: EligibleApplicantsShort,
    },
    {
      id: "eligible_sectors",
      validate: true,
      enumObject: EligibleSectorsShort,
    },
    { id: "target_stages", validate: true, enumObject: TargetStageShort },
  ]

  // Process all filters
  for (const config of filterConfigs) {
    const values = parseFilterFromUrl(url.searchParams, config.id)

    if (values.length > 0) {
      // Validate values if needed
      const validValues = config.validate
        ? validateEnumValues(values, config.enumObject)
        : values

      if (validValues.length > 0) {
        activeFilters[config.id] = validValues
      }
    }
  }

  try {
    let query = supabaseServiceRole.from("foerderdatenbank_processed").select(
      `
        url, title, introduction_short, permalink,
        overview_maximum_funding_amount, overview_financial_instrument,
        overview_deadline, overview_open_until, overview_region,
        overview_eligible_sectors_short, overview_eligible_applicants_short,
        overview_target_stages_short, overview_company_size,
        overview_beneficiary, provider_funding_body, provider_managed_by, program_status
        `,
      { count: "exact" },
    )

    // Apply search filter
    if (searchQuery) {
      query = query.ilike("title", `%${searchQuery}%`)
    }

    // Define query filter configurations with mapping from filter key to database field
    const queryFilterConfigs = [
      {
        filterKey: "region",
        dbField: "overview_region",
        useContainsOperator: false,
      },
      {
        filterKey: "company_size",
        dbField: "overview_company_size",
        useContainsOperator: false,
      },
      {
        filterKey: "financial_instrument",
        dbField: "overview_financial_instrument",
        useContainsOperator: false,
      },
      {
        filterKey: "program_status",
        dbField: "program_status",
        useContainsOperator: false,
      },
      {
        filterKey: "eligible_applicants",
        dbField: "overview_eligible_applicants_short",
        useContainsOperator: true,
      },
      {
        filterKey: "eligible_sectors",
        dbField: "overview_eligible_sectors_short",
        useContainsOperator: true,
      },
      {
        filterKey: "target_stages",
        dbField: "overview_target_stages_short",
        useContainsOperator: true,
      },
    ]

    // Apply all filters to query
    for (const config of queryFilterConfigs) {
      const filterValues = activeFilters[config.filterKey]
      if (filterValues && Array.isArray(filterValues)) {
        // Use type assertion to avoid TypeScript errors with the complex Supabase query builder type
        query = applyFilterToQuery(query, {
          dbField: config.dbField,
          useContainsOperator: config.useContainsOperator,
          values: filterValues as string[],
        })
      }
    }

    // Apply pagination
    query = query
      .order("updated_at", { ascending: false })
      .range(offset, offset + ITEMS_PER_PAGE - 1)

    const { data: items, error: dbError, count } = await query

    if (dbError) {
      error(500, `Failed to fetch funding programs: ${dbError.message}`)
    }

    // Ensure items is always an array
    const safeItems = (items as FoerderdatenbankProcessedItem[]) || []

    return {
      items: safeItems,
      totalItems: count || 0,
      currentPage,
      itemsPerPage: ITEMS_PER_PAGE,
      searchQuery, // Return the trimmed search query
      activeFilters, // Return the active filters
      session,
    }
  } catch (e: unknown) {
    const err = e as Error
    error(500, err.message || "An unexpected error occurred in load function")
  }
}
