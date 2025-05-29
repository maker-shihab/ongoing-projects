<script lang="ts">
  import { ChevronDown, X, Check } from "lucide-svelte"

  let {
    filterLabel,
    filterOptions,
    filterValues = [],
    isDropdownOpen,
    maxOptionsDisplayed,
    onChange,
  } = $props<{
    filterLabel: string
    filterOptions: { value: string; label: string }[]
    filterValues?: string[]
    isDropdownOpen: boolean
    maxOptionsDisplayed: number
    onChange: (values: string[]) => void
  }>()

  function handleSelect(optionValue: string) {
    if (filterValues.includes(optionValue)) {
      // Remove if already selected
      filterValues = filterValues.filter((v: string) => v !== optionValue)
    } else {
      // Add if not selected
      filterValues = [...filterValues, optionValue]
    }
    onChange(filterValues)
  }

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen
  }

  function clearSelection() {
    filterValues = []
    onChange(filterValues)
  }

  // Close dropdown when clicking outside
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement
    const dropdown = document.getElementById(`multi-dropdown-${filterLabel}`)

    if (dropdown && !dropdown.contains(target) && isDropdownOpen) {
      isDropdownOpen = false
    }
  }

  let selectedOptions = $derived.by(() =>
    filterOptions.filter((option: { value: string; label: string }) =>
      filterValues.includes(option.value),
    ),
  )
  let displayText = $derived.by(() =>
    selectedOptions.length > 0
      ? selectedOptions.length > maxOptionsDisplayed
        ? `${selectedOptions
            .slice(0, maxOptionsDisplayed)
            .map((o: { value: string; label: string }) => o.label)
            .join(", ")} +${selectedOptions.length - maxOptionsDisplayed}`
        : selectedOptions
            .map((o: { value: string; label: string }) => o.label)
            .join(", ")
      : filterLabel,
  )
</script>

<svelte:window onclick={handleClickOutside} />

<div class="relative" id={`multi-dropdown-${filterLabel}`}>
  <button
    type="button"
    class={`flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-lg shadow cursor-pointer
      ${
        filterValues.length > 0
          ? "bg-teal-50 text-teal-700 border border-teal-300"
          : "bg-white text-gray-700 border border-gray-300"
      }`}
    onclick={toggleDropdown}
    aria-haspopup="listbox"
    aria-expanded={isDropdownOpen}
  >
    <span class="truncate">
      {displayText}
    </span>
    <div class="flex items-center">
      {#if filterValues.length > 0}
        <span
          class="p-1 ml-1 text-gray-400 hover:text-gray-600 cursor-pointer"
          onclick={(event) => {
            event.stopPropagation()
            clearSelection()
          }}
          aria-label="Clear selection"
          role="button"
          tabindex="0"
          onkeydown={(e) => e.key === "Enter" && clearSelection()}
        >
          <X class="w-3 h-3" />
        </span>
      {/if}
      <ChevronDown
        class={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
      />
    </div>
  </button>

  {#if isDropdownOpen}
    <div
      class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
      role="listbox"
      aria-multiselectable="true"
    >
      <ul class="py-1">
        {#each filterOptions as option (option.value)}
          <li
            class={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100
              ${
                filterValues.includes(option.value)
                  ? "bg-teal-50 text-teal-700 font-medium"
                  : "text-gray-700"
              }`}
            role="option"
            aria-selected={filterValues.includes(option.value)}
            onclick={() => handleSelect(option.value)}
            onkeydown={(e) =>
              (e.key === "Enter" || e.key === " ") &&
              handleSelect(option.value)}
            tabindex="0"
          >
            <div class="flex items-center">
              <span class="flex-grow mr-2">{option.label}</span>
              {#if filterValues.includes(option.value)}
                <div class="flex-shrink-0">
                  <Check class="w-4 h-4 text-teal-600" />
                </div>
              {/if}
            </div>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>
