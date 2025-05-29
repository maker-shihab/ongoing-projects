<script lang="ts">
  import {
    Globe2,
    Users,
    Factory,
    CircleDollarSign,
    CalendarClock,
    Landmark,
    Briefcase,
    Bookmark,
    Coins,
    HandCoins,
    MessageSquare,
    ExternalLink,
  } from "lucide-svelte"
  import FinancialInstrumentType from "$lib/components/FinancialInstrumentType.svelte"
  import ProgramStatus from "$lib/components/ProgramStatus.svelte"
  import ReadMore from "./ReadMore.svelte"
  import { localizeHref } from "$lib/paraglide/runtime"

  interface FoerderdatenbankItem {
    url: string
    updated_at: string
    title: string | null
    introduction_short: string | null
    // md_content: string; // Not directly used in card, but could be for a modal
    overview_maximum_funding_amount: string | null
    overview_financial_instrument: string | null
    // overview_award_channel: string | null;
    overview_deadline: string | null
    overview_open_until: string | null
    overview_region: string | null
    overview_eligible_sectors_short: string[] | null
    overview_beneficiary: string | null
    // overview_target_stages_short: string[] | null;
    // provider_program_level: string | null;
    provider_funding_body: string | null
    provider_managed_by: string | null
    // provider_additional_partners: string | null;
    permalink: string
    program_status?: string | null // Assuming this field might exist for "Current"
  }

  let { item }: { item: FoerderdatenbankItem } = $props()

  // No longer needed as we're using the ProgramStatus component
  // let isCurrent = $derived(
  //   item.program_status === "aktiv" || item.program_status === "laufend",
  // ) // Placeholder logic

  let financialInstruments = $derived(
    item.overview_financial_instrument
      ?.toLowerCase()
      .split(/[,;]/)
      .map((s) => s.trim()) || [],
  )

  function formatCurrency(value: string | null) {
    if (!value) return "-"
    // Assuming value might be like "Bis zu 150.000 € p.a." or just "5,000,000 €"
    // This is a naive extraction, might need refinement
    const match = value.match(/([\d.,]+)\s*€/)
    if (match && match[1]) {
      return `${match[1]} €`
    }
    return value
  }

  function formatDate(dateString: string | null) {
    if (!dateString) return "-"
    // Assuming date might be DD.MM.YYYY or YYYY-MM-DD
    if (dateString.match(/^\d{2}\.\d{2}\.\d{4}$/)) {
      return dateString
    }
    if (dateString.match(/^\d{4}-\d{2}-\d{2}/)) {
      const [year, month, day] = dateString.split("T")[0].split("-")
      return `${day}.${month}.${year}`
    }
    return dateString
  }

  const deadline = $derived(
    formatDate(item.overview_deadline || item.overview_open_until),
  )
</script>

<div
  class="relative bg-white border border-gray-300/30 rounded-2xl p-6 shadow-lg font-sans w-full max-w-4xl mx-auto my-10"
