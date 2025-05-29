<script lang="ts">
  import { filters } from "$lib/filters"
  import Svelecte from "svelecte"

  // Define an interface for objects with an id property
  interface IdObject {
    id: string
    [key: string]: unknown
  }

  // Props
  let { activeFilters = {}, onChange = () => {} } = $props<{
    activeFilters?: Record<string, string | string[]>
    onChange?: (filters: Record<string, string | string[]>) => void
  }>()

  function handleFilterChange(
    filterId: string,
    value: string | null | string[],
  ) {
    if (value === null || (Array.isArray(value) && value.length === 0)) {
      // Remove filter if value is null or empty array
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [filterId]: removed, ...rest } = activeFilters
      activeFilters = rest
    } else {
      // Add or update filter
      activeFilters = { ...activeFilters, [filterId]: value }
    }

    onChange(activeFilters)
  }

  function clearAllFilters() {
    activeFilters = {}
    onChange(activeFilters)
  }

  const activeFilterCount = $derived(Object.keys(activeFilters).length)
</script>

<div class="bg-teal-600 py-8 px-4 rounded-b-3xl shadow-lg">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-wrap items-center justify-between mb-4">
      <h2 class="text-xl font-bold text-white mb-2 sm:mb-0">Filter Results</h2>
      {#if activeFilterCount > 0}
        <button
          type="button"
          class="text-teal-100 hover:text-white text-sm font-medium flex items-center"
          onclick={clearAllFilters}
        >
          Clear all filters ({activeFilterCount})
        </button>
      {/if}
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
    >
      {#each filters as filter (filter.id)}
        <Svelecte
          placeholder={filter.label}
          value={Array.isArray(activeFilters[filter.id])
            ? (activeFilters[filter.id] as string[])
            : []}
          options={filter.options.map((t) => ({ id: t.value, name: t.label }))}
          multiple={true}
          onChange={(values: unknown) => {
            // Since we're using multiple=true, values will always be an array
            const stringValues = (values as unknown[]).map((v) =>
              typeof v === "object" && v !== null && "id" in v
                ? (v as IdObject).id
                : String(v),
            )
            handleFilterChange(filter.id, stringValues)
          }}
        />
      {/each}
    </div>
  </div>
</div>
