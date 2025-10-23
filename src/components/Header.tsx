"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { SiDiscord } from "react-icons/si";

interface NavLink {
  name: string;
  path: string;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Tutorial", path: "/pages/tutorial" },
    { name: "Documentation", path: "/pages/document" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 xs:px-4 py-4 xs:py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 xs:gap-2 group relative z-50"
            >
              <span className="text-2xl xs:text-xl font-black bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                WaguRoom
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative text-sm font-semibold transition-all duration-300 group ${
                    pathname === link.path
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                      pathname === link.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
              <a
                href="https://discord.com/oauth2/authorize?client_id=1396849762862501968"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-2.5 bg-white text-black rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <SiDiscord className="text-lg" />
                  Add to Discord
                </span>
              </a>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-50 text-white text-3xl xs:text-2xl p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar - Slide from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-80 xs:w-72 bg-black/98 backdrop-blur-xl border-l border-white/10 z-40 md:hidden transition-transform duration-500 ease-out shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 xs:pt-20 px-8 xs:px-6 pb-8">
          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base xs:text-base font-semibold transition-all duration-300 p-4 xs:p-3 rounded-xl hover:bg-white/10 animate-slide-in ${
                  pathname === link.path
                    ? "text-white bg-white/10 border border-white/20"
                    : "text-gray-400 hover:text-white border border-transparent"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Add to Discord Button */}
          <div
            className="mt-8 xs:mt-6 animate-slide-in"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="https://discord.com/oauth2/authorize?client_id=1396849762862501968"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-white text-black px-6 py-4 xs:py-3 rounded-xl font-semibold text-center hover:bg-gray-100 transition-all duration-300 text-base xs:text-sm shadow-lg"
            >
              <span className="flex items-center justify-center gap-2">
                <SiDiscord className="text-xl xs:text-lg" />
                Add to Discord
              </span>
            </a>
          </div>

          {/* Decorative Elements */}
          <div
            className="mt-auto pt-8 border-t border-white/10 animate-slide-in"
            style={{ animationDelay: "400ms" }}
          >
            <p className="text-gray-500 text-xs text-center">
              © 2025 WaguRoom. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
