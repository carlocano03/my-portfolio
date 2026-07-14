"use client";

import { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.2,
      speed: Math.random() * 0.12 + 0.03,
      opacity: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleDir: 1,
    }));

    const orbs = [
      { x: window.innerWidth * 0.15, y: window.innerHeight * 0.2,  r: 55, color: "34,211,153",  speedX: 0.08,  speedY: 0.05  },
      { x: window.innerWidth * 0.8,  y: window.innerHeight * 0.7,  r: 40, color: "56,189,248",  speedX: -0.06, speedY: 0.07  },
      { x: window.innerWidth * 0.6,  y: window.innerHeight * 0.1,  r: 30, color: "192,132,252", speedX: 0.05,  speedY: 0.09  },
      { x: window.innerWidth * 0.3,  y: window.innerHeight * 0.85, r: 20, color: "251,191,36",  speedX: 0.09,  speedY: -0.04 },
    ];

    let animId: number;

    const draw = () => {
      ctx.fillStyle = "#03070f";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const o of orbs) {
        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        grad.addColorStop(0,   `rgba(${o.color}, 0.18)`);
        grad.addColorStop(0.5, `rgba(${o.color}, 0.07)`);
        grad.addColorStop(1,   `rgba(${o.color}, 0)`);
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        o.x += o.speedX;
        o.y += o.speedY;
        if (o.x < -o.r || o.x > canvas.width  + o.r) o.speedX *= -1;
        if (o.y < -o.r || o.y > canvas.height + o.r) o.speedY *= -1;
      }

      for (const s of stars) {
        s.opacity += s.twinkleSpeed * s.twinkleDir;
        if (s.opacity >= 0.9 || s.opacity <= 0.1) s.twinkleDir *= -1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
        ctx.fill();

        s.y += s.speed;
        if (s.y > canvas.height) {
          s.y = 0;
          s.x = Math.random() * canvas.width;
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
