"use client";

import React from "react";
import Link from "next/link";
import {
  MessageCircle,
  FileDown,
  Mail,
  Phone,
  Linkedin,
  Github,
  Globe,
  Sparkles,
  ArrowUp,
  MapPin,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#060709] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#161920] border border-white/10 flex items-center justify-center font-mono font-bold text-sm text-[#d4ff00]">
                MM
              </div>
              <div>
                <span className="font-bold text-lg text-white tracking-tight">
                  Mahmoud Mohasseb
                </span>
                <p className="text-xs text-[#8e94a0] font-mono">
                  {t("nav_subtitle")}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8e94a0] leading-relaxed max-w-sm">
              {t("footer_desc")}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#8e94a0] font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#d4ff00]" />
              <span>{t("hero_location")}</span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              {t("footer_nav")}
            </h4>
            <ul className="space-y-2 text-xs text-[#8e94a0]">
              <li>
                <a href="#about" className="hover:text-[#d4ff00] transition-colors">
                  {t("nav_about")}
                </a>
              </li>
              <li>
                <a href="#vibe-coding" className="hover:text-[#d4ff00] transition-colors">
                  {t("nav_vibe")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4ff00] transition-colors">
                  {t("nav_services")}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#d4ff00] transition-colors">
                  {t("nav_experience")}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#d4ff00] transition-colors">
                  {t("nav_projects")}
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-[#d4ff00] transition-colors">
                  {t("nav_certs")}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Core Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              {t("footer_expertise")}
            </h4>
            <ul className="space-y-2 text-xs text-[#8e94a0] font-mono">
              <li className="text-[#f4f4ee]">Tier 1/2/3 Support</li>
              <li className="text-[#d4ff00]">Lean Digital Transformation</li>
              <li className="text-[#ff6b35]">Claude 3.7 & Cursor AI</li>
              <li className="text-[#f4f4ee]">Google Apps Script Hubs</li>
              <li className="text-[#8e94a0]">React / Next.js / Node.js</li>
              <li className="text-[#8e94a0]">Microsoft EMEA Operations</li>
            </ul>
          </div>

          {/* Col 5: Direct Connect */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">
              {t("footer_direct")}
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#d4ff00] hover:underline font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp: {PERSONAL_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 text-xs text-[#8e94a0] hover:text-[#f4f4ee]"
              >
                <Mail className="w-3.5 h-3.5 text-[#d4ff00]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={`https://${PERSONAL_INFO.linkedinDisplay}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#8e94a0] hover:text-[#f4f4ee]"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#d4ff00]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`https://${PERSONAL_INFO.githubDisplay}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#8e94a0] hover:text-[#f4f4ee]"
              >
                <Github className="w-3.5 h-3.5 text-[#8e94a0]" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.cvDownload}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#d4ff00] hover:underline pt-1"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>{t("nav_resume")}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e94a0] font-mono">
          <p>
            © {new Date().getFullYear()} Mahmoud Mohasseb. {t("footer_rights")}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111317] border border-white/10 hover:bg-[#161920] text-[#f4f4ee] transition-colors"
          >
            <span>{t("footer_back_top")}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#d4ff00]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
