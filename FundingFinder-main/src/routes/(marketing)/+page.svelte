<script lang="ts">
  import { enhance } from "$app/forms"
  import { WebsiteName, WebsiteBaseUrl, WebsiteDescription } from "../../config" // Use WebsiteName from config

  // Placeholder state for the calculator/form - replace with actual logic later
  let fundingAmount = { min: 280000, max: 560000 }
  let developingNewProducts = "yes"
  let involvesTechnicalRisks = "yes"
  let employeeCount = 15 // Placeholder
  let name = ""
  let email = ""

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`

  // Placeholder function for form submission
  function handleSubmit() {
    console.log("Form submitted:", {
      name,
      email,
      developingNewProducts,
      involvesTechnicalRisks,
      employeeCount,
    })
    // Add actual form submission logic here (e.g., using form actions)
  }
</script>

<svelte:head>
  <title>{WebsiteName}</title>
  <meta name="description" content={WebsiteDescription} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<div class="bg-base-100 text-base-content">
  <!-- Hero Section -->
  <!-- Banner and Hero Section -->
  <section>
    <div
      class="pt-20 pb-40 relative z-1 bg-[url('/images/hero_bg_mobile.png')] sm:bg-[url('/images/hero_bg.png')] bg-no-repeat bg-cover border-t-4 border-teal-600"
    >
      <div class="cntainer mx-auto">
        <div class="text-center">
          <h1
            class="capitalize font-extrabold text-[#0B251A] text-[26px] md:text-4xl xl:text-6xl"
          >
            Your insight in
            <br /> the <span class="text-warning">funding jungle</span>
          </h1>
          <p class="font-semibold text-lg md:text-xl text-black pt-7">
            AI driven one-stop EU grant & funding search platform
          </p>
        </div>
      </div>
    </div>
    <div class="container mx-auto pb-20 mt-[-37px] relative z-10">
      <div
        class="flex items-center justify-center bg-white rounded-[10px] border border-teal-600 max-w-5xl w-full mx-auto overflow-hidden p-1 relative"
      >
        <img
          src="/images/ChatGPT.svg"
          class="absolute h-[50px] w-[50px] left-3 top-[10px]"
          alt="icon"
        />
        <input
          type="search"
          placeholder="What is the focus of your project or type of funding you are looking for?"
          class="w-full mx-auto bg-white text-black placeholder-[#8F8F8F] px-6 py-4 outline-none rounded-[10px] text-lg font-semibold pl-16"
        />
        <button
          type="submit"
          class=" w-16 h-16 bg-teal-600 text-white rounded-[10px] flex items-center justify-center cursor-pointer"
        >
          <img src="/images/right.svg" alt="icon" />
        </button>
      </div>

      <!-- Programs -->
      <div
        class="flex flex-wrap lg:justify-center gap-[10px] max-w-4xl mx-auto mt-5"
      >
        <div
          class="flex items-center gap-3 w-full max-w-[250px] border border-[#D9D9D9] rounded-md p-[5px]"
        >
          <div
            class="flex items-center justify-center rounded-sm w-7 h-7 bg-[#E2E9FE]"
          >
            <img
              src="/images/icon/graph-bar.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
          </div>
          <p class="text-[12px] font-medium text-[#1E1E1E]">
            LIFE Programme grants 2025
          </p>
        </div>
        <div
          class="flex items-center gap-3 w-full max-w-[250px] border border-[#D9D9D9] rounded-md p-[5px]"
        >
          <div
            class="flex items-center justify-center rounded-sm w-7 h-7 bg-[#FFDDDC]"
          >
            <img
              src="/images/icon/graph-bar-2.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
          </div>
          <p class="text-[12px] font-medium text-[#1E1E1E]">
            Horizon Europe grants
          </p>
        </div>
        <div
          class="flex items-center gap-3 w-full max-w-[250px] border border-[#D9D9D9] rounded-md p-[5px]"
        >
          <div
            class="flex items-center justify-center rounded-sm w-7 h-7 bg-[#e88b0024]"
          >
            <img
              src="/images/icon/biotech-outline.svg"
              class="h-6 w-6 object-contain"
              alt="icon"
            />
          </div>
          <p class="text-[12px] font-medium text-[#1E1E1E]">R&D grants</p>
        </div>
        <div
          class="flex items-center gap-3 w-full max-w-[250px] border border-[#D9D9D9] rounded-md p-[5px]"
        >
          <div
            class="flex items-center justify-center rounded-sm w-7 h-7 bg-[#00d9641f]"
          >
            <img
              src="/images/icon/technology.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
          </div>
          <p class="text-[12px] font-medium text-[#1E1E1E]">
            Digital Europe Programme grants
          </p>
        </div>
        <div
          class="flex items-center gap-3 w-full max-w-[250px] border border-[#D9D9D9] rounded-md p-[5px]"
        >
          <div
            class="flex items-center justify-center rounded-sm w-7 h-7 bg-[#FFF5DE]"
          >
            <img
              src="/images/icon/compare-arrows-rounded.svg"
              class="h-6 w-6 object-contain"
              alt="icon"
            />
          </div>
          <p class="text-[12px] font-medium text-[#1E1E1E]">
            Green energy subsidies EU
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto">
      <div
        class="flex flex-wrap justify-center md:justify-between text-center gap-8 md:gap-10 py-20"
      >
        <!-- Stat Box -->
        <div class="flex flex-col items-center">
          <h2
            class="text-warning font-bold text-3xl md:text-5xl lg:text-[56px]"
          >
            +37
          </h2>
          <p class="text-sm md:text-2xl font-semibold text-black md:pt-5">
            EU - Programs
          </p>
          <div class="mt-[-25px] md:mt-[-50px] opacity-70 w-[50px] md:w-32">
            <img
              src="./images/globe-outline.svg"
              class="w-full h-full object-contain"
              alt="icon"
            />
          </div>
        </div>

        <div class="flex flex-col items-center">
          <h2
            class="text-warning font-bold text-3xl md:text-5xl lg:text-[56px]"
          >
            +234
          </h2>
          <p class="text-sm md:text-2xl font-semibold text-black md:pt-5">
            National - Programs
          </p>
          <div class="mt-[-25px] md:mt-[-50px] opacity-70 w-[50px] md:w-32">
            <img
              src="./images/rocket-outline.svg"
              class="w-full h-full object-contain"
              alt="icon"
            />
          </div>
        </div>

        <div class="flex flex-col items-center">
          <h2
            class="text-warning font-bold text-3xl md:text-5xl lg:text-[56px]"
          >
            +23,000
          </h2>
          <p class="text-sm md:text-2xl font-semibold text-black md:pt-5">
            Local - Programs
          </p>
          <div class="mt-[-25px] md:mt-[-50px] opacity-70 w-[50px] md:w-32">
            <img
              src="./images/park-outline.svg"
              class="w-full h-full object-contain"
              alt="icon"
            />
          </div>
        </div>
      </div>
      <!-- Never Miss -->
      <div class="py-20 relative z-10">
        <h2 class="text-black text-[22px] lg:text-5xl font-bold capitalize">
          Never miss out on funding again
        </h2>
        <div class="max-w-[610px] w-full pt-12">
          <ul class="text-black text-[26px] font-semibold relative z-10">
            <li class="flex items-center gap-3 lg:gap-6 mb-4 lg:mb-16">
              <span
                class="flex items-center justify-center h-5 w-5 lg:h-10 lg:w-10 rounded-full bg-warning text-white text-sm lg:text-[28px]"
                >1</span
              >
              <p class="flex-1 text-sm lg:text-2xl">Register in a few steps</p>
            </li>
            <li class="flex items-center gap-3 lg:gap-6 mb-4 lg:mb-16">
              <span
                class="flex items-center justify-center h-5 w-5 lg:h-10 lg:w-10 rounded-full bg-warning text-white text-sm lg:text-[28px]"
                >2</span
              >
              <p class="flex-1 text-sm lg:text-2xl">
                Provide details about your projects
              </p>
            </li>
            <li class="flex gap-3 lg:gap-6">
              <span
                class="flex items-center justify-center h-5 w-5 lg:h-10 lg:w-10 rounded-full bg-warning text-white text-sm lg:text-[28px]"
                >3</span
              >
              <p class="flex-1 text-sm lg:text-2xl">
                We inform you continuously about new grants and subsidies
              </p>
            </li>
            <img
              class="absolute left-2 lg:left-[18px] top-0 h-[88%] w-1 z-[-1]"
              src="./images/doted-line.svg"
              alt="line"
            />
          </ul>
          <div class="max-w-40 mt-10 lg:w-auto">
            <a
              href="#"
              class="btn btn-primary w-full bg-teal-600 border-teal-600"
              >Sign Up</a
            >
          </div>
        </div>
        <div
          class="absolute top-10 right-0 h-[510px] w-xs lg:w-[430px] left-auto"
        >
          <img
            src="./images/pngwing.svg"
            class="w-full h-full object-contain rotate-[-17px]"
            alt="leavies"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- Newsletter -->
  <section class="py-20">
    <div class="container mx-auto">
      <div
        class="bg-[#225B53] rounded-[20px] pt-12 pb-24 px-10 overflow-hidden relative z-10"
      >
        <div class="max-w-[906px] mx-auto">
          <h2
            class="max-w-[333px] mx-auto w-full lg:max-w-full text-white font-bold text-2xl lg:text-4xl xl:text-5xl text-center capitalize leading-snug"
          >
            Get our funding guide or subscribe to the newsletter
          </h2>
          <div
            class="flex flex-col md:flex-row md:items-center md:justify-center gap-6 lg:gap-10 mt-10 lg:mt-20"
          >
            <!-- CheckBox 1 -->
            <div class="flex items-center">
              <input
                type="checkbox"
                id="subscribeNewsletter"
                name="subscribeNewsletter"
                checked="checked"
                class="checkbox border-white bg-white checked:border-[#FAB900] checked:bg-[#FAB900] checked:text-white"
              />
              <label
                for="subscribeNewsletter"
                class="text-white font-semibold text-lg ml-2 select-none cursor-pointer"
              >
                Subscribe to the newsletter
              </label>
            </div>

            <!-- CheckBox 2 -->
            <div class="flex items-center">
              <input
                type="checkbox"
                id="sendFundingGuide"
                name="sendFundingGuide"
                class="checkbox border-white bg-white checked:border-[#FAB900] checked:bg-[#FAB900] checked:text-white"
              />
              <label
                for="sendFundingGuide"
                class="text-white font-semibold text-lg ml-2 select-none cursor-pointer"
              >
                Send me the funding guide
              </label>
            </div>
          </div>
          <div class="flex items-center justify-center mt-8 lg:mt-12">
            <div
              class="flex rounded-[10px] overflow-hidden bg-white p-1 max-w-[920px] w-full"
            >
              <!-- Input -->
              <input
                type="email"
                placeholder="Your email"
                class="max-w-[760px] w-full bg-white text-black placeholder-[#8F8F8F] px-4 py-3 outline-none border-none"
              />
              <!-- Button -->
              <button
                class="max-w-[100px] lg:max-w-40 w-full bg-[#FAB900] font-semibold text-white px-6 py-3 text-base lg:text-lg cursor-pointer rounded-[10px]"
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <!-- Shapes -->
        <img
          src="./images/newsletter-top-left.svg"
          alt="shape-1"
          class="absolute top-[0px] left-[0px] w-sm h-[230px] z-[-1] object-contain"
        />
        <img
          src="./images/newsletter-bottom-left.svg"
          alt="shape-2"
          class="absolute bottom-[0px] left-[0px] w-sm h-[340px] z-[-1] object-contain"
        />
      </div>
    </div>
  </section>
  <!-- Newsletter -->
  <!-- Finder CTA / CTA Section -->
  <section class="py-11 my-32 border-y border-[#39988B]/[0.32]">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row items-center justify-between">
        <!-- Left Content -->
        <div class="lg:w-1/2 space-y-4 text-center lg:text-left">
          <h2 class="text-2xl font-bold text-primary">
            Not yet in our finder?
          </h2>
          <p class="text-base text-base-content">
            Submit the details of your funding, support or financing program and
            we will make them visible for everyone.
          </p>
          <div class="lg:hidden flex items-center justify-center mt-6 lg:mt-0">
            <img
              src="/images/cta/cta-thumb.svg"
              alt="Monkey Search Icon"
              class="w-40 h-40 object-contain"
            />
          </div>
          <button
            class="px-6 py-2.5 bg-teal-600 border border-teal-600 text-white rounded-lg text-sm font-semibold hover:bg-teal-700 pointer"
          >
            Submit program
          </button>
        </div>

        <!-- Right Icon -->
        <div class="hidden lg:w-1/2 lg:flex justify-center mt-6 md:mt-0">
          <img
            src="/images/cta/cta-thumb.svg"
            alt="Monkey Search Icon"
            class="w-40 h-40 object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</div>
