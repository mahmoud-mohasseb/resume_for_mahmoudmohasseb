export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  focus: string;
  highlights: string[];
  tags: string[];
  badge?: string;
  color: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
  badgeColor: string;
  iconType: "ai" | "lean" | "code" | "react" | "js";
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "AI & Automation" | "Diagnostics & Web" | "Enterprise Operations";
  description: string;
  metrics: string;
  technologies: string[];
  features: string[];
  icon: string;
}

export interface VibeToolItem {
  name: string;
  category: string;
  role: string;
  description: string;
  capabilities: string[];
  badge: string;
  gradient: string;
  iconName: string;
}

export const PERSONAL_INFO = {
  name: "Mahmoud Mohasseb",
  title: "Technical Support Specialist & AI Vibe Coding Pioneer",
  subTitle: "Cloud & Application Support • Operations & Incident Resolution • Next-Gen AI Development",
  location: "Bucharest, Romania",
  phone: "+40752331545",
  phoneDisplay: "+40 752 331 545",
  whatsappUrl: "https://wa.me/40752331545?text=Hi%20Mahmoud,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity!",
  email: "Ghareb4@gmail.com",
  linkedin: "https://linkedin.com/in/mahmoud-m-5b6824b6",
  linkedinDisplay: "linkedin.com/in/mahmoud-m-5b6824b6",
  github: "https://github.com/mahmoud-mohasseb",
  githubDisplay: "github.com/mahmoud-mohasseb",
  portfolio: "https://mahmoud-ahmed.netlify.app",
  portfolioDisplay: "mahmoud-ahmed.netlify.app",
  cvDownload: "/Mahmoud_Mohasseb_Resume.pdf",
  profileImage: "/mahmoud-profile.png",
  status: "Available for High-Impact Roles & AI Consultations",
  summary:
    "Analytical, Lean-certified Technical Support & Web Systems Specialist with hands-on enterprise experience supporting Microsoft EMEA service engagements, high-volume application ecosystems (Bolt / Arvato), and full-stack software debugging. Combines 5+ years of modern web application development (JavaScript, TypeScript, React.js, Next.js, Node.js, REST/GraphQL APIs) with structured IT support operations, ticketing triage, and autonomous AI-assisted 'Vibe Coding' workflows (Claude 3.7 Sonnet, Cursor AI Composer, Google Antigravity). Proven record in managing end-to-end incident lifecycles, executing systematic Root Cause Analysis (RCA), and delivering rapid resolution under strict SLA benchmarks.",
};

export const KEY_METRICS = [
  { value: "5+ Yrs", label: "Enterprise Support & Web Dev", subtext: "Microsoft EMEA & High-Volume Apps" },
  { value: "75%", label: "Reporting Cycle Time Saved", subtext: "Automated via Google Apps Script" },
  { value: "40%", label: "Incident Ticket Reduction", subtext: "Through deep API & State Diagnostics" },
  { value: "10x", label: "Vibe Coding Velocity", subtext: "Claude 3.7, Cursor & Antigravity Workflows" },
  { value: "99.4%", label: "SLA & KPI Adherence", subtext: "Strict Enterprise Turnaround Benchmarks" },
];

