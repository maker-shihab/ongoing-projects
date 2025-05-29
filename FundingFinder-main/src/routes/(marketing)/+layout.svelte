<script lang="ts">
  import { WebsiteName } from "./../../config"
  import "../../app.css"
  import LanguageSwitcher from "$lib/components/LanguageSwitcher.svelte"
  import { localizeHref } from "$lib/paraglide/runtime"

  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()
</script>

<div class="flex flex-col min-h-screen font-['Exo']">
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div
      class="container mx-auto px-4 sm:px-6 lg:px-8 h-[90px] flex items-center justify-between"
    >
      <a
        href={localizeHref("/")}
        class="text-3xl font-bold text-[#0B251A] font-['Oswald'] tracking-tighter"
      >
        <img
          src="/images/fundingfinder_logo.svg"
          alt="FundingFinder Logo"
          class="h-10 w-auto"
        />
      </a>
      <nav class="hidden md:flex items-center space-x-6 text-base font-medium">
        <a
          href={localizeHref("/funding")}
          class="text-gray-700 hover:text-teal-600">Funding</a
        >
        <!-- <a
          href={localizeHref("/blog")}
          class="text-gray-700 hover:text-teal-600">Blog</a
        > -->
        <a
          href={localizeHref("/pricing")}
          class="text-gray-700 hover:text-teal-600">Pricing</a
        >
        <!-- <a
          href="https://github.com/CriticalMoments/CMSaasStarter"
          class="text-gray-700 hover:text-teal-600"
          target="_blank"
          rel="noopener noreferrer">Github</a
        > -->
        <!-- <a
          href={localizeHref("/contact_us")}
          class="text-gray-700 hover:text-teal-600">Contact</a
        > -->
      </nav>
      <div class="flex items-center space-x-3">
        <LanguageSwitcher />
        <a
          href={localizeHref("/login/sign_up")}
          class="btn px-6 py-2.5 bg-teal-600 border border-teal-600 text-white rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
        >
          Sign Up
        </a>
        <a
          href={localizeHref("/login/sign_in")}
          class="btn px-6 py-2.5 border border-teal-600 text-teal-600 rounded-lg text-sm font-semibold hover:bg-teal-50 transition-colors"
        >
          Sign In
        </a>
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            type="button"
            class="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            aria-label="Open menu"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu state -->
    <!-- TODO: Implement mobile menu toggle logic if needed -->
    <!-- <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="/funding" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50">Funding</a>
        <a href="/blog" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50">Blog</a>
        <a href="/pricing" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50">Pricing</a>
        <a href="https://github.com/CriticalMoments/CMSaasStarter" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="/contact_us" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50">Contact</a>
      </div>
    </div> -->
  </header>

  <div class="flex-grow">
    {@render children?.()}
  </div>

  <footer class="bg-[#225B53] text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <div class="flex items-center justify-between">
        <a
          href={localizeHref("/")}
          class="text-3xl font-bold text-white font-['Oswald'] tracking-tighter mb-4 inline-block"
        >
          <img
            src="/images/fundingFinderWhite.svg"
            alt="FundingFinder Logo"
            class="h-10 w-auto"
          />
        </a>
        <nav class="flex justify-center gap-6 mb-8">
          <a
            href={localizeHref("/imprint")}
            class="hover:underline text-sm mr-10">Imprint</a
          >
          <a href={localizeHref("/privacy")} class="hover:underline text-sm"
            >Privacy Policy</a
          >
          <!-- <a href={localizeHref("/contact_us")} class="hover:underline text-sm"
                >Contact Us</a
              > -->
        </nav>
      </div>
      <div class="border-t border-white/10 pt-8">
        <p class="text-sm text-white/80">
          © Copyright - {new Date().getFullYear()}
          {WebsiteName}.
        </p>
      </div>
    </div>
  </footer>
</div>
