'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { HiSparkles, HiShieldCheck, HiLightningBolt, HiCog, HiUsers, HiChartBar } from 'react-icons/hi'
import { SiDiscord } from 'react-icons/si'

interface Feature {
  icon: React.ReactElement;
  title: string
  description: string
}

interface Stat {
  value: string
  label: string
}

interface Partner {
  name: string
  logo: string
  url: string
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const features: Feature[] = [
    {
      icon: <HiLightningBolt className="text-4xl xs:text-3xl" />,
      title: 'Lightning Fast',
      description: 'Ultra-fast response times under 50ms with 99.9% uptime guarantee',
    },
    {
      icon: <HiShieldCheck className="text-4xl xs:text-3xl" />,
      title: 'Secure & Safe',
      description: 'Enterprise-grade security protecting your server and member data',
    },
    {
      icon: <HiCog className="text-4xl xs:text-3xl" />,
      title: 'Highly Customizable',
      description: 'Customize every aspect of the bot to match your server perfectly',
    },
    {
      icon: <HiUsers className="text-4xl xs:text-3xl" />,
      title: 'Community Driven',
      description: 'Built with continuous feedback from thousands of communities',
    },
    {
      icon: <HiChartBar className="text-4xl xs:text-3xl" />,
      title: 'Advanced Analytics',
      description: 'Real-time insights and detailed analytics for your server growth',
    },
    {
      icon: <HiSparkles className="text-4xl xs:text-3xl" />,
      title: 'Auto Moderation',
      description: 'AI-powered moderation system keeping your server safe 24/7',
    },
  ]

  const stats: Stat[] = [
    { value: '100+', label: 'Active Servers' },
    { value: '1M+', label: 'Happy Users' },
    { value: '15+', label: 'Commands' },
    { value: '99.9%', label: 'Uptime' },
  ]

