"use client";

import React from "react";
import {
  Award,
  GraduationCap,
  Languages as LangIcon,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CertificationsEducation() {
  const { t, language } = useLanguage();

  const certsData = [
    {
      name: "Lean Certification (Digital Transformation)",
      issuer: "Genpact",
      date: "Issued 2026",
      credentialId: "2623686",
      description: "Continuous improvement, Value Stream Mapping (VSM), Root Cause Analysis (RCA), operational waste elimination.",
    },
    {
      name: "AI Fluency: Framework & Foundations",
      issuer: "Anthropic",
      date: "Issued 2026",
      description: "AI model concepts, prompt optimization, workflow synthesis, and foundation model operations.",
    },
    {
      name: "Modern Web Development Bootcamp (Full-Stack)",
      issuer: "Udemy",
      date: "Full-Stack Web Development",
      description: "REST architecture, Node.js backend runtimes, database schemas, full lifecycle deployment.",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "Issued Dec 2021",
      description: "Algorithm design, complex data structures, algorithmic debugging, ES6+ standards.",
    },
    {
      name: "ReactJS, Redux & React Router Architecture",
      issuer: "Udemy",
      date: "Issued 2021",
      description: "State management diagnostics, component lifecycle optimization, SPA architecture.",
    },
    {
      name: "JavaScript: Understanding the Weird Parts",
      issuer: "Udemy",
      date: "Advanced JS Engine Internals",
      description: "Execution contexts, closures, prototypal inheritance, asynchronous event loops.",
    },
  ];

  const educationData = [
    {
      degree: "Bachelor's Degree in Commerce",
      institution: "Ain Shams University",
      location: "Cairo, Egypt",
      period: "2006 – 2010",
      focus: "Focus on Business Operations, Accounting Standards, and Financial Systems.",
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Advanced Technical School for IT",
      location: "Cairo, Egypt",
      period: "2000 – 2005",
      focus: "Foundations in computer hardware, networking concepts, OS, and systems logic.",
    },
  ];

  const languagesData = [
    { name: "Arabic", level: "Native / Bilingual Proficiency", progress: 100 },
    { name: "English", level: "Full Professional Working Proficiency", progress: 95 },
    { name: "German", level: "Elementary Proficiency (A1/A2)", progress: 40 },
  ];

  return (
    <section id="certifications" className="relative py-24 bg-[#08090b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold acid-badge font-mono">
            <Award className="w-3.5 h-3.5 text-[#d4ff00]" />
            <span>{t("cert_badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f4ee] tracking-tight">
            {t("cert_title_prefix")}{" "}
            <span className="text-acid-gradient">{t("cert_title_highlight")}</span>
          </h2>
          <p className="text-[#8e94a0] text-base sm:text-lg">
            {t("cert_desc")}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mt-14">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-mono">
            <Award className="w-5 h-5 text-[#d4ff00]" />
            <span>{t("cert_licenses_title")}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certsData.map((cert, idx) => (
              <div
                key={cert.name}
                className="p-6 rounded-2xl bg-[#111317] border border-white/10 hover:border-[#d4ff00]/40 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#d4ff00] font-mono">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] font-mono text-[#8e94a0] px-2 py-0.5 rounded bg-[#161920] border border-white/5">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#f4f4ee] group-hover:text-[#d4ff00] transition-colors">
                    {cert.name}
                  </h4>

                  {cert.credentialId && (
                    <p className="text-[11px] font-mono text-[#8e94a0] mt-1">
                      Credential ID: <span className="text-[#f4f4ee]">{cert.credentialId}</span>
                    </p>
                  )}

                  <p className="text-xs text-[#8e94a0] leading-relaxed mt-3">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#8e94a0]">
                  <span className="flex items-center gap-1 text-[#d4ff00]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {t("cert_verified")}
                  </span>
                  <span>#{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Languages Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16">
          {/* Education */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
              <GraduationCap className="w-5 h-5 text-[#d4ff00]" />
              <span>{t("edu_title")}</span>
            </h3>

            <div className="space-y-4">
              {educationData.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-5 rounded-2xl bg-[#111317] border border-white/10 hover:border-[#d4ff00]/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-base font-bold text-[#f4f4ee]">{edu.degree}</h4>
                    <span className="text-xs font-mono text-[#d4ff00] font-semibold">{edu.period}</span>
                  </div>
                  <p className="text-xs font-medium text-[#8e94a0]">
                    {edu.institution} • <span>{edu.location}</span>
                  </p>
                  <p className="text-xs text-[#8e94a0] mt-2">{edu.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
              <LangIcon className="w-5 h-5 text-[#d4ff00]" />
              <span>{t("lang_title")}</span>
            </h3>

            <div className="p-6 rounded-2xl bg-[#111317] border border-white/10 space-y-5">
              {languagesData.map((lang) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{lang.name}</span>
                    <span className="text-[#8e94a0] font-mono">{lang.level}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#161920] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#d4ff00]"
                      style={{ width: `${lang.progress}%` }}
                    />
                  </div>
                </div>
              ))}
              <p className="text-[11px] text-[#8e94a0] font-mono pt-2 border-t border-white/10">
                {t("lang_note")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
