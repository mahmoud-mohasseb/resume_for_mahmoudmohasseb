"use client";

import React from "react";
import {
  ShieldAlert,
  Code2,
  TrendingUp,
  Bug,
  Server,
  BarChart3,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

import TiltCard from "@/components/TiltCard";

export default function ServicesSection() {
  const { t, language } = useLanguage();

  const servicesData = [
    {
      id: "tech-support",
      icon: ShieldAlert,
      title: language === "ar" ? "الدعم الفني المؤسسي (Tier 1/2/3)" : language === "ro" ? "Suport Tehnic Enterprise (Tier 1/2/3)" : language === "de" ? "Enterprise Tier 1/2/3 Technischer Support" : "Enterprise Tier 1/2/3 Technical Support",
      description: language === "ar"
        ? "إدارة دورة حياة الحوادث التقنية من البداية للنهاية، تحليل الأسباب الجذرية (RCA)، تصنيف وتوزيع التذاكر، والتعامل مع تصعيد الحوادث الحرجة وفق اتفاقيات SLA الصارمة."
        : language === "ro"
        ? "Gestionarea ciclului complet al incidentelor, analiza cauzei rădăcină (RCA), trierea tichetelor și gestionarea escaladărilor critice conform SLA-urilor enterprise."
        : language === "de"
        ? "End-to-End Incident Lifecycle Management, Ursachenanalyse (RCA), Ticket-Triage und Eskalationsmanagement nach strengen SLA/KPI-Vorgaben."
        : "End-to-end incident lifecycle management, root cause analysis (RCA), ticket triage, queue dispatching, and high-severity escalation handling adhering to strict SLA/KPI benchmarks.",
      tags: ["Tier 1/2/3 Support", "RCA & 5-Why", "Incident Management", "SLA Adherence", "Microsoft Tools"],
    },
    {
      id: "vibe-dev",
      icon: Code2,
      title: language === "ar" ? "البرمجة بالذكاء الاصطناعي (Vibe Coding) وتطوير Full-Stack" : language === "ro" ? "AI Vibe Coding & Dezvoltare Full-Stack" : language === "de" ? "KI 'Vibe Coding' & Full-Stack Entwicklung" : "AI 'Vibe Coding' & Full-Stack Development",
      description: language === "ar"
        ? "هندسة وتطوير تطبيقات الويب السريعة باستخدام أدوات الذكاء الاصطناعي الحديثة (Claude 3.7 و Cursor و Antigravity) مدعومة بأكثر من 5 سنوات في React و Next.js و TypeScript و Node.js."
        : language === "ro"
        ? "Inginerie rapidă full-stack folosind instrumente AI moderne (Claude 3.7, Cursor, Antigravity) susținută de 5+ ani de dezvoltare React, Next.js și Node.js."
        : language === "de"
        ? "Schnelle Full-Stack-Entwicklung mit modernen KI-Tools (Claude 3.7, Cursor, Antigravity) kombiniert mit 5+ Jahren Erfahrung in React, Next.js, TypeScript und Node.js."
        : "Rapid full-stack engineering using modern AI tools (Claude 3.7, Cursor AI, Antigravity) combined with 5+ years of React.js, Next.js, TypeScript, Node.js, and REST/GraphQL API development.",
      tags: ["Next.js & React", "TypeScript", "Cursor AI", "Claude 3.7", "Vibe Coding", "REST & GraphQL"],
    },
    {
      id: "lean-ops",
      icon: TrendingUp,
      title: language === "ar" ? "التحول الرقمي بمنهجية Lean وأتمتة العمليات" : language === "ro" ? "Transformare Digitală Lean & Automatizare" : language === "de" ? "Lean Digitale Transformation & Workflow-Automatisierung" : "Lean Digital Transformation & Workflow Automation",
      description: language === "ar"
        ? "تطبيق منهجيات Genpact Lean المعتمدة للقضاء على الهدر التشغيلي، ورسم خرائط تدفق القيمة (VSM)، وصياغة إجراءات التشغيل القياسية (SOPs)، وبناء سكربتات الأتمتة."
        : language === "ro"
        ? "Metodologii Lean certificate Genpact pentru eliminarea risipei operaționale, Value Stream Mapping (VSM) și automatizare de procese."
        : language === "de"
        ? "Zertifizierte Lean-Methoden zur Beseitigung operativer Verschwendung, Value Stream Mapping (VSM), SOP-Erstellung und Workflow-Automatisierung."
        : "Certified Genpact Lean methodologies applied to eliminate operational waste, conduct Value Stream Mapping (VSM), author Standard Operating Procedures (SOPs), and build custom script automations.",
      tags: ["Lean Certified", "Value Stream Mapping", "Process SOPs", "Waste Elimination", "Kaizen"],
    },
    {
      id: "app-diagnostics",
      icon: Bug,
      title: language === "ar" ? "تشخيص التطبيقات والفحص العميق للواجهات البرمجية" : language === "ro" ? "Diagnosticare Aplicații & Depanare API" : language === "de" ? "Anwendungsdiagnostik & Tiefes API-Debugging" : "Application Diagnostics & Deep API Debugging",
      description: language === "ar"
        ? "فحص عميق باستخدام Chrome DevTools و Postman لمعالجة مشاكل CORS، وأخطاء تحليل JSON، وتسريبات ذاكرة React/Redux، وظروف السباق (Race Conditions)."
        : language === "ro"
        ? "Diagnosticare profundă cu Chrome DevTools și Postman pentru remedierea erorilor CORS, parsare JSON, memory leaks și erori de stare Redux."
        : language === "de"
        ? "Tiefendiagnose mit Chrome DevTools und Postman zur Behebung von CORS-Fehlern, JSON-Parsing-Defekten, Redux-Speicherlecks und Race Conditions."
        : "Deep diagnostics using Chrome DevTools, Postman, and network inspection to eliminate CORS misconfigurations, JSON parsing defects, React/Redux memory leaks, race conditions, and runtime failures.",
      tags: ["Chrome DevTools", "Postman", "CORS & Network", "Redux Debugging", "State Management"],
    },
    {
      id: "cloud-resource",
      icon: Server,
      title: language === "ar" ? "إدارة وتوزيع موارد Microsoft EMEA السحابية" : language === "ro" ? "Guvernanță Resurse & Operațiuni Microsoft EMEA" : language === "de" ? "Cloud & Enterprise Ressourcen-Governance" : "Cloud & Enterprise Resource Governance",
      description: language === "ar"
        ? "توزيع المهندسين عبر مناطق متعددة، ومطابقة الكفاءات التقنية، ومراقبة سعة طوابير التذاكر في الوقت الفعلي لمشاريع خدمات Microsoft EMEA."
        : language === "ro"
        ? "Alocarea inginerilor transfrontalier, monitorizarea capacității cozilor de tichete și coordonare pentru serviciile Microsoft EMEA."
        : language === "de"
        ? "Regionsübergreifende Ingenieur-Disposition, Kapazitätsüberwachung und Koordination für Microsoft EMEA Service-Engagements."
        : "Multi-region engineer dispatch, technical competency matching, queue capacity monitoring, and cross-functional coordination for Microsoft EMEA service engagements.",
      tags: ["Microsoft EMEA", "Queue Capacity", "Resource Allocation", "Escalations", "Microsoft 365"],
    },
    {
      id: "automation-scripting",
      icon: BarChart3,
      title: language === "ar" ? "أتمتة التقارير التنفيذية ولوحات المتابعة" : language === "ro" ? "Automatizare Raportare Executivă & Hub-uri" : language === "de" ? "Executive Reporting & Hub-Automatisierung" : "Executive Reporting & Hub Automation",
      description: language === "ar"
        ? "بناء محركات تصور واستخراج بيانات تلقائية عبر Google Apps Script و Google Sheets API و Google Sites، لتقليل وقت تجهيز تقارير WBR الأسبوعية بنسبة 75%."
        : language === "ro"
        ? "Dezvoltarea de motoare automate de vizualizare a datelor prin Google Apps Script și Sheets API, reducând timpul de raportare cu 75%."
        : language === "de"
        ? "Entwicklung automatisierter Datenvisualisierungs-Engines über Google Apps Script und Sheets API zur Reduzierung der WBR-Berichtszeit um 75%."
        : "Designing automated data visualization engines via Google Apps Script, Google Sheets API, and Google Sites operational hubs, reducing manual executive WBR generation time by 75%.",
      tags: ["Google Apps Script", "WBR Automation", "Google Sheets API", "Operational Hubs", "Dashboards"],
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-[#090b0e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold acid-badge font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#d4ff00]" />
            <span>{t("services_badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f4ee] tracking-tight">
            {t("services_title_prefix")}{" "}
            <span className="text-acid-gradient">{t("services_title_highlight")}</span>
          </h2>
          <p className="text-[#8e94a0] text-base sm:text-lg">
            {t("services_desc")}
          </p>
        </div>

        {/* Services Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {servicesData.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <TiltCard
                key={service.id}
                className="rounded-2xl bg-[#111317] border border-white/10 hover:border-[#d4ff00]/40 shadow-xl"
              >
                <div className="p-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#161920] border border-white/10 flex items-center justify-center text-[#d4ff00] transition-all">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-[#8e94a0] group-hover:text-[#d4ff00]">
                        [ 0{idx + 1} ]
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#f4f4ee] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#8e94a0] leading-relaxed mt-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161920] text-[#8e94a0] border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4ff00] hover:underline font-mono"
                    >
                      <span>{t("services_inquire")}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
