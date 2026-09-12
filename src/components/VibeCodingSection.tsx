"use client";

import React, { useState } from "react";
import {
  Sparkles,
  BrainCircuit,
  Cpu,
  Zap,
  Terminal,
  Code2,
  CheckCircle2,
  Layers,
  Bot,
  Play,
  ArrowRight,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

import Interactive3DHologram from "@/components/Interactive3DHologram";

export default function VibeCodingSection() {
  const { t, language } = useLanguage();
  const [selectedTool, setSelectedTool] = useState(0);
  const [activeTab, setActiveTab] = useState<"pipeline" | "hologram3d" | "workflow" | "comparison">("pipeline");

  const toolsData = [
    {
      name: "Claude 3.7 Sonnet & Extended Thinking",
      category: language === "ar" ? "هندسة وبناء معماريات الذكاء الاصطناعي" : language === "ro" ? "Arhitectură & Sinteză AI" : language === "de" ? "KI-Architektur & Synthese" : "AI Architecture & Synthesis",
      role: language === "ar" ? "توليد الأكواد المعقدة وتصحيح الأخطاء متعدد المراحل" : language === "ro" ? "Sinteză Profundă de Cod & Depanare Multi-Turn" : language === "de" ? "Tiefgreifende Codesynthese & Multi-Turn Debugging" : "Deep Code Synthesis & Multi-Turn Debugging",
      description: language === "ar" 
        ? "استخدام أحدث نموذج تفكير وتحليل من Anthropic لتشخيص الأخطاء المعمارية المعقدة، وإنشاء حلول Next.js المتكاملة، وكتابة اختبارات مؤتمتة، وتنفيذ تدفقات عمل تشغيلية دقيقة."
        : language === "ro"
        ? "Utilizarea celui mai avansat model de raționament Anthropic pentru analiza erorilor arhitecturale complexe, generarea de soluții Next.js optimizate și crearea de suite de teste automatizate."
        : language === "de"
        ? "Nutzung des fortschrittlichsten Denkmodells von Anthropic zur Analyse komplexer Architekturfehler, Generierung optimierter Next.js Full-Stack-Lösungen und Erstellung automatisierter Testsuiten."
        : "Harnessing Anthropic's most advanced reasoning model to dissect complex architectural bugs, generate optimized Next.js full-stack implementations, draft automated test suites, and execute prompt-engineered operational workflows.",
      capabilities: language === "ar" ? [
        "التفكير الموسع لتحليل الأسباب الجذرية للأعطال المعقدة",
        "توليد تطبيقات متكاملة مع الالتزام التام بأنماط TypeScript",
        "إنشاء اختبارات الوحدة والتكامل المؤتمتة",
        "تحويل إجراءات التشغيل القياسية (SOPs) إلى سكربتات أتمتة فورية"
      ] : language === "ro" ? [
        "Extended Thinking pentru analiza cauzei rădăcină (RCA)",
        "Generare de cod full-stack cu tipizare strictă TypeScript",
        "Creare automatizată de teste unitare și de integrare",
        "Transformare SOP-uri și runbook-uri în scripturi automate"
      ] : language === "de" ? [
        "Extended Thinking für tiefgehende Ursachenanalysen",
        "Full-Stack-Code-Generierung mit strikter Typisierung",
        "Automatisierte Erstellung von Unit- & Integrationstests",
        "Umwandlung von SOPs und Runbooks in automatisierte Skripte"
      ] : [
        "Extended Thinking for deep architectural root cause analysis",
        "Full-stack code generation with strict TypeScript typing",
        "Automated unit & integration test creation",
        "SOP & Runbook translation into automated scripts",
      ],
      badge: "Anthropic AI Certified",
    },
    {
      name: "Cursor AI & Composer Agent",
      category: language === "ar" ? "بيئة تطوير ذكية وفهرسة سياقية شاملة" : language === "ro" ? "IDE Contextual & Refactorizare Multi-File" : language === "de" ? "Kontextuelle IDE & Multi-File Refactoring" : "Contextual IDE & Multi-File Refactoring",
      role: language === "ar" ? "سياق كامل لقاعدة الكود وتعديل متزامن لعدة ملفات" : language === "ro" ? "Context Integral Codebase & Refactorizare Inline" : language === "de" ? "Vollständiger Codebase-Kontext & Inline-Refactoring" : "Full-Codebase Context & Inline Refactoring",
      description: language === "ar"
        ? "الاستفادة من الفهرسة الدلالية الكاملة لكامل المشروع في Cursor لتتبع كسور الواجهات البرمجية وتحديث هياكل React وتطبيق الميزات بسرعة تزيد 10 أضعاف عن التطوير التقليدي."
        : language === "ro"
        ? "Indexare semantică a întregului codebase și editări atomice multi-fișiere în Cursor Composer pentru localizarea instantanee a erorilor de API."
        : language === "de"
        ? "Nutzung semantischer Codebase-Indizierung und Multi-File-Transformationen in Cursor Composer, um API-Fehler in Sekunden zu lokalisieren und React-Architekturen blitzschnell zu modernisieren."
        : "Leveraging Cursor's whole-codebase semantic indexing, Composer multi-file transformations, and inline AI diffing to pinpoint API breakages, migrate React architectures, and implement features at 10x standard speed.",
      capabilities: language === "ar" ? [
        "تعديلات ذرية متزامنة لعدة ملفات بدون أخطاء استيراد",
        "تشخيص فوري للأخطاء مباشرة من مخرجات الطرفية",
        "البحث والاستعلام عن الكود والاعتماديات باللغة الطبيعية",
        "إعادة هيكلة المكونات وإدارة الحالة المعقدة بسلاسة"
      ] : language === "ro" ? [
        "Editări atomice multi-file fără erori de import",
        "Diagnosticare instantă a erorilor direct din terminal",
        "Interogare codebase și dependințe în limbaj natural",
        "Refactorizare rapidă de componente și state management"
      ] : language === "de" ? [
        "Atomare Multi-File-Edits ohne Import-Fehler",
        "Sofortige Fehlerdiagnose direkt aus Terminalausgaben",
        "Codebase-Abfragen und Abhängigkeitsverfolgung in natürlicher Sprache",
        "Schnelles Komponenten-Refactoring und State-Management"
      ] : [
        "Multi-file atomic edits with zero hallucinated imports",
        "Instant error diagnostics directly from terminal outputs",
        "Natural language codebase query & dependency tracing",
        "Rapid component refactoring & state management overhaul",
      ],
      badge: "Daily Power Driver",
    },
    {
      name: "Google Antigravity & Agentic IDEs",
      category: language === "ar" ? "وكلاء التطوير الذاتي والأتمتة" : language === "ro" ? "Agenți Autonomi de Dezvoltare & Instrumente" : language === "de" ? "Autonome Entwickleragenten & Werkzeuge" : "Autonomous Dev Agents & Tooling",
      role: language === "ar" ? "تنفيذ ذاتي وحلقات تحقق مستمرة" : language === "ro" ? "Execuție Autonomă & Bucle de Verificare" : language === "de" ? "Autonome Ausführung & Verifizierungsschleifen" : "Autonomous Execution & Verification Loops",
      description: language === "ar"
        ? "تشغيل أطر عمل الوكلاء المتقدمة لتنفيذ أدوات النظام الطرفي والمتصفح الفرعي، والتحقق المستمر من البناء والترجمة وفحوصات الانحدار البصري."
        : language === "ro"
        ? "Rularea de framework-uri agentice cu execuție autonomă de comenzi de sistem și sub-agenți de browser pentru verificarea automată a UI-ului."
        : language === "de"
        ? "Einsatz fortschrittlicher Agenten-Frameworks mit autonomer Tool-Ausführung und Verifizierungsschleifen zur Automatisierung von Pipelines und UI-Tests."
        : "Operating next-generation agentic frameworks with autonomous tool-calling, background sub-agent orchestration, and verification loops to automate full deployment pipelines, documentation authoring, and UI testing.",
      capabilities: language === "ar" ? [
        "تنفيذ مستقل لأوامر سطر الأوامر وملفات النظام",
        "وكلاء المتصفح للتحقق من واجهات المستخدم وتفادي الأخطاء",
        "معالجة ذاتية للأخطاء ومشاكل البناء والـ Lint",
        "توليد ملخصات توثيقية دقيقة لطلبات الدمج (PRs)"
      ] : language === "ro" ? [
        "Execuții autonome de comenzi în terminal și sistem",
        "Validare vizuală prin sub-agenți de browser",
        "Pipeline-uri self-correcting de build și linting",
        "Generare automată de rezumate PR și documentație"
      ] : language === "de" ? [
        "Autonome Dateisystem- und Terminalausführungen",
        "Browser-Subagenten zur Validierung von Benutzeroberflächen",
        "Selbstkorrigierende Build- und Lint-Pipelines",
        "Automatisierte PR-Zusammenfassungen und Dokumentation"
      ] : [
        "Autonomous file-system and terminal tool executions",
        "Browser subagent validation and visual regression checks",
        "Self-correcting build and lint resolution pipelines",
        "Automated PR summaries and walkthrough artifact generation",
      ],
      badge: "Agentic Pioneer",
    },
    {
      name: "Automated Scripting & Webhooks",
      category: language === "ar" ? "أتمتة العمليات والتقارير التنفيذية" : language === "ro" ? "Automatizare Operațiuni & Fluxuri de Lucru" : language === "de" ? "Operations & Workflow-Automatisierung" : "Operations & Workflow Automation",
      role: language === "ar" ? "أتمتة Google Apps Script و Webhooks للمؤسسات" : language === "ro" ? "Google Apps Script, Webhook-uri REST & Micro-unelte" : language === "de" ? "Google Apps Script, REST-Webhooks & Micro-Tools" : "Google Apps Script, REST Webhooks & Micro-tools",
      description: language === "ar"
        ? "بناء منصات استخراج وتحليل بيانات العمليات التلقائية عبر Google Apps Script و Google Sites لتقليل وقت إعداد تقارير WBR الأسبوعية بنسبة 75%."
        : language === "ro"
        ? "Proiectarea de utilități automate de extragere a datelor și trigger-e Google Apps Script care elimină munca manuală în tabele cu 75%."
        : language === "de"
        ? "Entwicklung maßgeschneiderter Datenextraktions-Tools und Google Apps Script Trigger, die manuelle Tabellenarbeiten eliminieren und Berichtszeiten um 75% senken."
        : "Engineering custom data extraction utilities, webhook listeners, and Google Apps Script triggers that seamlessly bridge legacy spreadsheets, enterprise tickets, and real-time executive dashboard hubs.",
      capabilities: language === "ar" ? [
        "تجميع مؤشرات الأداء (KPIs) في الوقت الفعلي",
        "إلغاء العمليات اليدوية وتحديثات الجداول المكررة",
        "تنبيهات بريد إلكتروني وتصعيد تلقائي للأعطال",
        "ربط مباشر وسلس عبر الـ Webhooks دون تأخير"
      ] : language === "ro" ? [
        "Agregare în timp real a metricilor KPI",
        "Eliminarea rutinei de copiere manuală în tabele",
        "Alerte automate prin email și declanșatori de escaladare",
        "Integrări Webhook fără latență cu instrumente terțe"
      ] : language === "de" ? [
        "Echtzeit-Aggregation von Leistungskennzahlen (KPIs)",
        "Beseitigung manueller Tabellen-Kopierroutinen",
        "Automatisierte E-Mail-Benachrichtigungen und Eskalationstrigger",
        "Latenzfreie Webhook-Integrationen mit Drittanbieter-Tools"
      ] : [
        "Real-time KPI aggregation and automated data feed sync",
        "Elimination of manual spreadsheet copy-paste routines",
        "Automated email notifications and escalation triggers",
        "Zero-latency webhook integrations with third-party tools",
      ],
      badge: "75% Time Reduction",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: language === "ar" ? "استيعاب السياق وتحديد المشكلة" : language === "ro" ? "Analiză Context & Definire Problemă" : language === "de" ? "Kontextanalyse & Problemdefinition" : "Context-Aware Intake & Problem Definition",
      desc: language === "ar" ? "إدخال سجلات الأخطاء ومخرجات Postman في Claude 3.7 مع التفكير الموسع لكشف السبب الجذري في ثوانٍ." : language === "ro" ? "Alimentarea log-urilor de erori și a payload-urilor Postman în Claude 3.7 cu raționament extins." : language === "de" ? "Einspeisung von Fehlerprotokollen und Postman-Payloads in Claude 3.7 zur blitzschnellen Ursachenidentifikation." : "Feeding error logs, Postman payloads, and incident tickets into Claude 3.7 with extended thinking to pinpoint root causes in seconds.",
      tag: "Claude 3.7 Sonnet",
    },
    {
      step: "02",
      title: language === "ar" ? "تعديل ذري متعدد الملفات في Composer" : language === "ro" ? "Sinteză Atomică Multi-Fișier în Composer" : language === "de" ? "Atomare Multi-File-Synthese in Composer" : "Atomic Multi-File Synthesis in Composer",
      desc: language === "ar" ? "تشغيل وكيل Cursor Composer لتطبيق التعديلات عبر ملفات متعددة دون كسر الأنظمة أو التبعيات." : language === "ro" ? "Implementarea modificărilor multi-file atomice în Cursor Composer fără erori de regresie." : language === "de" ? "Einsatz des Cursor AI Composer-Agenten zur Durchführung stabiler Multi-File-Refactorings und State-Updates." : "Deploying Cursor AI Composer agent to execute non-breaking multi-file refactors, state updates, and schema migrations.",
      tag: "Cursor Composer",
    },
    {
      step: "03",
      title: language === "ar" ? "تحقق واختبار ذاتي بواسطة الوكلاء" : language === "ro" ? "Verificare Autonomă Agentică" : language === "de" ? "Autonome agentische Verifizierung" : "Autonomous Agentic Verification",
      desc: language === "ar" ? "تشغيل أدوات Antigravity للتحقق من استجابات الـ API، وحالات الواجهة، واجتياز فحوصات TypeScript." : language === "ro" ? "Rularea instrumentelor Antigravity și sub-agenților de browser pentru validarea build-urilor TypeScript." : language === "de" ? "Ausführung autonomer Antigravity-Tools und Browser-Subagenten zur Überprüfung von UI-Zuständen und TypeScript-Builds." : "Running Google Antigravity autonomous tool calls and browser sub-agents to verify UI states, API response codes, and TypeScript builds.",
      tag: "Antigravity Agents",
    },
    {
      step: "04",
      title: language === "ar" ? "القضاء على الهدر والأتمتة المستدامة" : language === "ro" ? "Eliminare Risipă Lean & Automatizare" : language === "de" ? "Lean-Verschwendungsbeseitigung & Automatisierung" : "Lean Waste Elimination & Automation",
      desc: language === "ar" ? "تحويل الحلول إلى سكربتات أتمتة و Webhooks لمنع تكرار المشكلة وتوفير ساعات العمل الأسبوعية." : language === "ro" ? "Integrarea soluțiilor recurente în Webhook-uri Google Apps Script pentru economisirea orelor de lucru." : language === "de" ? "Verpackung wiederkehrender Korrekturen in Google Apps Script Webhooks und automatisierte Runbooks." : "Packaging repetitive operational fixes into Google Apps Script webhooks and automated runbooks to prevent recurrence.",
      tag: "Google Apps Script",
    },
  ];

  return (
    <section id="vibe-coding" className="relative py-24 bg-[#08090b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold acid-badge font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#d4ff00]" />
            <span>{t("vibe_badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f4ee] tracking-tight">
            {t("vibe_title_prefix")}{" "}
            <span className="text-acid-gradient">{t("vibe_title_highlight")}</span>
          </h2>
          <p className="text-[#8e94a0] text-base sm:text-lg leading-relaxed">
            {t("vibe_desc")}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          <button
            type="button"
            onClick={() => setActiveTab("pipeline")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all font-mono cursor-pointer ${
              activeTab === "pipeline"
                ? "bg-[#d4ff00] text-black shadow-[0_0_20px_rgba(212,255,0,0.3)] font-bold"
                : "bg-[#111317] text-[#8e94a0] hover:text-white border border-white/10"
            }`}
          >
            {t("vibe_tab_matrix")}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("hologram3d")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all font-mono cursor-pointer flex items-center gap-1.5 ${
              activeTab === "hologram3d"
                ? "bg-[#d4ff00] text-black shadow-[0_0_20px_rgba(212,255,0,0.3)] font-bold"
                : "bg-[#111317] text-[#8e94a0] hover:text-white border border-white/10"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>3D Neural Space</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("workflow")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all font-mono cursor-pointer ${
              activeTab === "workflow"
                ? "bg-[#d4ff00] text-black shadow-[0_0_20px_rgba(212,255,0,0.3)] font-bold"
                : "bg-[#111317] text-[#8e94a0] hover:text-white border border-white/10"
            }`}
          >
            {t("vibe_tab_workflow")}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("comparison")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all font-mono cursor-pointer ${
              activeTab === "comparison"
                ? "bg-[#d4ff00] text-black shadow-[0_0_20px_rgba(212,255,0,0.3)] font-bold"
                : "bg-[#111317] text-[#8e94a0] hover:text-white border border-white/10"
            }`}
          >
            {t("vibe_tab_comparison")}
          </button>
        </div>

        {/* Tab 1: AI Toolchain Matrix */}
        {activeTab === "pipeline" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-start">
            {/* Left selector */}
            <div className="lg:col-span-5 space-y-3">
              {toolsData.map((tool, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedTool(idx)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                    selectedTool === idx
                      ? "bg-[#161920] border-[#d4ff00] shadow-[0_0_25px_rgba(212,255,0,0.15)]"
                      : "bg-[#111317] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${
                          selectedTool === idx
                            ? "bg-[#d4ff00]/15 border-[#d4ff00] text-[#d4ff00]"
                            : "bg-[#161920] border-white/10 text-[#8e94a0]"
                        }`}
                      >
                        {idx === 0 && <BrainCircuit className="w-5 h-5" />}
                        {idx === 1 && <Sparkles className="w-5 h-5" />}
                        {idx === 2 && <Cpu className="w-5 h-5" />}
                        {idx === 3 && <Zap className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#f4f4ee]">{tool.name}</h4>
                        <p className="text-xs text-[#8e94a0] font-mono">{tool.category}</p>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded shrink-0 ${
                        selectedTool === idx
                          ? "bg-[#d4ff00]/20 text-[#d4ff00] border border-[#d4ff00]/40 font-bold"
                          : "bg-white/5 text-[#8e94a0]"
                      }`}
                    >
                      {tool.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right details view */}
            <div className="lg:col-span-7">
              {toolsData[selectedTool] && (
                <div className="p-6 sm:p-8 rounded-3xl bg-[#111317] border border-white/15 shadow-2xl relative overflow-hidden hud-corner">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#d4ff00] font-bold">
                        {toolsData[selectedTool].category}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-1">
                        {toolsData[selectedTool].name}
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#d4ff00]/10 text-[#d4ff00] border border-[#d4ff00]/30 font-mono">
                      {toolsData[selectedTool].badge}
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div>
                      <h5 className="text-xs font-mono uppercase tracking-wider text-[#8e94a0]">
                        {t("vibe_op_role")}
                      </h5>
                      <p className="text-base font-semibold text-[#f4f4ee] mt-1">
                        {toolsData[selectedTool].role}
                      </p>
                    </div>

                    <p className="text-sm text-[#8e94a0] leading-relaxed">
                      {toolsData[selectedTool].description}
                    </p>

                    <div>
                      <h5 className="text-xs font-mono uppercase tracking-wider text-[#8e94a0] mb-3">
                        {t("vibe_capabilities")}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {toolsData[selectedTool].capabilities.map((cap, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 p-3 rounded-xl bg-[#161920] border border-white/5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#d4ff00] shrink-0 mt-0.5" />
                            <span className="text-xs text-[#f4f4ee]">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-white/10 text-xs font-mono">
                      <span className="text-[#8e94a0]">
                        {t("vibe_validated")}
                      </span>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1 font-bold text-[#d4ff00] hover:underline"
                      >
                        {t("vibe_request_btn")}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Interactive 3D Neural Hologram */}
        {activeTab === "hologram3d" && (
          <div className="mt-12 max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-200">
            <Interactive3DHologram />
          </div>
        )}

        {/* Tab 3: 4-Stage Vibe Workflow */}
        {activeTab === "workflow" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {workflowSteps.map((ws) => (
              <div
                key={ws.step}
                className="p-6 rounded-2xl bg-[#111317] border border-white/10 hover:border-[#d4ff00]/40 relative group transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-[#8e94a0] group-hover:text-[#d4ff00] transition-colors font-mono">
                    {ws.step}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#d4ff00] border border-white/10 font-bold">
                    {ws.tag}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">{ws.title}</h4>
                <p className="text-xs text-[#8e94a0] leading-relaxed">{ws.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Comparison */}
        {activeTab === "comparison" && (
          <div className="mt-12 rounded-2xl bg-[#111317] border border-white/10 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 rtl:md:divide-x-reverse">
              {/* Traditional */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-[#ff6b35]">
                    {language === "ar" ? "الدعم والتطوير التقليدي" : language === "ro" ? "Suport & Dezvoltare Tradițională" : language === "de" ? "Traditioneller Support & Dev" : "Traditional Support & Dev"}
                  </h4>
                  <span className="text-xs font-mono text-[#8e94a0]">
                    {language === "ar" ? "النهج القديم" : language === "ro" ? "Abordare Învechită" : language === "de" ? "Legacy Ansatz" : "Legacy Approach"}
                  </span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-[#8e94a0]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff6b35] font-bold">✕</span> {language === "ar" ? "فحص يدوي بطيء للأعطال عبر منصات منفصلة وغير متصلة." : language === "ro" ? "Procesare manuală a tichetelor și reproducere lentă a erorilor." : language === "de" ? "Manuelle Ticketanalyse und langsame Reproduktion." : "Manual ticket parsing and slow reproduction across multiple disconnected platforms."}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff6b35] font-bold">✕</span> {language === "ar" ? "ساعات طويلة في كتابة أكواد مكررة والبحث اليدوي عن أخطاء الـ API." : language === "ro" ? "Ore pierdute pe investigarea cazurilor limită API și boilerplate repetitiv." : language === "de" ? "Stundenlanges Suchen von API-Randfällen und repetitive Boilerplates." : "Hours spent hunting API edge cases and writing repetitive boilerplate code."}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff6b35] font-bold">✕</span> {language === "ar" ? "تحديث يدوي للجداول وتجميع شاق للتقارير الأسبوعية." : language === "ro" ? "Actualizări manuale de tabele și reconcilieri săptămânale consumatoare de timp." : language === "de" ? "Manuelle Tabellenpflege und mühsame Berichtserstellung." : "Manual spreadsheet updates and tedious weekly report synthesis."}
                  </li>
                </ul>
              </div>

              {/* Mahmoud's Vibe Coding */}
              <div className="p-6 sm:p-8 space-y-4 bg-[#161920]">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-[#d4ff00] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#d4ff00]" />
                    Mahmoud Mohasseb’s Vibe Stack
                  </h4>
                  <span className="text-xs font-mono text-black font-bold px-2.5 py-0.5 rounded bg-[#d4ff00]">
                    10x Velocity
                  </span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-[#f4f4ee]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d4ff00] shrink-0 mt-0.5" />
                    {language === "ar" ? "تحليل فوري للأسباب الجذرية (5-Why) عبر منطق Claude 3.7 المتقدم." : language === "ro" ? "Analiză automată a cauzei rădăcină (RCA) prin raționamentul Claude 3.7." : language === "de" ? "Automatisierte RCA und 5-Why-Synthese mit Claude 3.7 Reasoning." : "Automated RCA and instant 5-Why synthesis using Claude 3.7 reasoning pipelines."}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d4ff00] shrink-0 mt-0.5" />
                    {language === "ar" ? "تعديل ذري لكامل ملفات المشروع في Cursor مع ضمان صفر أخطاء." : language === "ro" ? "Editări multi-file atomice în Cursor Composer cu zero defecte." : language === "de" ? "Codebase-weite Multi-File-Edits in Cursor Composer ohne Fehler." : "Full codebase multi-file edits in Cursor Composer with zero-defect verification."}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d4ff00] shrink-0 mt-0.5" />
                    {language === "ar" ? "سكربتات Google Apps Script توفر 75% من وقت إعداد التقارير للإدارة." : language === "ro" ? "Hub-uri Google Apps Script care reduc timpul de raportare executivă cu 75%." : language === "de" ? "Google Apps Script Engines sparen 75% der Berichtszeit." : "Custom Google Apps Script engines saving 75% executive reporting time."}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
