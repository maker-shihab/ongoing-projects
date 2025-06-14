<script lang="ts">
</script>

<svelte:head>
  <title>Program Details</title>
  <meta name="description" content="Short description of this page." />
</svelte:head>
<div class="border-t-4 border-teal-600">
  <div class="container mx-auto py-8">
    <button
      type="button"
      class="text-teal-600 capitalize text-lg font-semibold flex items-center gap-3 font-roboto hover:underline"
    >
      <img
        src="/images/programs/icons/arrow-left.svg"
        class="h-5 w-5 object-contain"
        alt="icon"
      />
      Back to search
    </button>
    <div class="flex flex-col-reverse md:flex-row gap-8 mt-8">
      <!-- Funding Programs Details Content -->
      <div class="w-full">
        <div class="">
          <div class="flex flex-row lg:flex-col gap-4">
            <h2
              class="text-[#1e1e1e] font-bold text-lg lg:text-5xl capitalize pb-7 relative"
            >
              Impact financing envelope der EIB
              <span
                class="inline lg:absolute lg:top-2 lg:-right-14 bg-gradient-to-r from-[#00BE57] to-[#01F371] text-white py-1 px-2 lg:py-2 lg:px-4 rounded-sm text-[8px] lg:text-xs font-bold"
                >Current</span
              >
            </h2>
            <button
              type="button"
              class="flex w-8 h-8 rounded-md lg:hidden border justify-center items-center border-teal-600 text-teal-600 hover:bg-teal-100 p-2"
            >
              <img
                src="/images/programs/icons/bookmark.svg"
                class="h-5 w-5"
                alt="icon"
              /></button
            >
          </div>
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
          <div
            class="max-w-[800px] w-full pt-10 text-base font-medium text-black"
          >
            <p class="max-w-3xl w-full capitalize">
              The "Forschungszulage" is a German government funding program
              designed to financially support companies of all sizes in their
              research and development activities, enhancing their capacity for
              innovation.
            </p>
            <div>
              <h4>Funding Objectives</h4>
              <ul>
                <li>Boost innovation in companies</li>
                <li>Foster research-driven growth</li>
                <li>Enhance technological competitiveness</li>
                <li>Secure Germany's position as a leading innovator</li>
              </ul>
            </div>
            <!-- Table of contents -->
            <div class="pt-10">
              <div class="border py-4 px-4 rounded-[10px]">
                <h3 class="font-bold text-3xl text-black pb-4">
                  Table of contents
                </h3>
                <ul class="flex flex-col gap-4">
                  <li>
                    <a
                      href="#eligibility"
                      class="text-blue-600 text-base font-normal underline"
                      >Introduction</a
                    >
                  </li>
                  <li>
                    <a
                      href="#application-process"
                      class="text-blue-600 text-base font-normal underline"
                      >Who is funded</a
                    >
                  </li>
                  <li>
                    <a
                      href="#funding-amounts"
                      class="text-blue-600 text-base font-normal underline"
                      >What is funded</a
                    >
                  </li>
                  <li>
                    <a
                      href="#contact-information"
                      class="text-blue-600 text-base font-normal underline"
                      >Type and scope of funding</a
                    >
                  </li>
                  <li>
                    <a
                      href="#contact-information"
                      class="text-blue-600 text-base font-normal underline"
                      >Conditions & requirements</a
                    >
                  </li>
                  <li>
                    <a
                      href="#contact-information"
                      class="text-blue-600 text-base font-normal underline"
                      >Application procedure</a
                    >
                  </li>
                  <li>
                    <a
                      href="#contact-information"
                      class="text-blue-600 text-base font-normal underline"
                      >Legal Basis</a
                    >
                  </li>
                </ul>
              </div>
              <!-- Content -->
              <div class="mt-8" id="introduction">
                <h2 class="font-bold text-[28px] text-teal-600 pb-2">
                  Introduction
                </h2>
                <p class="text-base font-normal pb-2">
                  Unlike traditional grants, this program operates as a
                  refundable tax credit, reimbursing companies up to 25% of
                  eligible personnel costs related to their R&D efforts, capped
                  at €1 million per fiscal year.
                </p>
                <p class="text-base font-normal pb-2">
                  A key differentiator of this initiative is its broad
                  accessibility; it targets companies of all sizes, from
                  startups to large corporations, ensuring comprehensive support
                  for innovation. The eligibility criteria are straightforward
                  and apply to various fields, including technological
                  innovations, product improvements, and experimental
                  development.
                </p>
                <p class="text-base font-normal pb-2">
                  Furthermore, the Forschungszulage stands out due to its
                  predictability and ease of application, providing companies
                  with clarity and reduced administrative burden. This allows
                  businesses to plan their R&D investments confidently,
                  contributing significantly to Germany's long-term
                  competitiveness and economic growth.
                </p>
              </div>
              <!-- Content -->
              <div class="mt-8" id="introduction">
                <h2 class="font-bold text-[28px] text-teal-600 pb-2">
                  Who is funded
                </h2>
                <p class="text-base font-normal pb-2">
                  The Forschungszulage is designed to support a wide range of
                  companies engaged in research and development activities.
                  Eligible recipients include businesses of all sizes—from
                  innovative startups and small-to-medium enterprises (SMEs) to
                  large corporations—across various industries and technological
                  sectors operating within Germany.
                </p>
              </div>
            </div>
            <!-- Tags -->
            <div class="flex items-center flex-wrap gap-3 mb-14 pt-12">
              <a
                href="/"
                class="text-white py-2 px-4 bg-teal-600 font-medium text-xs rounded-sm"
                >#ResearchAllowance</a
              >
              <a
                href="/"
                class="text-white py-2 px-4 bg-teal-600 font-medium text-xs rounded-sm"
                >#RDFunding</a
              >
              <a
                href="/"
                class=" text-white py-2 px-4 bg-teal-600 font-medium text-xs rounded-sm"
                >#TaxIncentives</a
              >
              <a
                href="/"
                class=" text-white py-2 px-4 bg-teal-600 font-medium text-xs rounded-sm"
                >#Innovationgrants</a
              >
              <a
                href="/"
                class=" text-white py-2 px-4 bg-teal-600 font-medium text-xs rounded-sm"
                >#FundingForResearch</a
              >
              <a
                href="/"
                class=" text-white py-2 px-4 bg-teal-600 font-medium text-xs rounded-sm"
                >#InnovationSupport</a
              >
              <a
                href="/"
                class=" text-white py-2 px-4 bg-teal-600 font-medium text-xs rounded-sm"
                >#RDFinance</a
              >
              <a
                href="/"
                class=" text-white py-2 px-4 bg-teal-600 font-medium text-xs rounded-sm"
                >#ResearchTaxCredit</a
              >
            </div>
            <!-- Similar programs -->
            <div class="pt-10">
              <h3 class="font-bold text-2xl pb-8 text-black">
                Similar programs
              </h3>
              <ul class="flex flex-col gap-4">
                <li>
                  <a
                    href="/"
                    class="text-blue-500 underline font-medium text-lg"
                    >Crédit D'Impôt Recherche (CIR)</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="text-blue-500 underline font-medium text-lg"
                    >R&D Tax Relief Scheme</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="text-blue-500 underline font-medium text-lg"
                    >Innovation Income Deduction</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Aside -->
      <div class="max-w-[400px] w-full">
        <div>
          <div class="flex justify-end">
            <button
              type="button"
              class="hidden lg:flex btn btn-outline text-lg border-teal-600 text-teal-600 hover:bg-teal-100"
            >
              <img
                src="/images/programs/icons/bookmark.svg"
                class="h-6 w-6"
                alt="icon"
              />
              Save Funding</button
            >
          </div>
          <!-- Funding Overview -->
          <div class="bg-[#EFFBFF] mt-20">
            <div class="bg-[#029ECF] rounded-t-2xl">
              <h3 class="text-white py-4 px-5 font-semibold text-2xl">
                Funding Overview
              </h3>
            </div>
            <div class="p-5">
              <ul class="flex gap-6 flex-col text-black">
                <li class="flex gap-3">
                  <strong class="flex min-w-40 lg:w-auto">
                    <img
                      class="mr-2 h-4 w-4 object-contain text-sm"
                      src="/images/programs/icons/globe.svg"
                      alt="icon"
                    />
                    Maximum Amount
                  </strong>
                  <span class="font-medium text-[15px]">€5,000,000</span>
                </li>
                <li class="flex gap-3">
                  <strong class="flex min-w-40 lg:w-auto">
                    <img
                      class="mr-2 h-4 w-4 object-contain text-sm"
                      src="/images/programs/icons/hospital.svg"
                      alt="icon"
                    />
                    Next Deadline
                  </strong>
                  <span class="font-medium text-[15px]">31.12.2028s</span>
                </li>
                <li class="flex gap-3">
                  <strong class="flex min-w-40 lg:w-auto">
                    <img
                      class="mr-2 h-4 w-4 object-contain text-sm"
                      src="/images/programs/icons/time-atack-graph.svg"
                      alt="icon"
                    />
                    Open Untill
                  </strong>
                  <span class="font-medium text-[15px]">31.12.2030</span>
                </li>
                <li class="flex gap-3">
                  <strong class="flex min-w-40 lg:w-auto">
                    <img
                      class="mr-2 h-4 w-4 object-contain text-sm"
                      src="/images/programs/icons/camera.svg"
                      alt="icon"
                    />
                    Award Channel
                  </strong>
                  <span class="font-medium text-[15px]"
                    >Framework - programme call</span
                  >
                </li>
                <li class="flex gap-3">
                  <strong class="flex min-w-40 lg:w-auto">
                    <img
                      class="mr-2 h-4 w-4 object-contain text-sm"
                      src="/images/programs/icons/camera.svg"
                      alt="icon"
                    />
                    Region
                  </strong>
                  <span class="font-medium text-[15px]">Germany</span>
                </li>
                <li class="flex gap-3">
                  <strong class="flex min-w-40 lg:w-auto">
                    <img
                      class="mr-2 h-4 w-4 object-contain text-sm"
                      src="/images/programs/icons/camera.svg"
                      alt="icon"
                    />
                    Sectors
                  </strong>
                  <span class="font-medium text-[15px]">Small enterprise</span>
                </li>
                <li class="flex gap-3">
                  <strong class="flex min-w-40 lg:w-auto">
                    <img
                      class="mr-2 h-4 w-4 object-contain text-sm"
                      src="/images/programs/icons/camera.svg"
                      alt="icon"
                    />
                    Beneficiary
                  </strong>
                  <span class="font-medium text-[15px]"
                    >Agriculture, forestry & fishing + Food production</span
                  >
                </li>
                <li class="flex gap-3">
                  <strong class="flex min-w-40 lg:w-auto">
                    <img
                      class="mr-2 h-4 w-4 object-contain text-sm"
                      src="/images/programs/icons/camera.svg"
                      alt="icon"
                    />
                    Funding Stages
                  </strong>
                  <span class="font-medium text-[15px]"
                    >Basic research, Applied R&D, prototype</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- Funding Provider -->
          <div class="bg-[#F3FFEF] mt-9">
            <div class="bg-[#4FA530] rounded-t-2xl">
              <h3 class="text-white py-4 px-5 font-semibold text-2xl">
                Funding Overview
              </h3>
            </div>
            <div class="p-5">
              <ul class="flex gap-4 flex-col text-black">
                <li class="text-sm">
                  <span>Program Level:</span>
                  <strong>EU</strong>
                </li>
                <li class="text-sm">
                  <span>Funding Body:</span>
                  <strong
                    >Bundesministerium für Bildung und Forschung (BMBF)</strong
                  >
                </li>
                <li class="text-sm">
                  <span>Managed by: </span>
                  <strong>Projektträger Jülich (PtJ)</strong>
                </li>
                <li class="text-sm">
                  <span>Additional Partners: </span>
                  <strong>DBK</strong>
                </li>
                <li class="text-sm">
                  <span>Contact:</span>
                  <strong>address, email</strong>
                </li>
                <li class="text-sm flex gap-2">
                  <span>Source: </span>
                  <strong class="items-center">
                    <a href="/" class="flex gap-2">
                      URL
                      <img
                        src="/images/icon/compare-arrows-rounded.svg"
                        alt="icon"
                      />
                    </a>
                  </strong>
                </li>
              </ul>
            </div>
          </div>
          <!-- Contact Button -->
          <div class="pt-8">
            <button
              class="btn btn-primary bg-teal-600 border-teal-600 w-full text-lg py-5 font-roboto"
              >Contact Us</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>
