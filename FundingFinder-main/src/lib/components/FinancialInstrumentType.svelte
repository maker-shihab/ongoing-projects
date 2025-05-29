<script lang="ts">
  /**
   * Component that displays a financial instrument type as a badge
   */
  let { type = "Other" } = $props<{
    type:
      | "Grant"
      | "Repayable"
      | "Loan"
      | "Convertible"
      | "Equity"
      | "Hybrid"
      | "Guarantee"
      | "Incentive"
      | "Prize"
      | "Other"
  }>()

  // Map of types to their respective colors and icons
  const typeConfig = {
    Grant: {
      color: "text-[#00B8A9] border-[#00B8A9]",
      icon: "i-fluent:coin-stack-20-filled",
    },
    Repayable: {
      color: "text-[#F2994A] border-[#F2994A]",
      icon: "i-mingcute:card-pay-line",
    },
    Loan: {
      color: "text-[#ED4C49] border-[#ED4C49]",
      icon: "i-mdi:bank",
    },
    Convertible: {
      color: "text-[#2D9CDB] border-[#2D9CDB]",
      icon: "i-hugeicons:redo",
    },
    Equity: {
      color: "text-[#4B4AEF] border-[#4B4AEF]",
      icon: "i-solar:dollar-bold",
    },
    Hybrid: {
      color: "text-[#B53DE1] border-[#B53DE1]",
      icon: "i-carbon:hybrid-networking-alt",
    },
    Guarantee: {
      color: "text-[#27AE60] border-[#27AE60]",
      icon: "i-uil:asterisk",
    },
    Incentive: {
      color: "text-[#FF7A59] border-[#FF7A59]",
      icon: "i-material-symbols-light:money-bag-rounded",
    },
    Prize: {
      color: "text-[#3965F5] border-[#3965F5]",
      icon: "i-fa6-solid:hand-holding-dollar",
    },
    Other: {
      color: "text-[#444379] border-[#444379]",
      icon: "i-solar:money-bag-linear",
    },
  } as const

  // Ensure type is a valid key
  const validType = $derived(
    Object.keys(typeConfig).includes(type) ? type : "Other",
  ) as keyof typeof typeConfig

  // Get the configuration for the current type
  const config = $derived(typeConfig[validType])
</script>

<div
  class="box-border flex flex-col justify-center items-center p-[1px] px-2.5 gap-1.5 w-[100px] h-[30px] border border-solid rounded-md {config.color}"
>
  <div class="flex flex-row items-center p-0 gap-1.5 w-[85px] h-6">
    <div class="w-3.5 h-3.5 {config.icon}"></div>
    <span
      class="w-[66px] h-6 font-['Exo'] font-bold text-xs leading-[60px] flex items-center capitalize {config.color}"
    >
      {validType}
    </span>
  </div>
</div>
