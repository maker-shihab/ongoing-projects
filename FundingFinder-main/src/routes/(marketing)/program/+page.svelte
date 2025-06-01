<script lang="ts">
  import { onMount } from "svelte"

  let regionSelect: HTMLSelectElement

  onMount(() => {
    // Make sure Choices is available (only works if loaded correctly)
    if (typeof Choices !== "undefined") {
      new Choices(regionSelect, {
        removeItemButton: true,
        searchPlaceholderValue: "Search countries...",
        placeholderValue: "Select regions",
      })
    }
  })
</script>

<svelte:head>
  <title>Program Page</title>
  <meta name="description" content="Short description of this page." />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css"
  />
  <script
    src="https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js"
    defer
  ></script>
</svelte:head>

<!-- Funding Programs -->
<section class="bg-[#39988B] pt-[50px] pb-8 relative z-20">
  <div class="container mx-auto">
    <div
      class="flex items-center justify-center bg-white rounded-[10px] border border-[#39988B] max-w-5xl w-full mx-auto overflow-hidden p-1 relative"
    >
      <img
        src="./images/ChatGPT.svg"
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
        <img src="./images/right.svg" alt="icon" />
      </button>
    </div>
    <!-- Programm Selects -->
    <div class="pt-10 max-w-[1094px] mx-auto">
      <div
        class="hidden md:flex flex-wrap gap-[10px] p-2 rounded-[10px] bg-[#ffffff21]"
      >
        <div class="regionSelectBox w-auto">
          <select id="region-select" bind:this={regionSelect} multiple>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="africa">Africa</option>
          </select>
        </div>
        <select
          class="select cursor-pointer bg-white text-[#555555] w-auto font-roboto pr-10"
        >
          <option disabled selected>Eligible Applicants</option>
          <option>Chrome</option>
          <option>FireFox</option>
          <option>Safari</option>
        </select>
        <select
          class="select cursor-pointer bg-white text-[#555555] w-auto font-roboto pr-10"
        >
          <option disabled selected>Company size</option>
          <option>Chrome</option>
          <option>FireFox</option>
          <option>Safari</option>
        </select>
        <select
          class="select cursor-pointer bg-white text-[#555555] w-auto font-roboto pr-10"
        >
          <option disabled selected>Industries & Sectors</option>
          <option>Chrome</option>
          <option>FireFox</option>
          <option>Safari</option>
        </select>
        <select
          class="select cursor-pointer bg-white text-[#555555] w-auto font-roboto pr-10"
        >
          <option disabled selected>Financial Instrument</option>
          <option>Chrome</option>
          <option>FireFox</option>
          <option>Safari</option>
        </select>
        <select
          class="select cursor-pointer bg-white text-[#555555] w-auto font-roboto pr-10"
        >
          <option disabled selected>Funding Stages</option>
          <option>Chrome</option>
          <option>FireFox</option>
          <option>Safari</option>
        </select>
      </div>
    </div>
  </div>
