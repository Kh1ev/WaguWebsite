'use client'

import { useEffect, useState } from 'react'
import { SiDiscord } from 'react-icons/si'

interface LoadingProps {
  onLoadingComplete?: () => void
}

export default function Loading({ onLoadingComplete }: LoadingProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          setTimeout(() => {
            onLoadingComplete?.()
          }, 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 xs:gap-6">
        <div className="relative">
          <div className="absolute inset-0 w-32 h-32 xs:w-24 xs:h-24 border-4 border-white/10 rounded-full animate-ping" />
          <div className="absolute inset-2 w-28 h-28 xs:w-20 xs:h-20 border-4 border-white/20 rounded-full animate-spin-slow" />
          <div className="relative w-32 h-32 xs:w-24 xs:h-24 flex items-center justify-center">
            <div className="bg-gradient-to-br from-white to-gray-400 p-6 xs:p-4 rounded-2xl xs:rounded-xl animate-pulse shadow-2xl shadow-white/20">
              <SiDiscord className="text-black text-5xl xs:text-4xl" />
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-4xl xs:text-3xl font-black bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
            WaguRoom
          </h1>
          <p className="text-sm xs:text-xs text-gray-400 animate-pulse">
            Loading amazing experience...
          </p>
        </div>

        <div className="w-64 xs:w-48 space-y-2">
          <div className="w-full h-2 xs:h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-white via-gray-300 to-white rounded-full transition-all duration-300 ease-out shadow-lg shadow-white/20"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-xs xs:text-[10px] text-gray-500">
            <span>Loading...</span>
            <span className="font-mono">{Math.round(progress)}%</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 xs:w-1.5 xs:h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 xs:w-1.5 xs:h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 xs:w-1.5 xs:h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }
      `}</style>
    </div>
  )
}