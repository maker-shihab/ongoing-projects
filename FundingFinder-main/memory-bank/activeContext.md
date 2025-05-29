# Active Context: Funding Finder - Initialization

## 1. Current Focus

- Initializing the project based on the `CMSaasStarter` template and the `roadmap.md`.
- Establishing the Memory Bank documentation (`projectbrief.md`, `productContext.md`, `techContext.md`, `systemPatterns.md`, `activeContext.md`, `progress.md`).
- Understanding the existing codebase structure and patterns.

## 2. Recent Activity

- Analyzed project files (`.gitignore`, `tutorial/`, `package.json`, `svelte.config.js`, `roadmap.md`).
- Created the initial versions of the core Memory Bank documents.

## 3. Immediate Next Steps (Based on Roadmap - Milestone 1: PoC SEO Pages)

1.  **Data Preparation:**
    - Locate and examine the crawled data from the German Federal Funding Database (`Förderdatenbank des Bundes`) mentioned in `roadmap.md` (CSV, Excel, HTML, PDF files). The roadmap mentions SharePoint links, but access to these is external. **Need clarification on where this data is accessible locally or how to obtain it.**
    - Define a database schema in Supabase to store the structured funding program data. This will likely involve:
      - Creating a `funding_programs` table with fields for title, description, eligibility, amount, deadlines, source links, etc.
      - Setting up appropriate indexes for efficient searching.
      - Implementing Row Level Security policies if needed (though funding data may be public).
    - Develop scripts/processes to clean, structure, and ingest the initial dataset (starting with CSV/Excel) into the database. This could leverage:
      - Node.js scripts using the Supabase JavaScript client for database operations.
      - Data processing libraries for CSV/Excel parsing.
      - Potentially a custom script similar to `build_index.ts` for batch processing.
2.  **Funding Program Page Template:**
    - Design and implement a SvelteKit dynamic route (e.g., `/funding/[program_id]`) to display individual funding programs.
    - Create the Svelte component(s) for this page, fetching data from Supabase based on the route parameter.
    - Focus on clear presentation of key program details (name, description, eligibility, amount, deadlines, source link, etc.).
    - Ensure the template is designed with SEO best practices in mind:
      - Add `export const prerender = true;` to generate static HTML during build.
      - Include proper meta tags, semantic HTML, and structured data.
      - Implement proper heading hierarchy and accessibility features.
3.  **Basic Keyword Search:**
    - Implement a search input component in the marketing layout.
    - Leverage the template's existing search pattern:
      - Create a custom Vite plugin to build a search index during build time.
      - Adapt `build_index.ts` to include funding program data in the search index.
      - Use Fuse.js for client-side fuzzy searching.
    - Display search results with clear links to the relevant funding program pages.

## 4. Key Decisions / Considerations

- **Data Storage:** Confirm Supabase Postgres is the target for storing structured funding data.
- **Data Ingestion Strategy:** How will the initial data load be performed? Manual script execution?
- **SEO Page Generation:** Will pages be purely dynamic (fetched on request) or potentially pre-rendered/statically generated if performance becomes an issue? (SvelteKit offers flexibility here).
- **Roadmap Deviation:** The roadmap mentions potentially using WordPress/Elementor for the PoC. However, the project is clearly set up with SvelteKit. **Assumption:** We will proceed with SvelteKit as the foundation, adapting the roadmap's _goals_ (SEO pages, keyword search) to the SvelteKit stack.

## 5. Open Questions / Blockers

- **Data Access:** How to access the crawled data from `Förderdatenbank des Bundes`?
