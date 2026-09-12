"use client";

import React from "react";
import { TrendingUp, Clock, ShieldCheck, Zap, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LiveMetricsGrid() {
  const { t } = useLanguage();

  const metrics = [
    { value: t("metric_1_val"), label: t("metric_1_lbl"), subtext: t("metric_1_sub"), color: "#d4ff00" },
    { value: t("metric_2_val"), label: t("metric_2_lbl"), subtext: t("metric_2_sub"), color: "#ff6b35" },
    { value: t("metric_3_val"), label: t("metric_3_lbl"), subtext: t("metric_3_sub"), color: "#d4ff00" },
    { value: t("metric_4_val"), label: t("metric_4_lbl"), subtext: t("metric_4_sub"), color: "#4285f4" },
    { value: t("metric_5_val"), label: t("metric_5_lbl"), subtext: t("metric_5_sub"), color: "#22c55e" },
  ];

  const icons = [Award, Clock, ShieldCheck, Zap, TrendingUp];

  return (
    <section className="relative py-12 bg-[#0b0d10] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {metrics.map((metric, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#111317] border border-white/10 hover:border-[#d4ff00]/60 transition-all duration-300 group hover:-translate-y-1.5 shadow-lg relative overflow-hidden"
              >
                {/* Subtle top indicator */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-40 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: metric.color }}
                />

                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#161920] border border-white/10 flex items-center justify-center text-[#d4ff00] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(212,255,0,0.3)] transition-all">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#8e94a0] uppercase tracking-wider">
                    [ 0{idx + 1} ]
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#f4f4ee] group-hover:text-[#d4ff00] transition-colors font-mono">
                  {metric.value}
                </div>
                <p className="text-xs font-semibold text-[#f4f4ee] mt-1">{metric.label}</p>
                <p className="text-[11px] text-[#8e94a0] mt-1 font-mono line-clamp-1">{metric.subtext}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
