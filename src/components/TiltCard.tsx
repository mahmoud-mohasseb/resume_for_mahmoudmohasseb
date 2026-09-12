"use client";

import React, { useState, useRef } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareColor?: string;
  onClick?: () => void;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  glareColor = "rgba(212, 255, 0, 0.15)",
  onClick,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -maxTilt;
    const rotY = ((x - centerX) / centerX) * maxTilt;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({ x: glareX, y: glareY, opacity: 1 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${isHovered ? 8 : 0}px)`,
        transformStyle: "preserve-3d",
        transition: isHovered ? "transform 0.08s ease-out" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* 3D Radial Glare Sheen */}
      <div
        style={{
          background: `radial-gradient(circle 220px at ${glarePos.x}% ${glarePos.y}%, ${glareColor}, transparent 70%)`,
          opacity: glarePos.opacity,
          transition: "opacity 0.3s ease",
        }}
        className="absolute inset-0 pointer-events-none z-20"
      />
      {children}
    </div>
  );
}
