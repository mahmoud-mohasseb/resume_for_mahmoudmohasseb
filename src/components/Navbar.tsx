"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  MessageCircle,
  FileDown,
  Menu,
  X,
  Sparkles,
  Volume2,
  VolumeX,
  Terminal,
  ArrowUpRight,
  Clock,
  Shield,
  Activity,
  Layers,
  Cpu,
  Mail,
  Phone,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { useAudioReader } from "@/context/AudioReaderContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const { t, language } = useLanguage();
  const {
    isReading,
    isPaused,
    toggleReading,
    startReading,
    stopReading,
    isSupported,
  } = useAudioReader();
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(0);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Europe/Bucharest",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mega menu is open and listen for Escape key
  useEffect(() => {
    if (megaMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMegaMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [megaMenuOpen]);

  const playCyberSound = useCallback(
    (freq = 700) => {
      if (!isReading || typeof window === "undefined") return;
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq / 2, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } catch (e) {
        // Audio context restricted
      }
    },
    [isReading]
  );

  const handleNavClick = (href: string) => {
    playCyberSound(800);
    setMegaMenuOpen(false);

    // Smooth scroll to section
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  };

  const navItems = [
    {
      id: "about",
      num: "01",
      title: t("nav_about"),
      desc: "Background, Microsoft EMEA governance & Lean transformation foundation.",
      metric: "5+ Years Web & Support",
      tag: "OVERVIEW",
      href: "#about",
    },
    {
      id: "vibe-coding",
      num: "02",
      title: t("nav_vibe"),
      desc: "Autonomous AI development with Claude 3.7 Sonnet, Cursor Composer & Antigravity.",
      metric: "10x Dev Velocity",
      tag: "AI TOOLCHAIN",
      href: "#vibe-coding",
    },
    {
      id: "services",
      num: "03",
      title: t("nav_services"),
      desc: "Enterprise Tier 1/2/3 Support, API diagnostics & Google Apps Script automation hubs.",
      metric: "6 Core Solutions",
      tag: "SOLUTIONS",
      href: "#services",
    },
    {
      id: "experience",
      num: "04",
      title: t("nav_experience"),
      desc: "Genpact, Majorel (Microsoft EMEA), Arvato (Bolt) & Freelance engineering.",
      metric: "99.4% SLA Benchmark",
      tag: "TRACK RECORD",
      href: "#experience",
    },
    {
      id: "projects",
      num: "05",
      title: t("nav_projects"),
      desc: "Enterprise WBR Dashboard Hub, Redux State Debugger & Live RCA Simulator.",
      metric: "75% Time Saved",
      tag: "CASE STUDIES",
      href: "#projects",
    },
    {
      id: "tech-stack",
      num: "06",
      title: t("nav_tech"),
      desc: "Comprehensive diagnostic utilities, modern frameworks, databases & AI tools.",
      metric: "35+ Technologies",
      tag: "COMPETENCIES",
      href: "#tech-stack",
    },
    {
      id: "certifications",
      num: "07",
      title: t("nav_certs"),
      desc: "Genpact Lean ID: 2623686, Anthropic AI Fluency 2026 & Degree in Commerce.",
      metric: "6 Verified Credentials",
      tag: "CREDENTIALS",
      href: "#certifications",
    },
    {
      id: "contact",
      num: "08",
      title: t("nav_contact"),
      desc: "Instant direct WhatsApp launcher, pre-filled inquiry builder & resume download.",
      metric: "+40 752 331 545",
      tag: "FAST DISPATCH",
      href: "#contact",
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? "bg-[#08090b]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Monogram */}
            <Link
              href="/"
              onClick={() => playCyberSound(850)}
              className="flex items-center gap-3 group shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-[#161920] border border-white/10 group-hover:border-[#d4ff00] flex items-center justify-center font-mono font-bold text-sm text-[#f4f4ee] group-hover:text-[#d4ff00] transition-all shadow-md">
                MM
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base text-[#f4f4ee] tracking-tight group-hover:text-[#d4ff00] transition-colors">
                    Mahmoud Mohasseb
                  </span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-[#d4ff00]/10 text-[#d4ff00] border border-[#d4ff00]/30">
                    {t("nav_pro_badge")}
                  </span>
                </div>
                <p className="text-[11px] text-[#8e94a0] font-mono hidden sm:block">
                  {t("nav_subtitle")}
                </p>
              </div>
            </Link>

            {/* Desktop Center Links Preview */}
            <div className="hidden xl:flex items-center gap-6 text-xs font-mono text-[#8e94a0]">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                <Clock className="w-3.5 h-3.5 text-[#d4ff00]" />
                <span>BUCHAREST:</span>
                <span className="text-[#f4f4ee] font-bold">{currentTime || "16:45 EET"}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[#f4f4ee] font-semibold">AVAILABLE FOR DISPATCH</span>
              </div>
            </div>

            {/* Right Action Controls: Language, Sound, WhatsApp & Massive Menu Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Audio Resume Reader Toggle (Speaker) */}
              <button
                type="button"
                onClick={() => {
                  playCyberSound(900);
                  toggleReading();
                }}
                className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl border transition-all cursor-pointer ${
                  isReading
                    ? "bg-[#d4ff00]/20 border-[#d4ff00] text-[#d4ff00] shadow-[0_0_15px_rgba(212,255,0,0.4)]"
                    : "bg-white/5 border-white/10 text-[#8e94a0] hover:text-white hover:border-white/30"
                }`}
                title={
                  isReading
                    ? "Mute AI Resume Reader"
                    : "Unmute to Listen to AI Resume Reader"
                }
                aria-label="Toggle AI Audio Resume Reader"
              >
                {isReading ? (
                  <Volume2 className="w-4 h-4 animate-pulse" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </button>

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Direct WhatsApp Action */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCyberSound(950)}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-black bg-[#d4ff00] hover:bg-[#e0ff33] border border-[#d4ff00] shadow-[0_0_20px_rgba(212,255,0,0.3)] transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>

              {/* Massive Innovative Menu Trigger */}
              <button
                type="button"
                onClick={() => {
                  playCyberSound(800);
                  setMegaMenuOpen((prev) => !prev);
                }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-[#161920] border border-white/15 hover:border-[#d4ff00] text-[#f4f4ee] hover:text-[#d4ff00] transition-all shadow-md group cursor-pointer"
                aria-label="Toggle Studio Mega Menu"
                aria-expanded={megaMenuOpen}
              >
                {megaMenuOpen ? <X className="w-4 h-4 text-[#d4ff00]" /> : <Menu className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                <span className="tracking-wider">{megaMenuOpen ? "CLOSE" : "MENU"}</span>
                <span className="text-[10px] text-[#8e94a0] font-normal hidden sm:inline">[ + ]</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Massive Innovative Full-Screen Mega & Burger Menu */}
      {megaMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#08090b]/98 backdrop-blur-3xl overflow-y-auto animate-in fade-in zoom-in-95 duration-200 flex flex-col justify-between p-4 sm:p-8 lg:p-12"
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
        >
          {/* Menu Top Bar */}
          <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#161920] border border-[#d4ff00]/40 flex items-center justify-center font-mono font-bold text-xs sm:text-sm text-[#d4ff00]">
                MM
              </div>
              <div>
                <span className="font-bold text-base sm:text-lg text-white">Mahmoud Mohasseb</span>
                <p className="text-[10px] sm:text-xs text-[#8e94a0] font-mono">
                  {t("nav_subtitle")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Speaker / Audio Resume Toggle in Menu */}
              <button
                type="button"
                onClick={() => {
                  playCyberSound(900);
                  toggleReading();
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer ${
                  isReading
                    ? "bg-[#d4ff00]/20 border-[#d4ff00] text-[#d4ff00] shadow-[0_0_15px_rgba(212,255,0,0.3)]"
                    : "bg-[#161920] border-white/15 text-[#8e94a0] hover:text-white hover:border-white/30"
                }`}
                title={isReading ? "Mute Voice Reader" : "Listen to AI Resume Reader"}
              >
                {isReading ? (
                  <>
                    <Volume2 className="w-4 h-4 animate-pulse text-[#d4ff00]" />
                    <span className="text-[#d4ff00] hidden xs:inline">AUDIO ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span className="hidden xs:inline">LISTEN RESUME</span>
                  </>
                )}
              </button>

              <LanguageSwitcher />

              <button
                type="button"
                onClick={() => {
                  playCyberSound(600);
                  setMegaMenuOpen(false);
                }}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#161920] border border-white/20 hover:border-[#d4ff00] text-white hover:text-[#d4ff00] font-mono text-xs font-bold transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 text-[#d4ff00]" />
                <span className="hidden sm:inline">ESC // CLOSE</span>
                <span className="sm:hidden">CLOSE</span>
              </button>
            </div>
          </div>

          {/* Menu Center Split Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-6 sm:py-8 lg:py-10 items-center grow">
            {/* Left Col: Giant Typography Navigation */}
            <div className="lg:col-span-7 space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#8e94a0] block mb-2 sm:mb-4">
                // SYSTEM DIRECTORY & ARCHITECTURE
              </span>
              <div className="space-y-1">
                {navItems.map((item, idx) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onMouseEnter={() => {
                      setHoveredLink(idx);
                      playCyberSound(500 + idx * 40);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`group flex items-center justify-between p-2 sm:p-3 lg:p-3.5 rounded-xl sm:rounded-2xl transition-all duration-200 border cursor-pointer ${
                      hoveredLink === idx
                        ? "bg-[#161920] border-[#d4ff00]/40 translate-x-1.5 rtl:-translate-x-1.5"
                        : "bg-transparent border-transparent hover:bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-5">
                      <span
                        className={`font-mono text-xs font-bold transition-colors ${
                          hoveredLink === idx ? "text-[#d4ff00]" : "text-[#8e94a0]"
                        }`}
                      >
                        {item.num}
                      </span>
                      <span
                        className={`text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight transition-colors ${
                          hoveredLink === idx
                            ? "text-[#d4ff00]"
                            : "text-[#f4f4ee] group-hover:text-white"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#8e94a0] hidden md:inline">
                        {item.tag}
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform rtl:rotate-90 ${
                          hoveredLink === idx
                            ? "text-[#d4ff00] translate-x-1 -translate-y-1"
                            : "text-[#8e94a0]"
                        }`}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Col: Dynamic Interactive Telemetry Preview Hub (Desktop only) */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="p-8 rounded-3xl bg-[#111317] border border-white/15 relative overflow-hidden shadow-2xl hud-corner">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono">
                  <span className="text-[#d4ff00] font-bold">
                    MODULE_PREVIEW // {navItems[hoveredLink]?.num || "01"}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#d4ff00]/10 text-[#d4ff00] border border-[#d4ff00]/30 font-bold">
                    {navItems[hoveredLink]?.tag || "SYSTEM"}
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-extrabold text-white">
                      {navItems[hoveredLink]?.title}
                    </h4>
                    <p className="text-sm text-[#8e94a0] leading-relaxed mt-2">
                      {navItems[hoveredLink]?.desc}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#161920] border border-white/10">
                    <span className="text-[10px] font-mono text-[#8e94a0] uppercase">
                      Highlight Metric
                    </span>
                    <p className="text-xl font-extrabold text-[#d4ff00] mt-1 font-mono">
                      {navItems[hoveredLink]?.metric}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleNavClick(navItems[hoveredLink]?.href || "#about")}
                    className="w-full py-3.5 rounded-xl text-xs font-bold text-black bg-[#d4ff00] hover:bg-[#e0ff33] flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(212,255,0,0.3)] cursor-pointer"
                  >
                    <span>Jump to Section</span>
                    <ArrowUpRight className="w-4 h-4 rtl:rotate-90" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Bottom Action Strip */}
          <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 shrink-0">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono text-[#8e94a0]">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-[#d4ff00] transition-colors"
              >
                ✉️ {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="hover:text-[#d4ff00] transition-colors"
              >
                📞 {PERSONAL_INFO.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <a
                href={PERSONAL_INFO.cvDownload}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-semibold text-[#f4f4ee] bg-[#161920] border border-white/15 hover:border-white/30 transition-all"
              >
                <FileDown className="w-4 h-4 text-[#d4ff00]" />
                <span>{t("nav_resume")}</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold text-black bg-[#d4ff00] hover:bg-[#e0ff33] transition-all shadow-[0_0_20px_rgba(212,255,0,0.3)]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
