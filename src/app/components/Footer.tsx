'use client'

import Link from 'next/link'
import { SiDiscord, SiGithub } from 'react-icons/si'
import { HiMail, HiLocationMarker } from 'react-icons/hi'

interface FooterLink {
  name: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

export default function Footer() {
  const footerSections: FooterSection[] = [
    {
      title: 'Product',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Features', href: '/#features' },
        { name: 'Tutorial', href: '/tutorial' },
        { name: 'Documentation', href: '/document' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/pages/privacyPolicy' },
        { name: 'Terms of Service', href: '/pages/ToS' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Community', href: 'https://discord.com' },
        { name: 'Status', href: '/status' },
        { name: 'Contact Us', href: '/contact' },
      ]
    }
  ]

  const socialLinks = [
    { icon: <SiDiscord className="text-xl xs:text-lg" />, href: 'https://discord.com', label: 'Discord' },
    { icon: <SiGithub className="text-xl xs:text-lg" />, href: 'https://github.com', label: 'GitHub' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-zinc-950 to-black border-t border-white/10">
      <div className="container mx-auto px-6 xs:px-4 py-16 xs:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 xs:gap-8">
          <div className="lg:col-span-2 space-y-6 xs:space-y-4">
            <Link href="/" className="flex items-center gap-3 xs:gap-2 group w-fit">
              <div className="bg-gradient-to-br from-white to-gray-400 p-2.5 xs:p-2 rounded-xl xs:rounded-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <SiDiscord className="text-black text-2xl xs:text-xl" />
              </div>
              <span className="text-2xl xs:text-xl font-black">WaguRoom</span>
            </Link>
            
            <p className="text-gray-400 text-sm xs:text-xs leading-relaxed max-w-sm">
              The most powerful and feature-rich Discord bot built for modern communities. 
              Automate moderation, engage members, and unlock unlimited possibilities.
            </p>

            <div className="flex items-center gap-4 xs:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 xs:p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl xs:rounded-lg transition-all duration-300 hover:scale-110 group">
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            <div className="space-y-2 xs:space-y-1.5 pt-4 xs:pt-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm xs:text-xs">
                <HiMail className="text-base xs:text-sm flex-shrink-0" />
                <a href="mailto:support@waguroom.com" className="hover:text-white transition-colors">
                  support@waguroom.com
                </a>
              </div>
              <div className="flex items-start gap-2 text-gray-400 text-sm xs:text-xs">
                <HiLocationMarker className="text-base xs:text-sm flex-shrink-0 mt-0.5" />
                <span>Surabaya, East Java, Indonesia</span>
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4 xs:space-y-3">
              <h3 className="text-white font-bold text-base xs:text-sm">{section.title}</h3>
              <ul className="space-y-3 xs:space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-300 text-sm xs:text-xs inline-block hover:translate-x-1">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 xs:px-4 py-6 xs:py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 xs:gap-3">
            <p className="text-gray-400 text-sm xs:text-xs text-center sm:text-left">
              © {new Date().getFullYear()} WaguRoom. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 xs:gap-4">
              <Link
                href="/pages/privacyPolicy"
                className="text-gray-400 hover:text-white transition-colors text-sm xs:text-xs">
                Privacy
              </Link>
              <Link
                href="/pages/ToS"
                className="text-gray-400 hover:text-white transition-colors text-sm xs:text-xs">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
      </div>
    </footer>
  )
}