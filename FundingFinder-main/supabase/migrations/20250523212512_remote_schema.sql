create extension if not exists "pg_trgm" with schema "public" version '1.6';

create table "public"."foerderdatenbank_daten" (
    "created_at" timestamp with time zone not null default now(),
    "url" text not null,
    "title" text not null,
    "infos" json not null,
    "content" json not null,
    "updated_at" timestamp with time zone not null default now()
);


alter table "public"."foerderdatenbank_daten" enable row level security;

create table "public"."foerderdatenbank_processed" (
    "url" text not null,
    "updated_at" timestamp with time zone not null default now(),
    "introduction_short" text not null,
    "md_content" text not null,
    "overview_maximum_funding_amount" text not null,
    "overview_financial_instrument" text not null,
    "overview_award_channel" text not null,
    "overview_deadline" text not null,
    "overview_open_until" text not null,
    "overview_region" text not null,
    "overview_beneficiary" text not null,
    "provider_program_level" text not null,
    "provider_funding_body" text not null,
    "provider_managed_by" text not null,
    "provider_additional_partners" text not null,
    "title" text not null,
    "success" boolean not null,
    "permalink" text not null default ''::text,
    "seo_keywords" text[] not null,
    "seo_title" text not null,
    "seo_permalink" text not null,
    "program_status" text not null,
    "overview_eligible_applicants_short" text[] not null,
    "overview_company_size" text not null,
    "overview_eligible_sectors_short" text[] not null,
    "overview_target_stages_short" text[] not null,
    "seo_meta_description" text not null
);


alter table "public"."foerderdatenbank_processed" enable row level security;

create table "public"."funding_programs" (
    "id" uuid not null default gen_random_uuid(),
    "created_date" timestamp with time zone not null default now(),
    "last_updated" timestamp with time zone not null default now(),
    "source" text,
    "permalink" text,
    "title" text,
    "meta_description" text,
    "keywords" text,
    "program_id" text,
    "program_title" text,
    "program_acronym" text,
    "hashtags" text,
    "similar_programs" text,
    "funding_body" text,
    "managing_authority" text,
    "additional_partners" text,
    "program_level" text,
    "financial_instrument_type_short" text,
    "financial_instrument_type_long" text,
    "award_channels_short" text,
    "award_channels_long" text,
    "country" text,
    "geographic_coverage" text,
    "geographic_coverage_description" text,
    "program_status" text,
    "program_duration" text,
    "end_date" text,
    "next_application_deadline" text,
    "program_total_budget" text,
    "program_historical_budget" text,
    "program_available_budget" text,
    "program_website" text,
    "introduction_short" text,
    "introduction_long" text,
    "objective_short" text,
    "objective_long" text,
    "eligible_applicants_short" text,
    "eligible_applicants_long" text,
    "target_stage_short" text,
    "target_stage_long" text,
    "consortium_requirements_short" text,
    "consortium_requirements_long" text,
    "eligible_sectors_short" text,
    "eligible_sectors_short_detailed" text,
    "eligible_sectors_long" text,
    "eligible_costs" text,
    "excluded_costs" text,
    "conditions" text,
    "other_provisions" text,
    "de_minimis_check" text,
    "de_minimis_conditions" text,
    "funding_amount_per_project_max" text,
    "funding_amount_per_project_description" text,
    "funding_rate_max" text,
    "funding_rate_description" text,
    "project_duration_short" text,
    "project_duration_long" text,
    "application_procedure" text,
    "contact_info" text,
    "legal_basis_reference" text
);


alter table "public"."funding_programs" enable row level security;

CREATE UNIQUE INDEX foerderdatenbank_daten_pkey ON public.foerderdatenbank_daten USING btree (url);

CREATE UNIQUE INDEX foerderdatenbank_daten_url_key ON public.foerderdatenbank_daten USING btree (url);

CREATE UNIQUE INDEX foerderdatenbank_processed_pkey ON public.foerderdatenbank_processed USING btree (url);

CREATE INDEX foerderdatenbank_processed_title_index_trigram ON public.foerderdatenbank_processed USING gin (title gin_trgm_ops);

CREATE UNIQUE INDEX funding_programs_pkey ON public.funding_programs USING btree (id);

alter table "public"."foerderdatenbank_daten" add constraint "foerderdatenbank_daten_pkey" PRIMARY KEY using index "foerderdatenbank_daten_pkey";

alter table "public"."foerderdatenbank_processed" add constraint "foerderdatenbank_processed_pkey" PRIMARY KEY using index "foerderdatenbank_processed_pkey";