export const VIBE_CODING_TOOLS: VibeToolItem[] = [
  {
    name: "Claude 3.7 Sonnet & Extended Thinking",
    category: "AI Architecture & Synthesis",
    role: "Deep Code Synthesis & Multi-Turn Debugging",
    description:
      "Harnessing Anthropic's most advanced reasoning model to dissect complex architectural bugs, generate optimized Next.js full-stack implementations, draft automated test suites, and execute prompt-engineered operational workflows.",
    capabilities: [
      "Extended Thinking for deep architectural root cause analysis",
      "Full-stack code generation with strict TypeScript typing",
      "Automated unit & integration test creation",
      "SOP & Runbook translation into automated scripts",
    ],
    badge: "Anthropic AI Certified",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    iconName: "BrainCircuit",
  },
  {
    name: "Cursor AI & Composer Agent",
    category: "Contextual IDE & Multi-File Refactoring",
    role: "Full-Codebase Context & Inline Refactoring",
    description:
      "Leveraging Cursor's whole-codebase semantic indexing, Composer multi-file transformations, and inline AI diffing to pinpoint API breakages, migrate React architectures, and implement features at 10x standard speed.",
    capabilities: [
      "Multi-file atomic edits with zero hallucinated imports",
      "Instant error diagnostics directly from terminal outputs",
      "Natural language codebase query & dependency tracing",
      "Rapid component refactoring & state management overhaul",
    ],
    badge: "Daily Power Driver",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    iconName: "Sparkles",
  },
  {
    name: "Google Antigravity & Agentic IDEs",
    category: "Autonomous Dev Agents & Tooling",
    role: "Autonomous Execution & Verification Loops",
    description:
      "Operating next-generation agentic frameworks with autonomous tool-calling, background sub-agent orchestration, and verification loops to automate full deployment pipelines, documentation authoring, and UI testing.",
    capabilities: [
      "Autonomous file-system and terminal tool executions",
      "Browser subagent validation and visual regression checks",
      "Self-correcting build and lint resolution pipelines",
      "Automated PR summaries and walkthrough artifact generation",
    ],
    badge: "Agentic Pioneer",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    iconName: "Cpu",
  },
  {
    name: "Automated Scripting & Webhooks",
    category: "Operations & Workflow Automation",
    role: "Google Apps Script, REST Webhooks & Micro-tools",
    description:
      "Engineering custom data extraction utilities, webhook listeners, and Google Apps Script triggers that seamlessly bridge legacy spreadsheets, enterprise tickets, and real-time executive dashboard hubs.",
    capabilities: [
      "Real-time KPI aggregation and automated data feed sync",
      "Elimination of manual spreadsheet copy-paste routines",
      "Automated email notifications and escalation triggers",
      "Zero-latency webhook integrations with third-party tools",
    ],
    badge: "75% Time Reduction",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    iconName: "Zap",
  },
];

