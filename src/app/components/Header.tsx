'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { SiDiscord } from 'react-icons/si'

interface NavLink {
  name: string
  path: string
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Tutorial', path: '/pages/tutorial' },
    { name: 'Documentation', path: '/pages/document' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}>
      <nav className="container mx-auto px-6 xs:px-4 py-4 xs:py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 xs:gap-2 group">
            <span className="text-2xl xs:text-xl font-black bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              WaguRoom
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative text-sm font-semibold transition-all duration-300 group ${
                  pathname === link.path ? 'text-white' : 'text-gray-400 hover:text-white'
                }`} >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                    pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}/>
              </Link>
            ))}
            <a
              href="https://discord.com/oauth2/authorize?client_id=1396849762862501968"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-2.5 bg-white text-black rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/25">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                <SiDiscord className="text-lg" />
                Add to Discord
              </span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white text-2xl xs:text-xl p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
            aria-label="Toggle menu">
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <div
          className={`md:hidden fixed inset-0 top-16 xs:top-14 bg-black/98 backdrop-blur-xl transition-all duration-500 ${
            isMobileMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}>
          <div className="container mx-auto px-6 xs:px-4 py-8 xs:py-6">
            <div className="flex flex-col gap-4 xs:gap-3">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg xs:text-base font-semibold transition-all duration-300 p-4 xs:p-3 rounded-xl hover:bg-white/10 animate-fade-in ${
                    pathname === link.path
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}>
                  {link.name}
                </Link>
              ))}
              <a
                href="https://discord.com/oauth2/authorize?client_id=1396849762862501968"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 xs:mt-2 bg-white text-black px-6 py-4 xs:py-3 rounded-xl font-semibold text-center hover:bg-gray-100 transition-all duration-300 text-base xs:text-sm animate-fade-in"
                style={{ animationDelay: '300ms' }}>
                <span className="flex items-center justify-center gap-2">
                  <SiDiscord className="text-xl xs:text-lg" />
                  Add to Discord
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </header>
  )
}