alter table "public"."funding_programs" add constraint "funding_programs_pkey" PRIMARY KEY using index "funding_programs_pkey";

alter table "public"."foerderdatenbank_daten" add constraint "foerderdatenbank_daten_url_key" UNIQUE using index "foerderdatenbank_daten_url_key";

grant delete on table "public"."foerderdatenbank_daten" to "anon";

grant insert on table "public"."foerderdatenbank_daten" to "anon";

grant references on table "public"."foerderdatenbank_daten" to "anon";

grant select on table "public"."foerderdatenbank_daten" to "anon";

grant trigger on table "public"."foerderdatenbank_daten" to "anon";

grant truncate on table "public"."foerderdatenbank_daten" to "anon";

grant update on table "public"."foerderdatenbank_daten" to "anon";

grant delete on table "public"."foerderdatenbank_daten" to "authenticated";

grant insert on table "public"."foerderdatenbank_daten" to "authenticated";

grant references on table "public"."foerderdatenbank_daten" to "authenticated";

grant select on table "public"."foerderdatenbank_daten" to "authenticated";

grant trigger on table "public"."foerderdatenbank_daten" to "authenticated";

grant truncate on table "public"."foerderdatenbank_daten" to "authenticated";

grant update on table "public"."foerderdatenbank_daten" to "authenticated";

grant delete on table "public"."foerderdatenbank_daten" to "service_role";

grant insert on table "public"."foerderdatenbank_daten" to "service_role";

grant references on table "public"."foerderdatenbank_daten" to "service_role";

grant select on table "public"."foerderdatenbank_daten" to "service_role";

grant trigger on table "public"."foerderdatenbank_daten" to "service_role";

grant truncate on table "public"."foerderdatenbank_daten" to "service_role";

grant update on table "public"."foerderdatenbank_daten" to "service_role";

grant delete on table "public"."foerderdatenbank_processed" to "anon";

grant insert on table "public"."foerderdatenbank_processed" to "anon";

grant references on table "public"."foerderdatenbank_processed" to "anon";

grant select on table "public"."foerderdatenbank_processed" to "anon";

grant trigger on table "public"."foerderdatenbank_processed" to "anon";

grant truncate on table "public"."foerderdatenbank_processed" to "anon";

grant update on table "public"."foerderdatenbank_processed" to "anon";

grant delete on table "public"."foerderdatenbank_processed" to "authenticated";

grant insert on table "public"."foerderdatenbank_processed" to "authenticated";

grant references on table "public"."foerderdatenbank_processed" to "authenticated";

grant select on table "public"."foerderdatenbank_processed" to "authenticated";

grant trigger on table "public"."foerderdatenbank_processed" to "authenticated";

grant truncate on table "public"."foerderdatenbank_processed" to "authenticated";

grant update on table "public"."foerderdatenbank_processed" to "authenticated";

grant delete on table "public"."foerderdatenbank_processed" to "service_role";

grant insert on table "public"."foerderdatenbank_processed" to "service_role";

grant references on table "public"."foerderdatenbank_processed" to "service_role";

grant select on table "public"."foerderdatenbank_processed" to "service_role";

grant trigger on table "public"."foerderdatenbank_processed" to "service_role";

grant truncate on table "public"."foerderdatenbank_processed" to "service_role";

grant update on table "public"."foerderdatenbank_processed" to "service_role";

grant delete on table "public"."funding_programs" to "anon";

grant insert on table "public"."funding_programs" to "anon";

grant references on table "public"."funding_programs" to "anon";

grant select on table "public"."funding_programs" to "anon";

grant trigger on table "public"."funding_programs" to "anon";

grant truncate on table "public"."funding_programs" to "anon";

grant update on table "public"."funding_programs" to "anon";

grant delete on table "public"."funding_programs" to "authenticated";

grant insert on table "public"."funding_programs" to "authenticated";

grant references on table "public"."funding_programs" to "authenticated";

grant select on table "public"."funding_programs" to "authenticated";

grant trigger on table "public"."funding_programs" to "authenticated";

grant truncate on table "public"."funding_programs" to "authenticated";

grant update on table "public"."funding_programs" to "authenticated";

grant delete on table "public"."funding_programs" to "service_role";

grant insert on table "public"."funding_programs" to "service_role";

grant references on table "public"."funding_programs" to "service_role";

grant select on table "public"."funding_programs" to "service_role";

grant trigger on table "public"."funding_programs" to "service_role";

grant truncate on table "public"."funding_programs" to "service_role";

grant update on table "public"."funding_programs" to "service_role";