export const CORE_SERVICES = [
  {
    id: "tech-support",
    title: "Enterprise Tier 1/2/3 Technical Support",
    icon: "ShieldAlert",
    description:
      "End-to-end incident lifecycle management, root cause analysis (RCA), ticket triage, queue dispatching, and high-severity escalation handling adhering to strict SLA/KPI benchmarks.",
    tags: ["Tier 1/2/3 Support", "RCA & 5-Why", "Incident Management", "SLA Adherence", "Microsoft Tools"],
  },
  {
    id: "vibe-dev",
    title: "AI 'Vibe Coding' & Full-Stack Development",
    icon: "Code2",
    description:
      "Rapid full-stack engineering using modern AI tools (Claude 3.7, Cursor AI, Antigravity) combined with 5+ years of React.js, Next.js, TypeScript, Node.js, and REST/GraphQL API development.",
    tags: ["Next.js & React", "TypeScript", "Cursor AI", "Claude 3.7", "Vibe Coding", "REST & GraphQL"],
  },
  {
    id: "lean-ops",
    title: "Lean Digital Transformation & Workflow Automation",
    icon: "TrendingUp",
    description:
      "Certified Genpact Lean methodologies applied to eliminate operational waste, conduct Value Stream Mapping (VSM), author Standard Operating Procedures (SOPs), and build custom script automations.",
    tags: ["Lean Certified", "Value Stream Mapping", "Process SOPs", "Waste Elimination", "Kaizen"],
  },
  {
    id: "app-diagnostics",
    title: "Application Diagnostics & Deep API Debugging",
    icon: "Bug",
    description:
      "Deep diagnostics using Chrome DevTools, Postman, and network inspection to eliminate CORS misconfigurations, JSON parsing defects, React/Redux memory leaks, race conditions, and runtime failures.",
    tags: ["Chrome DevTools", "Postman", "CORS & Network", "Redux Debugging", "State Management"],
  },
  {
    id: "cloud-resource",
    title: "Cloud & Enterprise Resource Governance",
    icon: "Server",
    description:
      "Multi-region engineer dispatch, technical competency matching, queue capacity monitoring, and cross-functional coordination for Microsoft EMEA service engagements.",
    tags: ["Microsoft EMEA", "Queue Capacity", "Resource Allocation", "Escalations", "Microsoft 365"],
  },
  {
    id: "automation-scripting",
    title: "Executive Reporting & Hub Automation",
    icon: "BarChart3",
    description:
      "Designing automated data visualization engines via Google Apps Script, Google Sheets API, and Google Sites operational hubs, reducing manual executive WBR generation time by 75%.",
    tags: ["Google Apps Script", "WBR Automation", "Google Sheets API", "Operational Hubs", "Dashboards"],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "genpact",
    role: "Content Operations Specialist & Lean Innovator",
    company: "Genpact",
    location: "Bucharest, Romania",
    period: "Feb 2024 – Present",
    focus: "High-volume incident review, policy compliance, Lean process automation, and platform reliability under strict SLAs.",
    color: "emerald",
    badge: "Current Role",
    highlights: [
      "Enforce client-specific technical guidelines and policy compliance across digital video platforms, evaluating complex edge cases and resolving high-severity compliance incidents under strict turnaround SLAs.",
      "Isolate systemic workflow breakdowns and platform anomalies, documenting reproduction steps and liaising directly with tier-level engineering groups for swift bug remediation.",
      "Automated Weekly Business Review (WBR) reporting by developing a custom data visualization engine via Google Apps Script, eliminating manual data handling and reducing reporting cycle time by several hours weekly.",
      "Integrated Google Forms into Google Sites operational hubs, standardizing intake workflows and eliminating multi-platform navigation friction.",
      "Leveraged Lean Digital Transformation principles, applying Value Stream Mapping (VSM) and 5-Why RCA to identify operational bottlenecks and enhance team workflow throughput.",
    ],
    tags: ["Google Apps Script", "Lean Digital Transformation", "Value Stream Mapping", "RCA", "SLA Adherence", "Incident Triage"],
  },
  {
    id: "majorel",
    role: "Resource Coordinator (Microsoft EMEA Operations)",
    company: "Majorel",
    location: "Brașov, Romania",
    period: "Feb 2018 – Dec 2021",
    focus: "End-to-end technical engagement lifecycle, dispatch management, and queue optimization for Microsoft service lines.",
    color: "primary",
    highlights: [
      "Governed the end-to-end service engagement lifecycle for enterprise resource requests across Microsoft EMEA service portfolios, reviewing, validating, and approving technical allocations against project criteria.",
      "Administered dedicated Microsoft Dashboard applications to monitor real-time queue capacity, balance workload distribution, and track engineer availability across diverse service disciplines.",
      "Analyzed technical competency matrices to match specialized engineering talent with high-impact customer escalations, ensuring rapid deployment and contract SLA compliance.",
      "Served as a senior operational point of contact for staffing and assignment escalations, collaborating cross-regionally with Microsoft project leads across the EMEA theatre.",
    ],
    tags: ["Microsoft EMEA", "Queue Optimization", "Capacity Management", "SLA Governance", "Technical Escalations"],
  },
  {
    id: "arvato",
    role: "Technical Support Specialist (Bolt Application)",
    company: "Arvato Bertelsmann",
    location: "Brașov, Romania",
    period: "Feb 2019 – Feb 2020",
    focus: "Front-line technical support, application troubleshooting, account provisioning, and incident escalation.",
    color: "cyan",
    highlights: [
      "Provided end-to-end technical and customer support for the Bolt mobile and web platform, investigating and resolving application glitches, route-tracking anomalies, and billing/ticket discrepancies.",
      "Troubleshot user account, onboarding, and registration issues, guiding drivers and riders through app configuration, permissions, and network-related connectivity troubleshooting.",
      "Managed multi-channel ticket queues in a fast-paced environment, meeting stringent first-contact resolution (FCR) and response time SLAs while maintaining superior CSAT scores.",
      "Documented reproducible software bugs and escalated edge cases to second-tier technical support and operations engineering adhering to standardized support runbooks.",
    ],
    tags: ["Bolt Platform", "Mobile & Web Support", "First-Contact Resolution", "Network Troubleshooting", "CSAT Optimization"],
  },
  {
    id: "freelance-dev",
    role: "Full-Stack & React Technical Support Specialist",
    company: "Freelance (Upwork & Fiverr)",
    location: "Remote",
    period: "Feb 2019 – Dec 2024",
    focus: "Tier 2/3 technical troubleshooting, front-end architecture, API integration debugging, and user onboarding.",
    color: "violet",
    highlights: [
      "Diagnosed, debugged, and resolved critical defects in complex JavaScript, TypeScript, React.js, and Node.js applications for international business clients.",
      "Conducted deep diagnostics using Chrome DevTools, network logs, and Postman to pinpoint and resolve API failures, CORS misconfigurations, JSON parsing defects, and state errors.",
      "Integrated RESTful web services and GraphQL endpoints with NoSQL/SQL databases (MongoDB, MySQL), ensuring robust error handling, validation, and data consistency.",
      "Provided responsive post-deployment technical support, writing clear setup guides and troubleshooting manuals to assist non-technical users and IT teams.",
    ],
    tags: ["React.js", "TypeScript", "Node.js", "Chrome DevTools", "Postman", "GraphQL", "MongoDB", "MySQL"],
  },
  {
    id: "ontv",
    role: "Production Accountant / Operations & Data Analyst",
    company: "Hawa Ltd (ONtv Network)",
    location: "Cairo, Egypt",
    period: "Aug 2008 – Feb 2017",
    focus: "Data reconciliation, workflow reporting automation, financial control, and process integrity.",
    color: "amber",
    highlights: [
      "Maintained precise operational expenditure records, executing monthly ledger reconciliations, balance sheet audits, and journal entries with zero discrepancy tolerances.",
      "Engineered advanced Microsoft Excel automation models leveraging Power Query, XLOOKUP, and dynamic Pivot Tables, accelerating monthly financial and operational close routines.",
    ],
    tags: ["Power Query", "Data Reconciliation", "Financial Control", "Excel Modeling", "Workflow Integrity"],
  },
];

