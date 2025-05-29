<script lang="ts">
  import {
    getLocale,
    setLocale,
    locales as availableLocales,
  } from "$lib/paraglide/runtime.js"

  type Locale = (typeof availableLocales)[number]

  interface Language {
    code: Locale
    name: string
    icon: string
  }

  let languages: Language[] = [
    { code: "en", name: "English", icon: "🇬🇧" },
    { code: "de", name: "Deutsch", icon: "🇩🇪" },
  ]

  // Initialize selectedLanguage based on the current locale from runtime.js
  let currentLocaleCode = getLocale()
  let selectedLanguage = $state<Language>(
    languages.find((lang) => lang.code === currentLocaleCode) || languages[0],
  )

  function switchLanguage(language: Language) {
    setLocale(language.code, { reload: true }) // Set the locale without a full page reload
    selectedLanguage = language // Update the reactive state

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }
</script>

<div class="dropdown dropdown-end bg-base-100">
  <button type="button" class="btn m-1 bg-base-100">
    <span class="text-xl">{selectedLanguage.icon}</span>
    <span>{selectedLanguage.name}</span>
  </button>
  <ul
    tabindex="0"
    role="menu"
    class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
  >
    {#each languages as language (language.code)}
      <li>
        <button
          type="button"
          role="menuitem"
          onclick={() => switchLanguage(language)}
        >
          <span class="text-xl">{language.icon}</span>
          <span>{language.name}</span>
        </button>
      </li>
    {/each}
  </ul>
</div>

<style>
  /* Add any specific styles here if needed, otherwise Tailwind/DaisyUI classes handle most. */
  .dropdown-content li > button {
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Equivalent to Tailwind's gap-2 */
  }
</style>
