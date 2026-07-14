"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const roles = ["Full Stack Developer", "Backend Developer", "Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [photoHovered, setPhotoHovered] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-8"
    >
      {/* Two Column Layout */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <div className="w-full md:w-7/12">
          <div className="w-full flex flex-col gap-6">
            <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">
              <span className="text-2xl mr-2">👋🏻</span>Hello, World! I&apos;m
            </p>

            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
              Carlo Cano
            </h1>

            <h2 className="text-2xl sm:text-3xl font-medium text-gray-300 min-h-[2.25rem]">
              <span className="text-emerald-400">{displayed}</span>
              <span className="animate-pulse text-emerald-400">|</span>
            </h2>

            <p className="max-w-xl text-gray-400 text-base leading-relaxed">
              I build clean, performant web applications and love turning ideas into
              polished digital experiences. Let&apos;s create something great together.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#projects"
                className="px-6 py-3 bg-emerald-400 text-gray-950 font-semibold rounded-sm hover:bg-emerald-300 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-emerald-400 text-emerald-400 font-semibold rounded-sm hover:bg-emerald-400 hover:text-gray-950 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden md:flex w-5/12 items-center justify-center">
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setPhotoHovered(true)}
            onMouseLeave={() => setPhotoHovered(false)}
          >
            {/* Masked / blended — bottom layer */}
            <Image
              src="/my-image.png"
              alt="Carlo Cano"
              width={450}
              height={450}
              loading="eager"
              style={{
                maskImage: "radial-gradient(ellipse 70% 75% at 50% 50%, black 55%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 75% at 50% 50%, black 55%, transparent 100%)",
              }}
            />

            {/* Original — top layer, wipes in from left on hover */}
            <div
              className="absolute inset-0 overflow-hidden transition-all duration-700 ease-in-out"
              style={{ clipPath: photoHovered ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
            >
              <Image
                src="/my-orig-image.png"
                alt="Carlo Cano"
                width={450}
                height={450}
                loading="eager"
              />
            </div>

            {/* Hover hint */}
            <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white text-xs font-medium tracking-wide whitespace-nowrap transition-opacity duration-500 ${photoHovered ? "opacity-0" : "opacity-100"}`}>
              <span className="animate-bounce">👆</span> Hover to reveal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
