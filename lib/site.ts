/**
 * Portfolio content. EDIT THIS FILE. Nothing else in the app needs changing.
 */
export const siteConfig = {
  author: {
    name: "Catalina Carvajal M.",
    title: "Privacy Professional & Legal Technologist",
    location: "Dublin, Ireland",
    email: "catalinacarvajalm3@gmail.com",
    // Shown as a small status pill in the nav.
    availability: "Available for privacy / trust & safety roles",
    // file lives in /public. Set to "" to hide the portrait.
    photo: "/catalina.jpg",
  },

  /** The portfolio as a whole. Shown in the hero and metadata. */
  portfolio: {
    kicker: "Portfolio",
    tagline: "Working at the intersection of privacy, data and technology.",
    // Plain-text fallback (used for metadata only); the hero renders the
    // bolded version of this directly in app/page.tsx.
    lede: "I'm a CIPP/E and CIPM-certified privacy professional with a Master's in Law, Data & AI and three years of experience solving privacy and compliance problems across EU, US and LATAM frameworks. I'm particularly interested in how data, technical evidence and regulation come together to investigate and solve real privacy and operational problems.",
    // Capability tags shown as chips in the hero.
    areas: [
      "GDPR",
      "Privacy Investigations",
      "DSARs",
      "Technical Evidence",
      "SQL",
      "NIST",
      "ISO 27001",
      "AI Governance",
    ],
  },

  /** The thesis this portfolio operationalises. */
  thesis: {
    title:
      "From Regulation to Workflow: A Framework for Responsible AI Implementation in Legal Operations and Compliance Functions",
    degree: "MSc in Law, Data and AI (EMILDAI)",
    argument:
      "Responsible AI in legal and compliance work is achieved not through isolated technical features but by building governance mechanisms into the workflow itself: retrieval grounding, an encoded playbook, an evaluator loop, a human approval gate, and an audit trail.",
    note:
      "Each case study here is an illustrative implementation of that framework, assessed against the external legal requirements it targets rather than against internally defined success criteria.",
  },

  /**
   * Shown in the About section. `paragraphs` is the plain-text record; the
   * page renders a bolded rich-text version of the same four paragraphs
   * directly in app/page.tsx (same pattern as the hero lede).
   */
  about: {
    paragraphs: [
      "I'm a CIPP/E and CIPM-certified privacy professional with a Master's in Law, Data & AI and three years of legal-services experience across privacy, technology, corporate governance and compliance, working with EU, US and LATAM privacy frameworks.",
      "I have managed 25+ concurrent legal and compliance matters weekly, collaborating with cross-functional teams and senior stakeholders to translate regulatory requirements into practical actions, communicate findings and keep complex projects moving across multiple jurisdictions.",
      "I'm now building deeper technical capabilities in data analysis, SQL and AI workflows, with a particular interest in how technology and evidence can improve privacy and compliance operations.",
      "This portfolio brings together work and resources developed over the past two years through my Master's, professional experience, certifications and independent research.",
    ],
    expertise: [
      "GDPR, DPAs and DPIAs",
      "Privacy investigations & incident response",
      "ISO/IEC 27001 and 27002",
      "EU AI Act readiness",
      "SQL & data analysis",
      "Cross-functional risk remediation",
    ],
  },

  links: {
    linkedin: "https://www.linkedin.com/in/catalinacarvajalm/",
    certifications: "https://www.linkedin.com/in/catalinacarvajalm/details/certifications/",
    github: "https://github.com/ccarvajalm10",
    sqlLibrary: "https://ccarvajalm10.github.io/assets/sql-queries.html",
    repo: "https://github.com/ccarvajalm10/catalina-legal-compliance-portfolio",
  },

  /**
   * Shown wherever a before/after figure appears. These are NOT measured
   * results; edit this once and it updates everywhere.
   */
  metricsDisclaimer:
    "The before and after figures on this site are demonstrative. They describe what this controlled build produces on a fixed example, not measured outcomes from a real deployment. None of these examples has been empirically validated.",

  /**
   * The three case studies. `slug` is the URL under /case-study. Order here
   * is display order (privacy leads); `number` is kept in sync with it and
   * with the matching WorkedExample in lib/caseContent.ts.
   * `metric.headline` is written in conditional voice on purpose: it is a
   * demonstration of what the workflow could do, not a claim that it has.
   */
  caseStudies: [
    {
      slug: "dpa-review",
      number: "01",
      area: "Privacy & Data Protection",
      accent: "clay",
      title: "Data Processing Agreement review, governed end to end",
      process:
        "Pre-signature review of a DPA against GDPR Article 28(3), the Article 32 security obligations, and the Chapter V transfer rules.",
      metric: {
        before: "~90 min / agreement",
        after: "~20 min review",
        headline:
          "In this build, a review that would take about 90 minutes becomes a check of about 20.",
      },
      liveTool: false,
      summary:
        "A retrieval-grounded review skill checks the agreement clause by clause against the GDPR articles and the organisation's playbook, an evaluator skill critiques that draft, and a lawyer approves before anything is final.",
    },
    {
      slug: "iso-27001",
      number: "02",
      area: "Governance, Risk & Control",
      accent: "forest",
      title: "An ISO 27001 gap analysis, rebuilt as an AI pipeline",
      process:
        "The first ISO/IEC 27001:2022 readiness gap analysis: a verdict on all 93 Annex A controls with the evidence for each.",
      metric: {
        before: "~4 analyst-days",
        after: "~1 day",
        headline:
          "In this build, a first pass that would take about four analyst-days is produced in about one (draft plus review).",
      },
      liveTool: true,
      summary:
        "A pipeline reads the whole ISMS document set and drafts a cited verdict for every control, so a reviewer checks 93 pre-argued findings instead of writing them from a blank page.",
    },
    {
      slug: "ai-governance",
      number: "03",
      area: "AI Governance",
      accent: "indigo",
      title: "EU AI Act readiness for an enterprise AI use case",
      process:
        "Intake of a new AI system: risk classification under the EU AI Act and a mapped obligation set (Articles 9, 10, 13, 14, 15) with an owner for each.",
      metric: {
        before: "~2 days / system",
        after: "~3 hours",
        headline:
          "In this build, an assessment that would take about two days is produced in about three hours.",
      },
      liveTool: false,
      summary:
        "The workflow classifies the system's risk tier, pulls the obligations that attach to that tier, and produces a conformity register with a gap and an owner against each one, ready for the governance committee.",
    },
  ],

  /**
   * Consultation space. This is a direct email, not a booking system.
   */
  contact: {
    heading: "Work with me",
    title: "Let's connect",
    blurb:
      "I like a challenge. My goal is to help operational teams stand up governed AI workflows for their processes.",
    offers: [
      "A readiness or gap assessment against the GDPR, ISO/IEC 27001, or the EU AI Act",
      "Designing a review workflow with the controls kept inside it (retrieval grounding, encoded playbook, evaluator check, human approval gate)",
      "A second opinion on an AI system's risk classification and obligations",
    ],
    emailSubject: "Enquiry from the portfolio",
    note: "",
  },

  /** Downloadable working templates, served from /public/templates. */
  templates: [
    {
      file: "/templates/ISO27001-2022-Self-Assessment.xlsx",
      name: "ISO/IEC 27001:2022 clause self-assessment",
      note: "A tab per management-system clause (4 Context, 5 Leadership, 6 Planning, 7 Support, 8 Operation, 9 Performance Evaluation, 10 Improvement), with maturity scoring and Summary and Action Plan tabs. A working template I have used to run readiness assessments.",
    },
    {
      file: "/templates/ISO27001-2022-Gap-Analysis-and-SoA.xlsx",
      name: "Gap analysis and Statement of Applicability",
      note: "Two registers: the Section 4 to 10 mandatory requirements, and all 93 Annex A controls with an applies yes/no column, a six-level implementation maturity scale, and a justification column. Doubles as the Statement of Applicability.",
    },
  ],
} as const;

export type CaseStudy = (typeof siteConfig.caseStudies)[number];
