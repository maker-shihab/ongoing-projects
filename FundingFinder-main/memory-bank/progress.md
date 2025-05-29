# Progress: Funding Finder - Initialization

## 1. What Works (Core Template Features)

The underlying `CMSaasStarter` template provides functional baseline features:

- **User Authentication:** Sign-up, sign-in, sign-out, password reset (via Supabase).
- **Account Management:** Basic profile creation/editing, email/password changes, account deletion.
- **Subscription Billing:** Integration with Stripe for selecting plans and managing subscriptions (requires Stripe setup).
- **Marketing Site:** Basic static pages (home, pricing, blog structure, contact).
- **Email System:** Foundation for sending transactional emails (requires Resend setup).
- **Basic Search:** Example search functionality for static content (blog posts).

## 2. What's Left to Build (Immediate Focus - Milestone 1 from Roadmap)

- **Data Pipeline:**
  - Acquire/access funding data from `Förderdatenbank des Bundes`.
  - Define database schema for funding programs in Supabase (tables, indexes, RLS policies if needed).
  - Implement data cleaning and ingestion process using Node.js scripts and the Supabase client.
- **Funding Program Display:**
  - Create dynamic SvelteKit route (`/funding/[program_id]`) and page components.
  - Implement server load functions to fetch program details from Supabase.
  - Add prerendering (`export const prerender = true;`) for SEO optimization.
  - Ensure proper meta tags, semantic HTML, and structured data for SEO.
- **Keyword Search:**
  - Adapt the template's existing search pattern:
    - Modify `build_index.ts` to include funding program data.
    - Ensure the Vite plugin correctly builds the search index during build.
    - Implement a search UI component using Fuse.js for client-side searching.

## 3. Current Status

- Project initialized using the `CMSaasStarter` template.
- Memory Bank documentation created.
- Initial analysis of project structure, tech stack, and roadmap complete.
- Ready to begin work on Milestone 1 (PoC SEO Pages), pending clarification on data access.

## 4. Known Issues / Blockers

- **Data Access:** The primary blocker is accessing the initial dataset (`Förderdatenbank des Bundes` crawled data). The location/method of access is unclear from the provided context.
- **Environment Setup:** Requires setting up `.env` file with credentials for Supabase, Stripe, and Resend to fully utilize template features.
- **Roadmap vs. Stack:** Need confirmation to proceed with SvelteKit implementation despite the WordPress mention in the roadmap's PoC section. (Assumption is to use SvelteKit).
