"use client";

import { useEffect, useState, useMemo } from "react";

interface LoadingProps {
  onLoadingComplete?: () => void;
}

export default function Loading({ onLoadingComplete }: LoadingProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const particles = useMemo(() => {
    if (!isMounted) return [];
    return [...Array(15)].map(() => ({
      left: Math.random() * 100,
      top: 100 + Math.random() * 20,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 3,
    }));
  }, [isMounted]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete?.();
          }, 500);
          return 100;
        }
        return Math.min(prev + Math.random() * 15, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isMounted) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black opacity-100 px-4 sm:px-6">
        {/* Grid Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center gap-8 xs:gap-6 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Large Counter Display */}
          <div className="relative">
            {/* Counter Box */}
            <div className="relative bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl xs:rounded-xl sm:rounded-2xl p-6 xs:p-8 sm:p-10 md:p-12">
              <div className="text-center space-y-1 xs:space-y-2">
                {/* Large Number */}
                <div className="font-mono text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter relative">
                  <span className="relative z-10">0</span>
                  <span className="absolute inset-0 text-white/20 blur-md">
                    0
                  </span>
                </div>

                {/* Percentage Symbol */}
                <div className="font-mono text-lg xs:text-xl sm:text-2xl text-white/60">
                  %
                </div>
              </div>
            </div>
          </div>

          {/* Progress Information */}
          <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-96 space-y-4 xs:space-y-5 sm:space-y-6">
            {/* Brand Name */}
            <div className="text-center">
              <h1 className="text-xl xs:text-2xl sm:text-3xl font-black text-white tracking-tight mb-1 xs:mb-2">
                WaguRoom
              </h1>
              <div className="flex items-center justify-center gap-2 text-xs xs:text-sm text-white/40">
                <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 bg-white rounded-full animate-pulse" />
                <span>Loading</span>
              </div>
            </div>

            {/* Minimal Progress Bar */}
            <div className="relative h-0.5 xs:h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-white rounded-full transition-all duration-300 ease-out"
                style={{ width: "0%" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 px-4 sm:px-6 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 xs:gap-6 sm:gap-10 md:gap-12 lg:gap-16">
        {/* Large Counter Display */}
        <div className="relative">
          {/* Counter Box */}
          <div className="relative bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl xs:rounded-xl sm:rounded-2xl p-6 xs:p-8 sm:p-10 md:p-12">
            {/* Animated Corner Borders */}
            <div className="absolute top-0 left-0 w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 xs:border-t-4 xs:border-l-4 border-white rounded-tl-xl xs:rounded-tl-2xl animate-pulse-border" />
            <div
              className="absolute top-0 right-0 w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 xs:border-t-4 xs:border-r-4 border-white rounded-tr-xl xs:rounded-tr-2xl animate-pulse-border"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="absolute bottom-0 left-0 w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 xs:border-b-4 xs:border-l-4 border-white rounded-bl-xl xs:rounded-bl-2xl animate-pulse-border"
              style={{ animationDelay: "0.4s" }}
            />
            <div
              className="absolute bottom-0 right-0 w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 xs:border-b-4 xs:border-r-4 border-white rounded-br-xl xs:rounded-br-2xl animate-pulse-border"
              style={{ animationDelay: "0.6s" }}
            />

            <div className="text-center space-y-1 xs:space-y-2">
              {/* Large Number */}
              <div className="font-mono text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter relative">
                <span className="relative z-10">{Math.round(progress)}</span>
                <span className="absolute inset-0 text-white/20 blur-md">
                  {Math.round(progress)}
                </span>
              </div>

              {/* Percentage Symbol */}
              <div className="font-mono text-lg xs:text-xl sm:text-2xl text-white/60">
                %
              </div>
            </div>
          </div>

          {/* Orbiting Dots */}
          <div className="absolute inset-0 animate-orbit-slow">
            <div className="absolute -top-1 xs:-top-2 left-1/2 -translate-x-1/2 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 bg-white rounded-full shadow-lg shadow-white/50" />
          </div>
          <div className="absolute inset-0 animate-orbit-slow-reverse">
            <div className="absolute -bottom-1 xs:-bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 bg-white rounded-full shadow-lg shadow-white/50" />
          </div>
        </div>

        {/* Progress Information */}
        <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-96 space-y-4 xs:space-y-5 sm:space-y-6">
          {/* Brand Name */}
          <div className="text-center">
            <h1 className="text-xl xs:text-2xl sm:text-3xl font-black text-white tracking-tight mb-1 xs:mb-2">
              WaguRoom
            </h1>
            <div className="flex items-center justify-center gap-1.5 xs:gap-2 text-xs xs:text-sm text-white/40">
              <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 bg-white rounded-full animate-pulse" />
              <span>Loading</span>
              <div className="flex gap-0.5">
                <span className="animate-dot-1">.</span>
                <span className="animate-dot-2">.</span>
                <span className="animate-dot-3">.</span>
              </div>
            </div>
          </div>

          {/* Minimal Progress Bar */}
          <div className="relative h-0.5 xs:h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-white rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Loading Steps */}
          <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 text-center text-[10px] xs:text-xs text-white/40">
            <div
              className={`transition-all duration-300 ${progress > 30 ? "text-white" : ""}`}
            >
              <div
                className={`w-1.5 h-1.5 xs:w-2 xs:h-2 mx-auto mb-1 xs:mb-2 rounded-full border border-white/40 xs:border-2 transition-all duration-300 ${progress > 30 ? "border-white bg-white" : ""}`}
              />
              <span className="text-[9px] xs:text-[10px] sm:text-xs">
                Assets
              </span>
            </div>
            <div
              className={`transition-all duration-300 ${progress > 60 ? "text-white" : ""}`}
            >
              <div
                className={`w-1.5 h-1.5 xs:w-2 xs:h-2 mx-auto mb-1 xs:mb-2 rounded-full border border-white/40 xs:border-2 transition-all duration-300 ${progress > 60 ? "border-white bg-white" : ""}`}
              />
              <span className="text-[9px] xs:text-[10px] sm:text-xs">
                Scripts
              </span>
            </div>
            <div
              className={`transition-all duration-300 ${progress > 90 ? "text-white" : ""}`}
            >
              <div
                className={`w-1.5 h-1.5 xs:w-2 xs:h-2 mx-auto mb-1 xs:mb-2 rounded-full border border-white/40 xs:border-2 transition-all duration-300 ${progress > 90 ? "border-white bg-white" : ""}`}
              />
              <span className="text-[9px] xs:text-[10px] sm:text-xs">
                Ready
              </span>
            </div>
          </div>
        </div>

        {/* Animated Lines */}
        <div className="flex gap-1.5 xs:gap-2">
          <div className="w-10 xs:w-12 sm:w-16 h-0.5 bg-white/20 animate-expand-1" />
          <div className="w-10 xs:w-12 sm:w-16 h-0.5 bg-white/20 animate-expand-2" />
          <div className="w-10 xs:w-12 sm:w-16 h-0.5 bg-white/20 animate-expand-3" />
        </div>
      </div>

      {/* Floating Particles */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 xs:w-1 xs:h-1 bg-white/30 rounded-full animate-float-particle"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes pulse-border {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes orbit-slow {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbit-slow-reverse {
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes dot-1 {
          0%,
          60%,
          100% {
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
        }

        @keyframes dot-2 {
          0%,
          60%,
          100% {
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
        }

        @keyframes dot-3 {
          0%,
          60%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes expand-1 {
          0%,
          100% {
            transform: scaleX(0.3);
            opacity: 0.3;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes expand-2 {
          0%,
          100% {
            transform: scaleX(0.3);
            opacity: 0.3;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes expand-3 {
          0%,
          100% {
            transform: scaleX(0.3);
            opacity: 0.3;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes float-particle {
          0% {
            transform: translateY(0) translateX(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(-50px) translateX(10px) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(-100vh) translateX(-20px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-110vh) translateX(-30px) scale(0);
          }
        }

        .animate-pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }

        .animate-orbit-slow {
          animation: orbit-slow 8s linear infinite;
        }

        .animate-orbit-slow-reverse {
          animation: orbit-slow-reverse 8s linear infinite;
        }

        .animate-dot-1 {
          animation: dot-1 1.4s infinite;
        }

        .animate-dot-2 {
          animation: dot-2 1.4s infinite;
        }

        .animate-dot-3 {
          animation: dot-3 1.4s infinite;
        }

        .animate-expand-1 {
          animation: expand-1 2s ease-in-out infinite;
        }

        .animate-expand-2 {
          animation: expand-2 2s ease-in-out 0.3s infinite;
        }

        .animate-expand-3 {
          animation: expand-3 2s ease-in-out 0.6s infinite;
        }

        .animate-float-particle {
          animation: float-particle linear infinite;
        }
      `}</style>
    </div>
  );
}
