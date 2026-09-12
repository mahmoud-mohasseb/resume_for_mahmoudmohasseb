"use client";

import React, { useEffect, useState } from "react";

export default function CinematicSpotlight() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-60">
      <div
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(6, 182, 212, 0.03) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}
