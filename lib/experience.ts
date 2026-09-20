/**
 * Education, credentials and experience for the /experience page.
 * No exact start/end dates are shown, per instruction; roles are ordered
 * most recent first. Highlights are drafted from the theme tags supplied —
 * tighten with specifics before relying on this for an application.
 */

export const EDUCATION = {
  programme: "Master's in Law, Data & AI (EMILDAI)",
  institution: "Dublin City University · Universidad de León · Università di Pisa",
  route: "Ireland → Spain → Italy",
  themes: ["GDPR", "ePrivacy", "DORA", "NIS2", "DSA", "DMA", "ISO 27001", "MiCA", "AI Act", "DGA"],
  note: "Recently completed. A joint programme across three countries, combining doctrinal law with applied data and AI modules.",
  modules: [
    "EU Data Protection Law (GDPR, ePrivacy)",
    "AI Governance and the EU AI Act",
    "Cybersecurity and Information Security Law",
    "Digital Regulation (DSA, DMA, DORA)",
    "Data Governance and Data Strategy",
    "Legal Tech and Computational Law",
  ],
};

export type Credential = { name: string; issuer: string; status: string };

export const CREDENTIALS: Credential[] = [
  { name: "CIPP/E", issuer: "IAPP", status: "2025" },
  { name: "CIPM", issuer: "IAPP", status: "2026" },
  {
    name: "Cloud Computing Law (Transactions, Data Protection, Competition & Tax)",
    issuer: "Queen Mary University of London",
    status: "2024",
  },
  {
    name: "Agents of Change: Ending Child Sexual Exploitation (CSEC)",
    issuer: "ICMEC",
    status: "05/2026",
  },
  { name: "SQL", issuer: "DataCamp", status: "03/2026" },
  { name: "AI Fluency", issuer: "Anthropic", status: "2026" },
  { name: "Agent Skills", issuer: "Anthropic", status: "2026" },
];

export type Role = {
  org: string;
  role: string;
  frame: "intern" | "consultant";
  themes: string[];
  highlights: string[];
};

/** Most recent first. */
export const EXPERIENCE: Role[] = [
  {
    org: "Arthur Cox",
    role: "Technology & Innovation Legal Intern",
    frame: "intern",
    themes: [
      "Privacy Investigations",
      "Privacy Incident Response",
      "Data Protection",
      "GDPR",
      "Privacy Risk Assessments",
      "DPIAs",
      "DSARs",
      "DORA",
      "NIS2",
      "Regulatory Monitoring",
      "Compliance Remediation",
      "GDPR Enforcement Tracker",
    ],
    highlights: [
      "Contributed to core data protection compliance activities, including monitoring EU digital regulations (GDPR, NIS2, DORA, DSA, AI Act), case law and emerging trends to identify risks, challenges and opportunities",
      "Conducted client risk assessments using the GDPR Enforcement Tracker, summarising results to senior counsel to support proposal drafting and decision-making",
      "Supported privacy audits and a live DPA inquiry and DSARs, running a structured gap analysis of client data inventories against privacy legislation to identify disclosure gaps and meet DPC standards and timelines",
      "Developed ENISA's 13-section NIS2 Technical Guidance into a structured internal compliance checklist, and contributed written briefings on data protection and cybersecurity topics for internal audiences",
      "Managed compliance issue and remediation workflows: action logs, evidence validation, and stakeholder follow-up to close outstanding actions",
      "Assisted in triaging Data Subject Access Requests against statutory deadlines under UK GDPR",
      "Supported escalation and risk-flagging processes, applying regulatory criteria to identify high-risk data processing",
    ],
  },
  {
    org: "Stratega",
    role: "Legal & Privacy Consultant",
    frame: "consultant",
    themes: [
      "Commercial Contracts",
      "SaaS Agreements",
      "Contract Lifecycle Management",
      "AI Tools & Prompt Engineering",
      "Data Analytics",
      "EU, US & LATAM Markets",
      "International Privacy Frameworks",
      "Employee Privacy",
      "DSARs",
      "DPO Operations",
      "HR",
      "Cross-Functional Collaboration",
      "Stakeholder Management",
      "Legal-Technical Liaison",
      "Project Coordination",
      "Problem Solving",
      "Deadline & Portfolio Management",
      "Process Improvement",
      "Legal Technology",
      "ISO 27001",
      "Internal Controls & Trackers",
      "GRC",
    ],
    highlights: [
      "Proven track record of independently managing complex projects and delivering measurable impact across legal, commercial and privacy workstreams",
      "Applied AI tools and prompt engineering to legal workflows, reducing legal turnaround times to under 2 business days, and delivered training to client teams on AI confidentiality, responsible AI use and shadow AI",
      "Managed 15 to 25 concurrent commercial, corporate and contract matters weekly across EU, US and LATAM markets, coordinating stakeholders and tracking workflows to identify bottlenecks and improve efficiency",
      "Managed contract lifecycles for high-growth tech startups, onboarding 80+ clients per month and drafting and negotiating SaaS agreements, MSAs, DPAs, SLAs, contractor agreements and investment agreements",
      "Acted as an outsourced privacy point of contact for business clients, running recurring GDPR compliance and privacy assessments and managing DSAR workflows end to end",
    ],
  },
];
