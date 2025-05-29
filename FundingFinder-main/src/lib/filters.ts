// Filter options for the funding search page

// Region options
export const regionOptions = [
  { value: "Germany", label: "Germany" },
  { value: "Hessen", label: "Hessen" },
  { value: "Bayern", label: "Bayern" },
  // Add more regions as needed
]

// Target Stage options
export enum TargetStageShort {
  BasicResearch = "BasicResearch",
  AppliedResearch = "AppliedResearch",
  ExperimentalDevelopment = "ExperimentalDevelopment",
  FeasibilityStudy = "FeasibilityStudy",
  Prototyping = "Prototyping",
  PilotTesting = "PilotTesting",
  ProductDevelopment = "ProductDevelopment",
  ProcessOptimization = "ProcessOptimization",
  MarketIntroduction = "MarketIntroduction",
  Scaling = "Scaling",
  Commercialization = "Commercialization",
  Planning = "Planning",
  PolicyDevelopment = "PolicyDevelopment",
  Implementation = "Implementation",
  Infrastructure = "Infrastructure",
  ServiceDelivery = "ServiceDelivery",
  CapacityBuilding = "CapacityBuilding",
  AwarenessCampaigns = "AwarenessCampaigns",
  Monitoring = "Monitoring",
  Evaluation = "Evaluation",
  Other = "Other",
  Unknown = "Unknown",
}

export const targetStageOptions = Object.entries(TargetStageShort).map(
  ([label, value]) => ({
    value,
    label: label.replace(/([A-Z])/g, " $1").trim(), // Add spaces before capital letters
  }),
)

// Eligible Sectors options
export enum EligibleSectorsShort {
  AgricultureAndAgribusiness = "AgricultureAndAgribusiness",
  FoodProcessing = "FoodProcessing",
  TextileAndApparelIndustry = "TextileAndApparelIndustry",
  ConstructionAndBuildingMaterials = "ConstructionAndBuildingMaterials",
  PaperAndPackagingIndustry = "PaperAndPackagingIndustry",
  EnergyProductionAndSupply = "EnergyProductionAndSupply",
  RenewableEnergy = "RenewableEnergy",
  WaterAndWasteManagement = "WaterAndWasteManagement",
  TransportationAndLogistics = "TransportationAndLogistics",
  InformationAndCommunicationTechnology = "InformationAndCommunicationTechnology",
  SoftwareDevelopment = "SoftwareDevelopment",
  FinancialTechnology = "FinancialTechnology",
  GreenTechnology = "GreenTechnology",
  Healthcare = "Healthcare",
  MedicalTechnology = "MedicalTechnology",
  PharmaceuticalIndustry = "PharmaceuticalIndustry",
  EducationAndVocationalTraining = "EducationAndVocationalTraining",
  ResearchAndDevelopment = "ResearchAndDevelopment",
  ConsumerGoodsIndustry = "ConsumerGoodsIndustry",
  ServiceSector = "ServiceSector",
  Tourism = "Tourism",
  CreativeIndustries = "CreativeIndustries",
  EnvironmentalAndClimateProtection = "EnvironmentalAndClimateProtection",
  SocialEnterprises = "SocialEnterprises",
  CulturalInstitutions = "CulturalInstitutions",
  Other = "Other",
  Unknown = "Unknown",
}

export const eligibleSectorsOptions = Object.entries(EligibleSectorsShort).map(
  ([label, value]) => ({
    value,
    label: label.replace(/([A-Z])/g, " $1").trim(), // Add spaces before capital letters
  }),
)

// Program Status options
export enum ProgramStatus {
  planned = "Planned",
  open = "Open",
  closed = "Closed",
  cancelled = "Cancelled",
  other = "Other",
}

export const programStatusOptions = Object.values(ProgramStatus).map(
  (value) => ({
    value,
    label: value,
  }),
)

// Company Size options
export enum CompanySize {
  lt10 = "lt10",
  lt50 = "lt50",
  lt250 = "lt250",
  lt1000 = "lt1000",
  gt1000 = "gt1000",
  all = "all",
  unknown = "unknown",
}

export const companySizeOptions = [
  { value: CompanySize.lt10, label: "< 10 employees" },
  { value: CompanySize.lt50, label: "< 50 employees" },
  { value: CompanySize.lt250, label: "< 250 employees" },
  { value: CompanySize.lt1000, label: "< 1000 employees" },
  { value: CompanySize.gt1000, label: ">= 1000 employees" },
  { value: CompanySize.all, label: "All company sizes" },
  { value: CompanySize.unknown, label: "Not specified" },
]

// Eligible Applicants options
export enum EligibleApplicantsShort {
  IndividualsandEntrepreneurs = "IndividualsandEntrepreneurs",
  Partnerships = "Partnerships",
  Businesses = "Businesses",
  NonProfit = "NonProfit",
  PublicSectorEntities = "PublicSectorEntities",
  EducationalandResearch = "EducationalandResearch",
  Others = "Others",
  Unknown = "Unknown",
}

export const eligibleApplicantsOptions = [
  {
    value: EligibleApplicantsShort.IndividualsandEntrepreneurs,
    label: "Individuals and Entrepreneurs",
  },
  { value: EligibleApplicantsShort.Partnerships, label: "Partnerships" },
  { value: EligibleApplicantsShort.Businesses, label: "Businesses" },
  { value: EligibleApplicantsShort.NonProfit, label: "Non-Profit" },
  {
    value: EligibleApplicantsShort.PublicSectorEntities,
    label: "Public Sector Entities",
  },
  {
    value: EligibleApplicantsShort.EducationalandResearch,
    label: "Educational and Research Institutions",
  },
  { value: EligibleApplicantsShort.Others, label: "Others" },
  { value: EligibleApplicantsShort.Unknown, label: "Unknown" },
]

// Financial Instrument Type options
export enum FinancialInstrumentType {
  grant = "Grant",
  repayable = "Repayable",
  loan = "Loan",
  convertible = "Convertible",
  equity = "Equity",
  hybrid = "Hybrid",
  guarantee = "Guarantee",
  incentive = "Incentive",
  prize = "Prize",
  other = "Other",
}

export const financialInstrumentOptions = Object.values(
  FinancialInstrumentType,
).map((value) => ({
  value,
  label: value,
}))

// All filters configuration
export const filters = [
  {
    id: "region",
    label: "Region",
    options: regionOptions,
    type: "single", // single selection filter
  },
  {
    id: "eligible_applicants",
    label: "Eligible Applicants",
    options: eligibleApplicantsOptions,
    type: "multi", // multi selection filter
  },
  {
    id: "company_size",
    label: "Company size",
    options: companySizeOptions,
    type: "single",
  },
  {
    id: "eligible_sectors",
    label: "Industries & Sectors",
    options: eligibleSectorsOptions,
    type: "multi",
  },
  {
    id: "financial_instrument",
    label: "Financial Instrument",
    options: financialInstrumentOptions,
    type: "single",
  },
  {
    id: "target_stages",
    label: "Funding Stages",
    options: targetStageOptions,
    type: "multi",
  },
  {
    id: "program_status",
    label: "Program Status",
    options: programStatusOptions,
    type: "single", // single selection filter
  },
]
