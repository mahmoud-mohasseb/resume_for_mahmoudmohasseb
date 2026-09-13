"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, X, Sparkles, Send, ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { useAudioReader } from "@/context/AudioReaderContext";

export default function FloatingWhatsAppButton() {
  const { t, language } = useLanguage();
  const { isReading, isPaused } = useAudioReader();
  const [isOpen, setIsOpen] = useState(false);

  const isAudioActive = isReading || isPaused;

  return (
    <div
      className={`fixed ${
        isAudioActive ? "bottom-28 sm:bottom-6" : "bottom-6"
      } right-4 sm:right-6 rtl:right-auto rtl:left-4 rtl:sm:left-6 z-40 flex flex-col items-end rtl:items-start transition-all duration-300`}
    >
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-96 rounded-3xl bg-[#111317]/98 border border-[#d4ff00]/40 p-4 sm:p-5 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#161920] border border-[#d4ff00] flex items-center justify-center font-mono font-bold text-xs text-[#d4ff00] shrink-0">
                MM
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Mahmoud Mohasseb
                </h4>
                <p className="text-[11px] text-[#d4ff00] font-mono">{t("floating_title")}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-[#8e94a0] hover:text-white hover:bg-white/10"
              aria-label="Close WhatsApp popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="my-3 sm:my-4 p-3 sm:p-3.5 rounded-2xl bg-[#161920] border border-white/5 space-y-2">
            <p className="text-xs text-[#8e94a0] leading-relaxed">
              {t("floating_desc")}
            </p>
            <div className="text-[11px] font-mono text-[#d4ff00] flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-ping" />
              <span>{PERSONAL_INFO.phoneDisplay}</span>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl text-xs font-bold text-black bg-[#d4ff00] hover:bg-[#e0ff33] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,255,0,0.3)] transition-all font-mono"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{t("floating_direct_btn")}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-full bg-[#d4ff00] hover:bg-[#e0ff33] text-black font-bold text-xs sm:text-sm shadow-[0_0_30px_rgba(212,255,0,0.4)] transition-all transform hover:scale-105 border border-[#d4ff00] cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-black"></span>
        </span>
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
        <span className="hidden sm:inline font-mono">{t("floating_button_label")}</span>
      </button>
    </div>
  );
}