</section>
<div class="container mx-auto p-4 pt-14">
  <h1 class="text-3xl font-bold mb-4">124 matches</h1>
  <div class="max-w-5xl w-full">
    <!-- Single Program Funding -->
    <div
      class="relative z-10 border-3 border-blue-500 rounded-[20px] py-8 px-5 mb-14"
    >
      <div class="flex justify-between gap-3">
        <div class="flex flex-wrap gap-3">
          <button
            type="button"
            class="btn btn-outline border pl-3 pr-5 border-green-800 text-green-800 hover:bg-green-100"
          >
            <img
              src="/images/programs/icons/coin-stack.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
            <span class="text-xs font-bold">Financing</span>
          </button>
          <button
            type="button"
            class="btn btn-outline border pl-3 pr-5 border-blue-600 text-blue-600 hover:bg-blue-100"
          >
            <img
              src="/images/programs/icons/hand-holding-dollar-blue.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
            <span class="text-xs font-bold">Subsidy</span>
          </button>
          <button
            type="button"
            class="btn btn-outline border pl-3 pr-5 border-purple-950 text-purple-950 hover:bg-purple-100"
          >
            <img
              src="/images/programs/icons/chat-fill.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
            <span class="text-xs font-bold">Consulting</span>
          </button>
        </div>
        <div class="flex items-center justify-end gap-3">
          <span
            class="absolute -top-5 right-6 lg:right-28 bg-gradient-to-r from-[#00BE57] to-[#01F371] text-white py-3 px-10 rounded-sm text-xs font-bold"
            >Current</span
          >
          <img src="/images/programs/icons/bookmark.svg" alt="icon" />
        </div>
      </div>
      <div class="pt-5">
        <h3 class="text-black text-sm lg:text-xl font-bold pb-1">
          Funding for fully inpatient long-term care facilities with an opening
          to the local community
        </h3>
        <p class="text-neutral-900 font-normal text-xs">
          The Free State of Bavaria promotes the nationwide and needs-based
          expansion of the nursing care structure so that people in need of care
          can remain at home in their familiar surroundings - in their local
          social environment - for as long as possible.
        </p>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 py-4 text-xs lg:text-sm"
        >
          <ul class="flex gap-4 flex-col">
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/globe.svg"
                  alt="icon"
                />Region:</span
              >
              <strong>Germany</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/hospital.svg"
                  alt="icon"
                />Beneficiaries:</span
              >
              <strong>Small Enterprises</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/time-atack-graph.svg"
                  alt="icon"
                />Sectors:</span
              >
              <strong>Agriculture, Forestry & Fishing + Food Production</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/camera.svg"
                  alt="icon"
                />Maximum amount:</span
              >
              <strong>5,000,000 €</strong>
            </li>
          </ul>
          <ul class="flex gap-4 flex-col">
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/watch.svg"
                  alt="icon"
                />Deadline:</span
              >
              <strong>31.12.2028</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/hospital-2.svg"
                  alt="icon"
                />Funding Provider:</span
              >
              <strong>Federal Ministry of Health</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/hand-holding-dollar.svg"
                  alt="icon"
                />
                Managed by:</span
              >
              <strong>Project Management Jülich (PtJ)</strong>
            </li>
          </ul>
        </div>
        <!-- Show Details -->
        <div class="flex items-center pt-4">
          <div class="bg-[#FFF5DE] rounded-2xl p-3 pb-2 lg:p-4 w-full">
            <h4 class="text-xs lg:text-base font-bold text-black">
              Apply for the research allowance with BeFunded
            </h4>
            <div class="flex items-center justify-center mt-3 relative pb-12">
              <div
                class="flex flex-col lg:flex-row rounded-[10px] bg-white lg:p-1 w-full border-1 border-[#FAB900]"
              >
                <!-- Input -->
                <input
                  type="email"
                  placeholder="Your email"
                  class="w-full bg-white text-black placeholder-[#8F8F8F] px-3 lg:px-4 py-2 lg:py-3 text-base outline-none border-none rounded-[10px]"
                />
                <!-- Button -->
                <button
                  class="mx-auto max-w-60 w-full bg-[#FAB900] font-semibold text-white px-6 py-2 text-base lg:text-lg cursor-pointer rounded-[10px] font-roboto absolute lg:relative bottom-0 left-0 right-0"
                >
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Single Program Funding -->
    <div class="relative z-10 border rounded-[20px] py-8 px-5 mb-14">
      <div class="flex justify-between gap-3">
        <div class="flex flex-wrap gap-3">
          <button
            type="button"
            class="btn btn-outline border pl-3 pr-5 border-green-800 text-green-800 hover:bg-green-100"
          >
            <img
              src="/images/programs/icons/coin-stack.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
            <span class="text-xs font-bold">Financing</span>
          </button>
          <button
            type="button"
            class="btn btn-outline border pl-3 pr-5 border-blue-600 text-blue-600 hover:bg-blue-100"
          >
            <img
              src="/images/programs/icons/hand-holding-dollar-blue.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
            <span class="text-xs font-bold">Subsidy</span>
          </button>
          <button
            type="button"
            class="btn btn-outline border pl-3 pr-5 border-purple-950 text-purple-950 hover:bg-purple-100"
          >
            <img
              src="/images/programs/icons/chat-fill.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
            <span class="text-xs font-bold">Consulting</span>
          </button>
        </div>
        <div class="flex items-center justify-end gap-3">
          <span
            class="absolute -top-5 right-6 lg:right-28 bg-gradient-to-r from-[#00BE57] to-[#01F371] text-white py-3 px-10 rounded-sm text-xs font-bold"
            >Current</span
          >
          <img src="/images/programs/icons/bookmark.svg" alt="icon" />
        </div>
      </div>
      <div class="pt-5">
        <h3 class="text-black text-sm lg:text-xl font-bold pb-1">
          Funding for fully inpatient long-term care facilities with an opening
          to the local community
        </h3>
        <p class="text-neutral-900 font-normal text-xs">
          The Free State of Bavaria promotes the nationwide and needs-based
          expansion of the nursing care structure so that people in need of care
          can remain at home in their familiar surroundings - in their local
          social environment - for as long as possible.
        </p>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 py-4 text-xs lg:text-sm"
        >
          <ul class="flex gap-4 flex-col">
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/globe.svg"
                  alt="icon"
                />Region:</span
              >
              <strong>Germany</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/hospital.svg"
                  alt="icon"
                />Beneficiaries:</span
              >
              <strong>Small Enterprises</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/time-atack-graph.svg"
                  alt="icon"
                />Sectors:</span
              >
              <strong>Agriculture, Forestry & Fishing + Food Production</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/camera.svg"
                  alt="icon"
                />Maximum amount:</span
              >
              <strong>5,000,000 €</strong>
            </li>
          </ul>
          <ul class="flex gap-4 flex-col">
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/watch.svg"
                  alt="icon"
                />Deadline:</span
              >
              <strong>31.12.2028</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/hospital-2.svg"
                  alt="icon"
                />Funding Provider:</span
              >
              <strong>Federal Ministry of Health</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/hand-holding-dollar.svg"
                  alt="icon"
                />
                Managed by:</span
              >
              <strong>Project Management Jülich (PtJ)</strong>
            </li>
          </ul>
        </div>
        <!-- Show Details -->
        <div class="flex items-center justify-end pt-4">
          <button
            type="button"
            class="btn-primary bg-teal-600 text-lg text-white font-semibold px-4 py-3 rounded-[10px] capitalize max-w-3xs w-full"
          >
            Show details
          </button>
        </div>
      </div>
    </div>
    <!-- Single Program Funding -->
    <div class="relative z-10 border rounded-[20px] py-8 px-5 mb-14">
      <div class="flex justify-between gap-3">
        <div class="flex flex-wrap gap-3">
          <button
            type="button"
            class="btn btn-outline border max-h-9 pl-3 pr-5 border-green-800 text-green-800 hover:bg-green-100"
          >
            <img
              src="/images/programs/icons/coin-stack.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
            <span class="text-xs font-bold">Financing</span>
          </button>
          <button
            type="button"
            class="btn btn-outline border max-h-9 pl-3 pr-5 border-blue-600 text-blue-600 hover:bg-blue-100"
          >
            <img
              src="/images/programs/icons/hand-holding-dollar-blue.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
            <span class="text-xs font-bold">Subsidy</span>
          </button>
          <button
            type="button"
            class="btn btn-outline border max-h-9 pl-3 pr-5 border-purple-950 text-purple-950 hover:bg-purple-100"
          >
            <img
              src="/images/programs/icons/chat-fill.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
            <span class="text-xs font-bold">Consulting</span>
          </button>
        </div>
        <div class="flex items-center justify-end gap-3">
          <span
            class="absolute -top-5 right-6 lg:right-28 bg-gradient-to-r from-[#00BE57] to-[#01F371] text-white py-3 px-10 rounded-sm text-xs font-bold"
            >Current</span
          >
          <img src="/images/programs/icons/bookmark.svg" alt="icon" />
        </div>
      </div>
      <div class="pt-5">
        <h3 class="text-black text-sm lg:text-xl font-bold pb-1">
          Funding for fully inpatient long-term care facilities with an opening
          to the local community
        </h3>
        <p class="text-neutral-900 font-normal text-xs">
          The Free State of Bavaria promotes the nationwide and needs-based
          expansion of the nursing care structure so that people in need of care
          can remain at home in their familiar surroundings - in their local
          social environment - for as long as possible.
        </p>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 py-4 text-xs lg:text-sm"
        >
          <ul class="flex gap-4 flex-col">
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/globe.svg"
                  alt="icon"
                />Region:</span
              >
              <strong>Germany</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/hospital.svg"
                  alt="icon"
                />Beneficiaries:</span
              >
              <strong>Small Enterprises</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/time-atack-graph.svg"
                  alt="icon"
                />Sectors:</span
              >
              <strong>Agriculture, Forestry & Fishing + Food Production</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/camera.svg"
                  alt="icon"
                />Maximum amount:</span
              >
              <strong>5,000,000 €</strong>
            </li>
          </ul>
          <ul class="flex gap-4 flex-col">
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/watch.svg"
                  alt="icon"
                />Deadline:</span
              >
              <strong>31.12.2028</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/hospital-2.svg"
                  alt="icon"
                />Funding Provider:</span
              >
              <strong>Federal Ministry of Health</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/hand-holding-dollar.svg"
                  alt="icon"
                />
                Managed by:</span
              >
              <strong>Project Management Jülich (PtJ)</strong>
            </li>
          </ul>
        </div>
        <!-- Show Details -->
        <div class="flex items-center justify-end pt-4">
          <button
            type="button"
            class="btn-primary bg-teal-600 text-lg text-white font-semibold px-4 py-3 rounded-[10px] capitalize max-w-3xs w-full"
          >
            Show details
          </button>
        </div>
      </div>
    </div>
    <!-- Single Program Funding -->
    <div class="relative z-10 border rounded-[20px] py-8 px-5 mb-14">
      <div class="flex justify-between gap-3">
        <div class="flex flex-wrap gap-3">
          <button
            type="button"
            class="btn btn-outline border max-h-9 pl-3 pr-5 border-green-800 text-green-800 hover:bg-green-100"
          >
            <img
              src="/images/programs/icons/coin-stack.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
            <span class="text-xs font-bold">Financing</span>
          </button>
          <button
            type="button"
            class="btn btn-outline border max-h-9 pl-3 pr-5 border-blue-600 text-blue-600 hover:bg-blue-100"
          >
            <img
              src="/images/programs/icons/hand-holding-dollar-blue.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
            <span class="text-xs font-bold">Subsidy</span>
          </button>
          <button
            type="button"
            class="btn btn-outline border max-h-9 pl-3 pr-5 border-purple-950 text-purple-950 hover:bg-purple-100"
          >
            <img
              src="/images/programs/icons/chat-fill.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
            <span class="text-xs font-bold">Consulting</span>
          </button>
        </div>
        <div class="flex items-center justify-end gap-3">
          <span
            class="absolute -top-5 right-6 lg:right-28 bg-gradient-to-r from-[#00BE57] to-[#01F371] text-white py-3 px-10 rounded-sm text-xs font-bold"
            >Current</span
          >
          <img src="/images/programs/icons/bookmark.svg" alt="icon" />
        </div>
      </div>
      <div class="pt-5">
        <h3 class="text-black text-sm lg:text-xl font-bold pb-1">
          Funding for fully inpatient long-term care facilities with an opening
          to the local community
        </h3>
        <p class="text-neutral-900 font-normal text-xs">
          The Free State of Bavaria promotes the nationwide and needs-based
          expansion of the nursing care structure so that people in need of care
          can remain at home in their familiar surroundings - in their local
          social environment - for as long as possible.
        </p>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 py-4 text-xs lg:text-sm"
        >
          <ul class="flex gap-4 flex-col">
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/globe.svg"
                  alt="icon"
                />Region:</span
              >
              <strong>Germany</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/hospital.svg"
                  alt="icon"
                />Beneficiaries:</span
              >
              <strong>Small Enterprises</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/time-atack-graph.svg"
                  alt="icon"
                />Sectors:</span
              >
              <strong>Agriculture, Forestry & Fishing + Food Production</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/camera.svg"
                  alt="icon"
                />Maximum amount:</span
              >
              <strong>5,000,000 €</strong>
            </li>
          </ul>
          <ul class="flex gap-4 flex-col">
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/watch.svg"
                  alt="icon"
                />Deadline:</span
              >
              <strong>31.12.2028</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/hospital-2.svg"
                  alt="icon"
                />Funding Provider:</span
              >
              <strong>Federal Ministry of Health</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/hand-holding-dollar.svg"
                  alt="icon"
                />
                Managed by:</span
              >
              <strong>Project Management Jülich (PtJ)</strong>
            </li>
          </ul>
        </div>
        <!-- Show Details -->
        <div class="flex items-center justify-end pt-4">
          <button
            type="button"
            class="btn-primary bg-teal-600 text-lg text-white font-semibold px-4 py-3 rounded-[10px] capitalize max-w-3xs w-full"
          >
            Show details
          </button>
        </div>
      </div>
    </div>
    <!-- Single Program Funding -->
    <div class="relative z-10 border rounded-[20px] py-8 px-5 mb-14">
      <div class="flex justify-between gap-3">
        <div class="flex flex-wrap gap-3">
          <button
            type="button"
            class="btn btn-outline border max-h-9 pl-3 pr-5 border-green-800 text-green-800 hover:bg-green-100"
          >
            <img
              src="/images/programs/icons/coin-stack.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
            <span class="text-xs font-bold">Financing</span>
          </button>
          <button
            type="button"
            class="btn btn-outline border max-h-9 pl-3 pr-5 border-blue-600 text-blue-600 hover:bg-blue-100"
          >
            <img
              src="/images/programs/icons/hand-holding-dollar-blue.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
            <span class="text-xs font-bold">Subsidy</span>
          </button>
          <button
            type="button"
            class="btn btn-outline border max-h-9 pl-3 pr-5 border-purple-950 text-purple-950 hover:bg-purple-100"
          >
            <img
              src="/images/programs/icons/chat-fill.svg"
              class="h-5 w-5 object-contain"
              alt="icon"
            />
            <span class="text-xs font-bold">Consulting</span>
          </button>
        </div>
        <div class="flex items-center justify-end gap-3">
          <span
            class="absolute -top-5 right-6 lg:right-28 bg-gradient-to-r from-[#00BE57] to-[#01F371] text-white py-3 px-10 rounded-sm text-xs font-bold"
            >Current</span
          >
          <img src="/images/programs/icons/bookmark.svg" alt="icon" />
        </div>
      </div>
      <div class="pt-5">
        <h3 class="text-black text-sm lg:text-xl font-bold pb-1">
          Funding for fully inpatient long-term care facilities with an opening
          to the local community
        </h3>
        <p class="text-neutral-900 font-normal text-xs">
          The Free State of Bavaria promotes the nationwide and needs-based
          expansion of the nursing care structure so that people in need of care
          can remain at home in their familiar surroundings - in their local
          social environment - for as long as possible.
        </p>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 py-4 text-xs lg:text-sm"
        >
          <ul class="flex gap-4 flex-col">
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/globe.svg"
                  alt="icon"
                />Region:</span
              >
              <strong>Germany</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/hospital.svg"
                  alt="icon"
                />Beneficiaries:</span
              >
              <strong>Small Enterprises</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/time-atack-graph.svg"
                  alt="icon"
                />Sectors:</span
              >
              <strong>Agriculture, Forestry & Fishing + Food Production</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/camera.svg"
                  alt="icon"
                />Maximum amount:</span
              >
              <strong>5,000,000 €</strong>
            </li>
          </ul>
          <ul class="flex gap-4 flex-col">
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/watch.svg"
                  alt="icon"
                />Deadline:</span
              >
              <strong>31.12.2028</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/hospital-2.svg"
                  alt="icon"
                />Funding Provider:</span
              >
              <strong>Federal Ministry of Health</strong>
            </li>
            <li class="flex gap-3">
              <span class="flex items-center min-w-32 lg:w-auto"
                ><img
                  class="mr-2 h-4 w-4 object-contain"
                  src="/images/programs/icons/hand-holding-dollar.svg"
                  alt="icon"
                />
                Managed by:</span
              >
              <strong>Project Management Jülich (PtJ)</strong>
            </li>
          </ul>
        </div>
        <!-- Show Details -->
        <div class="flex items-center justify-end pt-4">
          <button
            type="button"
            class="btn-primary bg-teal-600 text-lg text-white font-semibold px-4 py-3 rounded-[10px] capitalize max-w-3xs w-full"
          >
            Show details
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>