export const TECHNICAL_PROJECTS: ProjectItem[] = [
  {
    id: "wbr-hub",
    title: "Enterprise WBR Reporting & Visualization Hub",
    tagline: "Automated Google Apps Script & Google Sheets Dashboard",
    category: "AI & Automation",
    description:
      "Engineered an automated data extraction and visualization utility that aggregates weekly performance metrics across content queues. Replaced manual spreadsheet updates with real-time KPI data feeds, reducing executive dashboard generation time by 75% and minimizing human reporting error.",
    metrics: "75% Reduction in Cycle Time",
    technologies: ["Google Apps Script", "Google Sheets API", "Google Sites", "JavaScript ES6+", "Webhooks"],
    features: [
      "Real-time aggregation from multi-source operational queues",
      "Automated visual chart generation for C-suite reviews",
      "Zero-latency intake form sync with operational Google Sites",
      "Automated anomaly and SLA threshold warning triggers",
    ],
    icon: "BarChart3",
  },
  {
    id: "redux-debugger",
    title: "Full-Stack Application Diagnostics & Redux State Debugging",
    tagline: "High-Performance Web Portal Architecture & State Caching",
    category: "Diagnostics & Web",
    description:
      "Diagnosed and resolved race conditions, memory leaks, and serialization errors in dynamic web portals. Implemented client-side caching and standard HTTP error interceptors, decreasing customer-reported incident tickets by 40% across deployed environments.",
    metrics: "40% Drop in Customer Incident Tickets",
    technologies: ["React.js", "Redux Toolkit", "Node.js", "REST APIs", "Postman", "Chrome DevTools"],
    features: [
      "Interceptor-based centralized HTTP error handling",
      "Memory leak elimination and render optimization",
      "Structured Postman test collections for regression checks",
      "Clear onboarding documentation for client engineering teams",
    ],
    icon: "Cpu",
  },
  {
    id: "vibe-agentic-suite",
    title: "Vibe-Coded Next.js & AI Incident Triage Engine",
    tagline: "Modern AI-Assisted Automated Ticket Classifier & SOP Generator",
    category: "AI & Automation",
    description:
      "Rapidly prototyped and deployed using Claude 3.7 Sonnet and Cursor AI Composer. Features real-time prompt-driven incident categorization, 5-Why root cause analysis scaffolding, and automated runbook generation for enterprise support desks.",
    metrics: "10x Faster Time-to-Deployment",
    technologies: ["Next.js 15", "Claude 3.7 API", "Cursor AI", "Tailwind CSS", "TypeScript", "Antigravity"],
    features: [
      "Prompt-driven automatic ticket categorization into Tier 1/2/3",
      "Instant 5-Why RCA root cause report synthesizer",
      "Interactive code and API response tester",
      "Direct WhatsApp and Webhook dispatching",
    ],
    icon: "Sparkles",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "Lean Certification (Digital Transformation)",
    issuer: "Genpact",
    date: "Issued 2026",
    credentialId: "2623686",
    description: "Continuous improvement, Value Stream Mapping (VSM), Root Cause Analysis (RCA), operational waste elimination.",
    badgeColor: "border-emerald-500/40 text-emerald-400 bg-emerald-950/20",
    iconType: "lean",
  },
  {
    name: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "Issued 2026",
    description: "AI model concepts, prompt optimization, workflow synthesis, foundation model operations, and Claude reasoning pipelines.",
    badgeColor: "border-amber-500/40 text-amber-400 bg-amber-950/20",
    iconType: "ai",
  },
  {
    name: "Modern Web Development Bootcamp (Full-Stack)",
    issuer: "Udemy",
    date: "Full-Stack Web Development",
    description: "REST architecture, Node.js backend runtimes, database schemas, full lifecycle deployment.",
    badgeColor: "border-cyan-500/40 text-cyan-400 bg-cyan-950/20",
    iconType: "code",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Issued Dec 2021",
    description: "Algorithm design, complex data structures, algorithmic debugging, ES6+ standards.",
    badgeColor: "border-yellow-500/40 text-yellow-400 bg-yellow-950/20",
    iconType: "js",
  },
  {
    name: "ReactJS, Redux & React Router Architecture",
    issuer: "Udemy",
    date: "Issued 2021",
    description: "State management diagnostics, component lifecycle optimization, SPA architecture.",
    badgeColor: "border-blue-500/40 text-blue-400 bg-blue-950/20",
    iconType: "react",
  },
  {
    name: "JavaScript: Understanding the Weird Parts",
    issuer: "Udemy",
    date: "Advanced JS Engine Internals",
    description: "Execution contexts, closures, prototypal inheritance, asynchronous event loops.",
    badgeColor: "border-purple-500/40 text-purple-400 bg-purple-950/20",
    iconType: "code",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor's Degree in Commerce",
    institution: "Ain Shams University",
    location: "Cairo, Egypt",
    period: "2006 – 2010",
    focus: "Business Operations, Accounting Standards, and Financial Systems.",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Advanced Technical School for IT",
    location: "Cairo, Egypt",
    period: "2000 – 2005",
    focus: "Foundations in computer hardware, networking concepts, OS, and systems logic.",
  },
];

