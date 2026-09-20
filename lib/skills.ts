/**
 * Skill-to-evidence mapping and further work samples for the /skills page.
 * Kept separate from site.ts because it is a longer, self-contained block.
 */

export type SkillEvidence = {
  skill: string;
  evidence: string;
  links: { label: string; href: string }[];
};

export const SKILLS: SkillEvidence[] = [
  {
    skill:
      "Solid understanding of privacy and data protection concepts; familiarity with GDPR and common privacy and security practices",
    evidence:
      "CIPP/E and CIPM certified. Case study 01 governs a Data Processing Agreement review against GDPR Article 28(3), Article 32 and Chapter V; the academic work samples below apply the same law to international transfers, biometric data, breach notification, retention and sensitive-data sharing.",
    links: [
      { label: "Case study 01: DPA review →", href: "/case-study/dpa-review" },
      { label: "Academic work samples", href: "#work-samples" },
    ],
  },
  {
    skill: "Comfortable working with logs, large datasets, and technical evidence",
    evidence:
      "The T&S SQL query library below maps practical queries to Trust & Safety and GDPR use cases, from content-moderation metrics to breach-notification tracking. In the ISO 27001 tool, every verdict is tied to a specific quoted line in the underlying evidence, not a summary of it.",
    links: [
      { label: "SQL query library", href: "#work-samples" },
      { label: "Case study 02: ISO 27001 tool →", href: "/tool" },
    ],
  },
  {
    skill:
      "Strong problem-solving skills and attention to detail; able to work through ambiguous incidents with incomplete information",
    evidence:
      "The academic case analyses below work through genuinely ambiguous data-protection scenarios. The ISO 27001 pipeline is built the same way: it states a confidence score with every verdict and treats missing evidence as a gap rather than guessing past it.",
    links: [{ label: "Academic work samples", href: "#work-samples" }],
  },
  {
    skill:
      "Clear written and verbal communication; able to explain technical findings and propose actionable remediation",
    evidence:
      "Each case study on this site is written to take a reader from the process, to the finding, to a named remediation action, not just a verdict. The ISO tool exports a remediation backlog and a draft Statement of Applicability directly from its findings.",
    links: [{ label: "Read the case studies →", href: "/case-study" }],
  },
  {
    skill: "Scripting and analysis skills (e.g. Python/SQL)",
    evidence:
      "The SQL query library below is my practical query work. I am currently training in SQL and Python, and I build this portfolio's own pipeline (TypeScript) with an AI coding agent, documented on the Method page.",
    links: [
      { label: "SQL query library", href: "#work-samples" },
      { label: "How this was built →", href: "/how-it-was-built" },
    ],
  },
  {
    skill:
      "Highly motivated, with strong communication and relationship-building skills and a record of ongoing accomplishment",
    evidence:
      "Three years of legal-services experience across privacy, technology, corporate governance and compliance, under EU, US and LATAM frameworks.",
    links: [{ label: "About →", href: "/#about" }],
  },
  {
    skill: "Accustomed to a fast-paced environment; adaptable to changing or emerging priorities",
    evidence:
      "I have managed 25+ concurrent legal and compliance matters weekly, across shifting deadlines and priorities.",
    links: [{ label: "About →", href: "/#about" }],
  },
  {
    skill:
      "Experience working hands-on with cross-functional teams including legal, procurement, information security, business continuity, privacy, and IT engineering",
    evidence:
      "The NIS2 checklist below operationalises ENISA's guidance across exactly these functions: supply-chain and procurement security, access control for IT engineering, incident response, and business continuity. In practice, I have coordinated senior stakeholders across departments to communicate regulatory requirements and findings and to remediate risk.",
    links: [{ label: "NIS2 implementation checklist", href: "#work-samples" }],
  },
];

export type WorkSample = {
  title: string;
  description: string;
  href: string;
  format: string;
  category: string;
};

/** External work, shared for review rather than published in full. Grouped
 *  by `category` on the Skills page so they stay easy to scan as this list
 *  grows. */
export const WORK_SAMPLES: WorkSample[] = [
  {
    title: "Academic work samples",
    description:
      "Coursework applying EU data-protection law to practical cases: international data transfers, biometric data, data-breach notification, retention obligations, and sensitive-data sharing.",
    href: "https://drive.google.com/drive/folders/1aqC_tjB94CdbB-AQfX7ml4x7juOgxakF?usp=sharing",
    format: "Folder",
    category: "Privacy & Data Protection",
  },
  {
    title: "NIS2 technical implementation checklist",
    description:
      "ENISA's 13-section guidance on cybersecurity risk-management requirements, transformed into an operational compliance tool for entities under Commission Implementing Regulation (EU) 2024/2690: policies, risk management, supply-chain security, access control, incident response, and business continuity.",
    href: "https://docs.google.com/spreadsheets/d/1hTGw45XJqVyc6KXzQ8nUjoBfY_OeDAlDkKwN5OU3AfY/edit?usp=sharing",
    format: "Spreadsheet",
    category: "Cybersecurity & Risk",
  },
  {
    title: "T&S SQL query library",
    description:
      "Practical data queries mapped to real Trust & Safety and GDPR compliance use cases, from content-moderation metrics to breach-notification tracking.",
    href: "https://ccarvajalm10.github.io/assets/sql-queries.html",
    format: "Web page",
    category: "Technical & Data Analysis",
  },
];

/** Fixed display order for the categories above. */
export const WORK_SAMPLE_CATEGORIES = [
  "Privacy & Data Protection",
  "Cybersecurity & Risk",
  "Technical & Data Analysis",
];

export const BUILD_TOOLS: string[] = [
  "Claude Code",
  "Claude Cowork",
  "ChatGPT",
  "Visual Studio Code",
  "Antigravity",
];
