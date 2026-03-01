"use client";

import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

type Props = {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
  scrolled: boolean;
};

export default function Navbar({ darkMode, setDarkMode, scrolled }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "py-4" : "py-6"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`
            glass rounded-2xl flex justify-between items-center h-16 px-6 
            transition-all duration-300
            ${scrolled ? "shadow-2xl" : "shadow-sm border-transparent"}
          `}
        >
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative w-10 h-10 group-hover:scale-110 transition-transform">
              <Image
                src="/icon1.png"
                alt="Infyra Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-display font-bold tracking-tight">
                Infyra
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              "about",
              "services",
              "technologies",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium capitalize opacity-60 hover:opacity-100 hover:text-primary transition-all relative group"
              >
                {item.replace("-", " ")}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl glass hover:bg-primary/5 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4 text-primary" />}
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] transition-all hover:scale-[1.02]"
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              className="md:hidden p-2 opacity-70 hover:opacity-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="px-4 pt-2 md:hidden">
          <div className="glass rounded-2xl p-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-300">
            {["home", "about", "services", "technologies", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-lg font-medium capitalize py-2 border-b border-foreground/5 last:border-0 opacity-70 hover:opacity-100"
              >
                {item.replace("-", " ")}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full py-4 bg-primary text-white rounded-xl font-bold"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
