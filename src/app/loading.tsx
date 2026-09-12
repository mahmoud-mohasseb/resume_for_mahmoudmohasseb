import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#08090b] text-[#f4f4ee] flex flex-col items-center justify-center p-6 text-center">
      <div className="relative flex items-center justify-center">
        {/* Outer pulsating ring */}
        <div className="w-16 h-16 rounded-2xl border-2 border-[#d4ff00]/20 animate-ping absolute" />
        {/* Inner spinning box */}
        <div className="w-12 h-12 rounded-xl bg-[#161920] border-2 border-[#d4ff00] flex items-center justify-center font-mono font-bold text-sm text-[#d4ff00] shadow-[0_0_30px_rgba(212,255,0,0.3)] animate-pulse">
          MM
        </div>
      </div>

      <div className="mt-8 space-y-2 font-mono">
        <p className="text-xs font-bold text-[#d4ff00] tracking-widest uppercase">
          INITIALIZING_PORTFOLIO_SYSTEMS
        </p>
        <p className="text-[11px] text-[#8e94a0]">
          Loading telemetry, Vibe Coding pipelines & multilingual assets...
        </p>
      </div>
    </div>
  );
}
