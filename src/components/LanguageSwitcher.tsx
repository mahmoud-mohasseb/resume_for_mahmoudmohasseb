"use client";

import React, { useState, useRef, useEffect } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLanguage, Language } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; flag: string; native: string; region: string }[] = [
    { code: "en", label: "English", flag: "🇺🇸", native: "English", region: "Global / US" },
    { code: "ro", label: "Romanian", flag: "🇷🇴", native: "Română", region: "România" },
    { code: "ar", label: "Arabic", flag: "🇪🇬", native: "العربية", region: "الشرق الأوسط" },
    { code: "de", label: "German", flag: "🇩🇪", native: "Deutsch", region: "DACH / EMEA" },
  ];

  const current = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef} style={{ zIndex: 110 }}>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-bold text-[#f4f4ee] bg-[#161920] border border-white/15 hover:border-[#d4ff00] hover:text-[#d4ff00] transition-all shadow-md group cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select Language / Schimbă Limba"
      >
        <span className="text-sm leading-none" role="img" aria-label={current.label}>
          {current.flag}
        </span>
        <span className="hidden sm:inline font-sans text-xs">{current.native}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#8e94a0] group-hover:text-[#d4ff00] transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#d4ff00]" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-48 rounded-2xl bg-[#111317] border border-white/20 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.95)] backdrop-blur-2xl z-[999] animate-in fade-in zoom-in-95 duration-150"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="flex items-center justify-between px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-[#8e94a0] border-b border-white/10 mb-1.5">
            <span className="flex items-center gap-1 text-[#d4ff00]">
              <Globe className="w-3 h-3" />
              <span>LANGUAGE</span>
            </span>
            <span className="text-[9px] text-[#8e94a0]">{languages.length} AVAILABLE</span>
          </div>

          <div className="space-y-1">
            {languages.map((lang) => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleSelect(lang.code);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all text-left rtl:text-right cursor-pointer ${
                    isSelected
                      ? "bg-[#d4ff00]/15 text-[#d4ff00] font-bold border border-[#d4ff00]/40 shadow-sm"
                      : "text-[#f4f4ee] hover:bg-[#161920] hover:text-[#d4ff00]"
                  }`}
                  role="menuitem"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <div>
                      <p className="font-sans leading-tight">{lang.native}</p>
                      <p className="text-[9px] font-mono text-[#8e94a0]">{lang.region}</p>
                    </div>
                  </div>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-[#d4ff00]/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#d4ff00]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
