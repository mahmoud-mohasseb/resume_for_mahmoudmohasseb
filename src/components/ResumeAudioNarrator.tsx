"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Sparkles,
  X,
  ChevronDown,
  ChevronUp,
  GripHorizontal,
} from "lucide-react";
import { useAudioReader } from "@/context/AudioReaderContext";
import { useLanguage } from "@/context/LanguageContext";

export default function ResumeAudioNarrator() {
  const {
    isReading,
    isPaused,
    currentSectionIndex,
    totalSections,
    currentSection,
    rate,
    setRate,
    voiceName,
    pauseReading,
    resumeReading,
    stopReading,
    nextSection,
    prevSection,
    isSupported,
  } = useAudioReader();
  const { language } = useLanguage();

  // Mobile ergonomic collapse / mini-pill state (default to compact on mobile screens)
  const [isMinimized, setIsMinimized] = useState(false);

  // Synchronized section auto-scroll during narration
  useEffect(() => {
    if (isReading && currentSection?.id) {
      const sectionAnchorMap: Record<string, string> = {
        intro: "about",
        metrics: "about",
        vibe: "vibe-coding",
        experience: "experience",
        skills: "tech-stack",
        contact: "contact",
      };
      const targetId = sectionAnchorMap[currentSection.id] || currentSection.id;
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [isReading, currentSectionIndex, currentSection?.id]);

  if (!isSupported || (!isReading && !isPaused)) {
    return null;
  }

  const speedOptions = [
    { label: "0.85x", val: 0.85, tip: "Clear" },
    { label: "0.95x", val: 0.95, tip: "Natural" },
    { label: "1.15x", val: 1.15, tip: "Brisk" },
  ];

  return (
    <AnimatePresence>
      <motion.aside
        drag
        dragMomentum={false}
        dragElastic={0.12}
        whileDrag={{ scale: 1.02, cursor: "grabbing" }}
        initial={{ y: 80, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 80, opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`fixed left-1/2 -translate-x-1/2 z-[90] cursor-grab active:cursor-grabbing select-none ${
          isMinimized
            ? "bottom-4 w-[92%] sm:w-auto min-w-[310px] max-w-md"
            : "bottom-3 sm:bottom-5 w-[96%] max-w-xl"
        }`}
        style={{ paddingBottom: "max(env(safe-area-inset-bottom, 0px), 8px)" }}
        role="region"
        aria-label="AI Audio Resume Player (Draggable)"
        aria-live="polite"
      >
        {isMinimized ? (
          /* ================= MINIMAL DYNAMIC CAPSULE (MOBILE ISLAND) ================= */
          <div className="relative rounded-full bg-[#0b0e14]/95 border border-[#d4ff00]/50 backdrop-blur-2xl px-3 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(212,255,0,0.25)] flex items-center justify-between gap-2.5">
            {/* Left: Drag Grip & Sound Icon & Title */}
            <button
              type="button"
              onPointerDownCapture={(e) => e.stopPropagation()}
              onClick={() => setIsMinimized(false)}
              className="flex items-center gap-2 text-left shrink truncate cursor-pointer group"
            >
              <div className="p-1 cursor-grab active:cursor-grabbing touch-none">
                <GripHorizontal className="w-3.5 h-3.5 text-[#8e94a0] group-hover:text-[#d4ff00] shrink-0" />
              </div>
              <div className="w-7 h-7 rounded-full bg-[#d4ff00]/15 text-[#d4ff00] border border-[#d4ff00]/40 flex items-center justify-center shrink-0">
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
              </div>
              <div className="truncate">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono font-bold text-[#d4ff00]">
                    [{currentSectionIndex + 1}/{totalSections}]
                  </span>
                  <span className="text-xs font-semibold text-white truncate max-w-[130px] sm:max-w-[170px]">
                    {currentSection?.title}
                  </span>
                </div>
              </div>
            </button>

            {/* Right: Mini Controls */}
            <div className="flex items-center gap-1 shrink-0" onPointerDownCapture={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={isPaused ? resumeReading : pauseReading}
                className="w-8 h-8 rounded-full bg-[#d4ff00] hover:bg-[#e0ff33] text-black flex items-center justify-center font-bold transition-all shadow-[0_0_12px_rgba(212,255,0,0.4)] cursor-pointer"
                aria-label={isPaused ? "Resume" : "Pause"}
              >
                {isPaused ? (
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                ) : (
                  <Pause className="w-3.5 h-3.5 fill-current" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsMinimized(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Expand AI Reader"
                aria-label="Expand player"
              >
                <ChevronUp className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={stopReading}
                className="w-7 h-7 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-400 flex items-center justify-center transition-colors cursor-pointer"
                title="Stop AI Reader"
                aria-label="Stop player"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* ================= EXPANDED FULL FEATURE MOBILE HUD ================= */
          <div className="relative rounded-2xl bg-[#0b0e14]/98 border border-[#d4ff00]/40 backdrop-blur-2xl shadow-[0_16px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(212,255,0,0.2)] overflow-hidden">
            {/* Top Tactile Drag Grip Pill */}
            <div className="pt-2.5 pb-1 flex items-center justify-center cursor-grab active:cursor-grabbing touch-none">
              <div className="w-12 h-1.5 rounded-full bg-white/30 hover:bg-[#d4ff00]/80 transition-colors" />
            </div>

            {/* Neon Top Progress Bar */}
            <div className="h-1.5 w-full bg-black/60 relative">
              <motion.div
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#d4ff00] via-[#00f5ff] to-[#ff6b35]"
                style={{
                  width: `${((currentSectionIndex + 1) / totalSections) * 100}%`,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="p-3 sm:p-4">
              {/* Header / Status Bar */}
              <div className="flex items-center justify-between gap-3 mb-2 sm:mb-2.5">
                <div className="flex items-center gap-2">
                  <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#d4ff00]/15 text-[#d4ff00] border border-[#d4ff00]/40 shrink-0">
                    <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="text-[11px] sm:text-xs font-mono font-bold text-[#d4ff00] tracking-wider uppercase flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#d4ff00]" />
                        AI Audio Resume
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-white font-bold">
                        {language.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Equalizer Audio Waves & Window Controls */}
                <div className="flex items-center gap-1 sm:gap-1.5" onPointerDownCapture={(e) => e.stopPropagation()}>
                  <div className="flex items-end gap-0.5 h-4 sm:h-5 px-2 py-0.5 rounded bg-black/50 border border-white/10">
                    {[40, 90, 60, 100, 75, 45, 80].map((height, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-[#d4ff00] rounded-full"
                        animate={{
                          height: isPaused ? 4 : [`${height * 0.2}%`, `${height}%`, `${height * 0.3}%`],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.6 + (i % 3) * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>

                  {/* Minimize / Collapse Button for Mobile Convenience */}
                  <button
                    type="button"
                    onClick={() => setIsMinimized(true)}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 hover:bg-white/10 text-[#8e94a0] hover:text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
                    title="Minimize to Compact Capsule"
                    aria-label="Minimize player"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Close / Stop Button */}
                  <button
                    type="button"
                    onClick={stopReading}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 hover:bg-red-500/20 text-[#8e94a0] hover:text-red-400 border border-white/10 hover:border-red-500/40 flex items-center justify-center transition-colors cursor-pointer"
                    title="Mute & Stop Audio Resume"
                    aria-label="Stop audio reader"
                  >
                    <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              {/* Current Section Content Snippet */}
              <div className="bg-[#12161f] border border-white/5 rounded-xl p-2.5 sm:p-3 mb-2.5 sm:mb-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#8e94a0] mb-1">
                  <span className="text-[#d4ff00] font-semibold">
                    Section {currentSectionIndex + 1} of {totalSections}
                  </span>
                  <span className="truncate max-w-[170px] sm:max-w-[240px] text-white/80 font-medium">
                    {currentSection?.title}
                  </span>
                </div>
                <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                  {currentSection?.text}
                </p>
              </div>

              {/* Controls Bar */}
              <div className="flex items-center justify-between gap-2" onPointerDownCapture={(e) => e.stopPropagation()}>
                {/* Prev / Play-Pause / Next */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={prevSection}
                    disabled={currentSectionIndex === 0}
                    className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-[#161a24] hover:bg-white/10 disabled:opacity-30 text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer disabled:cursor-not-allowed"
                    title="Previous Section"
                    aria-label="Previous section"
                  >
                    <SkipBack className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={isPaused ? resumeReading : pauseReading}
                    className="px-3.5 sm:px-4 py-2 sm:py-1.5 rounded-lg bg-[#d4ff00] hover:bg-[#e0ff33] text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(212,255,0,0.4)] cursor-pointer"
                    aria-label={isPaused ? "Resume narration" : "Pause narration"}
                  >
                    {isPaused ? (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Resume</span>
                      </>
                    ) : (
                      <>
                        <Pause className="w-3.5 h-3.5 fill-current" />
                        <span>Pause</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={nextSection}
                    disabled={currentSectionIndex === totalSections - 1}
                    className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-[#161a24] hover:bg-white/10 disabled:opacity-30 text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer disabled:cursor-not-allowed"
                    title="Next Section"
                    aria-label="Next section"
                  >
                    <SkipForward className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>

                {/* Speed Switcher & Stop */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-0.5 sm:gap-1 bg-[#12161f] border border-white/10 rounded-lg p-0.5">
                    {speedOptions.map((s) => (
                      <button
                        key={s.label}
                        type="button"
                        onClick={() => setRate(s.val)}
                        className={`px-1.5 sm:px-2 py-1 rounded text-[10px] sm:text-[11px] font-mono font-bold transition-all cursor-pointer ${
                          Math.abs(rate - s.val) < 0.05
                            ? "bg-[#d4ff00] text-black shadow-sm"
                            : "text-[#8e94a0] hover:text-white"
                        }`}
                        title={`${s.tip} Speed (${s.label})`}
                        aria-label={`Set speed to ${s.label}`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={stopReading}
                    className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-mono transition-colors cursor-pointer"
                    aria-label="Mute audio"
                  >
                    <VolumeX className="w-3.5 h-3.5" />
                    <span>Mute</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.aside>
    </AnimatePresence>
  );
}



