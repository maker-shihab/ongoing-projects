<script lang="ts">
  import { m } from "$lib/paraglide/messages.js"
  import SearchResultCard from "$lib/components/SearchResultCard.svelte"
  import FilterBar from "$lib/components/FilterBar.svelte"
  import type { PageData } from "./$types" // Will be generated by SvelteKit
  import { ArrowLeft, ArrowRight, Loader2 } from "lucide-svelte"
  import { navigating } from "$app/stores" // Reverted to $app/stores
  import { goto } from "$app/navigation"
  import { tick } from "svelte"

  let { data } = $props() as { data: PageData }

  let totalPages = $derived(
    data.itemsPerPage > 0 ? Math.ceil(data.totalItems / data.itemsPerPage) : 1,
  )
  let searchQuery = $state(data.searchQuery || "")
  let activeFilters = $state(data.activeFilters || {})

  // Reactive statement to update searchQuery when data.searchQuery changes (e.g. back/forward navigation)
  $effect(() => {
    searchQuery = data.searchQuery || ""
    activeFilters = data.activeFilters || {}
  })

  // Helper function to build URL with filters
  function buildUrlWithFilters(page: number): string {
    // Create a URL path with query parameters
    let url = "/funding?page=" + page

    // Add search query if present
    if (data.searchQuery) {
      url += "&q=" + encodeURIComponent(data.searchQuery)
    }

    // Add filters - all filter values are treated as arrays
    for (const [key, value] of Object.entries(activeFilters)) {
      const valueArray = Array.isArray(value) ? value : [value]
      for (const item of valueArray) {
        url += `&${encodeURIComponent(key)}=${encodeURIComponent(String(item))}`
      }
    }

    return url
  }

  // Handle filter changes
  async function handleFilterChange(
    filters: Record<string, string | string[]>,
  ) {
    activeFilters = filters

    await tick()
    // Navigate to the new URL with page 1
    goto(buildUrlWithFilters(1), { replaceState: true, keepFocus: true })
  }
</script>

<svelte:head>
  <title>
    {data.searchQuery ? `Results for "${data.searchQuery}"` : "Funding Search"} -
    FundingFinder
  </title>
  <meta
    name="description"
    content="Search for funding programs on FundingFinder."
  />
</svelte:head>

