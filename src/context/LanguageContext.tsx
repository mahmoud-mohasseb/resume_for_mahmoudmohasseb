"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ar" | "de" | "ro";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: "ltr" | "rtl";
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    nav_about: "About",
    nav_vibe: "Vibe Coding & AI",
    nav_services: "Services",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_tech: "Tech Stack",
    nav_certs: "Certifications",
    nav_contact: "Contact",
    nav_resume: "Resume PDF",
    nav_whatsapp: "WhatsApp",
    nav_pro_badge: "PRO",
    nav_subtitle: "Technical Support Specialist & AI Vibe Coding Pioneer",

    // Hero
    hero_badge: "Anthropic AI Certified & Genpact Lean Specialist",
    hero_title_prefix: "Technical Support Specialist &",
    hero_title_highlight: "AI Vibe Coding",
    hero_title_suffix: "Pioneer",
    hero_desc: "Transforming enterprise support operations and web systems with Tier 1/2/3 Incident Resolution, Lean Digital Automation, and 10x AI-Assisted Vibe Coding (Claude 3.7 Sonnet, Cursor AI Composer & Google Antigravity).",
    hero_bullet_1: "Microsoft EMEA Resource & Escalation Governance",
    hero_bullet_2: "5+ Years Full-Stack React & Next.js Debugging",
    hero_bullet_3: "75% Time Saved with Google Apps Script Hubs",
    hero_bullet_4: "Lean Certified Value Stream Mapping & 5-Why RCA",
    hero_chat_whatsapp: "Chat on WhatsApp",
    hero_explore_vibe: "Explore Vibe Coding",
    hero_resume_pdf: "Resume (PDF)",
    hero_available: "Ready for Remote / On-Site",
    hero_quick_connect: "Quick Connect →",
    hero_trusted_by: "Supported Enterprise Ecosystems, Platforms & Certifications",
    hero_status: "Live Status",
    hero_location: "Bucharest, Romania",

    // Metrics
    metric_1_val: "5+ Yrs",
    metric_1_lbl: "Enterprise Support & Web Dev",
    metric_1_sub: "Microsoft EMEA & High-Volume Apps",
    metric_2_val: "75%",
    metric_2_lbl: "Reporting Cycle Time Saved",
    metric_2_sub: "Automated via Google Apps Script",
    metric_3_val: "40%",
    metric_3_lbl: "Incident Ticket Reduction",
    metric_3_sub: "Through deep API & State Diagnostics",
    metric_4_val: "10x",
    metric_4_lbl: "Vibe Coding Velocity",
    metric_4_sub: "Claude 3.7, Cursor & Antigravity Workflows",
    metric_5_val: "99.4%",
    metric_5_lbl: "SLA & KPI Adherence",
    metric_5_sub: "Strict Enterprise Turnaround Benchmarks",

    // Vibe Section
    vibe_badge: "Next-Gen Engineering Paradigm",
    vibe_title_prefix: "Vibe Coding &",
    vibe_title_highlight: "AI-Accelerated Development",
    vibe_desc: "Bridging 5+ years of enterprise technical support and full-stack debugging with autonomous AI coding agents. Leveraging Claude 3.7 Sonnet, Cursor Composer, and Google Antigravity for 10x engineering velocity.",
    vibe_tab_matrix: "AI Toolchain Matrix",
    vibe_tab_workflow: "4-Stage Vibe Workflow",
    vibe_tab_comparison: "Traditional vs Vibe Coding",
    vibe_op_role: "Operational Role",
    vibe_capabilities: "Key Capabilities & Methodologies",
    vibe_validated: "Validated in production environments",
    vibe_request_btn: "Request AI Consultation →",

    // Services
    services_badge: "Core Solutions & Expertise",
    services_title_prefix: "Enterprise Technical Operations &",
    services_title_highlight: "AI Engineering",
    services_desc: "High-impact technical solutions tailored for enterprise IT platforms, high-velocity SaaS teams, and client-facing service lines.",
    services_inquire: "Inquire About Capability",

    // Projects & RCA
    projects_badge: "Technical Projects & Operational Solutions",
    projects_title_prefix: "Featured",
    projects_title_highlight: "Engineering Case Studies",
    projects_desc: "Real-world automation platforms, deep diagnostic overhauls, and AI incident triage systems.",
    projects_innovations: "Core Innovations:",
    rca_title: "Interactive AI RCA & Incident Triage Simulator",
    rca_desc: "Select a sample production incident to see how Mahmoud Mohasseb diagnoses and resolves it using AI Vibe Coding & Lean 5-Why analysis.",
    rca_select_lbl: "Select An Incident Scenario:",
    rca_click_run: "Click to run",
    rca_console_ready: "READY",
    rca_console_analyzing: "Executing Claude 3.7 Root Cause Synthesis & DevTools Analysis...",
    rca_console_placeholder: "Click any incident scenario on the left to trigger the live diagnostic workflow.",

    // Experience
    exp_badge: "Proven Enterprise Track Record",
    exp_title_prefix: "Professional",
    exp_title_highlight: "Work Experience",
    exp_desc: "Supporting Microsoft EMEA service engagements, high-throughput consumer ecosystems, and full-stack application environments.",
    exp_focus: "Core Focus:",
    exp_deliverables: "Key Deliverables & Enterprise Impact",
    exp_view_details: "View Highlights",
    exp_collapse_details: "Collapse Details",

    // Tech Stack
    tech_badge: "Core Competency Matrix",
    tech_title_prefix: "Technical Skills &",
    tech_title_highlight: "Tool Ecosystem",
    tech_desc: "A comprehensive matrix of technical tools, diagnostic utilities, frameworks, and AI workflows.",
    tech_all: "All Skills",
    tech_search_placeholder: "Search skill or tool...",

    // Certifications & Education
    cert_badge: "Verified Credentials",
    cert_title_prefix: "Licenses, Certifications &",
    cert_title_highlight: "Education",
    cert_desc: "Continuous professional mastery across AI frameworks, Lean transformation, and full-stack software architecture.",
    cert_licenses_title: "Professional Licenses & Certifications",
    cert_verified: "Verified",
    edu_title: "Higher Education & Academic Foundation",
    lang_title: "Multilingual Communication",
    lang_note: "⭐ Fluent across cross-regional technical escalations throughout the EMEA theatre.",

    // Contact
    contact_badge: "Fast Response Within 1 Hour",
    contact_title_prefix: "Connect Directly with",
    contact_title_highlight: "Mahmoud Mohasseb",
    contact_desc: "Reach out directly on WhatsApp for instantaneous response, schedule an AI architecture consultation, or discuss full-time enterprise roles.",
    contact_phone_lbl: "Direct Phone",
    contact_email_lbl: "Email",
    contact_call: "Call",
    contact_mail: "Mail",
    contact_resume_title: "Full Resume Available",
    contact_resume_sub: "PDF • Verified 2026 Credentials",
    contact_download_btn: "Download PDF",
    contact_composer_title: "Instant WhatsApp Message Launcher",
    contact_reason_lbl: "Select Reason for Contact:",
    contact_prefilled_lbl: "Pre-Filled WhatsApp Message:",
    contact_editable_hint: "Editable before sending",
    contact_send_btn: "Open WhatsApp & Send Instant Message",
    contact_privacy_note: "🔒 Direct private channel to Mahmoud Mohasseb. No bots, direct human reply.",

    // Floating WhatsApp
    floating_title: "Online on WhatsApp",
    floating_desc: "👋 Hi! Reach out directly to discuss technical support roles, AI vibe coding consultations, or operational automation.",
    floating_direct_btn: "Open Direct Chat on WhatsApp",
    floating_button_label: "WhatsApp Quick Chat",

    // Footer
    footer_desc: "Supporting Microsoft EMEA service engagements, high-throughput consumer platforms, and building next-generation AI workflows with Claude 3.7, Cursor, and Antigravity.",
    footer_nav: "Navigation",
    footer_expertise: "Expertise",
    footer_direct: "Direct Channels",
    footer_rights: "All rights reserved. Crafted with Next.js, Tailwind CSS, and AI Vibe Coding workflows.",
    footer_back_top: "Back to top",
  },
  ar: {
    // Nav
    nav_about: "نبذة عني",
    nav_vibe: "البرمجة بالذكاء الاصطناعي",
    nav_services: "الخدمات",
    nav_experience: "الخبرات",
    nav_projects: "المشاريع",
    nav_tech: "المهارات والتقنيات",
    nav_certs: "الشهادات والتعليم",
    nav_contact: "تواصل معي",
    nav_resume: "تحميل السيرة الذاتية",
    nav_whatsapp: "واتساب",
    nav_pro_badge: "محترف",
    nav_subtitle: "Technical Support Specialist & AI Vibe Coding Pioneer",

    // Hero
    hero_badge: "معتمد من Anthropic في الذكاء الاصطناعي وخبير Genpact في Lean",
    hero_title_prefix: "أخصائي الدعم الفني ورائد",
    hero_title_highlight: "البرمجة بالذكاء الاصطناعي (Vibe Coding)",
    hero_title_suffix: "والأنظمة السحابية",
    hero_desc: "تطوير ودعم الأنظمة المؤسسية السحابية وحل المشكلات الفنية (Tier 1/2/3)، مع أتمتة العمليات بمنهجية Lean ومضاعفة سرعة التطوير 10 أضعاف باستخدام أدوات الذكاء الاصطناعي المتقدمة (Claude 3.7 Sonnet و Cursor AI و Google Antigravity).",
    hero_bullet_1: "إدارة وتوزيع موارد ودعم Microsoft EMEA",
    hero_bullet_2: "أكثر من 5 سنوات في تصحيح أخطاء وتطوير React و Next.js",
    hero_bullet_3: "توفير 75% من وقت التقارير عبر سكربتات Google Apps Script",
    hero_bullet_4: "خبير معتمد في منهجية Lean وتحليل الأسباب الجذرية (5-Why RCA)",
    hero_chat_whatsapp: "محادثة فورية عبر واتساب",
    hero_explore_vibe: "استكشف أدوات Vibe Coding",
    hero_resume_pdf: "السيرة الذاتية (PDF)",
    hero_available: "متاح للعمل عن بُعد / في المقر",
    hero_quick_connect: "تواصل سريع ←",
    hero_trusted_by: "المنصات المؤسسية والشهادات المعتمدة",
    hero_status: "الحالة المباشرة",
    hero_location: "بوخارست، رومانيا",

    // Metrics
    metric_1_val: "+5 سنوات",
    metric_1_lbl: "دعم فني وتطوير ويب مؤسسي",
    metric_1_sub: "دعم Microsoft EMEA ومنصات ضخمة",
    metric_2_val: "75%",
    metric_2_lbl: "توفير وقت دورات التقارير",
    metric_2_sub: "أتمتة كاملة عبر Google Apps Script",
    metric_3_val: "40%",
    metric_3_lbl: "تقليل تذاكر الأعطال والمشاكل",
    metric_3_sub: "عبر الفحص العميق للواجهات البرمجية والحالة",
    metric_4_val: "10x",
    metric_4_lbl: "مضاعفة سرعة التطوير",
    metric_4_sub: "Claude 3.7 و Cursor و Antigravity",
    metric_5_val: "99.4%",
    metric_5_lbl: "الالتزام باتفاقيات مستوى الخدمة (SLA)",
    metric_5_sub: "وفق أعلى معايير الشركات العالمية",

    // Vibe Section
    vibe_badge: "الجيل الجديد في هندسة البرمجيات",
    vibe_title_prefix: "البرمجة بالذكاء الاصطناعي &",
    vibe_title_highlight: "التطوير فائق السرعة",
    vibe_desc: "الجمع بين أكثر من 5 سنوات من الخبرة في الدعم الفني المؤسسي وتصحيح أخطاء الويب، مع وكلاء الذكاء الاصطناعي المستقلين (Claude 3.7 Sonnet و Cursor Composer و Google Antigravity) لتحقيق سرعة إنجاز قياسية وجودة عالية.",
    vibe_tab_matrix: "مصفوفة أدوات الذكاء الاصطناعي",
    vibe_tab_workflow: "مراحل دورة العمل الذكية",
    vibe_tab_comparison: "التطوير التقليدي مقابل Vibe Coding",
    vibe_op_role: "الدور العملي والتشغيلي",
    vibe_capabilities: "القدرات والمنهجيات الأساسية",
    vibe_validated: "تم التحقق منها وتطبيقها في بيئات الإنتاج",
    vibe_request_btn: "طلب استشارة في الذكاء الاصطناعي ←",

    // Services
    services_badge: "الخبرات والحلول الأساسية",
    services_title_prefix: "العمليات التقنية المؤسسية &",
    services_title_highlight: "هندسة الذكاء الاصطناعي",
    services_desc: "حلول تقنية متكاملة ومصممة لمنصات تكنولوجيا المعلومات المؤسسية وشركات SaaS وخدمات دعم العملاء والشركات العالمية.",
    services_inquire: "استفسر عن هذه الخدمة",

    // Projects & RCA
    projects_badge: "المشاريع التقنية والحلول التشغيلية",
    projects_title_prefix: "أبرز",
    projects_title_highlight: "دراسات الحالة الهندسية",
    projects_desc: "منصات أتمتة واقعية، حلول فحص عميقة لتطبيقات الويب، وأنظمة ذكية لتصنيف وتتبع الأعطال.",
    projects_innovations: "الابتكارات الرئيسية:",
    rca_title: "محاكي تحليل الأسباب الجذرية (RCA) بالذكاء الاصطناعي",
    rca_desc: "اختر مشكلة إنتاجية لمعاينة كيفية قيام Mahmoud Mohasseb بتشخيصها وحلها فوراً عبر تقنيات Vibe Coding وتحليل 5-Why.",
    rca_select_lbl: "اختر سيناريو عطل للمعاينة:",
    rca_click_run: "انقر للتشخيص",
    rca_console_ready: "جاهز",
    rca_console_analyzing: "جاري تحليل المشكلة واستنتاج السبب الجذري عبر Claude 3.7...",
    rca_console_placeholder: "انقر على أي عطل من القائمة لبدء المحاكاة التفاعلية.",

    // Experience
    exp_badge: "سجل وظيفي مؤسسي مثبت",
    exp_title_prefix: "الخبرات",
    exp_title_highlight: "المهنية والعملية",
    exp_desc: "دعم مشاريع Microsoft EMEA، المنصات الضخمة (Bolt / Genpact)، وبيئات تطبيقات الويب المتكاملة.",
    exp_focus: "التركيز الأساسي:",
    exp_deliverables: "أبرز الإنجازات والأثر التشغيلي",
    exp_view_details: "عرض التفاصيل",
    exp_collapse_details: "إخفاء التفاصيل",

    // Tech Stack
    tech_badge: "مصفوفة المهارات والقدرات",
    tech_title_prefix: "المهارات الفنية &",
    tech_title_highlight: "الأدوات التقنية",
    tech_desc: "دليل شامل لجميع الأدوات والمكتبات البرمجية وأطر العمل ومنهجيات التحليل وأدوات الذكاء الاصطناعي.",
    tech_all: "جميع المهارات",
    tech_search_placeholder: "ابحث عن مهارة أو أداة...",

    // Certifications & Education
    cert_badge: "اعتمادات وشهادات رسمية",
    cert_title_prefix: "الشهادات والاعتمادات &",
    cert_title_highlight: "المؤهلات العلمية",
    cert_desc: "تطوير مستمر واحتراف في أطر الذكاء الاصطناعي، تحسين العمليات بمنهجية Lean، وهندسة البرمجيات.",
    cert_licenses_title: "الشهادات والاعتمادات المهنية",
    cert_verified: "معتمد وموثق",
    edu_title: "التعليم الأكاديمي والمؤهلات",
    lang_title: "اللغات والتواصل الدولي",
    lang_note: "⭐ إتقان تام للتواصل الفني والتعامل مع تصعيد المشكلات عبر منطقة أوروبا والشرق الأوسط وإفريقيا (EMEA).",

    // Contact
    contact_badge: "رد سريع خلال أقل من ساعة",
    contact_title_prefix: "تواصل مباشرة مع",
    contact_title_highlight: "Mahmoud Mohasseb",
    contact_desc: "تواصل فوراً عبر واتساب للرد المباشر، حجز استشارة في الذكاء الاصطناعي، أو مناقشة الفرص الوظيفية المؤسسية.",
    contact_phone_lbl: "الهاتف المباشر",
    contact_email_lbl: "البريد الإلكتروني",
    contact_call: "اتصال",
    contact_mail: "مراسلة",
    contact_resume_title: "السيرة الذاتية الكاملة متاحة",
    contact_resume_sub: "ملف PDF • محدثة لعام 2026",
    contact_download_btn: "تحميل PDF",
    contact_composer_title: "مُرسل رسائل واتساب الفوري",
    contact_reason_lbl: "حدد سبب التواصل:",
    contact_prefilled_lbl: "نص الرسالة المجهز للواتساب:",
    contact_editable_hint: "يمكنك تعديل النص قبل الإرسال",
    contact_send_btn: "فتح واتساب وإرسال الرسالة فوراً",
    contact_privacy_note: "🔒 محادثة خاصة ومباشرة مع Mahmoud Mohasseb. رد شخصي ومباشر بدون بوتات.",

    // Floating WhatsApp
    floating_title: "متصل الآن على واتساب",
    floating_desc: "👋 مرحباً! تواصل معي مباشرة لمناقشة فرص الدعم الفني، استشارات الذكاء الاصطناعي، أو الأتمتة البرمجية.",
    floating_direct_btn: "بدء محادثة واتساب مباشرة",
    floating_button_label: "محادثة واتساب سريعة",

    // Footer
    footer_desc: "دعم عمليات Microsoft EMEA والمنصات الضخمة، وبناء حلول الذكاء الاصطناعي المتطورة باستخدام Claude 3.7 و Cursor و Antigravity.",
    footer_nav: "روابط سريعة",
    footer_expertise: "التخصصات",
    footer_direct: "قنوات التواصل",
    footer_rights: "جميع الحقوق محفوظة. تم التطوير باستخدام Next.js و Tailwind CSS وتقنيات البرمجة بالذكاء الاصطناعي.",
    footer_back_top: "العودة للأعلى",
  },
  de: {
    // Nav
    nav_about: "Über mich",
    nav_vibe: "Vibe Coding & KI",
    nav_services: "Dienstleistungen",
    nav_experience: "Erfahrung",
    nav_projects: "Projekte",
    nav_tech: "Tech-Stack",
    nav_certs: "Zertifikate",
    nav_contact: "Kontakt",
    nav_resume: "Lebenslauf PDF",
    nav_whatsapp: "WhatsApp",
    nav_pro_badge: "PRO",
    nav_subtitle: "Technical Support Specialist & AI Vibe Coding Pioneer",

    // Hero
    hero_badge: "Anthropic KI-zertifiziert & Genpact Lean-Spezialist",
    hero_title_prefix: "Technischer Support Spezialist &",
    hero_title_highlight: "KI Vibe Coding",
    hero_title_suffix: "Pionier",
    hero_desc: "Optimierung von Unternehmens-Support und Websystemen durch Incident Management (Tier 1/2/3), Lean-Automatisierung und 10x KI-gestützte Entwicklung mit Claude 3.7 Sonnet, Cursor AI Composer & Google Antigravity.",
    hero_bullet_1: "Microsoft EMEA Ressourcen- & Eskalationsmanagement",
    hero_bullet_2: "5+ Jahre Full-Stack React & Next.js Debugging",
    hero_bullet_3: "75% Zeitersparnis durch Google Apps Script Hubs",
    hero_bullet_4: "Lean-zertifiziertes Value Stream Mapping & 5-Why RCA",
    hero_chat_whatsapp: "WhatsApp Chat starten",
    hero_explore_vibe: "Vibe Coding erkunden",
    hero_resume_pdf: "Lebenslauf (PDF)",
    hero_available: "Verfügbar für Remote / Vor-Ort",
    hero_quick_connect: "Direktkontakt →",
    hero_trusted_by: "Unterstützte Unternehmensplattformen & Zertifizierungen",
    hero_status: "Live Status",
    hero_location: "Bukarest, Rumänien",

    // Metrics
    metric_1_val: "5+ Jahre",
    metric_1_lbl: "Enterprise Support & Web Dev",
    metric_1_sub: "Microsoft EMEA & High-Volume Apps",
    metric_2_val: "75%",
    metric_2_lbl: "Berichtszeit eingespart",
    metric_2_sub: "Automatisiert über Google Apps Script",
    metric_3_val: "40%",
    metric_3_lbl: "Incident-Tickets reduziert",
    metric_3_sub: "Durch tiefe API- & State-Diagnostik",
    metric_4_val: "10x",
    metric_4_lbl: "Vibe Coding Geschwindigkeit",
    metric_4_sub: "Claude 3.7, Cursor & Antigravity Workflows",
    metric_5_val: "99.4%",
    metric_5_lbl: "SLA- & KPI-Einhaltung",
    metric_5_sub: "Strenge Enterprise-Turnaround-Benchmarks",

    // Vibe Section
    vibe_badge: "Next-Gen Software-Engineering",
    vibe_title_prefix: "Vibe Coding &",
    vibe_title_highlight: "KI-beschleunigte Entwicklung",
    vibe_desc: "Kombination aus über 5 Jahren technischer Support-Erfahrung und Full-Stack-Debugging mit autonomen KI-Agenten (Claude 3.7, Cursor Composer, Google Antigravity) für maximale Entwicklungsgeschwindigkeit.",
    vibe_tab_matrix: "KI-Toolchain Matrix",
    vibe_tab_workflow: "4-Stufen Vibe-Workflow",
    vibe_tab_comparison: "Traditionell vs. Vibe Coding",
    vibe_op_role: "Operative Rolle",
    vibe_capabilities: "Schlüsselfähigkeiten & Methoden",
    vibe_validated: "In Produktionsumgebungen erprobt",
    vibe_request_btn: "KI-Beratung anfragen →",

    // Services
    services_badge: "Kernkompetenzen & Lösungen",
    services_title_prefix: "Enterprise IT-Operationen &",
    services_title_highlight: "KI-Engineering",
    services_desc: "Hochwirksame technische Lösungen für Unternehmens-IT-Plattformen, SaaS-Teams und kundenorientierte Servicebereiche.",
    services_inquire: "Dienstleistung anfragen",

    // Projects & RCA
    projects_badge: "Technische Projekte & Automatisierung",
    projects_title_prefix: "Ausgewählte",
    projects_title_highlight: "Fallstudien & Projekte",
    projects_desc: "Reale Automatisierungsplattformen, tiefgreifende Diagnosen und KI-gestützte Incident-Triage-Systeme.",
    projects_innovations: "Kerninnovationen:",
    rca_title: "Interaktiver KI-RCA & Incident-Simulator",
    rca_desc: "Wählen Sie einen realen Produktionsfehler aus, um zu sehen, wie Mahmoud Mohasseb diesen mittels Vibe Coding & 5-Why-Analyse löst.",
    rca_select_lbl: "Incident-Szenario auswählen:",
    rca_click_run: "Ausführen",
    rca_console_ready: "BEREIT",
    rca_console_analyzing: "Claude 3.7 Ursachenanalyse & DevTools-Diagnose läuft...",
    rca_console_placeholder: "Klicken Sie auf ein Szenario links, um die Live-Diagnose zu starten.",

    // Experience
    exp_badge: "Bewährte Enterprise-Erfahrung",
    exp_title_prefix: "Beruflicher",
    exp_title_highlight: "Werdegang",
    exp_desc: "Unterstützung von Microsoft EMEA Service-Engagements, Großplattformen (Bolt / Genpact) und modernen Webanwendungen.",
    exp_focus: "Hauptfokus:",
    exp_deliverables: "Wichtige Ergebnisse & Geschäftsauswirkungen",
    exp_view_details: "Details anzeigen",
    exp_collapse_details: "Details einklappen",

    // Tech Stack
    tech_badge: "Kompetenzmatrix",
    tech_title_prefix: "Technische Fähigkeiten &",
    tech_title_highlight: "Tool-Ökosystem",
    tech_desc: "Umfassende Übersicht über alle Diagnosetools, Frameworks, Skriptsprachen und KI-Workflows.",
    tech_all: "Alle Fähigkeiten",
    tech_search_placeholder: "Fähigkeit oder Tool suchen...",

    // Certifications & Education
    cert_badge: "Verifizierte Qualifikationen",
    cert_title_prefix: "Zertifikate, Lizenzen &",
    cert_title_highlight: "Ausbildung",
    cert_desc: "Kontinuierliche Weiterbildung in KI-Frameworks, Lean-Transformation und moderner Softwarearchitektur.",
    cert_licenses_title: "Berufliche Zertifikate & Lizenzen",
    cert_verified: "Verifiziert",
    edu_title: "Akademische Ausbildung",
    lang_title: "Sprachkenntnisse & Kommunikation",
    lang_note: "⭐ Verhandlungssicher bei grenzüberschreitenden technischen Eskalationen im gesamten EMEA-Raum.",

    // Contact
    contact_badge: "Antwortzeit unter 1 Stunde",
    contact_title_prefix: "Direktkontakt mit",
    contact_title_highlight: "Mahmoud Mohasseb",
    contact_desc: "Kontaktieren Sie mich direkt auf WhatsApp für schnelle Antworten, buchen Sie eine KI-Architekturberatung oder besprechen Sie Vollzeitpositionen.",
    contact_phone_lbl: "Telefon",
    contact_email_lbl: "E-Mail",
    contact_call: "Anrufen",
    contact_mail: "E-Mail senden",
    contact_resume_title: "Vollständiger Lebenslauf",
    contact_resume_sub: "PDF • Verifizierte Qualifikationen 2026",
    contact_download_btn: "PDF herunterladen",
    contact_composer_title: "WhatsApp Schnellnachricht-Generator",
    contact_reason_lbl: "Kontaktgrund auswählen:",
    contact_prefilled_lbl: "Vorbereitete WhatsApp-Nachricht:",
    contact_editable_hint: "Vor dem Senden bearbeitbar",
    contact_send_btn: "WhatsApp öffnen & Nachricht senden",
    contact_privacy_note: "🔒 Direkter privater Kanal zu Mahmoud Mohasseb. Keine Bots, persönliche Antwort.",

    // Floating WhatsApp
    floating_title: "Online auf WhatsApp",
    floating_desc: "👋 Hallo! Schreiben Sie mir direkt für Support-Rollen, KI Vibe Coding Beratungen oder Workflow-Automatisierung.",
    floating_direct_btn: "Direkten WhatsApp-Chat starten",
    floating_button_label: "WhatsApp Direkt-Chat",

    // Footer
    footer_desc: "Support für Microsoft EMEA, Großanwendungen und Entwicklung zukunftsweisender KI-Workflows mit Claude 3.7, Cursor und Antigravity.",
    footer_nav: "Navigation",
    footer_expertise: "Fachbereiche",
    footer_direct: "Direktkanäle",
    footer_rights: "Alle Rechte vorbehalten. Erstellt mit Next.js, Tailwind CSS und KI Vibe Coding Workflows.",
    footer_back_top: "Nach oben",
  },
  ro: {
    // Nav
    nav_about: "Despre Mine",
    nav_vibe: "Vibe Coding & AI",
    nav_services: "Servicii",
    nav_experience: "Experiență",
    nav_projects: "Proiecte",
    nav_tech: "Competențe & Stack",
    nav_certs: "Certificări",
    nav_contact: "Contact",
    nav_resume: "CV în format PDF",
    nav_whatsapp: "WhatsApp",
    nav_pro_badge: "PRO",
    nav_subtitle: "Technical Support Specialist & AI Vibe Coding Pioneer",

    // Hero
    hero_badge: "Certificat Anthropic AI & Specialist Genpact Lean",
    hero_title_prefix: "Specialist Suport Tehnic &",
    hero_title_highlight: "AI Vibe Coding",
    hero_title_suffix: "Pionier",
    hero_desc: "Optimizarea operațiunilor de suport enterprise și a sistemelor web prin Rezolvarea Incidentelor Tier 1/2/3, Automatizare Lean și Dezvoltare Asistată de AI de 10x (Claude 3.7 Sonnet, Cursor AI Composer și Google Antigravity).",
    hero_bullet_1: "Guvernanță Operațională & Escaladări Microsoft EMEA",
    hero_bullet_2: "5+ Ani Experiență Full-Stack React & Next.js Debugging",
    hero_bullet_3: "75% Timp Economisit prin Hub-uri Google Apps Script",
    hero_bullet_4: "Certificat Lean: Value Stream Mapping & 5-Why RCA",
    hero_chat_whatsapp: "Conversație pe WhatsApp",
    hero_explore_vibe: "Explorează Vibe Coding",
    hero_resume_pdf: "Descarcă CV (PDF)",
    hero_available: "Disponibil Remote / On-Site",
    hero_quick_connect: "Conectare Rapidă →",
    hero_trusted_by: "Ecosisteme Enterprise, Platforme & Certificări",
    hero_status: "Status Live",
    hero_location: "București, România",

    // Metrics
    metric_1_val: "5+ Ani",
    metric_1_lbl: "Suport Enterprise & Web Dev",
    metric_1_sub: "Microsoft EMEA & Aplicații de Volum Mare",
    metric_2_val: "75%",
    metric_2_lbl: "Timp Economisit Raportare",
    metric_2_sub: "Automatizat complet prin Google Apps Script",
    metric_3_val: "40%",
    metric_3_lbl: "Reducere Tichete Incidente",
    metric_3_sub: "Prin Diagnosticare Profundă API & State",
    metric_4_val: "10x",
    metric_4_lbl: "Viteză Vibe Coding",
    metric_4_sub: "Fluxuri Claude 3.7, Cursor & Antigravity",
    metric_5_val: "99.4%",
    metric_5_lbl: "Respectare SLA & KPI",
    metric_5_sub: "Standarde Stricte de Răspuns Enterprise",

    // Vibe Section
    vibe_badge: "Paradigmă de Inginerie Next-Gen",
    vibe_title_prefix: "Vibe Coding &",
    vibe_title_highlight: "Dezvoltare Accelerată prin AI",
    vibe_desc: "Combinarea a peste 5 ani de suport tehnic enterprise și depanare full-stack cu agenți autonomi de codare AI (Claude 3.7 Sonnet, Cursor Composer, Google Antigravity) pentru viteză de execuție de 10x.",
    vibe_tab_matrix: "Matrice Instrumente AI",
    vibe_tab_workflow: "Flux Vibe în 4 Etape",
    vibe_tab_comparison: "Tradițional vs. Vibe Coding",
    vibe_op_role: "Rol Operațional",
    vibe_capabilities: "Capabilități & Metodologii Cheie",
    vibe_validated: "Validat în medii de producție",
    vibe_request_btn: "Solicită Consultanță AI →",

    // Services
    services_badge: "Soluții & Expertiză Cheie",
    services_title_prefix: "Operațiuni Tehnice Enterprise &",
    services_title_highlight: "Inginerie AI",
    services_desc: "Soluții tehnice cu impact ridicat pentru platforme IT enterprise, echipe SaaS dinamice și linii de servicii orientate către clienți.",
    services_inquire: "Solicită Informații",

    // Projects & RCA
    projects_badge: "Proiecte Tehnice & Soluții Operaționale",
    projects_title_prefix: "Studii de",
    projects_title_highlight: "Caz Inginerești",
    projects_desc: "Platforme reale de automatizare, optimizări diagnostice profunde și sisteme inteligente de triere a incidentelor.",
    projects_innovations: "Inovații Cheie:",
    rca_title: "Simulator Interactiv de Diagnoză AI & Incident RCA",
    rca_desc: "Selectează un scenariu de incident din producție pentru a vedea cum Mahmoud Mohasseb îl diagnostichează și îl rezolvă prin Vibe Coding & analiza 5-Why.",
    rca_select_lbl: "Selectează un Scenariu de Incident:",
    rca_click_run: "Rulează Diagnoza",
    rca_console_ready: "PREGĂTIT",
    rca_console_analyzing: "Se execută analiza cauzei rădăcină (RCA) cu Claude 3.7 și DevTools...",
    rca_console_placeholder: "Apasă pe oricare dintre scenariile din stânga pentru a porni simularea live.",

    // Experience
    exp_badge: "Traseu Profesional Enterprise Dovedit",
    exp_title_prefix: "Experiență",
    exp_title_highlight: "Profesională",
    exp_desc: "Suport pentru proiecte Microsoft EMEA, platforme cu volum ridicat (Bolt / Genpact) și arhitecturi moderne de aplicații web.",
    exp_focus: "Focalizare Principală:",
    exp_deliverables: "Realizări Cheie & Impact Operațional",
    exp_view_details: "Vezi Detalii",
    exp_collapse_details: "Restrânge Detalii",

    // Tech Stack
    tech_badge: "Matrice de Competențe",
    tech_title_prefix: "Abilități Tehnice &",
    tech_title_highlight: "Ecosistem de Instrumente",
    tech_desc: "O matrice completă a instrumentelor de diagnostic, framework-urilor, limbajelor și fluxurilor avansate de inteligență artificială.",
    tech_all: "Toate Competențele",
    tech_search_placeholder: "Caută o abilitate sau instrument...",

    // Certifications & Education
    cert_badge: "Calificări Verificate",
    cert_title_prefix: "Licențe, Certificări &",
    cert_title_highlight: "Educație",
    cert_desc: "Perfecționare continuă în framework-uri de inteligență artificială, transformare Lean și arhitectură software modernă.",
    cert_licenses_title: "Licențe & Certificări Profesionale",
    cert_verified: "Verificat",
    edu_title: "Educație Academică & Bază Teoretică",
    lang_title: "Comunicare Multilingvă",
    lang_note: "⭐ Fluent în comunicare tehnică și gestionarea escaladărilor transfrontaliere în întreaga regiune EMEA.",

    // Contact
    contact_badge: "Răspuns Rapid în Sub 1 Oră",
    contact_title_prefix: "Conectează-te Direct cu",
    contact_title_highlight: "Mahmoud Mohasseb",
    contact_desc: "Contactează-mă direct pe WhatsApp pentru un răspuns instant, programează o consultanță de arhitectură AI sau discută despre roluri enterprise full-time.",
    contact_phone_lbl: "Telefon Direct",
    contact_email_lbl: "Email",
    contact_call: "Apelează",
    contact_mail: "Trimite Email",
    contact_resume_title: "CV Complet Disponibil",
    contact_resume_sub: "Format PDF • Calificări Verificate 2026",
    contact_download_btn: "Descarcă PDF",
    contact_composer_title: "Lansator Rapid de Mesaje WhatsApp",
    contact_reason_lbl: "Selectează Motivul Contactului:",
    contact_prefilled_lbl: "Mesaj WhatsApp Pre-Completat:",
    contact_editable_hint: "Editabil înainte de trimitere",
    contact_send_btn: "Deschide WhatsApp & Trimite Mesajul",
    contact_privacy_note: "🔒 Canal privat direct cu Mahmoud Mohasseb. Fără roboți, răspuns uman direct.",

    // Floating WhatsApp
    floating_title: "Online pe WhatsApp",
    floating_desc: "👋 Bună! Scrie-mi direct pentru roluri de suport tehnic, consultanță AI Vibe Coding sau automatizări operaționale.",
    floating_direct_btn: "Deschide Chat Direct pe WhatsApp",
    floating_button_label: "WhatsApp Chat Rapid",

    // Footer
    footer_desc: "Suport pentru operațiuni Microsoft EMEA, platforme de volum ridicat și dezvoltare de fluxuri AI de ultimă generație cu Claude 3.7, Cursor și Antigravity.",
    footer_nav: "Navigare",
    footer_expertise: "Expertiză",
    footer_direct: "Canale Directe",
    footer_rights: "Toate drepturile rezervate. Creat cu Next.js, Tailwind CSS și fluxuri de AI Vibe Coding.",
    footer_back_top: "Înapoi sus",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("preferred_lang") as Language;
    if (saved && (saved === "en" || saved === "ar" || saved === "de" || saved === "ro")) {
      setLanguageState(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred_lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      <div className={language === "ar" ? "font-arabic" : "font-sans"} dir={dir}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
