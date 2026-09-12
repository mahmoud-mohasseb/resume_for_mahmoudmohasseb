"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  MessageCircle,
  FileDown,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  Terminal,
  CheckCircle2,
  Copy,
  Check,
  Mail,
  Phone,
  Layers,
  Activity,
  Cpu,
  Target,
  Crosshair,
  Volume2,
  VolumeX,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { useAudioReader } from "@/context/AudioReaderContext";

export default function HeroSection() {
  const { t, language } = useLanguage();
  const { isReading, toggleReading } = useAudioReader();
  const [copied, setCopied] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);

  // 3D Tilt State for Hero Portrait
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const tickerRoles = [
    "Tier 1/2/3 Technical Support & Incident Commander",
    "Claude 3.7 & Cursor AI Vibe Coding Specialist",
    "Genpact Lean Digital Transformation Practitioner",
    "Microsoft EMEA Operations & Escalation Lead",
    "5+ Years Full-Stack React & Next.js Systems Engineer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerRoles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [tickerRoles.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -10; // Max 10 deg
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[#08090b]">
      {/* Editorial Ambient Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Cyber Horizon Laser Line */}
      <div className="absolute top-28 left-0 right-0 laser-divider opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Live Role Ticker & Pitch */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left rtl:lg:text-right">
            {/* Top Acid Lime Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold acid-badge shadow-[0_0_20px_rgba(212,255,0,0.15)] animate-pulse-slow">
              <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-[#d4ff00]" />
              <span className="font-mono tracking-wide">{t("hero_badge")}</span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f4f4ee] leading-[1.12]">
                {t("hero_title_prefix")}{" "}
                <span className="text-acid-gradient relative inline-block">
                  {t("hero_title_highlight")}
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-[#d4ff00]/40"
                    viewBox="0 0 250 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 9C60 3 190 3 247 9"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                {t("hero_title_suffix")}
              </h1>

              {/* Dynamic Live Role Ticker */}
              <div className="flex items-center justify-center lg:justify-start rtl:lg:justify-start gap-2 pt-1 font-mono text-xs sm:text-sm text-[#d4ff00]">
                <Terminal className="w-4 h-4 text-[#d4ff00] shrink-0" />
                <span className="text-[#8e94a0] font-bold">&gt;</span>
                <span className="text-[#f4f4ee] font-medium transition-all duration-300">
                  {tickerRoles[tickerIndex]}
                </span>
                <span className="w-2 h-4 bg-[#d4ff00] animate-pulse inline-block" />
              </div>
            </div>

            {/* Subtitle / Focus Areas */}
            <p className="text-base sm:text-lg text-[#8e94a0] font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t("hero_desc")}
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left rtl:text-right">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#111317] border border-white/10 hover:border-[#d4ff00]/40 transition-all">
                <CheckCircle2 className="w-4 h-4 text-[#d4ff00] shrink-0" />
                <span className="text-xs text-[#f4f4ee]">{t("hero_bullet_1")}</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#111317] border border-white/10 hover:border-[#d4ff00]/40 transition-all">
                <CheckCircle2 className="w-4 h-4 text-[#d4ff00] shrink-0" />
                <span className="text-xs text-[#f4f4ee]">{t("hero_bullet_2")}</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#111317] border border-white/10 hover:border-[#ff6b35]/40 transition-all">
                <CheckCircle2 className="w-4 h-4 text-[#ff6b35] shrink-0" />
                <span className="text-xs text-[#f4f4ee]">{t("hero_bullet_3")}</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#111317] border border-white/10 hover:border-[#d4ff00]/40 transition-all">
                <CheckCircle2 className="w-4 h-4 text-[#d4ff00] shrink-0" />
                <span className="text-xs text-[#f4f4ee]">{t("hero_bullet_4")}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start rtl:lg:justify-start gap-4 pt-3">
              {/* WhatsApp Direct CTA */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold text-black bg-[#d4ff00] hover:bg-[#e0ff33] border border-[#d4ff00] shadow-[0_0_30px_rgba(212,255,0,0.35)] hover:shadow-[0_0_45px_rgba(212,255,0,0.55)] transition-all transform hover:-translate-y-0.5 group"
              >
                <MessageCircle className="w-5 h-5 fill-current text-black group-hover:scale-110 transition-transform" />
                <span>{t("hero_chat_whatsapp")}</span>
                <span className="text-xs px-2 py-0.5 rounded-lg bg-black text-[#d4ff00] font-mono">
                  {PERSONAL_INFO.phoneDisplay}
                </span>
              </a>

              {/* Vibe Coding Jump */}
              <a
                href="#vibe-coding"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-semibold text-[#f4f4ee] bg-[#161920] border border-white/15 hover:border-[#d4ff00] hover:text-[#d4ff00] transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#d4ff00]" />
                <span>{t("hero_explore_vibe")}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </a>

              {/* Resume Download */}
              <a
                href={PERSONAL_INFO.cvDownload}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl text-sm font-semibold text-[#8e94a0] bg-[#111317] border border-white/10 hover:border-white/20 hover:text-white transition-all"
              >
                <FileDown className="w-4 h-4 text-[#8e94a0]" />
                <span>{t("hero_resume_pdf")}</span>
              </a>

              {/* AI Voice Resume Narrator Trigger */}
              <button
                type="button"
                onClick={toggleReading}
                className={`inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl text-sm font-semibold border transition-all cursor-pointer ${
                  isReading
                    ? "bg-[#d4ff00]/20 border-[#d4ff00] text-[#d4ff00] shadow-[0_0_20px_rgba(212,255,0,0.3)]"
                    : "bg-[#111317] border-white/10 text-[#8e94a0] hover:text-[#d4ff00] hover:border-[#d4ff00]/40"
                }`}
                title={isReading ? "Mute AI Audio Resume" : "Listen to AI Audio Resume"}
              >
                {isReading ? (
                  <>
                    <Volume2 className="w-4 h-4 animate-pulse text-[#d4ff00]" />
                    <span className="text-[#d4ff00] font-mono text-xs">Mute Narration</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span className="font-mono text-xs">Listen (AI Voice)</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Contact Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start rtl:lg:justify-start gap-4 text-xs text-[#8e94a0] font-mono">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111317] border border-white/10 hover:border-[#d4ff00]/40 hover:text-[#f4f4ee] transition-colors cursor-pointer"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-[#d4ff00]" />
                <span>{PERSONAL_INFO.email}</span>
                {copied ? <Check className="w-3.5 h-3.5 text-[#d4ff00]" /> : <Copy className="w-3.5 h-3.5 text-[#8e94a0]" />}
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111317] border border-white/10">
                <span className="text-[#8e94a0]">📍 {t("hero_location")}</span>
              </div>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111317] border border-white/10 hover:border-[#d4ff00]/40 hover:text-[#f4f4ee] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4ff00]" />
                <span>{PERSONAL_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Unique Portrait Image (Asset Rule: exactly once on the website) */}
          <div className="lg:col-span-5 flex justify-center perspective-[1000px]">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
                transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-md group"
            >
              {/* Outer Dynamic Glow Aura */}
              <div
                className={`absolute -inset-3 bg-gradient-to-r from-[#d4ff00]/30 via-[#ff6b35]/25 to-[#4285f4]/30 rounded-3xl blur-2xl pointer-events-none transition-opacity duration-500 ${
                  isHovered ? "opacity-90" : "opacity-40"
                }`}
              />

              {/* Main Futuristic Pedestal Card */}
              <div className="relative rounded-3xl bg-[#111317] border border-white/15 p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.9)] hud-corner group-hover:border-[#d4ff00]/50 transition-colors duration-300">
                {/* HUD Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d4ff00]" />
                    <span className="text-[11px] font-mono text-[#8e94a0] ml-2">
                      {isHovered ? "HOLOGRAPHIC_TARGET_LOCKED" : "SYSTEM_OPERATIONAL"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#d4ff00]/10 text-[#d4ff00] border border-[#d4ff00]/30">
                    <Activity className="w-3 h-3 text-[#d4ff00] animate-pulse" />
                    <span>{t("hero_status")}</span>
                  </div>
                </div>

                {/* Mahmoud's Single Unique Portrait Image Frame with 3D Depth & Zoom-Out Framing */}
                <div className="relative mx-auto w-52 h-52 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-2 border-white/20 group-hover:border-[#d4ff00] bg-[#090c12] shadow-[0_0_40px_rgba(0,0,0,0.85)] mb-5 transition-all duration-500 flex items-center justify-center p-2">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={PERSONAL_INFO.profileImage}
                      alt="Mahmoud Mohasseb"
                      fill
                      priority
                      className="object-cover object-[50%_12%] scale-[0.88] group-hover:scale-[0.94] group-hover:contrast-[1.05] transition-all duration-700"
                    />
                    
                    {/* Subtle Gradient Shadow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090c12] via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Laser Scanner Line (Intensifies on hover) */}
                    <div
                      className={`absolute inset-x-0 h-0.5 bg-[#d4ff00] shadow-[0_0_12px_#d4ff00] animate-scanner transition-opacity ${
                        isHovered ? "opacity-100" : "opacity-40"
                      }`}
                    />

                    {/* Corner Target Reticles */}
                    <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#d4ff00] opacity-90" />
                    <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#d4ff00] opacity-90" />
                    <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#d4ff00] opacity-90" />
                    <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#d4ff00] opacity-90" />

                    {/* Live Biometric Tag Overlay */}
                    <div
                      className={`absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-[#d4ff00]/60 text-[9px] font-mono text-[#d4ff00] font-bold tracking-wider transition-all duration-300 ${
                        isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      }`}
                    >
                      BIOMETRIC_VERIFIED // 2026
                    </div>
                  </div>
                </div>

                {/* Name & Role (Strict Verbatim Name Rule: Mahmoud Mohasseb) */}
                <div className="text-center space-y-1">
                  <h3 className="text-2xl font-extrabold text-[#f4f4ee] tracking-tight group-hover:text-white transition-colors">
                    Mahmoud Mohasseb
                  </h3>
                  <p className="text-xs font-mono text-[#d4ff00] font-semibold">
                    Content Operations Specialist & Lean Innovator
                  </p>
                  <p className="text-xs text-[#8e94a0]">Genpact • Ex-Majorel (Microsoft EMEA) • Ex-Arvato (Bolt)</p>
                </div>

                {/* Live Availability Status Bar */}
                <div className="mt-4 p-3 rounded-xl bg-[#161920] border border-white/10 group-hover:border-[#d4ff00]/30 flex items-center justify-between gap-2 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4ff00] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#d4ff00]"></span>
                    </span>
                    <span className="text-xs font-medium text-[#f4f4ee]">{t("hero_available")}</span>
                  </div>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#d4ff00] hover:underline flex items-center gap-1 font-mono"
                  >
                    {t("hero_quick_connect")}
                  </a>
                </div>

                {/* Micro Badges */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/10 text-center font-mono">
                  <div className="p-2 rounded-xl bg-[#161920] border border-white/5 hover:border-[#ff6b35]/40 transition-colors">
                    <p className="text-[9px] text-[#8e94a0] uppercase">Claude AI</p>
                    <p className="text-xs font-bold text-[#ff6b35]">3.7 Sonnet</p>
                  </div>
                  <div className="p-2 rounded-xl bg-[#161920] border border-white/5 hover:border-[#d4ff00]/40 transition-colors">
                    <p className="text-[9px] text-[#8e94a0] uppercase">Cursor IDE</p>
                    <p className="text-xs font-bold text-[#d4ff00]">Composer</p>
                  </div>
                  <div className="p-2 rounded-xl bg-[#161920] border border-white/5 hover:border-white/30 transition-colors">
                    <p className="text-[9px] text-[#8e94a0] uppercase">Methodology</p>
                    <p className="text-xs font-bold text-[#f4f4ee]">Lean & RCA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Logos / Trust Strip */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-xs uppercase tracking-widest text-[#8e94a0] font-mono mb-6">
            {t("hero_trusted_by")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-85">
            <span className="font-bold text-xs sm:text-sm tracking-wider text-[#f4f4ee] px-3.5 py-1.5 rounded-xl bg-[#111317] border border-white/10">
              MICROSOFT EMEA
            </span>
            <span className="font-bold text-xs sm:text-sm tracking-wider text-[#f4f4ee] px-3.5 py-1.5 rounded-xl bg-[#111317] border border-white/10">
              GENPACT LEAN
            </span>
            <span className="font-bold text-xs sm:text-sm tracking-wider text-[#f4f4ee] px-3.5 py-1.5 rounded-xl bg-[#111317] border border-white/10">
              BOLT APPLICATION
            </span>
            <span className="font-bold text-xs sm:text-sm tracking-wider text-[#ff6b35] px-3.5 py-1.5 rounded-xl bg-[#ff6b35]/10 border border-[#ff6b35]/30">
              ANTHROPIC AI FOUNDATIONS
            </span>
            <span className="font-bold text-xs sm:text-sm tracking-wider text-[#d4ff00] px-3.5 py-1.5 rounded-xl bg-[#d4ff00]/10 border border-[#d4ff00]/30">
              REACT & NEXT.JS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
