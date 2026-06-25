export type Lang = "ko" | "en";

export interface NavItem {
  name: string;
  id: string;
}

export interface BrandCopy {
  name: string;
  sub: string;
}

export interface HeroCopy {
  badge: string;
  line1: string;
  line2: string;
  desc: string;
  primary: string;
  secondary: string;
  stat1: string;
  stat1Label: string;
  stat2: string;
  stat2Label: string;
  stat3: string;
  stat3Label: string;
}

export interface CorePhilosophy {
  title: string;
  desc: string;
  elements: string[];
}

export interface DifferentiationCopy {
  title: string;
  desc: string;
  cards: string[];
  highlight: string;
}

export interface CopyRisk {
  title: string;
  desc: string;
  intro: string;
  points: string[];
  consequences: string;
  titleBeforeAfter: string;
  descBeforeAfter: string;
}

export interface RiskPair {
  level: string;
  tone: string;
  title: string;
  before: string;
  after: string;
}

export interface DoctorReality {
  title: string;
  desc: string;
  subtitle: string;
  items: string[];
  question: string;
  answer: string;
}

export interface PainPointCopy {
  title: string;
  desc: string;
  items: string[];
  warningBox: string;
}

export interface ServiceDetail {
  title: string;
  desc: string;
}

export interface ServicesCopy {
  intro: string;
  subIntro: string;
  consequence: string;
  rejectTitle: string;
  services: ServiceDetail[];
  rejects: string[];
  ourPromise: string;
}

export interface CRMIntegrationCopy {
  title: string;
  desc: string;
  channels: string[];
  solution: string;
}

export interface ContentEnduranceCopy {
  title: string;
  desc: string;
  schedule: string[];
  highlight: string;
  statHighlight: string;
  fullPathDesc: string;
}

export interface WorkStandardsCopy {
  title: string;
  intro: string;
  standards: { name: string; score: number }[];
  warning: string;
  speedEfficiency: string;
}

export interface PackageDetail {
  name: string;
  title: string;
  price: string;
  features: string[];
  cta: string;
  desc: string;
}

export interface PackagesCopy {
  title: string;
  desc: string;
  packages: PackageDetail[];
  materialsTitle: string;
  materialsDesc: string;
  materialsList: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface WorkflowCopy {
  title: string;
  desc: string;
  steps: ProcessStep[];
  footerCallout: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ContactCopy {
  label: string;
  title: string;
  desc: string;
  email: string;
  placeholder: string;
  button: string;
  note: string;
}

export interface LanguageCopy {
  nav: {
    home: string;
    proof: string;
    risk: string;
    services: string;
    process: string;
    packages: string;
    faq: string;
    contact: string;
    cta: string;
  };
  brand: BrandCopy;
  hero: HeroCopy;
  philosophy: CorePhilosophy;
  differentiation: DifferentiationCopy;
  copyRisk: CopyRisk;
  riskPairs: RiskPair[];
  doctorReality: DoctorReality;
  painPoints: PainPointCopy;
  servicesCopy: ServicesCopy;
  crmIntegration: CRMIntegrationCopy;
  contentEndurance: ContentEnduranceCopy;
  workStandards: WorkStandardsCopy;
  packagesCopy: PackagesCopy;
  workflowCopy: WorkflowCopy;
  faqs: FaqItem[];
  contact: ContactCopy;
}
