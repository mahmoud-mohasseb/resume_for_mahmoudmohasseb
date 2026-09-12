"use client";

import React, { useEffect } from "react";
import { RotateCcw, AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Root Boundary Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-[#08090b] text-[#f4f4ee] min-h-screen flex flex-col items-center justify-center p-6 text-center font-sans">
        <div className="w-16 h-16 rounded-2xl bg-[#ff6b35]/15 border border-[#ff6b35]/30 flex items-center justify-center text-[#ff6b35] mb-5 shadow-[0_0_30px_rgba(255,107,53,0.2)]">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white max-w-lg font-mono">
          SYSTEM_GLOBAL_FAULT
        </h1>

        <p className="text-[#8e94a0] text-sm max-w-md mt-3 font-mono">
          {error?.message || "A critical global root layout exception occurred."}
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#d4ff00] text-black font-bold text-xs hover:bg-[#e0ff33] transition-all font-mono"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Application Root</span>
        </button>
      </body>
    </html>
  );
}
