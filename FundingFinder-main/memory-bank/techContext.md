# Tech Context: Funding Finder

## 1. Core Technologies

- **Framework:** SvelteKit (^2.8.1) using Svelte 5 (^5.0.0)
- **Language:** TypeScript (^5.5.0)
- **Backend-as-a-Service (BaaS):** Supabase (^2.45.2)
  - Authentication: Provided by Supabase Auth (`@supabase/ssr`, `@supabase/auth-ui-svelte`)
  - Database: Supabase Postgres
- **Payments:** Stripe (^13.3.0) for subscription billing.
- **Email:** Resend (^3.5.0) for transactional emails.
- **Styling:**
  - TailwindCSS (^4.0.9) - Utility-first CSS framework.
  - DaisyUI (^5.0.0) - TailwindCSS component library.
  - PostCSS (^8.4.31) - CSS processing.
- **Build Tool:** Vite (^6.2.0)
- **Server Environment:** Node.js (implied by stack)

## 2. Development & Code Quality

- **Package Manager:** npm (implied by `package-lock.json`)
- **Linting:** ESLint (^8.28.0) with TypeScript and Svelte plugins.
- **Formatting:** Prettier (^3.1.0) with `prettier-plugin-svelte`.
- **Type Checking:** `svelte-check` (^4.0.0) and TypeScript compiler (`tsc`).
- **Testing:** Vitest (^3.0.7) for unit/integration tests.

## 3. Key Libraries & Tools

- **SvelteKit & Svelte:**
  - `@sveltejs/adapter-auto`: Adapts the SvelteKit build for various deployment environments.
  - `@sveltejs/kit`: Core SvelteKit framework.
  - `svelte`: Core Svelte library (version 5, using the new Runes API with `$state`, `$props`, `$effect`).
- **Supabase Integration:**
  - `@supabase/ssr`: Server-side rendering helpers for Supabase auth, providing secure session management.
  - `@supabase/auth-ui-svelte`: Pre-built UI components for Supabase authentication (login/signup forms).
  - `@supabase/supabase-js`: Core Supabase JavaScript client for database and auth operations.
- **Email System:**
  - `resend`: API client for the Resend email delivery service.
  - `handlebars`: Templating engine used for email templates (`src/lib/emails/*.hbs`).
  - `html-to-text`: Used for converting HTML email templates to plain text alternatives.
- **Search & Content:**
  - `fuse.js`: Lightweight fuzzy-search library for client-side searching.
  - `glob`: Used for finding files matching patterns in `src/lib/build_index.ts`.
  - `super-sitemap`: Utility for generating XML sitemaps for SEO.
- **Payments:**
  - `stripe`: Official Stripe API client for subscription and payment processing.

## 4. Data Sources (Initial & Planned)

- **Initial Focus:** German Federal Funding Database (`Förderdatenbank des Bundes`). Data provided via crawled CSV/Excel/HTML/PDF files.
- **Planned Expansion:**
  - EU State Aid Database (`competition-cases.ec.europa.eu`). Data provided via crawled files/PDFs.
  - EU Funding & Tenders Portal (`ec.europa.eu/info/funding-tenders/`).
  - Other national/regional databases (e.g., `Bundesanzeiger`).

## 5. Infrastructure & Deployment

- **Adapter:** `@sveltejs/adapter-auto` suggests flexibility (Vercel, Netlify, Cloudflare Pages, Node server, etc.). Specific hosting TBD.
- **Database:** Hosted by Supabase.
- **Authentication:** Managed by Supabase.
- **Email Sending:** Managed by Resend.
- **Payments:** Managed by Stripe.

## 6. Coding Style & Practices

- Follow the established patterns within the `CMSaasStarter` template.
- Adhere to configured ESLint and Prettier rules.
- Utilize TypeScript for type safety.
- Leverage SvelteKit's routing, layouts, and server features (actions, load functions).
- Maintain separation of concerns (e.g., marketing routes vs. admin routes).
