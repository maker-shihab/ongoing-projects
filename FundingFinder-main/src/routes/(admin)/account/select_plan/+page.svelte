<script lang="ts">
  import { localizeHref } from "$lib/paraglide/runtime"
  import PricingModule from "../../../(marketing)/pricing/pricing_module.svelte"
</script>

<svelte:head>
  <title>Select a Plan</title>
</svelte:head>

<div
  class="text-center content-center min-h-[100vh] pb-12 mt-4 flex items-center place-content-center"
>
  <div class="flex flex-col w-full px-6">
    <div>
      <h1 class="text-2xl font-bold mb-2">Select a Plan</h1>
      <div class="mb-6">
        View our <a href={localizeHref("/pricing")} target="_blank" class="link"
          >pricing page</a
        > for details.
      </div>
      <PricingModule callToAction="Select Plan" />
    </div>
  </div>
</div>
