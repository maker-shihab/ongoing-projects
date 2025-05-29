<script lang="ts">
  /**
   * Component that displays a program status as a badge
   */
  let { status = "Other" } = $props<{
    status: "Planned" | "Open" | "Closed" | "Cancelled" | "Other"
  }>()

  // Map of statuses to their respective background colors
  const statusConfig = {
    Planned: {
      bgColor: "bg-gradient-to-r from-[#09A9DE] to-[#7DDEFF]",
    },
    Open: {
      bgColor: "bg-gradient-to-r from-[#00BE57] to-[#01F371]",
    },
    Closed: {
      bgColor: "bg-gradient-to-r from-[#A0A0A0] to-[#696969]",
    },
    Cancelled: {
      bgColor: "bg-gradient-to-r from-[#BDB76B] to-[#E7DE75]",
    },
    Other: {
      bgColor: "bg-gradient-to-r from-[#A0A0A0] to-[#696969]",
    },
  } as const

  // Ensure status is a valid key
  const validStatus = $derived(
    Object.keys(statusConfig).includes(status) ? status : "Other",
  ) as keyof typeof statusConfig

  // Get the configuration for the current status
  const config = $derived(statusConfig[validStatus])
</script>

<div
  class="flex flex-col justify-center items-center p-[1px] px-2.5 gap-1.5 w-[86px] h-[30px] {config.bgColor} shadow-md rounded-md"
>
  <div
    class="flex flex-row items-center justify-center p-0 gap-0.5 w-[66px] h-6"
  >
    <span
      class="w-full h-6 font-['Exo'] font-bold text-xs leading-[normal] flex items-center justify-center text-white capitalize"
    >
      {validStatus}
    </span>
  </div>
</div>
