"use client";

import React, { useState } from "react";
import {
  BarChart3,
  Cpu,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Terminal,
  Play,
  Layers,
  Code,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

import TiltCard from "@/components/TiltCard";

export default function InteractiveProjectsSection() {
  const { t, language } = useLanguage();
  const [selectedTicketIdx, setSelectedTicketIdx] = useState<number>(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const projectsData = [
    {
      id: "wbr-hub",
      icon: BarChart3,
      title: "Enterprise WBR Reporting & Visualization Hub",
      tagline: "Automated Google Apps Script & Google Sheets Dashboard",
      description: language === "ar"
        ? "تصميم وتطوير أداة استخراج وعرض بيانات مؤتمتة تجمع مؤشرات الأداء الأسبوعية عبر طوابير المحتوى، مما قلل وقت إعداد تقارير الإدارة بنسبة 75% وألغى الأخطاء البشرية."
        : language === "ro"
        ? "Proiectarea unui utilitar automat de extragere și vizualizare a datelor KPI care a redus timpul de generare a rapoartelor executive cu 75%."
        : language === "de"
        ? "Entwicklung eines automatisierten Datenextraktions- und Visualisierungs-Tools zur Aggregation wöchentlicher Leistungskennzahlen mit 75% Zeitersparnis."
        : "Engineered an automated data extraction and visualization utility that aggregates weekly performance metrics across content queues. Replaced manual spreadsheet updates with real-time KPI data feeds, reducing executive dashboard generation time by 75% and minimizing human reporting error.",
      metrics: "75% Reduction in Cycle Time",
      technologies: ["Google Apps Script", "Google Sheets API", "Google Sites", "JavaScript ES6+", "Webhooks"],
      features: [
        "Real-time aggregation from multi-source operational queues",
        "Automated visual chart generation for C-suite reviews",
        "Zero-latency intake form sync with operational Google Sites",
        "Automated anomaly and SLA threshold warning triggers",
      ],
    },
    {
      id: "redux-debugger",
      icon: Cpu,
      title: "Full-Stack Application Diagnostics & Redux State Debugging",
      tagline: "High-Performance Web Portal Architecture & State Caching",
      description: language === "ar"
        ? "تشخيص وحل ظروف السباق وتسريبات الذاكرة في بوابات الويب المعقدة، مع تطبيق معترضات أخطاء HTTP والتخزين المؤقت مما خفض تذاكر المشكلات بنسبة 40%."
        : language === "ro"
        ? "Diagnosticarea și rezolvarea memory leaks-urilor și a problemelor de serializare Redux, scăzând tichetele de incidente cu 40%."
        : language === "de"
        ? "Diagnose und Behebung von Race Conditions und Speicherlecks. Implementierung von Client-Caching und HTTP-Interceptors senkte Incident-Tickets um 40%."
        : "Diagnosed and resolved race conditions, memory leaks, and serialization errors in dynamic web portals. Implemented client-side caching and standard HTTP error interceptors, decreasing customer-reported incident tickets by 40% across deployed environments.",
      metrics: "40% Drop in Incident Tickets",
      technologies: ["React.js", "Redux Toolkit", "Node.js", "REST APIs", "Postman", "Chrome DevTools"],
      features: [
        "Interceptor-based centralized HTTP error handling",
        "Memory leak elimination and render optimization",
        "Structured Postman test collections for regression checks",
        "Clear onboarding documentation for client engineering teams",
      ],
    },
    {
      id: "vibe-agentic-suite",
      icon: Sparkles,
      title: "Vibe-Coded Next.js & AI Incident Triage Engine",
      tagline: "Modern AI-Assisted Automated Ticket Classifier & SOP Generator",
      description: language === "ar"
        ? "تم تصميمه وتطويره بسرعة فائقة عبر Claude 3.7 و Cursor Composer، لتصنيف تذاكر الدعم الفني فورياً وتوليد تقارير 5-Why RCA وتشغيل التنبيهات عبر الواتساب والـ Webhooks."
        : language === "ro"
        ? "Prototipizat rapid prin Claude 3.7 și Cursor Composer pentru trierea inteligentă a incidentelor și generarea automată a analizelor 5-Why."
        : language === "de"
        ? "Schnell prototypisiert mit Claude 3.7 und Cursor Composer. Bietet automatisierte Incident-Kategorisierung, 5-Why-RCA-Generierung und direkte Benachrichtigungen."
        : "Rapidly prototyped and deployed using Claude 3.7 Sonnet and Cursor AI Composer. Features real-time prompt-driven incident categorization, 5-Why root cause analysis scaffolding, and automated runbook generation for enterprise support desks.",
      metrics: "10x Faster Time-to-Deployment",
      technologies: ["Next.js 15", "Claude 3.7 API", "Cursor AI", "Tailwind CSS", "TypeScript", "Antigravity"],
      features: [
        "Prompt-driven automatic ticket categorization into Tier 1/2/3",
        "Instant 5-Why RCA root cause report synthesizer",
        "Interactive code and API response tester",
        "Direct WhatsApp and Webhook dispatching",
      ],
    },
  ];

  const sampleTickets = [
    {
      title: "504 Gateway Timeout on checkout API under peak 400 req/sec",
      tier: "Tier 3 Critical",
      rca: "Database connection pool exhaustion due to missing connection release in async handler.",
      fix: "Implemented connection pooling with max 50 idle connections, query timeout guards, and client retry backoff in Node.js.",
      vibeTool: "Claude 3.7 Extended Thinking & Cursor Composer",
    },
    {
      title: "CORS Preflight Failure on Cross-Origin REST Webhook",
      tier: "Tier 2 High",
      rca: "Access-Control-Allow-Headers omitted custom 'X-API-Signature' header on OPTIONS preflight route.",
      fix: "Updated Express CORS middleware with explicit allowedHeaders array and OPTIONS preflight caching header.",
      vibeTool: "Postman & Chrome DevTools Network Inspector",
    },
    {
      title: "Manual Weekly Review takes 6 hours to reconcile",
      tier: "Tier 1 Operational Waste",
      rca: "Repetitive manual copy-paste from 5 separate operational queues into executive spreadsheets.",
      fix: "Engineered automated Google Apps Script pipeline aggregating metrics every Sunday night with zero human effort.",
      vibeTool: "Google Apps Script & Google Sheets API Engine",
    },
  ];

  const handleRunAnalysis = (idx: number) => {
    setSelectedTicketIdx(idx);
    setAnalyzing(true);
    setAnalysisResult(null);
    setTimeout(() => {
      setAnalysisResult(sampleTickets[idx]);
      setAnalyzing(false);
    }, 600);
  };

  return (
    <section id="projects" className="relative py-24 bg-[#08090b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold acid-badge font-mono">
            <Cpu className="w-3.5 h-3.5 text-[#d4ff00]" />
            <span>{t("projects_badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f4ee] tracking-tight">
            {t("projects_title_prefix")}{" "}
            <span className="text-acid-gradient">{t("projects_title_highlight")}</span>
          </h2>
          <p className="text-[#8e94a0] text-base sm:text-lg">
            {t("projects_desc")}
          </p>
        </div>

        {/* Project Cards Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">
          {projectsData.map((project) => {
            const IconComp = project.icon;
            return (
              <TiltCard
                key={project.id}
                className="rounded-3xl bg-[#111317] border border-white/10 hover:border-[#d4ff00]/40 shadow-2xl"
              >
                <div className="p-6 sm:p-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#161920] border border-white/10 flex items-center justify-center text-[#d4ff00] transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#d4ff00]/10 text-[#d4ff00] border border-[#d4ff00]/30 font-bold">
                        {project.metrics}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#f4f4ee] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#8e94a0] mt-1">{project.tagline}</p>

                    <p className="text-xs sm:text-sm text-[#8e94a0] leading-relaxed mt-4">
                      {project.description}
                    </p>

                    <div className="mt-5 space-y-2">
                      <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#8e94a0]">
                        {t("projects_innovations")}
                      </h5>
                      <ul className="space-y-1.5">
                        {project.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#f4f4ee]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#d4ff00] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161920] text-[#8e94a0] border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Interactive Live Incident & RCA Sandbox */}
        <div className="mt-16 rounded-3xl bg-[#111317] border border-white/15 p-6 sm:p-8 shadow-2xl hud-corner">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#d4ff00]" />
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {t("rca_title")}
                </h3>
              </div>
              <p className="text-xs text-[#8e94a0] mt-1">
                {t("rca_desc")}
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#d4ff00]/10 text-[#d4ff00] border border-[#d4ff00]/30 font-bold self-start md:self-auto">
              Live Demo Mode
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-start">
            {/* Left: Incident Selector */}
            <div className="lg:col-span-5 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#8e94a0]">
                {t("rca_select_lbl")}
              </h4>
              {sampleTickets.map((ticket, idx) => (
                <div
                  key={idx}
                  onClick={() => handleRunAnalysis(idx)}
                  className={`p-3.5 rounded-xl cursor-pointer border transition-all ${
                    selectedTicketIdx === idx && (analyzing || analysisResult)
                      ? "bg-[#161920] border-[#d4ff00] text-white shadow-md"
                      : "bg-[#090b0e] border-white/10 text-[#8e94a0] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 text-[#d4ff00]">
                      {ticket.tier}
                    </span>
                    <span className="text-[10px] font-mono text-[#8e94a0]">{t("rca_click_run")}</span>
                  </div>
                  <p className="text-xs font-medium text-[#f4f4ee]">{ticket.title}</p>
                </div>
              ))}
            </div>

            {/* Right: AI Output Console */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#090b0e] border border-white/10 p-5 font-mono text-xs shadow-inner min-h-[260px] flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[#8e94a0] text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d4ff00]" />
                    <span className="ml-2">mahmoud_rca_engine --diagnose</span>
                  </div>
                  <span className="text-[#d4ff00] font-bold">{t("rca_console_ready")}</span>
                </div>

                {analyzing ? (
                  <div className="flex flex-col items-center justify-center py-10 text-[#8e94a0] gap-3">
                    <div className="w-6 h-6 border-2 border-[#d4ff00] border-t-transparent rounded-full animate-spin" />
                    <span>{t("rca_console_analyzing")}</span>
                  </div>
                ) : analysisResult ? (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div>
                      <span className="text-[#8e94a0] uppercase text-[10px]">TICKET:</span>
                      <p className="text-[#f4f4ee] font-semibold">{analysisResult.title}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-[#ff6b35]/10 border border-[#ff6b35]/30">
                      <span className="text-[#ff6b35] uppercase text-[10px] font-bold">
                        ROOT CAUSE ANALYSIS (5-WHY):
                      </span>
                      <p className="text-[#f4f4ee] text-xs mt-0.5">{analysisResult.rca}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-[#d4ff00]/10 border border-[#d4ff00]/30">
                      <span className="text-[#d4ff00] uppercase text-[10px] font-bold">
                        REMEDIATION & CODE FIX:
                      </span>
                      <p className="text-[#f4f4ee] text-xs mt-0.5">{analysisResult.fix}</p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[#8e94a0] pt-2 border-t border-white/10">
                      <span>Toolchain: {analysisResult.vibeTool}</span>
                      <span className="text-[#d4ff00] font-bold">SLA Met: 100%</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 text-[#8e94a0] text-center">
                    <Sparkles className="w-8 h-8 text-[#d4ff00]/40 mb-2" />
                    <p>{t("rca_console_placeholder")}</p>
                  </div>
                )}

                <div className="pt-3 mt-3 border-t border-white/5 text-[10px] text-[#8e94a0] flex justify-between">
                  <span>Engine: Anthropic Claude 3.7 + Lean VSM</span>
                  <span>Author: Mahmoud Mohasseb</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
