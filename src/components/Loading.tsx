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
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black opacity-100">
        {/* Grid Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center gap-16 xs:gap-12">
          {/* Large Counter Display */}
          <div className="relative">
            {/* Counter Box */}
            <div className="relative bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-12 xs:p-8">
              <div className="text-center space-y-2">
                {/* Large Number */}
                <div className="font-mono text-8xl xs:text-6xl font-black text-white tracking-tighter relative">
                  <span className="relative z-10">0</span>
                  <span className="absolute inset-0 text-white/20 blur-md">
                    0
                  </span>
                </div>

                {/* Percentage Symbol */}
                <div className="font-mono text-2xl xs:text-xl text-white/60">
                  %
                </div>
              </div>
            </div>
          </div>

          {/* Progress Information */}
          <div className="w-96 xs:w-80 space-y-6">
            {/* Brand Name */}
            <div className="text-center">
              <h1 className="text-3xl xs:text-2xl font-black text-white tracking-tight mb-2">
                WaguRoom
              </h1>
              <div className="flex items-center justify-center gap-2 text-sm text-white/40">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                <span>Loading</span>
              </div>
            </div>

            {/* Minimal Progress Bar */}
            <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
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
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
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
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-16 xs:gap-12">
        {/* Large Counter Display */}
        <div className="relative">
          {/* Counter Box */}
          <div className="relative bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-12 xs:p-8">
            {/* Animated Corner Borders */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-2xl animate-pulse-border" />
            <div
              className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-2xl animate-pulse-border"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-2xl animate-pulse-border"
              style={{ animationDelay: "0.4s" }}
            />
            <div
              className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-2xl animate-pulse-border"
              style={{ animationDelay: "0.6s" }}
            />

            <div className="text-center space-y-2">
              {/* Large Number */}
              <div className="font-mono text-8xl xs:text-6xl font-black text-white tracking-tighter relative">
                <span className="relative z-10">{Math.round(progress)}</span>
                <span className="absolute inset-0 text-white/20 blur-md">
                  {Math.round(progress)}
                </span>
              </div>

              {/* Percentage Symbol */}
              <div className="font-mono text-2xl xs:text-xl text-white/60">
                %
              </div>
            </div>
          </div>

          {/* Orbiting Dots */}
          <div className="absolute inset-0 animate-orbit-slow">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-lg shadow-white/50" />
          </div>
          <div className="absolute inset-0 animate-orbit-slow-reverse">
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-lg shadow-white/50" />
          </div>
        </div>

        {/* Progress Information */}
        <div className="w-96 xs:w-80 space-y-6">
          {/* Brand Name */}
          <div className="text-center">
            <h1 className="text-3xl xs:text-2xl font-black text-white tracking-tight mb-2">
              WaguRoom
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-white/40">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              <span>Loading</span>
              <div className="flex gap-0.5">
                <span className="animate-dot-1">.</span>
                <span className="animate-dot-2">.</span>
                <span className="animate-dot-3">.</span>
              </div>
            </div>
          </div>

          {/* Minimal Progress Bar */}
          <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-white rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Loading Steps */}
          <div className="grid grid-cols-3 gap-4 text-center text-xs text-white/40">
            <div
              className={`transition-all duration-300 ${progress > 30 ? "text-white" : ""}`}
            >
              <div
                className={`w-2 h-2 mx-auto mb-2 rounded-full border-2 transition-all duration-300 ${progress > 30 ? "border-white bg-white" : "border-white/40"}`}
              />
              <span>Assets</span>
            </div>
            <div
              className={`transition-all duration-300 ${progress > 60 ? "text-white" : ""}`}
            >
              <div
                className={`w-2 h-2 mx-auto mb-2 rounded-full border-2 transition-all duration-300 ${progress > 60 ? "border-white bg-white" : "border-white/40"}`}
              />
              <span>Scripts</span>
            </div>
            <div
              className={`transition-all duration-300 ${progress > 90 ? "text-white" : ""}`}
            >
              <div
                className={`w-2 h-2 mx-auto mb-2 rounded-full border-2 transition-all duration-300 ${progress > 90 ? "border-white bg-white" : "border-white/40"}`}
              />
              <span>Ready</span>
            </div>
          </div>
        </div>

        {/* Animated Lines */}
        <div className="flex gap-2">
          <div className="w-16 h-0.5 bg-white/20 animate-expand-1" />
          <div className="w-16 h-0.5 bg-white/20 animate-expand-2" />
          <div className="w-16 h-0.5 bg-white/20 animate-expand-3" />
        </div>
      </div>

      {/* Floating Particles */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle"
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
