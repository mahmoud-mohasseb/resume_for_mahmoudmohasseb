import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#040711] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 font-mono font-bold text-2xl mb-4 shadow-[0_0_30px_rgba(56,189,248,0.2)]">
        404
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Page Not Found</h2>
      <p className="text-slate-400 text-sm max-w-md mt-2">
        The requested system path does not exist. Return to the main portfolio interface.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-300 hover:bg-sky-500 hover:text-white transition-all text-xs font-semibold"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Homepage</span>
      </Link>
    </div>
  );
}
