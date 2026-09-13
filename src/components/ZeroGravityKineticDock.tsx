"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import {
  Sparkles,
  Compass,
  Zap,
  Shield,
  Layers,
  Terminal,
  Award,
  MessageCircle,
  X,
  ChevronUp,
  Sliders,
  Maximize2,
  Volume2,
  VolumeX,
  Phone,
  FileDown,
  Cpu,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { useAudioReader } from "@/context/AudioReaderContext";

interface RadialNode {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  href: string;
  color: string;
  angle: number; // in degrees for radial arc
  distance: number; // in pixels
}

export default function ZeroGravityKineticDock() {
  const { t, language } = useLanguage();
  const { isReading, toggleReading } = useAudioReader();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSheet, setActiveSheet] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Kinetic sound generator
  const playKineticChime = useCallback((freq = 600, type: OscillatorType = "sine") => {
    if (typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch {
      // Audio permission restricted
    }
  }, []);

  const nodes: RadialNode[] = [
    {
      id: "about",
      label: t("nav_about"),
      sublabel: "Overview & Bio",
      icon: Terminal,
      href: "#about",
      color: "#d4ff00",
      angle: 195,
      distance: 140,
    },
    {
      id: "vibe",
      label: "AI Vibe",
      sublabel: "Claude 3.7 & Cursor",
      icon: Sparkles,
      href: "#vibe-coding",
      color: "#ff6b35",
      angle: 165,
      distance: 145,
    },
    {
      id: "services",
      label: "Solutions",
      sublabel: "Enterprise Support",
      icon: Shield,
      href: "#services",
      color: "#00f5ff",
      angle: 135,
      distance: 155,
    },
    {
      id: "projects",
      label: "Sandbox",
      sublabel: "RCA & Case Studies",
      icon: Cpu,
      href: "#projects",
      color: "#d4ff00",
      angle: 105,
      distance: 160,
    },
    {
      id: "experience",
      label: "Timeline",
      sublabel: "Genpact & Microsoft",
      icon: Layers,
      href: "#experience",
      color: "#a78bfa",
      angle: 75,
      distance: 155,
    },
    {
      id: "tech-stack",
      label: "Matrix",
      sublabel: "35+ Tech Skills",
      icon: Zap,
      href: "#tech-stack",
      color: "#38bdf8",
      angle: 45,
      distance: 145,
    },
    {
      id: "contact",
      label: "WhatsApp",
      sublabel: "Fast Dispatch",
      icon: MessageCircle,
      href: "#contact",
      color: "#22c55e",
      angle: 15,
      distance: 140,
    },
  ];

  const handleNodeClick = (node: RadialNode) => {
    playKineticChime(750, "triangle");
    setIsOpen(false);
    if (node.href.startsWith("#")) {
      const target = document.querySelector(node.href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleOrbToggle = () => {
    playKineticChime(isOpen ? 450 : 850, "sine");
    setIsOpen((prev) => !prev);
  };

  // Close when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setActiveSheet(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Zero-Gravity Backdrop Blur Layer when Dock is Expanded */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Floating Radial Dock Container anchored in Natural Thumb Zone */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-none md:hidden select-none">
        <div className="relative pointer-events-auto flex items-center justify-center">
          {/* Radial Floating Menu Nodes */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Neon Gravitational Field Rings */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.4 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  className="absolute w-72 h-72 rounded-full border border-[#d4ff00]/30 -translate-y-12 pointer-events-none animate-spin-slow"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: 0.2 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="absolute w-80 h-80 rounded-full border border-[#00f5ff]/20 -translate-y-12 pointer-events-none"
                />

                {nodes.map((node, index) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const x = Math.cos(rad) * node.distance;
                  const y = -Math.sin(rad) * node.distance - 20; // Shift upward into ergonomic reach

                  const Icon = node.icon;
                  const isHovered = hoveredNode === node.id;

                  return (
                    <motion.button
                      key={node.id}
                      type="button"
                      initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                      animate={{
                        x,
                        y,
                        scale: 1,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          stiffness: 380,
                          damping: 22,
                          delay: index * 0.035,
                        },
                      }}
                      exit={{
                        x: 0,
                        y: 0,
                        scale: 0,
                        opacity: 0,
                        transition: { duration: 0.2, delay: (nodes.length - index) * 0.02 },
                      }}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleNodeClick(node)}
                      onMouseEnter={() => {
                        setHoveredNode(node.id);
                        playKineticChime(600 + index * 40);
                      }}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="absolute flex flex-col items-center justify-center cursor-pointer group focus:outline-none"
                      aria-label={`${node.label} - ${node.sublabel}`}
                    >
                      {/* Frosted Glass Node Bubble */}
                      <div
                        className="relative w-12 h-12 rounded-2xl bg-[#0b0e14]/90 border backdrop-blur-xl flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.7)] transition-all duration-300"
                        style={{
                          borderColor: `${node.color}60`,
                          boxShadow: isHovered
                            ? `0 0 25px ${node.color}80, 0 10px 30px rgba(0,0,0,0.8)`
                            : `0 0 15px ${node.color}30, 0 8px 20px rgba(0,0,0,0.6)`,
                        }}
                      >
                        <div
                          className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at 30% 30%, ${node.color}, transparent)`,
                          }}
                        />
                        <Icon className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110" style={{ color: node.color }} />
                      </div>

                      {/* Micro Kinetic Label */}
                      <motion.span
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 px-1.5 py-0.5 rounded-md bg-[#0b0e14]/95 border border-white/10 text-[9px] font-mono font-bold text-slate-200 tracking-wider whitespace-nowrap shadow-sm backdrop-blur-md"
                      >
                        {node.label}
                      </motion.span>
                    </motion.button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Core Zero-Gravity Kinetic Orb Trigger */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={handleOrbToggle}
            className={`relative flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.9)] cursor-pointer backdrop-blur-2xl ${
              isOpen
                ? "bg-[#0b0e14] border-[#ff6b35] text-[#ff6b35] shadow-[0_0_30px_rgba(255,107,53,0.5)]"
                : "bg-gradient-to-tr from-[#0b0e14] via-[#161a24] to-[#12161f] border-[#d4ff00] text-[#d4ff00] shadow-[0_0_30px_rgba(212,255,0,0.45)]"
            }`}
            aria-label={isOpen ? "Close Zero-Gravity Dock" : "Open Zero-Gravity Radial Dock"}
            aria-expanded={isOpen}
          >
            {/* Outer Rotating Nebula Halo */}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute -inset-1 rounded-full border border-dashed border-[#d4ff00]/40 pointer-events-none"
            />

            {/* Inner Glowing Center Icon */}
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="compass"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <Compass className="w-6 h-6 animate-pulse" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </>
  );
}
