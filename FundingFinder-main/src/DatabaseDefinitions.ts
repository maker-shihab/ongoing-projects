export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      contact_requests: {
        Row: {
          company_name: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          message_body: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          company_name?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          message_body?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          company_name?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          message_body?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      foerderdatenbank_daten: {
        Row: {
          content: Json
          created_at: string
          infos: Json
          title: string
          updated_at: string
          url: string
        }
        Insert: {
          content: Json
          created_at?: string
          infos: Json
          title: string
          updated_at?: string
          url: string
        }
        Update: {
          content?: Json
          created_at?: string
          infos?: Json
          title?: string
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      foerderdatenbank_processed: {
        Row: {
          introduction_short: string
          md_content: string
          overview_award_channel: string
          overview_beneficiary: string
          overview_company_size: string
          overview_deadline: string
          overview_eligible_applicants_short: string[]
          overview_eligible_sectors_short: string[]
          overview_financial_instrument: string
          overview_maximum_funding_amount: string
          overview_open_until: string
          overview_region: string
          overview_target_stages_short: string[]
          permalink: string
          program_status: string
          provider_additional_partners: string
          provider_funding_body: string
          provider_managed_by: string
          provider_program_level: string
          seo_keywords: string[]
          seo_meta_description: string
          seo_permalink: string
          seo_title: string
          success: boolean
          title: string
          updated_at: string
          url: string
        }
        Insert: {
          introduction_short: string
          md_content: string
          overview_award_channel: string
          overview_beneficiary: string
          overview_company_size: string
          overview_deadline: string
          overview_eligible_applicants_short: string[]
          overview_eligible_sectors_short: string[]
          overview_financial_instrument: string
          overview_maximum_funding_amount: string
          overview_open_until: string
          overview_region: string
          overview_target_stages_short: string[]
          permalink?: string
          program_status: string
          provider_additional_partners: string
          provider_funding_body: string
          provider_managed_by: string
          provider_program_level: string
          seo_keywords: string[]
          seo_meta_description: string
          seo_permalink: string
          seo_title: string
          success: boolean
          title: string
          updated_at?: string
          url: string
        }
        Update: {
          introduction_short?: string
          md_content?: string
          overview_award_channel?: string
          overview_beneficiary?: string
          overview_company_size?: string
          overview_deadline?: string
          overview_eligible_applicants_short?: string[]
          overview_eligible_sectors_short?: string[]
          overview_financial_instrument?: string
          overview_maximum_funding_amount?: string
          overview_open_until?: string
          overview_region?: string
          overview_target_stages_short?: string[]
          permalink?: string
          program_status?: string
          provider_additional_partners?: string
          provider_funding_body?: string
          provider_managed_by?: string
          provider_program_level?: string
          seo_keywords?: string[]
          seo_meta_description?: string
          seo_permalink?: string
          seo_title?: string
          success?: boolean
          title?: string
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      funding_programs: {
        Row: {
          additional_partners: string | null
          application_procedure: string | null
          award_channels_long: string | null
          award_channels_short: string | null
          conditions: string | null
          consortium_requirements_long: string | null
          consortium_requirements_short: string | null
          contact_info: string | null
          country: string | null
          created_date: string
          de_minimis_check: string | null
          de_minimis_conditions: string | null
          eligible_applicants_long: string | null
          eligible_applicants_short: string | null
          eligible_costs: string | null
          eligible_sectors_long: string | null
          eligible_sectors_short: string | null
          eligible_sectors_short_detailed: string | null
          end_date: string | null
          excluded_costs: string | null
          financial_instrument_type_long: string | null
          financial_instrument_type_short: string | null
          funding_amount_per_project_description: string | null
          funding_amount_per_project_max: string | null
          funding_body: string | null
          funding_rate_description: string | null
          funding_rate_max: string | null
          geographic_coverage: string | null
          geographic_coverage_description: string | null
          hashtags: string | null
          id: string
          introduction_long: string | null
          introduction_short: string | null
          keywords: string | null
          last_updated: string
          legal_basis_reference: string | null
          managing_authority: string | null
          meta_description: string | null
          next_application_deadline: string | null
          objective_long: string | null
          objective_short: string | null
          other_provisions: string | null
          permalink: string | null
          program_acronym: string | null
          program_available_budget: string | null
          program_duration: string | null
          program_historical_budget: string | null
          program_id: string | null
          program_level: string | null
          program_status: string | null
          program_title: string | null
          program_total_budget: string | null
          program_website: string | null
          project_duration_long: string | null
          project_duration_short: string | null
          similar_programs: string | null
          source: string | null
          target_stage_long: string | null
          target_stage_short: string | null
          title: string | null
        }
        Insert: {
          additional_partners?: string | null
          application_procedure?: string | null
          award_channels_long?: string | null
          award_channels_short?: string | null
          conditions?: string | null
          consortium_requirements_long?: string | null
          consortium_requirements_short?: string | null
          contact_info?: string | null
          country?: string | null
          created_date?: string
          de_minimis_check?: string | null
          de_minimis_conditions?: string | null
          eligible_applicants_long?: string | null
          eligible_applicants_short?: string | null
          eligible_costs?: string | null
          eligible_sectors_long?: string | null
          eligible_sectors_short?: string | null
          eligible_sectors_short_detailed?: string | null
          end_date?: string | null
          excluded_costs?: string | null
          financial_instrument_type_long?: string | null
          financial_instrument_type_short?: string | null
          funding_amount_per_project_description?: string | null
          funding_amount_per_project_max?: string | null
          funding_body?: string | null
          funding_rate_description?: string | null
          funding_rate_max?: string | null
          geographic_coverage?: string | null
          geographic_coverage_description?: string | null
          hashtags?: string | null
          id?: string
          introduction_long?: string | null
          introduction_short?: string | null
          keywords?: string | null
          last_updated?: string
          legal_basis_reference?: string | null
          managing_authority?: string | null
          meta_description?: string | null
          next_application_deadline?: string | null
          objective_long?: string | null
          objective_short?: string | null
          other_provisions?: string | null
          permalink?: string | null
          program_acronym?: string | null
          program_available_budget?: string | null
          program_duration?: string | null
          program_historical_budget?: string | null
          program_id?: string | null
          program_level?: string | null
          program_status?: string | null
          program_title?: string | null
          program_total_budget?: string | null
          program_website?: string | null
          project_duration_long?: string | null
          project_duration_short?: string | null
          similar_programs?: string | null
          source?: string | null
          target_stage_long?: string | null
          target_stage_short?: string | null
          title?: string | null
        }
        Update: {
          additional_partners?: string | null
          application_procedure?: string | null
          award_channels_long?: string | null
          award_channels_short?: string | null
          conditions?: string | null
          consortium_requirements_long?: string | null
          consortium_requirements_short?: string | null
          contact_info?: string | null
          country?: string | null
          created_date?: string
          de_minimis_check?: string | null
          de_minimis_conditions?: string | null
          eligible_applicants_long?: string | null
          eligible_applicants_short?: string | null
          eligible_costs?: string | null
          eligible_sectors_long?: string | null
          eligible_sectors_short?: string | null
          eligible_sectors_short_detailed?: string | null
          end_date?: string | null
          excluded_costs?: string | null
          financial_instrument_type_long?: string | null
          financial_instrument_type_short?: string | null
          funding_amount_per_project_description?: string | null
          funding_amount_per_project_max?: string | null
          funding_body?: string | null
          funding_rate_description?: string | null
          funding_rate_max?: string | null
          geographic_coverage?: string | null
          geographic_coverage_description?: string | null
          hashtags?: string | null
          id?: string
          introduction_long?: string | null
          introduction_short?: string | null
          keywords?: string | null
          last_updated?: string
          legal_basis_reference?: string | null
          managing_authority?: string | null
          meta_description?: string | null
          next_application_deadline?: string | null
          objective_long?: string | null
          objective_short?: string | null
          other_provisions?: string | null
          permalink?: string | null
          program_acronym?: string | null
          program_available_budget?: string | null
          program_duration?: string | null
          program_historical_budget?: string | null
          program_id?: string | null
          program_level?: string | null
          program_status?: string | null
          program_title?: string | null
          program_total_budget?: string | null
          program_website?: string | null
          project_duration_long?: string | null
          project_duration_short?: string | null
          similar_programs?: string | null
          source?: string | null
          target_stage_long?: string | null
          target_stage_short?: string | null
          title?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          company_name: string | null
          full_name: string | null
          id: string
          unsubscribed: boolean
          updated_at: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          company_name?: string | null
          full_name?: string | null
          id: string
          unsubscribed?: boolean
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          company_name?: string | null
          full_name?: string | null
          id?: string
          unsubscribed?: boolean
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      stripe_customers: {
        Row: {
          stripe_customer_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          stripe_customer_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          stripe_customer_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      gtrgm_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      gtrgm_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      set_limit: {
        Args: { "": number }
        Returns: number
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: { "": string }
        Returns: string[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
