"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, Cpu, Layers, Zap, Terminal, Shield } from "lucide-react";

interface Node3D {
  name: string;
  subtitle: string;
  badge: string;
  color: string;
  icon: string;
  x: number;
  y: number;
  z: number;
}

export default function Interactive3DHologram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(-15);
  const [rotY, setRotY] = useState(25);
  const [isDragging, setIsDragging] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState<number | null>(0);

  const nodes: Node3D[] = [
    {
      name: "Claude 3.7 Sonnet",
      subtitle: "Extended Thinking & Code Synthesis",
      badge: "ANTHROPIC AI",
      color: "#FF6B35",
      icon: "Brain",
      x: 0,
      y: -140,
      z: 0,
    },
    {
      name: "Cursor AI Composer",
      subtitle: "Multi-File Autonomous Agent",
      badge: "DAILY IDE",
      color: "#D4FF00",
      icon: "Code",
      x: 130,
      y: 0,
      z: 0,
    },
    {
      name: "Google Antigravity",
      subtitle: "Agentic Subagents & Verification Loops",
      badge: "AGENTIC DEV",
      color: "#4285F4",
      icon: "Cpu",
      x: -130,
      y: 0,
      z: 0,
    },
    {
      name: "Genpact Lean ID: 2623686",
      subtitle: "VSM & 5-Why Root Cause Scaffolding",
      badge: "LEAN CERTIFIED",
      color: "#22C55E",
      icon: "Shield",
      x: 0,
      y: 140,
      z: 0,
    },
    {
      name: "Microsoft EMEA Operations",
      subtitle: "Enterprise Dispatch & SLA Adherence",
      badge: "99.4% SLA",
      color: "#0078D4",
      icon: "Terminal",
      x: 0,
      y: 0,
      z: 130,
    },
    {
      name: "10x Vibe Coding",
      subtitle: "Rapid Full-Stack Prototyping",
      badge: "VELOCITY",
      color: "#E2E4EA",
      icon: "Zap",
      x: 0,
      y: 0,
      z: -130,
    },
  ];

  // Auto rotation when not dragging
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setRotY((prev) => (prev + 0.4) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - lastPos.x;
    const dy = e.clientY - lastPos.y;
    setRotY((prev) => prev + dx * 0.5);
    setRotX((prev) => Math.max(-60, Math.min(60, prev - dy * 0.5)));
    setLastPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setLastPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - lastPos.x;
    const dy = e.touches[0].clientY - lastPos.y;
    setRotY((prev) => prev + dx * 0.6);
    setRotX((prev) => Math.max(-60, Math.min(60, prev - dy * 0.6)));
    setLastPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      className="relative w-full max-w-lg mx-auto h-[420px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing perspective-[1000px] overflow-hidden rounded-3xl bg-[#090b0e] border border-white/10 p-6 hud-corner shadow-2xl"
    >
      {/* HUD Header */}
      <div className="absolute top-4 left-5 right-5 flex items-center justify-between text-[11px] font-mono border-b border-white/10 pb-2 z-20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-ping" />
          <span className="text-[#d4ff00] font-bold">3D_AI_NEURAL_SPHERE</span>
        </div>
        <span className="text-[#8e94a0] uppercase tracking-wider">
          {isDragging ? "INTERACTING..." : "DRAG TO ROTATE"}
        </span>
      </div>

      {/* 3D Wireframe Scene */}
      <div
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transformStyle: "preserve-3d",
          transition: isDragging ? "none" : "transform 0.05s linear",
        }}
        className="relative w-48 h-48 flex items-center justify-center"
      >
        {/* Central Core Hologram Glow */}
        <div
          style={{ transform: "translateZ(0)" }}
          className="absolute w-28 h-28 rounded-full bg-gradient-to-r from-[#d4ff00]/20 via-[#ff6b35]/20 to-[#4285f4]/20 blur-xl animate-pulse"
        />

        {/* Central Core Symbol */}
        <div
          style={{ transform: "translateZ(0)" }}
          className="absolute w-14 h-14 rounded-2xl bg-[#161920] border-2 border-[#d4ff00] flex items-center justify-center font-mono font-bold text-base text-[#d4ff00] shadow-[0_0_25px_rgba(212,255,0,0.5)]"
        >
          MM
        </div>

        {/* Orbital Ring 1 */}
        <div
          style={{
            transform: "rotateX(70deg) rotateZ(0deg)",
            transformStyle: "preserve-3d",
          }}
          className="absolute w-64 h-64 rounded-full border border-[#d4ff00]/25 pointer-events-none"
        />

        {/* Orbital Ring 2 */}
        <div
          style={{
            transform: "rotateY(70deg) rotateZ(45deg)",
            transformStyle: "preserve-3d",
          }}
          className="absolute w-64 h-64 rounded-full border border-[#ff6b35]/25 pointer-events-none"
        />

        {/* Orbital Ring 3 */}
        <div
          style={{
            transform: "rotateX(45deg) rotateY(45deg)",
            transformStyle: "preserve-3d",
          }}
          className="absolute w-72 h-72 rounded-full border border-[#4285f4]/20 border-dashed pointer-events-none"
        />

        {/* 3D Nodes Floating in Space */}
        {nodes.map((node, idx) => (
          <div
            key={node.name}
            style={{
              transform: `translate3d(${node.x}px, ${node.y}px, ${node.z}px)`,
              transformStyle: "preserve-3d",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setActiveNode(idx);
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group/node"
          >
            {/* Holographic Pill */}
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold backdrop-blur-md transition-all duration-300 border shadow-lg ${
                activeNode === idx
                  ? "bg-[#111317] border-[#d4ff00] text-[#d4ff00] scale-110 shadow-[0_0_20px_rgba(212,255,0,0.4)]"
                  : "bg-[#161920]/90 border-white/20 text-[#f4f4ee] hover:border-[#d4ff00] hover:text-[#d4ff00]"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: node.color }}
              />
              <span className="whitespace-nowrap">{node.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Active Node Telemetry Card at Bottom */}
      {activeNode !== null && (
        <div className="absolute bottom-4 left-5 right-5 p-3 rounded-2xl bg-[#161920]/90 border border-white/10 backdrop-blur-xl flex items-center justify-between gap-3 text-xs z-20">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-[#f4f4ee] font-sans">
                {nodes[activeNode].name}
              </span>
              <span
                className="text-[9px] font-mono px-2 py-0.5 rounded font-bold"
                style={{
                  backgroundColor: `${nodes[activeNode].color}20`,
                  color: nodes[activeNode].color,
                  border: `1px solid ${nodes[activeNode].color}40`,
                }}
              >
                {nodes[activeNode].badge}
              </span>
            </div>
            <p className="text-[11px] text-[#8e94a0] font-mono mt-0.5">
              {nodes[activeNode].subtitle}
            </p>
          </div>
          <span className="text-[10px] font-mono text-[#d4ff00] shrink-0">
            [ 0{activeNode + 1} / 06 ]
          </span>
        </div>
      )}
    </div>
  );
}
