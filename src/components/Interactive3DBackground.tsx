"use client";

import React, { useEffect, useRef } from "react";

interface Particle3D {
  x: number;
  y: number;
  z: number;
  originX: number;
  originY: number;
  originZ: number;
  radius: number;
  color: string;
  speed: number;
}

export default function Interactive3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = width / 2;
      const centerY = height / 2;
      mouseX = (e.clientX - centerX) / centerX;
      mouseY = (e.clientY - centerY) / centerY;
      targetRotY = mouseX * 0.45;
      targetRotX = -mouseY * 0.45;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Initialize 3D neural matrix particles
    const particleCount = Math.min(width < 768 ? 45 : 95, 110);
    const particles: Particle3D[] = [];
    const colors = ["#d4ff00", "#ff6b35", "#4285f4", "#e2e4ea", "#22c55e"];

    const fov = 320;

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 240 + Math.random() * 320;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      particles.push({
        x,
        y,
        z,
        originX: x,
        originY: y,
        originZ: z,
        radius: 1.2 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 0.002 + Math.random() * 0.004,
      });
    }

    // 3D Geometric Ring vertices
    const ringSegments = 28;
    const ringRadius = 380;
    const ringVertices: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < ringSegments; i++) {
      const angle = (i / ringSegments) * Math.PI * 2;
      ringVertices.push({
        x: Math.cos(angle) * ringRadius,
        y: Math.sin(angle) * ringRadius,
        z: 0,
      });
    }

    let angleAuto = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth interpolation for mouse parallax
      rotX += (targetRotX - rotX) * 0.04;
      rotY += (targetRotY - rotY) * 0.04;
      angleAuto += 0.003;

      const currentRotX = rotX;
      const currentRotY = rotY + angleAuto;

      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);

      const centerX = width / 2;
      const centerY = height / 2;

      // Project 3D coordinates to 2D
      const projected = particles.map((p) => {
        // Rotate around Y
        let x1 = p.x * cosY + p.z * sinY;
        let z1 = -p.x * sinY + p.z * cosY;

        // Rotate around X
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = p.y * sinX + z1 * cosX;

        // Perspective depth
        const scale = fov / (fov + z2 + 400);
        const screenX = centerX + x1 * scale;
        const screenY = centerY + y2 * scale;
        const alpha = Math.max(0.1, Math.min(0.85, (z2 + 400) / 700));

        return {
          ...p,
          screenX,
          screenY,
          scale,
          alpha,
          z2,
        };
      });

      // Draw connecting neural lines in 3D
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.screenX - p2.screenX;
          const dy = p1.screenY - p2.screenY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.22 * Math.min(p1.alpha, p2.alpha);
            ctx.strokeStyle = `rgba(212, 255, 0, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.screenX, p1.screenY);
            ctx.lineTo(p2.screenX, p2.screenY);
            ctx.stroke();
          }
        }
      }

      // Draw projected 3D orbital rings
      const projectedRing = ringVertices.map((v) => {
        let x1 = v.x * cosY + v.z * sinY;
        let z1 = -v.x * sinY + v.z * cosY;
        let y2 = v.y * cosX - z1 * sinX;
        let z2 = v.y * sinX + z1 * cosX;
        const scale = fov / (fov + z2 + 400);
        return {
          screenX: centerX + x1 * scale,
          screenY: centerY + y2 * scale,
          z2,
        };
      });

      ctx.strokeStyle = "rgba(255, 107, 53, 0.12)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < projectedRing.length; i++) {
        const p = projectedRing[i];
        if (i === 0) ctx.moveTo(p.screenX, p.screenY);
        else ctx.lineTo(p.screenX, p.screenY);
      }
      ctx.closePath();
      ctx.stroke();

      // Draw glowing particle nodes
      for (const p of projected) {
        if (p.scale <= 0) continue;
        const radius = p.radius * p.scale;

        // Core dot
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.screenX, p.screenY, radius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow aura
        if (p.radius > 2) {
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha * 0.25;
          ctx.beginPath();
          ctx.arc(p.screenX, p.screenY, radius * 2.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-45 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
