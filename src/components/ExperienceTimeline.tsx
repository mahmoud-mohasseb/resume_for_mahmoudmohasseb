"use client";

import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2,
  Building,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceTimeline() {
  const { t, language } = useLanguage();
  const [expandedId, setExpandedId] = useState<string>("genpact");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  const experiencesData = [
    {
      id: "genpact",
      role: language === "ar" ? "أخصائي عمليات المحتوى ومبتكر منهجية Lean" : language === "ro" ? "Content Operations Specialist & Lean Innovator" : language === "de" ? "Content Operations Specialist & Lean Innovator" : "Content Operations Specialist & Lean Innovator",
      company: "Genpact",
      location: "Bucharest, Romania",
      period: "Feb 2024 – Present",
      focus: language === "ar" 
        ? "مراجعة الحوادث عالية الحجم، الامتثال للسياسات، أتمتة عمليات Lean، وموثوقية المنصات تحت معايير SLA صارمة."
        : language === "ro"
        ? "Incident-Review pentru platforme video, guvernanță de conformitate, automatizări Lean și fiabilitatea platformelor sub SLA-uri stricte."
        : language === "de"
        ? "Incident-Review für Großplattformen, Richtlinien-Compliance, Lean-Prozessautomatisierung und Plattform-Zuverlässigkeit unter strengen SLAs."
        : "High-volume incident review, policy compliance, Lean process automation, and platform reliability under strict SLAs.",
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
      highlights: [
        "Maintained precise operational expenditure records, executing monthly ledger reconciliations, balance sheet audits, and journal entries with zero discrepancy tolerances.",
        "Engineered advanced Microsoft Excel automation models leveraging Power Query, XLOOKUP, and dynamic Pivot Tables, accelerating monthly financial and operational close routines.",
      ],
      tags: ["Power Query", "Data Reconciliation", "Financial Control", "Excel Modeling", "Workflow Integrity"],
    },
  ];

  return (
    <section id="experience" className="relative py-24 bg-[#08090b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold acid-badge font-mono">
            <Briefcase className="w-3.5 h-3.5 text-[#d4ff00]" />
            <span>{t("exp_badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f4ee] tracking-tight">
            {t("exp_title_prefix")}{" "}
            <span className="text-acid-gradient">{t("exp_title_highlight")}</span>
          </h2>
          <p className="text-[#8e94a0] text-base sm:text-lg">
            {t("exp_desc")}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="mt-14 max-w-4xl mx-auto space-y-6">
          {experiencesData.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isExpanded
                    ? "bg-[#111317] border-[#d4ff00]/40 shadow-2xl"
                    : "bg-[#0c0e12] border-white/10 hover:border-white/20"
                }`}
              >
                {/* Clickable Header */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-[#f4f4ee] hover:text-[#d4ff00] transition-colors">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#d4ff00]/10 text-[#d4ff00] border border-[#d4ff00]/30 font-mono">
                          {exp.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#8e94a0]">
                      <span className="flex items-center gap-1.5 text-[#f4f4ee] font-semibold">
                        <Building className="w-3.5 h-3.5 text-[#d4ff00]" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#8e94a0]" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-[#8e94a0]" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="text-xs font-mono text-[#8e94a0] hidden sm:inline">
                      {isExpanded ? t("exp_collapse_details") : t("exp_view_details")}
                    </span>
                    <button
                      className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                        isExpanded
                          ? "bg-[#d4ff00] text-black border-[#d4ff00]"
                          : "bg-white/5 text-[#8e94a0] border-white/10"
                      }`}
                      aria-label="Expand Experience"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/10 space-y-4 animate-in fade-in duration-200">
                    <div className="p-3.5 rounded-xl bg-[#161920] border border-white/5">
                      <p className="text-xs sm:text-sm text-[#f4f4ee] font-medium">
                        <strong className="text-[#d4ff00] font-mono">{t("exp_focus")}</strong> {exp.focus}
                      </p>
                    </div>

                    <div className="space-y-2.5">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#8e94a0]">
                        {t("exp_deliverables")}
                      </h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#f4f4ee]">
                            <CheckCircle2 className="w-4 h-4 text-[#d4ff00] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161920] text-[#8e94a0] border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
