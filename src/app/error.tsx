"use client";

import React, { useEffect } from "react";
import { RotateCcw, AlertTriangle, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("System Runtime Boundary Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#08090b] text-[#f4f4ee] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[#ff6b35]/15 border border-[#ff6b35]/30 flex items-center justify-center text-[#ff6b35] mb-5 shadow-[0_0_30px_rgba(255,107,53,0.2)]">
        <AlertTriangle className="w-8 h-8" />
      </div>

      <span className="font-mono text-xs uppercase tracking-widest text-[#d4ff00] font-bold px-3 py-1 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00]/30 mb-3">
        RUNTIME EXCEPTION CAUGHT
      </span>

      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white max-w-lg">
        An unexpected error occurred during execution
      </h2>

      <p className="text-[#8e94a0] text-sm max-w-md mt-3 font-mono">
        {error?.message || "The application encountered a client-side boundary fault."}
      </p>

      {error?.digest && (
        <p className="text-[11px] font-mono text-[#8e94a0] mt-2 bg-[#111317] px-3 py-1.5 rounded-lg border border-white/5">
          Digest: {error.digest}
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#d4ff00] text-black font-bold text-xs hover:bg-[#e0ff33] transition-all shadow-[0_0_20px_rgba(212,255,0,0.3)] font-mono"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Retry Execution</span>
        </button>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#161920] border border-white/15 text-[#f4f4ee] hover:border-white/30 text-xs font-semibold transition-all font-mono"
        >
          <Home className="w-4 h-4" />
          <span>Reload Homepage</span>
        </Link>
      </div>
    </div>
  );
}
