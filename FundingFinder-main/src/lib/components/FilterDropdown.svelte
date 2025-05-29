<script lang="ts">
  import { ChevronDown, X } from "lucide-svelte"

  let {
    label,
    options,
    value = $bindable(),
    onchange,
  } = $props<{
    label: string
    options: { value: string; label: string }[]
    value?: string | null
    onchange?: (value: string | null) => void
  }>()

  let isOpen = $state(false)

  function handleSelect(optionValue: string) {
    if (value === optionValue) {
      // If clicking the same value, clear the selection
      value = null
    } else {
      value = optionValue
    }
    onchange?.(value)
    isOpen = false
  }

  function toggleDropdown() {
    isOpen = !isOpen
  }

  function clearSelection() {
    value = null
    onchange?.(value)
  }

  // Close dropdown when clicking outside
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement
    const dropdown = document.getElementById(`dropdown-${label}`)

    if (dropdown && !dropdown.contains(target) && isOpen) {
      isOpen = false
    }
  }

  let selectedOption = $derived.by(() =>
    options.find(
      (option: { value: string; label: string }) => option.value === value,
    ),
  )
</script>

<svelte:window on:click={handleClickOutside} />

<div class="relative" id={`dropdown-${label}`}>
  <button
    type="button"
    class={`flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-lg shadow cursor-pointer
      ${value ? "bg-teal-50 text-teal-700 border border-teal-300" : "bg-white text-gray-700 border border-gray-300"}`}
    onclick={toggleDropdown}
    aria-haspopup="listbox"
    aria-expanded={isOpen}
  >
    <span class="truncate">
      {#if value}
        {selectedOption?.label || value}
      {:else}
        {label}
      {/if}
    </span>
    <div class="flex items-center">
      {#if value}
        <span
          class="p-1 ml-1 text-gray-400 hover:text-gray-600 cursor-pointer"
          onclick={(e) => {
            e.stopPropagation()
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
        class={`w-4 h-4 ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
      />
    </div>
  </button>

  {#if isOpen}
    <div
      class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
      role="listbox"
    >
      <ul class="py-1">
        {#each options as option: { value: string; label: string } (option.value)}
          <li
            class={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100
              ${value === option.value ? "bg-teal-50 text-teal-700 font-medium" : "text-gray-700"}`}
            role="option"
            aria-selected={value === option.value}
            onclick={() => handleSelect(option.value)}
            onkeydown={(e) =>
              (e.key === "Enter" || e.key === " ") &&
              handleSelect(option.value)}
            tabindex="0"
          >
            {option.label}
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>