<div class="container mx-auto px-4 py-8 font-exo">
  <!-- Search Bar Area -->
  <div class="mb-0 p-8 bg-teal-600 rounded-t-3xl shadow-lg">
    <div class="mx-auto">
      <h1 class="text-3xl font-bold text-white mb-2 text-center">
        {m.find_funding_opportunities()}
      </h1>
      <p class="text-teal-100 mb-6 text-center">
        What is the focus of your project or type of funding you are looking
        for?
      </p>
      <form method="GET" action="/funding" class="flex flex-col">
        <!-- Hidden inputs for active filters - all filter values are treated as arrays -->
        {#each Object.entries(activeFilters) as [key, value]}
          {#each Array.isArray(value) ? value : [value] as item}
            <input type="hidden" name={key} value={String(item)} />
          {/each}
        {/each}
        <div class="relative max-w-full">
          <div
            class="flex items-center relative bg-white border-2 border-teal-600 rounded-[20px] h-[82px] overflow-hidden"
          >
            <!-- Monkey Icon -->
            <div class="absolute left-6 top-1/2 transform -translate-y-1/2">
              <img
                src="/images/monkey_search.svg"
                alt="Search"
                class="w-[50px] h-[50px]"
              />
            </div>

            <!-- Search Input -->
            <input
              type="search"
              name="q"
              bind:value={searchQuery}
              placeholder="What is the focus of your project or type of funding you are looking for?"
              class="w-full h-full pl-20 pr-20 text-base font-medium text-black font-exo focus:outline-none"
            />

            <!-- Search Button -->
            <button
              type="submit"
              class="absolute right-[9px] top-1/2 transform -translate-y-1/2 w-16 h-16 bg-teal-600 hover:bg-teal-700 cursor-pointer rounded-[10px] flex items-center justify-center"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="white"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Filters Area -->
  <FilterBar {activeFilters} onChange={handleFilterChange} />

  <!-- Results Count -->
  {#if data.totalItems > 0}
    <h2 class="text-2xl font-bold text-gray-800 mb-6">
      {data.totalItems} Match{#if data.totalItems !== 1}es{/if}
      {#if data.searchQuery}
        for "{data.searchQuery}"{/if}
    </h2>
  {/if}

  <!-- Results List -->
  <div class="space-y-6 min-h-[300px]">
    {#if $navigating}
      <div
        class="flex flex-col items-center justify-center text-center py-12 px-6 bg-white rounded-lg shadow-md min-h-[300px]"
      >
        <Loader2 class="w-12 h-12 text-teal-600 animate-spin mb-4" />
        <p class="text-lg font-medium text-gray-700">Loading results...</p>
      </div>
    {:else if data.items && data.items.length > 0}
      {#each data.items as item (item.permalink)}
        <SearchResultCard {item} />
      {/each}
    {:else if data.totalItems === 0}
      <div class="text-center py-12 px-6 bg-white rounded-lg shadow-md">
        <div class="flex items-center justify-center">
          <img
            src="/images/monkey_not_found.svg"
            alt="Search"
            class="w-[70px] h-[70px]"
          />
        </div>
        <h3 class="mt-2 text-lg font-medium text-gray-500">
          No funding programs matched your search.
        </h3>
        <!-- <p class="mt-1 text-sm text-gray-500">
          No funding programs matched your search for "{data.searchQuery}". Try
          a different term.
        </p> -->
      </div>
      <!--     {:else if !data.searchQuery && data.totalItems === 0}
      <div class="text-center py-12 px-6 bg-white rounded-lg shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <h3 class="mt-2 text-lg font-medium text-gray-900">
          Search for Funding
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          Enter a term above to find funding programs.
        </p>
      </div -->
    {/if}
  </div>

  <!-- Pagination -->
  {#if totalPages > 1}
    <nav
      class="mt-12 flex items-center justify-between border-t border-gray-200 px-4 sm:px-0"
    >
      <div class="-mt-px flex w-0 flex-1">
        {#if data.currentPage > 1}
          <a
            href={buildUrlWithFilters(data.currentPage - 1)}
            class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            <ArrowLeft class="mr-3 h-5 w-5 text-gray-400" />
            Previous
          </a>
        {:else}
          <span
            class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-400 cursor-not-allowed"
          >
            <ArrowLeft class="mr-3 h-5 w-5 text-gray-300" />
            Previous
          </span>
        {/if}
      </div>
      <div class="hidden md:-mt-px md:flex">
        <!-- Basic page number display -->
        <span
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
        >
          Page {data.currentPage} of {totalPages}
        </span>
      </div>
      <div class="-mt-px flex w-0 flex-1 justify-end">
        {#if data.currentPage < totalPages}
          <a
            href={buildUrlWithFilters(data.currentPage + 1)}
            class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Next
            <ArrowRight class="ml-3 h-5 w-5 text-gray-400" />
          </a>
        {:else}
          <span
            class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-400 cursor-not-allowed"
          >
            Next
            <ArrowRight class="ml-3 h-5 w-5 text-gray-300" />
          </span>
        {/if}
      </div>
    </nav>
  {/if}
</div>

<style>
  /* Additional specific styles can go here if Tailwind isn't sufficient */
  /* For example, to ensure the search input border is exactly 3px */
  input[type="search"] {
    border-width: 3px;
  }

  /* Hide placeholder on focus */
  input[type="search"]:focus::placeholder {
    color: transparent;
  }

  /* Make the search bar responsive */
  @media (max-width: 768px) {
    /* Tailwind classes can't be directly targeted in CSS with square brackets */
    /* Use more specific selectors instead */
    /* div[class*="rounded-"] {
      border-radius: 15px;
    } */

    div[class*="h-"] {
      height: 70px;
    }

    input[type="search"] {
      font-size: 14px;
    }

    button[type="submit"] {
      width: 50px;
      height: 50px;
    }

    img[src*="monkey_search.svg"] {
      width: 40px;
      height: 40px;
    }

    input[class*="pl-20"] {
      padding-left: 4rem;
    }
  }

  @media (max-width: 480px) {
    div[class*="h-"] {
      height: 60px;
    }

    button[type="submit"] {
      width: 40px;
      height: 40px;
    }

    img[src*="monkey_search.svg"] {
      width: 30px;
      height: 30px;
    }

    input[class*="pl-20"] {
      padding-left: 3rem;
    }

    input[type="search"]::placeholder {
      font-size: 12px;
    }
  }
</style>
