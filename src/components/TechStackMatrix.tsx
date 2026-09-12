"use client";

import React, { useState } from "react";
import {
  Layers,
  Sparkles,
  CheckCircle2,
  Search,
  ArrowRight,
  ExternalLink,
  Shield,
  Activity,
  Cpu,
  Terminal,
  Zap,
  Check,
  X,
  Info,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface TechItem {
  id: string;
  skill: string;
  category: string;
  tag: string;
  level: string;
  color: string;
  iconType: string;
  experience: string;
  useCase: string;
  productionImpact: string;
}

export default function TechStackMatrix() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalItem, setActiveModalItem] = useState<TechItem | null>(null);

  const techSkillsList: TechItem[] = [
    // Vibe Coding & AI Tools
    {
      id: "claude",
      skill: "Claude 3.7 Sonnet",
      category: "AI & Vibe Coding",
      tag: "Extended Thinking & Artifacts",
      level: "Mastery",
      color: "#FF6B35",
      iconType: "claude",
      experience: "2+ Years Daily Architecture",
      useCase: "Complex multi-step architectural code synthesis, prompt chaining, automated RCA generation, and refactoring large codebases.",
      productionImpact: "Reduced system prototyping cycles from days to under 45 minutes.",
    },
    {
      id: "cursor",
      skill: "Cursor AI Composer",
      category: "AI & Vibe Coding",
      tag: "Multi-File Autonomous Agent",
      level: "Mastery",
      color: "#D4FF00",
      iconType: "cursor",
      experience: "Daily Primary IDE",
      useCase: "End-to-end full-stack modifications across frontend, backend, and configuration layers using prompt-driven context graphs.",
      productionImpact: "Delivered complex multi-file features with 10x engineering velocity and strict zero-regression testing.",
    },
    {
      id: "antigravity",
      skill: "Google Antigravity",
      category: "AI & Vibe Coding",
      tag: "Agentic IDE & Subagent Swarms",
      level: "Expert",
      color: "#4285F4",
      iconType: "antigravity",
      experience: "Advanced Agentic Engineering",
      useCase: "Orchestrating autonomous subagent swarms for parallel code auditing, automated test generation, and deep workspace refactoring.",
      productionImpact: "Automated end-to-end regression sweeps and high-fidelity code migrations with verified sandbox executions.",
    },
    {
      id: "prompt",
      skill: "Prompt Engineering & Chaining",
      category: "AI & Vibe Coding",
      tag: "RCA, XML Tags & Context Control",
      level: "Expert",
      color: "#D4FF00",
      iconType: "prompt",
      experience: "3+ Years Active Practice",
      useCase: "Structuring multi-turn reasoning prompts, system instruction engineering, few-shot examples, and strict schema output generation.",
      productionImpact: "Achieved deterministic structured outputs with 99.8% schema validity across enterprise workflows.",
    },
    {
      id: "copilot",
      skill: "GitHub Copilot",
      category: "AI & Vibe Coding",
      tag: "Pair Programming & Inline Autocomplete",
      level: "Advanced",
      color: "#E2E4EA",
      iconType: "copilot",
      experience: "3+ Years",
      useCase: "Real-time TypeScript inline completions, unit test scaffolding, and regex generation directly inside editor contexts.",
      productionImpact: "Accelerated boilerplate typing by 40% across large React and Node repositories.",
    },
    {
      id: "bolt",
      skill: "v0 & Bolt.new",
      category: "AI & Vibe Coding",
      tag: "Rapid Component & UI Synthesis",
      level: "Advanced",
      color: "#FF6B35",
      iconType: "bolt",
      experience: "1.5+ Years",
      useCase: "Instant interactive UI prototyping, Tailwind token generation, and rapid customer mockups.",
      productionImpact: "Allowed stakeholders to test live interactive prototypes within 1 hour of initial requirement intake.",
    },
    {
      id: "anthropic",
      skill: "Anthropic AI Foundations",
      category: "AI & Vibe Coding",
      tag: "Certified Practitioner 2026",
      level: "Certified",
      color: "#FF6B35",
      iconType: "anthropic",
      experience: "Certified 2026",
      useCase: "Claude API tool use, Constitutional AI alignment principles, context window optimization, and prompt caching strategies.",
      productionImpact: "Engineered cost-efficient token caching architectures cutting API overhead by up to 60%.",
    },

    // Web Technologies & Frameworks
    {
      id: "nextjs",
      skill: "Next.js 15 (App Router)",
      category: "Web & Full-Stack",
      tag: "Server Components & Turbo",
      level: "Expert",
      color: "#FFFFFF",
      iconType: "nextjs",
      experience: "4+ Years Full-Stack Next.js",
      useCase: "Building performant enterprise web applications with React Server Components, Server Actions, Dynamic Metadata, and Edge Routing.",
      productionImpact: "Consistently achieves 98+ Google Lighthouse performance benchmarks with sub-second LCP scores.",
    },
    {
      id: "react",
      skill: "React.js (18 / 19)",
      category: "Web & Full-Stack",
      tag: "Hooks, Context & Suspense",
      level: "Expert (5+ Yrs)",
      color: "#61DAFB",
      iconType: "react",
      experience: "5+ Years Continuous Dev",
      useCase: "Developing reactive component architectures, custom hooks, complex form systems, and dynamic telemetry dashboards.",
      productionImpact: "Maintained robust state stability across 100k+ monthly active enterprise portals.",
    },
    {
      id: "typescript",
      skill: "TypeScript",
      category: "Web & Full-Stack",
      tag: "Strict Mode & Generics",
      level: "Expert",
      color: "#3178C6",
      iconType: "typescript",
      experience: "4+ Years Strict Typing",
      useCase: "Architecting strongly-typed schemas, interface hierarchies, API contracts, and utility types for zero runtime null-pointer defects.",
      productionImpact: "Prevented over 40% of standard frontend runtime regressions during continuous integration.",
    },
    {
      id: "javascript",
      skill: "JavaScript (ES6+ / Modern)",
      category: "Web & Full-Stack",
      tag: "Event Loop, Async & DOM",
      level: "Expert (5+ Yrs)",
      color: "#F7DF1E",
      iconType: "javascript",
      experience: "5+ Years",
      useCase: "Deep understanding of browser rendering engines, microtask queues, closure mechanics, and Web APIs.",
      productionImpact: "Authored high-efficiency client-side telemetry utilities processing thousands of events per session.",
    },
    {
      id: "nodejs",
      skill: "Node.js",
      category: "Web & Full-Stack",
      tag: "Asynchronous I/O & Microservices",
      level: "Expert",
      color: "#5FA04E",
      iconType: "nodejs",
      experience: "4+ Years",
      useCase: "Building robust REST endpoints, webhook listeners, background batch workers, and authentication middleware.",
      productionImpact: "Supported high-throughput JSON ingestion pipelines processing live telemetry records.",
    },
    {
      id: "express",
      skill: "Express.js",
      category: "Web & Full-Stack",
      tag: "RESTful Routing & Middleware",
      level: "Advanced",
      color: "#E2E4EA",
      iconType: "express",
      experience: "4+ Years",
      useCase: "Constructing modular API routers, rate-limiting layers, JWT validation, and CORS policies.",
      productionImpact: "Delivered scalable API backends with 99.9% uptime across production endpoints.",
    },
    {
      id: "graphql",
      skill: "GraphQL",
      category: "Web & Full-Stack",
      tag: "Queries, Mutations & Apollo",
      level: "Advanced",
      color: "#E10098",
      iconType: "graphql",
      experience: "2+ Years",
      useCase: "Building declarative query schemas, resolving entity graphs, and eliminating over-fetching on mobile networks.",
      productionImpact: "Reduced mobile network payload size by 50% compared to legacy flat REST endpoints.",
    },
    {
      id: "api",
      skill: "RESTful APIs & Webhooks",
      category: "Web & Full-Stack",
      tag: "HTTP Protocol & Payload Interceptors",
      level: "Expert",
      color: "#D4FF00",
      iconType: "api",
      experience: "5+ Years",
      useCase: "Debugging broken network requests, payload mutations, status code discrepancies, and idempotent retry policies.",
      productionImpact: "Diagnosed and resolved critical tier-3 webhook failures for Microsoft EMEA partner integrations.",
    },
    {
      id: "tailwind",
      skill: "Tailwind CSS",
      category: "Web & Full-Stack",
      tag: "Utility-First & Bespoke Design Systems",
      level: "Expert",
      color: "#38BDF8",
      iconType: "tailwind",
      experience: "4+ Years",
      useCase: "Crafting fluid responsive layouts, dark/light themes, custom CSS variable tokens, and micro-interactions.",
      productionImpact: "Built award-winning, responsive editorial interfaces with sub-15KB bundle footprint.",
    },
    {
      id: "redux",
      skill: "Redux Toolkit & Zustand",
      category: "Web & Full-Stack",
      tag: "Immutable State & Middleware",
      level: "Expert",
      color: "#764ABC",
      iconType: "redux",
      experience: "4+ Years",
      useCase: "Managing complex multi-tab global client states, optimistic updates, and normalized entity adapters.",
      productionImpact: "Eliminated race conditions and UI synchronization state drift across enterprise workflows.",
    },

    // Diagnostics, Databases & Cloud
    {
      id: "postman",
      skill: "Postman API Platform",
      category: "Diagnostics & Databases",
      tag: "Automated Test Suites & Mock Servers",
      level: "Expert",
      color: "#FF6C37",
      iconType: "postman",
      experience: "5+ Years Daily Diagnostic",
      useCase: "Developing comprehensive integration test collections, pre-request auth scripts, environment variables, and CI runs.",
      productionImpact: "Streamlined tier-2 API escalation turnaround times from 4 hours to under 20 minutes.",
    },
    {
      id: "devtools",
      skill: "Chrome DevTools",
      category: "Diagnostics & Databases",
      tag: "Network, Performance & Memory Profiling",
      level: "Expert",
      color: "#4285F4",
      iconType: "devtools",
      experience: "5+ Years",
      useCase: "Identifying memory leaks, blocking main-thread tasks, inspecting HAR files, and analyzing WebSocket frame drops.",
      productionImpact: "Pinpointed frontend DOM memory leaks that previously crashed agent support consoles during 8-hour shifts.",
    },
    {
      id: "git",
      skill: "Git & GitHub CI/CD",
      category: "Diagnostics & Databases",
      tag: "Branch Governance & Actions",
      level: "Expert",
      color: "#F05032",
      iconType: "git",
      experience: "5+ Years",
      useCase: "Branch strategies (Trunk-based / GitFlow), resolving merge conflicts, crafting GitHub Actions automation workflows.",
      productionImpact: "Maintained clean repository commit histories with automated build & lint enforcement.",
    },
    {
      id: "mysql",
      skill: "MySQL & Relational SQL",
      category: "Diagnostics & Databases",
      tag: "Complex Joins, Indexes & Transactions",
      level: "Advanced",
      color: "#4479A1",
      iconType: "mysql",
      experience: "4+ Years",
      useCase: "Designing relational database schemas, writing optimized multi-table JOIN queries, and diagnosing slow query logs.",
      productionImpact: "Optimized reporting query response times from 12 seconds down to 400 milliseconds.",
    },
    {
      id: "mongodb",
      skill: "MongoDB & NoSQL",
      category: "Diagnostics & Databases",
      tag: "Aggregation Pipelines & Document Schemas",
      level: "Advanced",
      color: "#47A248",
      iconType: "mongodb",
      experience: "3+ Years",
      useCase: "Modeling unstructured telemetry logs, indexing compound query fields, and building real-time analytics aggregations.",
      productionImpact: "Enabled real-time ticket triage logs with sub-50ms query response on multi-million document collections.",
    },
    {
      id: "microsoft",
      skill: "Microsoft 365 & Azure Portals",
      category: "Diagnostics & Databases",
      tag: "Enterprise Admin & Escalations",
      level: "Expert",
      color: "#0078D4",
      iconType: "microsoft",
      experience: "3+ Years (Microsoft EMEA)",
      useCase: "Managing enterprise tenant configurations, user licensing, SSO identity governance, and high-priority escalation queues.",
      productionImpact: "Delivered 99.4% SLA adherence across critical European customer service engagements.",
    },
    {
      id: "excel",
      skill: "Advanced Excel (Power Query)",
      category: "Diagnostics & Databases",
      tag: "XLOOKUP, Dynamic Arrays & Pivot Hubs",
      level: "Expert",
      color: "#107C41",
      iconType: "excel",
      experience: "5+ Years",
      useCase: "Building complex operational models, automated ETL data transformations, and executive WBR dashboards.",
      productionImpact: "Automated multi-department operational metrics consolidation saving 10+ hours per week.",
    },

    // Enterprise Support & Lean Practices
    {
      id: "support",
      skill: "Tier 1/2/3 Support Lifecycle",
      category: "Support & Lean",
      tag: "Incident Command & SLA Enforcement",
      level: "Mastery",
      color: "#D4FF00",
      iconType: "support",
      experience: "5+ Years Enterprise Track Record",
      useCase: "Leading critical incident triage, customer de-escalation, priority matrix assignment, and cross-functional engineering dispatch.",
      productionImpact: "Maintained 99.4% SLA turnaround with highest customer satisfaction (CSAT) rating on team.",
    },
    {
      id: "rca",
      skill: "5-Why Root Cause Analysis (RCA)",
      category: "Support & Lean",
      tag: "Systemic Defect Elimination",
      level: "Mastery",
      color: "#FF6B35",
      iconType: "rca",
      experience: "Lean Certified Practitioner",
      useCase: "Investigating systemic software breakdowns beyond surface symptoms to institute permanent architectural preventions.",
      productionImpact: "Drove a 40% reduction in recurring incident recurrence across supported service modules.",
    },
    {
      id: "lean",
      skill: "Lean Digital Transformation",
      category: "Support & Lean",
      tag: "Genpact Certified ID: 2623686",
      level: "Certified",
      color: "#D4FF00",
      iconType: "lean",
      experience: "Genpact Lean 2026",
      useCase: "Eliminating waste (Muda), standardizing standard operating procedures (SOP), and implementing Kaizen continuous improvement.",
      productionImpact: "Streamlined operational handover bottlenecks across cross-regional EMEA shifts.",
    },
    {
      id: "vsm",
      skill: "Value Stream Mapping (VSM)",
      category: "Support & Lean",
      tag: "Process Optimization & Bottleneck Removal",
      level: "Expert",
      color: "#D4FF00",
      iconType: "vsm",
      experience: "Certified Methodology",
      useCase: "Mapping end-to-end incident lifecycles to isolate wait states, redundant handoffs, and resource misallocations.",
      productionImpact: "Decreased mean-time-to-resolution (MTTR) by 35% through streamlined escalation routing.",
    },
    {
      id: "appscript",
      skill: "Google Apps Script Automation",
      category: "Support & Lean",
      tag: "75% WBR Time Saved & Auto Sync",
      level: "Expert",
      color: "#34A853",
      iconType: "appscript",
      experience: "4+ Years Automation",
      useCase: "Writing serverless automation scripts connecting Google Sheets, Forms, Gmail triggers, and Slack/Teams webhooks.",
      productionImpact: "Cut Weekly Business Review (WBR) reporting compilation time by 75% for Genpact operations.",
    },
    {
      id: "dispatch",
      skill: "Microsoft EMEA Resource Dispatch",
      category: "Support & Lean",
      tag: "Majorel Cross-Border Operations",
      level: "Proven",
      color: "#0078D4",
      iconType: "dispatch",
      experience: "Majorel Operations",
      useCase: "Coordinating technical dispatch queues, field engineers, and critical parts logistics across European regions.",
      productionImpact: "Ensured 100% compliance with strict international enterprise contract timelines.",
    },
  ];

  const categories = ["All", "AI & Vibe Coding", "Web & Full-Stack", "Diagnostics & Databases", "Support & Lean"];

  const filteredSkills = techSkillsList.filter((item) => {
    const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Render high-fidelity branded SVG logos with glowing details
  const renderTechLogo = (type: string, color: string) => {
    switch (type) {
      case "claude":
      case "anthropic":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#FF6B35" fillOpacity="0.2" stroke="#FF6B35" strokeWidth="1.5" />
            <path d="M12 3.5l2.2 5.5 5.8 1.8-4.8 3.8 1.4 6-4.6-3.2-4.6 3.2 1.4-6-4.8-3.8 5.8-1.8L12 3.5z" fill="#FF6B35" />
          </svg>
        );
      case "cursor":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#D4FF00" fillOpacity="0.2" stroke="#D4FF00" strokeWidth="1.5" />
            <path d="M6 5l13 7-7 2-2 6-4-15z" fill="#D4FF00" stroke="#000000" strokeWidth="1" />
            <circle cx="17" cy="18" r="2.5" fill="#D4FF00" />
          </svg>
        );
      case "antigravity":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="#4285F4" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4.5" fill="#4285F4" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#4285F4" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="18" cy="6" r="1.5" fill="#D4FF00" />
          </svg>
        );
      case "prompt":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#161920" stroke="#D4FF00" strokeWidth="1.5" />
            <path d="M6 8l4 4-4 4M12 16h6" stroke="#D4FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "copilot":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#FFFFFF" fillOpacity="0.1" stroke="#E2E4EA" strokeWidth="1.5" />
            <path d="M7 10c0-2.8 2.2-5 5-5s5 2.2 5 5v5a3 3 0 01-3 3h-4a3 3 0 01-3-3v-5z" stroke="#E2E4EA" strokeWidth="1.5" />
            <circle cx="10" cy="11" r="1" fill="#E2E4EA" />
            <circle cx="14" cy="11" r="1" fill="#E2E4EA" />
          </svg>
        );
      case "bolt":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#FF6B35" fillOpacity="0.15" stroke="#FF6B35" strokeWidth="1.5" />
            <path d="M13 2L4 14h7v8l9-12h-7V2z" fill="#FF6B35" />
          </svg>
        );
      case "nextjs":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#000000" stroke="#FFFFFF" strokeWidth="1.6" />
            <path d="M8 8v8l8.5-8.5V16" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 15l2 2" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        );
      case "react":
        return (
          <svg className="w-6 h-6 animate-spin-slow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
          </svg>
        );
      case "typescript":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="5" fill="#3178C6" />
            <path d="M4 8h8M8 8v10M13.5 15.5c.8.8 2 1 3 .5 1-.6 1-1.8.2-2.5l-2-1.5c-1.2-1-1-2.8.5-3.5 1.5-.7 3.3 0 3.8 1.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "javascript":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="5" fill="#F7DF1E" />
            <path d="M7 11v5c0 1.5.5 2.5 2 2.5s2-.5 2-2.5v-3M13.5 15.5c.8.8 2 1 3 .5 1-.6 1-1.8.2-2.5l-2-1.5c-1.2-1-1-2.8.5-3.5 1.5-.7 3.3 0 3.8 1.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "nodejs":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l8.5 4.9v9.8L12 21.6 3.5 16.7V6.9L12 2z" fill="#5FA04E" fillOpacity="0.25" stroke="#5FA04E" strokeWidth="1.6" />
            <path d="M12 7v10M8.5 9.5l7 4M15.5 9.5l-7 4" stroke="#5FA04E" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        );
      case "express":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#161920" stroke="#E2E4EA" strokeWidth="1.5" />
            <text x="5" y="16" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="monospace">ex</text>
            <circle cx="18" cy="12" r="2" fill="#D4FF00" />
          </svg>
        );
      case "graphql":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" stroke="#E10098" strokeWidth="1.6" fill="none" />
            <polygon points="12,6 18,9.5 18,14.5 12,18 6,14.5 6,9.5" stroke="#E10098" strokeWidth="1.2" fill="#E10098" fillOpacity="0.2" />
            <circle cx="12" cy="2" r="1.5" fill="#E10098" />
            <circle cx="21" cy="7" r="1.5" fill="#E10098" />
            <circle cx="21" cy="17" r="1.5" fill="#E10098" />
            <circle cx="12" cy="22" r="1.5" fill="#E10098" />
            <circle cx="3" cy="17" r="1.5" fill="#E10098" />
            <circle cx="3" cy="7" r="1.5" fill="#E10098" />
          </svg>
        );
      case "api":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#D4FF00" fillOpacity="0.15" stroke="#D4FF00" strokeWidth="1.5" />
            <circle cx="7" cy="12" r="2.5" fill="#D4FF00" />
            <circle cx="17" cy="7" r="2.5" fill="#D4FF00" />
            <circle cx="17" cy="17" r="2.5" fill="#D4FF00" />
            <path d="M9 12h3m0 0l3-4m-3 4l3 4" stroke="#D4FF00" strokeWidth="1.8" />
          </svg>
        );
      case "tailwind":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#38BDF8" fillOpacity="0.15" stroke="#38BDF8" strokeWidth="1.5" />
            <path d="M6 12c1.5-3 3.5-3 5-1.5s2.5 2.5 4 1.5 2-3 4-3c-1.5 3-3.5 3-5 1.5s-2.5-2.5-4-1.5-2 3-4 3.5z" fill="#38BDF8" />
          </svg>
        );
      case "redux":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#764ABC" fillOpacity="0.15" stroke="#764ABC" strokeWidth="1.5" />
            <path d="M12 6a6 6 0 100 12 6 6 0 000-12z" stroke="#764ABC" strokeWidth="1.6" strokeDasharray="3 3" />
            <circle cx="12" cy="12" r="3" fill="#764ABC" />
          </svg>
        );
      case "postman":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#FF6C37" fillOpacity="0.2" stroke="#FF6C37" strokeWidth="1.6" />
            <circle cx="12" cy="10" r="4.5" fill="#FF6C37" />
            <path d="M6 18c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#FF6C37" strokeWidth="1.8" />
            <path d="M12 2v2M12 20v2" stroke="#FF6C37" strokeWidth="1.5" />
          </svg>
        );
      case "devtools":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9.5" stroke="#4285F4" strokeWidth="1.6" />
            <path d="M12 7v5l3.5 3.5" stroke="#34A853" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="12" cy="12" r="2" fill="#FBBC05" />
            <circle cx="12" cy="4" r="1" fill="#EA4335" />
          </svg>
        );
      case "git":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="5" fill="#F05032" fillOpacity="0.2" stroke="#F05032" strokeWidth="1.5" />
            <circle cx="8" cy="16" r="2" fill="#F05032" />
            <circle cx="16" cy="8" r="2" fill="#F05032" />
            <circle cx="8" cy="8" r="2" fill="#F05032" />
            <path d="M8 10v4M8 10c0-1 4-1 4-2" stroke="#F05032" strokeWidth="1.8" />
          </svg>
        );
      case "mysql":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#4479A1" strokeWidth="1.6" fill="#4479A1" fillOpacity="0.2" />
            <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" stroke="#4479A1" strokeWidth="1.6" />
          </svg>
        );
      case "mongodb":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C10 6 7 10 7 14c0 3.3 2.2 6 5 6s5-2.7 5-6c0-4-3-8-5-12z" fill="#47A248" fillOpacity="0.25" stroke="#47A248" strokeWidth="1.6" />
            <path d="M12 2v18" stroke="#47A248" strokeWidth="1.6" />
          </svg>
        );
      case "microsoft":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="8" height="8" fill="#F25022" />
            <rect x="13" y="3" width="8" height="8" fill="#7FBA00" />
            <rect x="3" y="13" width="8" height="8" fill="#00A4EF" />
            <rect x="13" y="13" width="8" height="8" fill="#FFB900" />
          </svg>
        );
      case "excel":
      case "appscript":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="4" fill="#107C41" fillOpacity="0.25" stroke="#107C41" strokeWidth="1.6" />
            <path d="M7 8h10M7 12h10M7 16h6" stroke="#107C41" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case "support":
      case "dispatch":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L4 5v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V5l-8-3z" fill="#D4FF00" fillOpacity="0.15" stroke="#D4FF00" strokeWidth="1.6" />
            <path d="M9 12l2 2 4-4" stroke="#D4FF00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "rca":
      case "lean":
      case "vsm":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="#FF6B35" strokeWidth="1.6" fill="#FF6B35" fillOpacity="0.15" />
            <circle cx="12" cy="12" r="5" stroke="#FF6B35" strokeWidth="1.6" />
            <circle cx="12" cy="12" r="2" fill="#FF6B35" />
          </svg>
        );
      default:
        return (
          <div className="w-6 h-6 rounded-lg bg-[#161920] border border-white/10 flex items-center justify-center text-[#d4ff00]">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        );
    }
  };

  const marqueeTechnologies = [
    { name: "Claude 3.7", icon: "claude", color: "#FF6B35" },
    { name: "Cursor AI", icon: "cursor", color: "#D4FF00" },
    { name: "Next.js 15", icon: "nextjs", color: "#FFFFFF" },
    { name: "React 19", icon: "react", color: "#61DAFB" },
    { name: "Google Antigravity", icon: "antigravity", color: "#4285F4" },
    { name: "TypeScript", icon: "typescript", color: "#3178C6" },
    { name: "Postman API", icon: "postman", color: "#FF6C37" },
    { name: "Genpact Lean", icon: "lean", color: "#D4FF00" },
    { name: "Node.js", icon: "nodejs", color: "#5FA04E" },
    { name: "Chrome DevTools", icon: "devtools", color: "#4285F4" },
    { name: "Tailwind CSS", icon: "tailwind", color: "#38BDF8" },
    { name: "5-Why RCA", icon: "rca", color: "#FF6B35" },
  ];

  return (
    <section id="tech-stack" className="relative py-24 bg-[#090b0e] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold acid-badge font-mono shadow-[0_0_20px_rgba(212,255,0,0.15)]">
            <Layers className="w-3.5 h-3.5 text-[#d4ff00]" />
            <span>{t("tech_badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f4ee] tracking-tight">
            {t("tech_title_prefix")}{" "}
            <span className="text-acid-gradient">{t("tech_title_highlight")}</span>
          </h2>
          <p className="text-[#8e94a0] text-base sm:text-lg leading-relaxed">
            {t("tech_desc")}
          </p>
        </div>

        {/* Continuous Animated Tech Marquee Strip */}
        <div className="mt-12 py-3 bg-[#111317]/80 border-y border-white/10 relative overflow-hidden backdrop-blur-md">
          <div className="flex w-max animate-marquee space-x-6 rtl:space-x-reverse items-center">
            {[...marqueeTechnologies, ...marqueeTechnologies].map((tech, idx) => (
              <div
                key={`marquee-${tech.name}-${idx}`}
                className="flex items-center gap-2.5 px-4 py-1.5 rounded-xl bg-[#161920] border border-white/10 hover:border-[#d4ff00] transition-colors"
              >
                <div className="shrink-0">{renderTechLogo(tech.icon, tech.color)}</div>
                <span className="text-xs font-mono font-bold text-[#f4f4ee]">{tech.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Filter & Search Controls */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#d4ff00] text-black font-bold shadow-[0_0_20px_rgba(212,255,0,0.35)] scale-105"
                    : "bg-[#111317] text-[#8e94a0] hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {cat === "All" ? t("tech_all") : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8e94a0]" />
            <input
              type="text"
              placeholder={t("tech_search_placeholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 rtl:pl-4 rtl:pr-9 pr-4 py-2 rounded-xl text-xs bg-[#111317] border border-white/10 text-[#f4f4ee] placeholder-[#8e94a0] focus:outline-none focus:border-[#d4ff00] transition-colors font-mono"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-xs text-[#8e94a0] hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Tech Grid with High-Fidelity Branded Cards & Interactive Triggers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {filteredSkills.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group p-5 rounded-2xl bg-[#111317] border border-white/10 hover:border-[#d4ff00]/60 transition-all duration-300 shadow-lg hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden cursor-pointer"
            >
              {/* Dynamic Glow Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: item.color || "#d4ff00" }}
              />

              <div>
                {/* Header Icon + Mastery Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#161920] border border-white/10 group-hover:scale-110 group-hover:border-[#d4ff00]/50 group-hover:shadow-[0_0_15px_rgba(212,255,0,0.2)] transition-all duration-300">
                    {renderTechLogo(item.iconType, item.color)}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-[#d4ff00] border border-white/10 font-bold tracking-wide">
                    {item.level}
                  </span>
                </div>

                {/* Skill Name & Tag */}
                <h4 className="text-base font-extrabold text-[#f4f4ee] group-hover:text-[#d4ff00] transition-colors leading-tight">
                  {item.skill}
                </h4>

                <p className="text-xs font-mono text-[#8e94a0] mt-1 line-clamp-1">
                  {item.tag}
                </p>
              </div>

              {/* Bottom Footer Details */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#8e94a0]">
                <span>{item.category}</span>
                <span className="text-[#d4ff00] flex items-center gap-1 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform font-bold">
                  <span>Inspect</span>
                  <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Count Indicator */}
        <div className="mt-8 text-center text-xs font-mono text-[#8e94a0]">
          <span>Displaying {filteredSkills.length} of {techSkillsList.length} verified technologies</span>
        </div>
      </div>

      {/* Interactive Tech Telemetry Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-lg bg-[#111317] border border-[#d4ff00]/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden hud-corner"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Indicator */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: activeModalItem.color || "#d4ff00" }}
            />

            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#161920] border border-white/15">
                  {renderTechLogo(activeModalItem.iconType, activeModalItem.color)}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#f4f4ee]">
                    {activeModalItem.skill}
                  </h3>
                  <p className="text-xs font-mono text-[#d4ff00]">
                    {activeModalItem.category} // {activeModalItem.tag}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-5 space-y-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#161920] border border-white/10 flex items-center justify-between">
                <span className="text-[#8e94a0]">PROFICIENCY & TENURE</span>
                <span className="text-[#d4ff00] font-bold">{activeModalItem.experience}</span>
              </div>

              <div className="space-y-1.5">
                <span className="text-[#8e94a0] uppercase tracking-wider text-[10px] block">
                  Enterprise Production Workflow
                </span>
                <p className="text-sm font-sans text-[#f4f4ee] leading-relaxed p-3.5 rounded-xl bg-[#161920] border border-white/10">
                  {activeModalItem.useCase}
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-[#8e94a0] uppercase tracking-wider text-[10px] block">
                  Proven Production Impact
                </span>
                <p className="text-sm font-sans text-[#d4ff00] font-semibold leading-relaxed p-3.5 rounded-xl bg-[#d4ff00]/10 border border-[#d4ff00]/30">
                  ⚡ {activeModalItem.productionImpact}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2 rounded-xl bg-[#d4ff00] text-black font-bold text-xs hover:bg-[#e0ff33] transition-colors cursor-pointer"
              >
                Close Telemetry
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
