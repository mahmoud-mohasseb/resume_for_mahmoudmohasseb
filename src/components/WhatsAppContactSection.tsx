"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  FileDown,
  Copy,
  Check,
  Send,
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowRight,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppContactSection() {
  const { t, language } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [customMsg, setCustomMsg] = useState("");
  const [selectedTopicIdx, setSelectedTopicIdx] = useState(0);

  const predefinedTopics = [
    {
      title: language === "ar" ? "💼 فرصة عمل مؤسسية / وظيفة دائمة" : language === "ro" ? "💼 Oportunitate Job Enterprise / Full-Time" : language === "de" ? "💼 Enterprise Jobangebot / Festanstellung" : "💼 Enterprise Job Opportunity",
      msg: "Hi Mahmoud, I reviewed your profile and resume. We have an exciting Technical Support / Engineering opportunity and would love to discuss it with you!",
    },
    {
      title: language === "ar" ? "🤖 استشارة في Vibe Coding والذكاء الاصطناعي" : language === "ro" ? "🤖 Consultanță AI & Vibe Coding" : language === "de" ? "🤖 Vibe Coding & KI-Beratung" : "🤖 Vibe Coding & AI Consultation",
      msg: "Hi Mahmoud, I saw your expertise in Claude 3.7, Cursor AI, and Antigravity. I would like to consult with you on integrating AI vibe coding into our workflow.",
    },
    {
      title: language === "ar" ? "⚡ أتمتة العمليات و Google Apps Script" : language === "ro" ? "⚡ Automatizare Operațională & Google Apps Script" : language === "de" ? "⚡ Workflow-Automatisierung & Google Apps Script" : "⚡ Workflow Automation & Google Apps Script",
      msg: "Hi Mahmoud, we have operational reporting bottlenecks and would like to build an automated dashboard/hub like your Genpact WBR project.",
    },
    {
      title: language === "ar" ? "🛠️ الدعم الفني Tier 1/2/3 وتصحيح الأعطال" : language === "ro" ? "🛠️ Suport Tehnic Tier 1/2/3 & Incident RCA" : language === "de" ? "🛠️ Tier 1/2/3 Support & Incident-RCA" : "🛠️ Tier 1/2/3 Support & Incident RCA",
      msg: "Hi Mahmoud, we need specialized support engineering for our cloud web application and Microsoft EMEA-aligned service lines.",
    },
  ];

  const handleCopy = (type: "email" | "phone") => {
    if (type === "email") {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      navigator.clipboard.writeText(PERSONAL_INFO.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const getWhatsAppLink = () => {
    const textToSend = customMsg.trim() ? customMsg : predefinedTopics[selectedTopicIdx]?.msg;
    return `https://wa.me/40752331545?text=${encodeURIComponent(textToSend)}`;
  };

  return (
    <section id="contact" className="relative py-24 bg-[#08090b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold acid-badge font-mono">
            <MessageCircle className="w-3.5 h-3.5 text-[#d4ff00]" />
            <span>{t("contact_badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f4ee] tracking-tight">
            {t("contact_title_prefix")}{" "}
            <span className="text-acid-gradient">{t("contact_title_highlight")}</span>
          </h2>
          <p className="text-[#8e94a0] text-base sm:text-lg">
            {t("contact_desc")}
          </p>
        </div>

        {/* Main Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14 items-stretch">
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 rounded-3xl bg-[#111317] border border-white/15 p-7 flex flex-col justify-between shadow-2xl hud-corner">
            <div className="space-y-6">
              {/* Profile Card Header with Monogram Badge (Asset rule: no repeated photos) */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-[#161920] border-2 border-[#d4ff00] flex items-center justify-center font-mono font-bold text-lg text-[#d4ff00] shadow-md shrink-0">
                  MM
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Mahmoud Mohasseb
                  </h3>
                  <p className="text-xs font-mono text-[#d4ff00]">Technical Support & AI Pioneer</p>
                  <p className="text-xs text-[#8e94a0]">Bucharest, Romania (EET / UTC+2)</p>
                </div>
              </div>

              {/* Direct channels */}
              <div className="space-y-3 font-mono">
                {/* WhatsApp Channel */}
                <div className="p-4 rounded-2xl bg-[#161920] border border-[#d4ff00]/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#d4ff00]/10 border border-[#d4ff00]/30 flex items-center justify-center text-[#d4ff00] shrink-0">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#d4ff00] uppercase font-bold">WhatsApp (Direct)</span>
                      <p className="text-sm font-bold text-white">{PERSONAL_INFO.phoneDisplay}</p>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#d4ff00] text-black hover:bg-[#e0ff33] transition-colors shrink-0"
                  >
                    Chat
                  </a>
                </div>

                {/* Phone Call */}
                <div className="p-4 rounded-2xl bg-[#161920] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#8e94a0] uppercase">{t("contact_phone_lbl")}</span>
                      <p className="text-sm font-bold text-white">{PERSONAL_INFO.phoneDisplay}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleCopy("phone")}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300"
                      title="Copy phone number"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-[#d4ff00]" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      {t("contact_call")}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-[#161920] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#8e94a0] uppercase">{t("contact_email_lbl")}</span>
                      <p className="text-sm font-bold text-white truncate max-w-[150px] sm:max-w-none">{PERSONAL_INFO.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleCopy("email")}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300"
                      title="Copy email"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-[#d4ff00]" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      {t("contact_mail")}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Download Action in Card */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white">{t("contact_resume_title")}</p>
                <p className="text-[11px] text-[#8e94a0] font-mono">{t("contact_resume_sub")}</p>
              </div>
              <a
                href={PERSONAL_INFO.cvDownload}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#f4f4ee] bg-[#161920] border border-white/15 hover:border-[#d4ff00] hover:text-[#d4ff00] transition-colors font-mono"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>{t("contact_download_btn")}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Instant WhatsApp Pre-Filled Message Composer */}
          <div className="lg:col-span-7 rounded-3xl bg-[#111317] border border-white/15 p-7 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#d4ff00] animate-pulse" />
                  <h3 className="text-lg font-bold text-white">{t("contact_composer_title")}</h3>
                </div>
                <span className="text-xs font-mono text-[#d4ff00] font-bold px-2.5 py-1 rounded-full bg-[#161920] border border-[#d4ff00]/30">
                  {PERSONAL_INFO.phoneDisplay}
                </span>
              </div>

              {/* Step 1: Select Topic */}
              <div className="space-y-3 mb-6">
                <label className="text-xs font-mono uppercase tracking-wider text-[#8e94a0] block">
                  {t("contact_reason_lbl")}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {predefinedTopics.map((topic, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSelectedTopicIdx(idx);
                        setCustomMsg(topic.msg);
                      }}
                      className={`p-3.5 rounded-xl text-left rtl:text-right text-xs font-medium transition-all border ${
                        selectedTopicIdx === idx
                          ? "bg-[#161920] border-[#d4ff00] text-[#f4f4ee] shadow-sm"
                          : "bg-[#090b0e] border-white/10 text-[#8e94a0] hover:border-white/20"
                      }`}
                    >
                      {topic.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Message preview or edit */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#8e94a0] block">
                    {t("contact_prefilled_lbl")}
                  </label>
                  <span className="text-[10px] font-mono text-[#8e94a0]">{t("contact_editable_hint")}</span>
                </div>
                <textarea
                  rows={4}
                  value={customMsg || predefinedTopics[selectedTopicIdx]?.msg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  className="w-full p-4 rounded-xl text-sm bg-[#090b0e] border border-white/10 text-[#f4f4ee] placeholder-[#8e94a0] focus:outline-none focus:border-[#d4ff00] transition-colors font-sans"
                  placeholder="Type your message..."
                />
              </div>
            </div>

            {/* Step 3: Launch Button */}
            <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl text-base font-bold text-black bg-[#d4ff00] hover:bg-[#e0ff33] border border-[#d4ff00] shadow-[0_0_35px_rgba(212,255,0,0.3)] flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{t("contact_send_btn")}</span>
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </a>

              <p className="text-center text-[11px] text-[#8e94a0] font-mono">
                {t("contact_privacy_note")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
