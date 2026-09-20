/**
 * Content for the /investigations page: the "how I think" methodology, a
 * SIMULATED privacy-incident case study, a fictional access-log dataset,
 * and an SQL example over that same dataset. Everything here is fictional
 * and clearly labelled as such; none of it claims a real incident response.
 */

export const HOW_I_THINK = [
  { n: "01", title: "Question", body: "What happened?" },
  { n: "02", title: "Evidence", body: "What do the records, logs and systems show?" },
  { n: "03", title: "Analysis", body: "What does the law and policy require?" },
  { n: "04", title: "Finding", body: "What is the actual privacy or security risk?" },
  { n: "05", title: "Action", body: "What should be fixed, documented or escalated?" },
];

export const HOW_I_THINK_NOTE =
  "I'm comfortable starting with incomplete information, creating structure, identifying the missing evidence, and working systematically toward a defensible conclusion.";

export const CASE_SCENARIO = {
  company: "Northwind Cloud Ltd",
  intro:
    "The fictional company already used in the ISO 27001 case study identifies a potential privacy incident involving employee data held in its HR system.",
  evidenceAvailable: [
    "Application logs",
    "Access logs",
    "User IDs",
    "Timestamps",
    "IP addresses and location",
    "System events",
    "Data inventory",
    "Privacy policies",
    "Relevant GDPR requirements",
  ],
  timeline: [
    { time: "02:47", label: "Off-hours login", body: "A login to the HR system from an unfamiliar location." },
    { time: "09:14", label: "Unusual access detected", body: "The same account runs a bulk query against employee records." },
    { time: "09:18", label: "System generates alert", body: "Repeated exports from the same session trip a volume rule." },
    { time: "09:27", label: "Initial log review", body: "Access logs are pulled for the account across the prior 24 hours." },
    { time: "10:05", label: "Identify affected dataset", body: "The exports are scoped to the employee_records category specifically." },
    { time: "10:32", label: "Correlate user activity", body: "The account's normal access pattern is compared against this session." },
    { time: "11:10", label: "Assess GDPR implications", body: "The scope and sensitivity of the data is assessed against Articles 5, 32 and 33." },
    { time: "11:45", label: "Determine remediation", body: "Containment, notification assessment and a remediation owner are agreed." },
  ],
  conclusion:
    "This is a simulated methodology walk-through, not a claim of a real incident response. It demonstrates how I would structure an ambiguous access-anomaly question from first alert to a documented decision.",
};

export type LogRow = {
  time: string;
  user: string;
  event: string;
  system: string;
  category: string;
  access: string;
  ip: string;
  location: string;
  flagged: boolean;
};

/** Fictional dataset. Times are same-day, HH:MM, for one simulated incident. */
export const ACCESS_LOGS: LogRow[] = [
  { time: "02:47", user: "u-2291", event: "login", system: "HR-Portal", category: "employee_records", access: "read", ip: "41.77.12.9", location: "Lagos, NG", flagged: true },
  { time: "08:02", user: "u-1004", event: "login", system: "HR-Portal", category: "employee_records", access: "read", ip: "10.2.4.18", location: "Dublin, IE", flagged: false },
  { time: "08:15", user: "u-1004", event: "export", system: "HR-Portal", category: "employee_records", access: "read", ip: "10.2.4.18", location: "Dublin, IE", flagged: false },
  { time: "08:40", user: "u-2291", event: "login", system: "HR-Portal", category: "employee_records", access: "read", ip: "41.77.12.9", location: "Lagos, NG", flagged: true },
  { time: "09:14", user: "u-2291", event: "bulk_query", system: "HR-Portal", category: "employee_records", access: "read", ip: "41.77.12.9", location: "Lagos, NG", flagged: true },
  { time: "09:18", user: "u-2291", event: "export", system: "HR-Portal", category: "employee_records", access: "read", ip: "41.77.12.9", location: "Lagos, NG", flagged: true },
  { time: "09:22", user: "u-3087", event: "login", system: "Billing-System", category: "financial_records", access: "read", ip: "10.2.4.44", location: "Dublin, IE", flagged: false },
  { time: "09:30", user: "u-2291", event: "bulk_query", system: "HR-Portal", category: "employee_records", access: "read", ip: "41.77.12.9", location: "Lagos, NG", flagged: true },
  { time: "09:41", user: "u-4410", event: "login", system: "CRM", category: "customer_data", access: "read", ip: "10.2.4.51", location: "Cork, IE", flagged: false },
  { time: "09:55", user: "u-3087", event: "query", system: "Billing-System", category: "financial_records", access: "read", ip: "10.2.4.44", location: "Dublin, IE", flagged: false },
  { time: "10:05", user: "u-2291", event: "export", system: "HR-Portal", category: "employee_records", access: "read", ip: "41.77.12.9", location: "Lagos, NG", flagged: true },
  { time: "10:20", user: "u-4410", event: "query", system: "CRM", category: "customer_data", access: "read", ip: "10.2.4.51", location: "Cork, IE", flagged: false },
  { time: "10:47", user: "u-1004", event: "query", system: "HR-Portal", category: "employee_records", access: "read", ip: "10.2.4.18", location: "Dublin, IE", flagged: false },
  { time: "11:02", user: "u-2291", event: "login", system: "HR-Portal", category: "employee_records", access: "read", ip: "41.77.12.9", location: "Lagos, NG", flagged: true },
  { time: "11:15", user: "u-5502", event: "login", system: "CRM", category: "customer_data", access: "read", ip: "10.2.4.60", location: "Cork, IE", flagged: false },
];

export const SQL_EXAMPLE = {
  query:
    "SELECT user_id, COUNT(*) AS access_count\nFROM access_logs\nWHERE data_category = 'employee_records'\nGROUP BY user_id\nORDER BY access_count DESC;",
  result: [
    { user_id: "u-2291", access_count: 6 },
    { user_id: "u-1004", access_count: 3 },
  ],
  note: "Run against the same fictional dataset shown above: it is what first points at u-2291 as the account to look at more closely.",
};

export const INVESTIGATION_QUESTIONS = [
  "Which user accessed the dataset most frequently?",
  "Were there unusual access times or locations?",
  "Which systems were involved?",
  "Which categories of personal data were potentially affected?",
  "Which events need further investigation?",
];
