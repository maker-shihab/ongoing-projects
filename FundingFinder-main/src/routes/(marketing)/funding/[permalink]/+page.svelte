<script lang="ts">
  import { page } from "$app/state"
  import type { PageData } from "./$types"
  import MarkdownAccordion from "$lib/components/MarkdownAccordion.svelte"
  import FinancialInstrumentType from "$lib/components/FinancialInstrumentType.svelte"
  import ProgramStatus from "$lib/components/ProgramStatus.svelte"
  import {
    ArrowLeft,
    Bookmark,
    // Share2, // Not explicitly in new design image, can add if needed
    Globe,
    // Landmark, // For Funding Body / Program Level - Not directly used, covered by text
    Users, // For Beneficiary
    Briefcase, // For Sectors
    Target, // For Funding Stages
    CalendarDays, // For Deadline / Open Until
    Info, // For Award Channel
    Euro, // For Max Amount
    FileText, // For Financial Instrument
    // Building, // For Managed By / Additional Partners - Not directly used, covered by text
    // Mail, // For Contact (if available) - Data not available
    // Link, // For Source URL - Handled by <a> tag
  } from "lucide-svelte"
  import { localizeHref } from "$lib/paraglide/runtime"

  let { data }: { data: PageData } = $props()

  // Type assertion for program data
  const program =
    data.program as import("../../../../DatabaseDefinitions").Tables<"foerderdatenbank_processed">
  const meta = data.meta

  // No longer needed as we're using the ProgramStatus component
  // const isProgramCurrent = (
  //   openUntil: string | null,
  //   deadline: string | null,
  // ): boolean => {
  //   const today = new Date()
  //   today.setHours(0, 0, 0, 0) // Compare dates only

  //   if (openUntil) {
  //     const openUntilDate = new Date(openUntil)
  //     if (openUntilDate >= today) return true
  //   }
  //   if (deadline) {
  //     const deadlineDate = new Date(deadline)
  //     if (deadlineDate >= today) return true
  //   }
  //   // If openUntil is in the past, and deadline is also in the past or not set, it's not current.
  //   // If only one is set and in the past, it's not current.
  //   // If neither is set, or both are in the past, consider it not current or status unknown.
  //   // For simplicity, if open_until is past and deadline is also past/null, it's not current.
  //   // If no dates, assume not current for safety, or handle as 'unknown status'.
  //   // The design shows "Current" prominently, so a clear signal is good.
  //   // Let's assume if open_until is valid and in the future, it's current.
  //   if (openUntil) {
  //     try {
  //       const date = new Date(openUntil.split(".").reverse().join("-")) // Assuming DD.MM.YYYY
  //       return date >= today
  //     } catch (e) {
  //       return false // Invalid date format
  //     }
  //   }
  //   // If no open_until, check deadline
  //   if (deadline) {
  //     try {
  //       const date = new Date(deadline.split(".").reverse().join("-")) // Assuming DD.MM.YYYY
  //       return date >= today
  //     } catch (e) {
  //       return false // Invalid date format
  //     }
  //   }
  //   return false // Default if no valid dates
  // }

  const formatTextArray = (text: string | null): string[] => {
    if (!text) return []
    // Split by common delimiters like newline, semicolon, or comma, then trim whitespace
    return text
      .split(/[\n;,]+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0)
  }
</script>