  const partners: Partner[] = [
    { name: 'Discord', logo: 'https://cdn.cdnlogo.com/logos/d/43/discord.svg', url: 'https://discord.com' },
    { name: 'GitHub', logo: 'https://cdn.cdnlogo.com/logos/g/69/github-icon.svg', url: 'https://github.com' },
    { name: 'Node.js', logo: 'https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg', url: 'https://nodejs.org' },
    { name: 'Tailwind', logo: 'https://cdn.cdnlogo.com/logos/t/58/tailwindcss.svg', url: 'https://tailwindcss.com' },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            left: `${mousePosition.x - 300}px`,
            top: `${mousePosition.y - 300}px`,
            transform: `scale(${1 + scrollY * 0.0001})`
          }}
        />
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <section className="relative min-h-screen flex items-center justify-center px-4 xs:px-3 sm:px-6 lg:px-8 pt-24 xs:pt-20 pb-16">
        <div className="container mx-auto relative z-10">
          <div className="text-center space-y-8 xs:space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 xs:px-3 py-2.5 xs:py-2 hover:bg-white/10 transition-all duration-300">
              <HiSparkles className="text-white text-lg xs:text-base" />
              <span className="text-sm xs:text-xs font-medium">Trusted by 100+ Discord Servers</span>
            </div>
            <h1 className="text-7xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                WaguRoom
              </span>
            </h1>

            <p className="text-xl xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              The most powerful Discord bot with advanced moderation, entertainment, and analytics. 
              Built for modern communities that demand excellence.
            </p>
            <div className="flex flex-col xs:flex-col sm:flex-row gap-4 xs:gap-3 justify-center items-center pt-6">
              <a
                href="https://discord.gg/MwNE7Vfb6t"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 xs:px-6 py-4 xs:py-3 bg-white text-black rounded-xl xs:rounded-lg font-semibold text-base xs:text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  <SiDiscord className="text-xl xs:text-lg" />
                  Add to Discord
                </span>
              </a>
              <Link
                href="/pages/tutorial"
                className="px-8 xs:px-6 py-4 xs:py-3 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl xs:rounded-lg font-semibold text-base xs:text-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center">
                Get Started
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 xs:gap-4 pt-16 xs:pt-10 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl xs:rounded-xl p-6 xs:p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-3xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-2 xs:mb-1 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm xs:text-xs text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 xs:bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 xs:w-5 xs:h-9 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll" />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative py-20 xs:py-12 sm:py-16 bg-black border-y border-white/10">
        <div className="container mx-auto px-6 xs:px-4">
          <div className="text-center mb-12 xs:mb-8">
            <h3 className="text-2xl xs:text-xl font-bold text-white/60 mb-2">Trusted Partners</h3>
            <p className="text-sm xs:text-xs text-gray-500">Powered by industry-leading technologies</p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-scroll-partners">
              {/* First set of logos */}
              <div className="flex items-center gap-12 xs:gap-8 min-w-max px-6">
                {partners.map((partner, index) => (
                  <a
                    key={`partner-${index}`}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-44 xs:w-32 h-24 xs:h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl xs:rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-colors duration-300 group p-6 xs:p-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </a>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-12 xs:gap-8 min-w-max px-6">
                {partners.map((partner, index) => (
                  <a
                    key={`partner-duplicate-${index}`}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-44 xs:w-32 h-24 xs:h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl xs:rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-colors duration-300 group p-6 xs:p-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </a>
                ))}
              </div>
              
              {/* Third set for seamless loop */}
              <div className="flex items-center gap-12 xs:gap-8 min-w-max px-6">
                {partners.map((partner, index) => (
                  <a
                    key={`partner-triple-${index}`}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-44 xs:w-32 h-24 xs:h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl xs:rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-colors duration-300 group p-6 xs:p-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-32 xs:py-20 sm:py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="container mx-auto px-6 xs:px-4">
          <div className="text-center mb-20 xs:mb-12 animate-fade-in">
            <h2 className="text-5xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-6 xs:mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                WaguRoom
              </span>
            </h2>
            <p className="text-lg xs:text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Experience the next generation of Discord bot technology with powerful features and seamless integration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xs:gap-10 items-center max-w-7xl mx-auto">
            <div className="space-y-8 xs:space-y-6 animate-slide-in-left">
              <div className="space-y-6 xs:space-y-4">
                {[
                  {
                    icon: <HiShieldCheck className="text-2xl xs:text-xl" />,
                    title: 'Advanced Auto-Moderation',
                    desc: 'Intelligent spam filtering, profanity detection, and real-time threat protection'
                  },
                  {
                    icon: <HiSparkles className="text-2xl xs:text-xl" />,
                    title: 'Rich Entertainment Suite',
                    desc: 'High-quality music player, interactive games, and engaging community features'
                  },
                  {
                    icon: <HiChartBar className="text-2xl xs:text-xl" />,
                    title: 'Comprehensive Analytics',
                    desc: 'Track member engagement, server growth, and activity patterns with detailed logs'
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="group flex items-start gap-4 xs:gap-3 p-6 xs:p-4 rounded-2xl xs:rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="flex-shrink-0 p-3 xs:p-2 bg-white/10 rounded-xl xs:rounded-lg group-hover:bg-white/20 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg xs:text-base mb-2 xs:mb-1">{item.title}</h4>
                      <p className="text-sm xs:text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 xs:p-6 rounded-3xl xs:rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl xs:rounded-2xl" />
                
                <div className="relative space-y-6 xs:space-y-4">
                  {[
                    { label: 'Command Prefix', value: '$ wagu help', color: 'text-green-400' },
                    { label: 'Available Commands', value: '150+ commands', color: 'text-blue-400' },
                    { label: 'Average Response', value: '< 50ms', color: 'text-purple-400' },
                    { label: 'System Uptime', value: '99.9%', color: 'text-pink-400' }
                  ].map((stat, index) => (
                    <div 
                      key={index}
                      className="bg-black/40 backdrop-blur-sm p-5 xs:p-4 rounded-xl xs:rounded-lg border border-white/5 hover:border-white/10 transition-all duration-300 hover:scale-105">
                      <div className="text-xs xs:text-[10px] text-gray-500 uppercase tracking-wider mb-2 xs:mb-1">{stat.label}</div>
                      <code className={`text-base xs:text-sm font-mono font-bold ${stat.color}`}>{stat.value}</code>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 xs:py-20 sm:py-24 bg-black">
        <div className="container mx-auto px-6 xs:px-4">
          <div className="text-center mb-20 xs:mb-12 animate-fade-in">
            <h2 className="text-5xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-6 xs:mb-4">
              Powerful{' '}
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-lg xs:text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage, entertain, and grow your Discord community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xs:gap-5 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl xs:rounded-2xl p-8 xs:p-5 hover:bg-gradient-to-b hover:from-white/15 hover:to-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl xs:rounded-2xl" />
                
                <div className="relative">
                  <div className="inline-flex p-4 xs:p-3 rounded-2xl xs:rounded-xl bg-white/10 mb-6 xs:mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl xs:text-lg font-bold mb-3 xs:mb-2">{feature.title}</h3>
                  <p className="text-sm xs:text-xs text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 xs:py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-6 xs:px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] xs:rounded-3xl p-16 xs:p-8 sm:p-12 text-center hover:border-white/20 transition-all duration-500 animate-fade-in">
            <h2 className="text-5xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-6 xs:mb-4">
              Ready to Transform Your Server?
            </h2>
            <p className="text-lg xs:text-sm sm:text-base text-gray-400 mb-10 xs:mb-6 max-w-2xl mx-auto leading-relaxed">
              Join thousands of thriving communities already using WaguRoom. Start your journey today, completely free!
            </p>
            <div className="flex flex-col xs:flex-col sm:flex-row gap-4 xs:gap-3 justify-center">
              <a
                href="https://discord.gg/MwNE7Vfb6t"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 xs:px-6 py-4 xs:py-3 bg-white text-black rounded-xl xs:rounded-lg font-semibold text-base xs:text-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  <SiDiscord className="text-xl xs:text-lg" />
                  Add to Discord Now
                </span>
              </a>
              <Link
                href="/pages/document"
                className="px-8 xs:px-6 py-4 xs:py-3 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl xs:rounded-lg font-semibold text-base xs:text-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(-5deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        @keyframes scroll-partners {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-scroll-partners {
          animation: scroll-partners 30s linear infinite;
        }
      `}</style>
    </div>
  )
}