export const LANGUAGES = [
  { name: "Arabic", level: "Native / Bilingual Proficiency", progress: 100 },
  { name: "English", level: "Full Professional Working Proficiency (Technical & Client-Facing)", progress: 95 },
  { name: "German", level: "Elementary Proficiency (A1/A2)", progress: 40 },
];

export const TECH_SKILLS = {
  "Vibe Coding & AI Tools": [
    "Claude 3.7 Sonnet",
    "Cursor AI Composer",
    "Google Antigravity",
    "Agentic Workflows",
    "Prompt Engineering",
    "GitHub Copilot",
    "v0 / Bolt Prototyping",
    "Anthropic AI Foundations",
  ],
  "Enterprise Support & Incident Lifecycle": [
    "Tier 1/2/3 Technical Support",
    "Root Cause Analysis (RCA / 5-Why)",
    "Incident & Problem Management",
    "SLA & KPI Adherence",
    "Ticket Triage & Prioritization",
    "Queue Dispatching",
    "Escalation Management",
    "Microsoft Resource Tools",
  ],
  "Web Technologies & Scripting": [
    "Next.js 15",
    "React.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "GraphQL",
    "Google Apps Script",
    "HTML5 & Tailwind CSS",
    "JSON & Webhooks",
  ],
  "Diagnostics, Databases & Tooling": [
    "Chrome DevTools",
    "Postman (API Debugging)",
    "Git & GitHub",
    "MySQL",
    "MongoDB",
    "Advanced Excel (Power Query, XLOOKUP)",
    "Microsoft 365",
  ],
  "Continuous Improvement & Lean Practices": [
    "Lean Digital Transformation",
    "Value Stream Mapping (VSM)",
    "Workflow Waste Reduction",
    "Process SOPs & Kaizen",
    "Technical KB Documentation",
  ],
};