>
  <!-- Program Status Badge -->
  {#if item.program_status}
    <div class="absolute top-0 right-22 transform -translate-y-1/2">
      <ProgramStatus
        status={item.program_status as
          | "Planned"
          | "Open"
          | "Closed"
          | "Cancelled"
          | "Other"}
      />
    </div>
  {/if}

  <!-- Top Right Badges/Icons -->
  <div class="absolute top-6 right-6 flex items-center space-x-3">
    <button
      aria-label="Bookmark"
      class="text-teal-600 hover:text-teal-700 cursor-pointer"
    >
      <Bookmark class="w-8 h-8" strokeWidth={1.5} />
    </button>
  </div>

  <!-- Category Tags -->
  <div class="flex space-x-2 mb-4">
    <div class="flex gap-2">
      {#if item.overview_financial_instrument}
        <FinancialInstrumentType
          type={item.overview_financial_instrument as
            | "Grant"
            | "Repayable"
            | "Loan"
            | "Convertible"
            | "Equity"
            | "Hybrid"
            | "Guarantee"
            | "Incentive"
            | "Prize"
            | "Other"}
        />
      {/if}
    </div>
    {#if financialInstruments.includes("zuschuss") || financialInstruments.includes("grant")}
      <span
        class="inline-flex items-center px-3 py-1 border border-blue-500 text-blue-500 text-xs font-bold rounded"
      >
        <HandCoins class="w-4 h-4 mr-1.5" />
        Subsidy
      </span>
    {/if}
    {#if financialInstruments.includes("darlehen") || financialInstruments.includes("loan")}
      <span
        class="inline-flex items-center px-3 py-1 border border-green-600 text-green-600 text-xs font-bold rounded"
      >
        <Coins class="w-4 h-4 mr-1.5" />
        Financing
      </span>
    {/if}
    {#if financialInstruments.includes("beratung") || financialInstruments.includes("consulting")}
      <span
        class="inline-flex items-center px-3 py-1 border border-purple-600 text-purple-600 text-xs font-bold rounded"
      >
        <MessageSquare class="w-4 h-4 mr-1.5" />
        Consulting
      </span>
    {/if}
    {#if financialInstruments.length === 0 && item.overview_financial_instrument}
      <span
        class="inline-flex items-center px-3 py-1 border border-gray-500 text-gray-500 text-xs font-bold rounded"
      >
        {item.overview_financial_instrument}
      </span>
    {/if}
  </div>

  <!-- Title -->
  <h2 class="text-xl font-bold text-black mb-2 font-exo">
    {item.title || "No Title Provided"}
  </h2>

  <!-- Description -->
  <div class="text-sm text-gray-700 mb-6 font-exo leading-relaxed">
    <ReadMore
      textContent={item.introduction_short || "No summary available."}
      maxWords={100}
    />
  </div>

  <!-- Details Grid -->
  <div class="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-8 text-sm">
    <!-- Left Column -->
    <div class="space-y-3">
      {#if item.overview_region}
        <div class="flex items-center">
          <Globe2 class="w-5 h-5 mr-3 text-teal-600 flex-shrink-0" />
          <span
            ><strong class="font-medium">Region:</strong>
            {item.overview_region}</span
          >
        </div>
      {/if}
      {#if item.overview_beneficiary}
        <div class="flex items-center">
          <Users class="w-5 h-5 mr-3 text-teal-600 flex-shrink-0" />
          <span
            ><strong class="font-medium">Beneficiaries:</strong>
            {item.overview_beneficiary}</span
          >
        </div>
      {/if}
      {#if item.overview_eligible_sectors_short && item.overview_eligible_sectors_short.length > 0}
        <div class="flex items-center">
          <Factory class="w-5 h-5 mr-3 text-teal-600 flex-shrink-0" />
          <span
            ><strong class="font-medium">Sectors:</strong>
            {item.overview_eligible_sectors_short.join(", ")}</span
          >
        </div>
      {/if}
      {#if item.overview_maximum_funding_amount}
        <div class="flex items-center">
          <CircleDollarSign class="w-5 h-5 mr-3 text-teal-600 flex-shrink-0" />
          <span
            ><strong class="font-medium">Maximum Amount:</strong>
            {formatCurrency(item.overview_maximum_funding_amount)}</span
          >
        </div>
      {/if}
    </div>

    <!-- Right Column -->
    <div class="space-y-3">
      {#if deadline && deadline !== "-"}
        <div class="flex items-center">
          <CalendarClock class="w-5 h-5 mr-3 text-teal-600 flex-shrink-0" />
          <span><strong class="font-medium">Deadline:</strong> {deadline}</span>
        </div>
      {/if}
      {#if item.provider_funding_body}
        <div class="flex items-center">
          <Landmark class="w-5 h-5 mr-3 text-teal-600 flex-shrink-0" />
          <span
            ><strong class="font-medium">Funding Provider:</strong>
            {item.provider_funding_body}</span
          >
        </div>
      {/if}
      {#if item.provider_managed_by}
        <div class="flex items-center">
          <Briefcase class="w-5 h-5 mr-3 text-teal-600 flex-shrink-0" />
          <span
            ><strong class="font-medium">Managed By:</strong>
            {item.provider_managed_by}</span
          >
        </div>
      {/if}
    </div>
  </div>

  <!-- Show Details Button -->
  <div class="flex justify-end">
    <a
      href={localizeHref(`/funding/${item.permalink}`)}
      class="inline-flex items-center px-6 py-3 bg-teal-600 text-white text-base font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-150 ease-in-out shadow-md"
    >
      Show Details
      <ExternalLink class="w-4 h-4 ml-2" />
    </a>
  </div>
</div>

<style>
  /* Using font-sans from Tailwind's default config as Exo and Roboto are not explicitly set up */
  /* If Exo is critical, it should be added to tailwind.config.js and app.html or global CSS */
  .font-exo {
    font-family: "Exo", sans-serif; /* Fallback to sans-serif */
  }
  /* Similarly for Roboto if needed, but the screenshot seems to use Exo mostly */
</style>
