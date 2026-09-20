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
    ],
    highlights: [
      "Supported escalation and risk-flagging processes, applying regulatory criteria to identify high-risk data processing",
      "Assisted in triaging Data Subject Access Requests against statutory deadlines under UK GDPR",
      "Contributed to regulatory research on Irish Data Protection Commission guidance and emerging digital regulation",
      "Supported privacy assessments for technology-sector clients",
      "Developed 5+ privacy toolkits and compliance checklists",
    ],
  },
  {
    org: "Stratega",
    role: "Privacy & DPO Consultant",
    frame: "consultant",
    themes: [
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
      "Acted as an outsourced privacy point of contact for business clients, running recurring GDPR compliance and privacy assessments",
      "Managed Data Subject Access Request workflows end to end, coordinating with HR and business stakeholders to meet statutory deadlines",
      "Reviewed vendor and third-party arrangements for privacy risk and escalated material findings to clients",
      "Advised on employee privacy matters across the employment lifecycle",
    ],
  },
];