<svelte:head>
  <title>{program.seo_title || meta.title}</title>
  <meta
    name="description"
    content={program.seo_meta_description || meta.description}
  />
  <link rel="canonical" href={page.url.href} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content={page.url.href} />
  <meta property="og:title" content={program.seo_title || meta.title} />
  <meta
    property="og:description"
    content={program.seo_meta_description || meta.description}
  />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={page.url.href} />
  <meta name="twitter:title" content={program.seo_title || meta.title} />
  <meta
    name="twitter:description"
    content={program.seo_meta_description || meta.description}
  />

  <!-- Keywords -->
  {#if program.seo_keywords && program.seo_keywords.length > 0}
    <meta name="keywords" content={program.seo_keywords.join(", ")} />
  {/if}
  {#if program}
    <!-- prettier-ignore -->
    <script type="application/ld+json">
      {@html JSON.stringify({
        "@context": "https://schema.org",
        "@type": "GovernmentGrant",
        "name": program.title,
        "description": program.introduction_short,
        "url": $page.url.href, // Page URL
        "provider": {
          "@type": "Organization",
          "name": program.provider_funding_body || "Unknown Provider"
        },
        "totalPaymentDue": { // Using totalPaymentDue as a proxy for amount if applicable
          "@type": "MonetaryAmount",
          "value": parseFloat(program.overview_maximum_funding_amount?.replace(/[^0-9.,]/g, '').replace(',', '.')) || null,
          "currency": program.overview_maximum_funding_amount?.includes("€") ? "EUR" : (program.overview_maximum_funding_amount?.includes("$") ? "USD" : null)
        },
        "programArea": {
            "@type": "AdministrativeArea",
            "name": program.overview_region
        },
        "eligibleSector": program.overview_eligible_sectors_short,
        "applicationDeadline": program.overview_deadline || program.overview_open_until,
        "grantee": program.overview_beneficiary, // Beneficiary
        "fundingSource": program.provider_program_level // Program Level
      })}
    </script>
  {/if}
</svelte:head>

<!-- Green top border -->
<div class="h-1 bg-[#39988B]"></div>

<div class="bg-white">
  <main
    class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[77px] py-8 font-['Exo']"
  >
    <!-- Back to search -->
    <div class="mb-10 mt-12">
      <!-- Adjusted top margin from 168px (top of Frame 67) - 118px (top of Rectangle 6) = 50px. Using relative values. -->
      <a
        href={localizeHref("/funding")}
        class="inline-flex items-center text-[#39988B] font-semibold text-lg hover:underline"
      >
        <ArrowLeft class="w-6 h-6 mr-2.5" />
        Back to search
      </a>
    </div>

    <!-- Header Section -->
    <section
      class="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10"
    >
      <div class="lg:w-2/3">
        <h1 class="text-[48px] font-bold text-[#1E1E1E] leading-[60px] mb-6">
          {program?.title || "Loading..."}
        </h1>
        <!-- Tags: Financing, Subsidy, Consulting -->
        <div class="flex flex-wrap gap-2.5 mb-6">
          {#if program.overview_financial_instrument}
            {#each formatTextArray(program.overview_financial_instrument) as instrument}
              <span
                class="px-2.5 py-0.5 border border-green-700 text-green-700 rounded-md text-xs font-bold flex items-center gap-1.5"
              >
                <FileText size={14} />
                {instrument}
              </span>
            {/each}
          {/if}
          <!-- Placeholder for other tags like Subsidy, Consulting if data exists -->
        </div>
      </div>
      <div
        class="flex flex-col sm:flex-row lg:flex-col gap-4 mt-4 lg:mt-0 items-start lg:items-end w-full lg:w-auto"
      >
        <div class="flex gap-2">
          {#if program.program_status}
            <ProgramStatus
              status={program.program_status as
                | "Planned"
                | "Open"
                | "Closed"
                | "Cancelled"
                | "Other"}
            />
          {/if}
          {#if program.overview_financial_instrument}
            <FinancialInstrumentType
              type={program.overview_financial_instrument as
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
        <button
          class="flex items-center justify-center px-6 py-2 border border-[#39988B] text-[#39988B] rounded-[10px] font-semibold text-lg hover:bg-[#39988B]/10 w-full sm:w-auto lg:w-[229px] h-[50px]"
        >
          <Bookmark class="w-6 h-6 mr-2.5" />
          Save Funding
        </button>
      </div>
    </section>

    <!-- Short Summary -->
    <section class="mb-12">
      <p class="text-base font-medium leading-[34px] text-black max-w-[817px]">
        {program.introduction_short || "No summary available."}
      </p>
    </section>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12">
      <!-- Left Column: Markdown Content -->
      <div class="lg:col-span-8">
        {#if program.md_content}
          <MarkdownAccordion
            markdown={program.md_content}
            accordionLevel={3}
            offsetMarkdownHeadingLevels={1}
          />
        {:else}
          <p>Detailed information is not available for this program.</p>
        {/if}

        <!-- Hashtags (Placeholder - data source unclear from foerderdatenbank_processed) -->
        <!-- 
        <div class="mt-10">
          <h3 class="text-2xl font-bold mb-4 text-black">Tags</h3>
          <div class="flex flex-wrap gap-3.5">
            <span class="px-2.5 py-1 bg-[#39988B] text-white rounded-md text-xs font-bold">#ResearchAllowance</span>
            <span class="px-2.5 py-1 bg-[#39988B] text-white rounded-md text-xs font-bold">#RDFunding</span>
          </div>
        </div>
        -->

        <!-- Similar Programs (Placeholder - data source unclear from foerderdatenbank_processed) -->
        <!--
        <div class="mt-10">
          <h3 class="text-2xl font-bold mb-6 text-black">Similar programs</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-[#3965F5] underline font-bold text-lg">Crédit d'Impôt Recherche (CIR)</a></li>
            <li><a href="#" class="text-[#3965F5] underline font-bold text-lg">R&D Tax Relief Scheme</a></li>
          </ul>
        </div>
        -->
      </div>

      <!-- Right Column: Sidebar -->
      <div class="lg:col-span-4 space-y-8">
        <!-- Funding Overview Box -->
        <div class="rounded-[10px] overflow-hidden">
          <div class="bg-[#029ECF] px-6 py-2">
            <h2 class="text-2xl font-semibold text-white leading-[60px]">
              Funding Overview
            </h2>
          </div>
          <div class="bg-[#EFFBFF] p-6 space-y-5 rounded-b-[10px]">
            {#if program.overview_maximum_funding_amount}
              <div class="flex items-start">
                <Euro size={20} class="text-black mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p class="text-sm font-bold text-black leading-[34px]">
                    Maximum Amount
                  </p>
                  <p class="text-[15px] font-medium text-black leading-[24px]">
                    {program.overview_maximum_funding_amount}
                  </p>
                </div>
              </div>
            {/if}
            {#if program.overview_financial_instrument}
              <div class="flex items-start">
                <FileText
                  size={20}
                  class="text-black mr-3 mt-1 flex-shrink-0"
                />
                <div>
                  <p class="text-sm font-bold text-black leading-[34px]">
                    Financial Instrument
                  </p>
                  <p class="text-[15px] font-medium text-black leading-[24px]">
                    {program.overview_financial_instrument}
                  </p>
                </div>
              </div>
            {/if}
            {#if program.overview_award_channel}
              <div class="flex items-start">
                <Info size={20} class="text-black mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p class="text-sm font-bold text-black leading-[34px]">
                    Award Channel
                  </p>
                  <p class="text-[15px] font-medium text-black leading-[24px]">
                    {program.overview_award_channel}
                  </p>
                </div>
              </div>
            {/if}
            {#if program.overview_deadline}
              <div class="flex items-start">
                <CalendarDays
                  size={16}
                  class="text-black mr-3 mt-1 flex-shrink-0"
                />
                <!-- Icon size from design -->
                <div>
                  <p class="text-sm font-bold text-black leading-[30px]">
                    Deadline
                  </p>
                  <p class="text-sm font-medium text-black leading-[24px]">
                    {program.overview_deadline}
                  </p>
                </div>
              </div>
            {/if}
            {#if program.overview_open_until}
              <div class="flex items-start">
                <CalendarDays
                  size={17}
                  class="text-black mr-3 mt-1 flex-shrink-0"
                />
                <!-- Icon size from design -->
                <div>
                  <p class="text-sm font-bold text-black leading-[30px]">
                    Open Until
                  </p>
                  <p class="text-sm font-medium text-black leading-[24px]">
                    {program.overview_open_until}
                  </p>
                </div>
              </div>
            {/if}
            {#if program.overview_region}
              <div class="flex items-start">
                <Globe size={17} class="text-black mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p class="text-sm font-bold text-black leading-[34px]">
                    Region
                  </p>
                  <p class="text-[15px] font-medium text-black leading-[24px]">
                    {program.overview_region}
                  </p>
                </div>
              </div>
            {/if}
            {#if program.overview_eligible_sectors_short && program.overview_eligible_sectors_short.length > 0}
              <div class="flex items-start">
                <Briefcase
                  size={20}
                  class="text-black mr-3 mt-1 flex-shrink-0"
                />
                <div>
                  <p class="text-sm font-bold text-black leading-[34px]">
                    Sectors
                  </p>
                  <p class="text-[15px] font-medium text-black leading-[24px]">
                    {program.overview_eligible_sectors_short.join(", ")}
                  </p>
                </div>
              </div>
            {/if}
            {#if program.overview_beneficiary}
              <div class="flex items-start">
                <Users size={20} class="text-black mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p class="text-sm font-bold text-black leading-[34px]">
                    Beneficiary
                  </p>
                  <p class="text-[15px] font-medium text-black leading-[24px]">
                    {program.overview_beneficiary}
                  </p>
                </div>
              </div>
            {/if}
            {#if program.overview_target_stages_short && program.overview_target_stages_short.length > 0}
              <div class="flex items-start">
                <Target size={20} class="text-black mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p class="text-sm font-bold text-black leading-[34px]">
                    Funding Stages
                  </p>
                  <p class="text-[15px] font-medium text-black leading-[24px]">
                    {program.overview_target_stages_short.join(", ")}
                  </p>
                </div>
              </div>
            {/if}
          </div>
        </div>

        <!-- Funding Provider Box -->
        <div class="rounded-[10px] overflow-hidden">
          <div class="bg-[#4FA530] px-6 py-2">
            <h2 class="text-2xl font-semibold text-white leading-[60px]">
              Funding Provider
            </h2>
          </div>
          <div
            class="bg-[#F3FFEF] p-6 space-y-3.5 rounded-b-[10px] text-sm text-black leading-[30px]"
          >
            {#if program.provider_program_level}<p>
                <span class="font-bold">Program Level:</span>
                {program.provider_program_level}
              </p>{/if}
            {#if program.provider_funding_body}<p>
                <span class="font-bold">Funding Body:</span>
                {program.provider_funding_body}
              </p>{/if}
            {#if program.provider_managed_by}<p>
                <span class="font-bold">Managed by:</span>
                {program.provider_managed_by}
              </p>{/if}
            {#if program.provider_additional_partners}<p>
                <span class="font-bold">Additional Partners:</span>
                {program.provider_additional_partners}
              </p>{/if}
            <!-- Contact: address, email - Data source unclear from foerderdatenbank_processed -->
            {#if program.url}
              <p>
                <span class="font-bold">Source:</span>
                <a
                  href={program.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#3965F5] hover:underline break-all"
                  >{program.url}</a
                >
              </p>
            {/if}
          </div>
        </div>

        <!-- Contact Us Button -->
        <button
          class="w-full h-[50px] bg-[#39988B] text-white rounded-[10px] font-semibold text-lg hover:bg-[#2F7A70]"
        >
          Contact Us
        </button>
      </div>
    </div>
  </main>
</div>
