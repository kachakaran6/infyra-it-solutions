"use client";

import { Moon, Sun, Menu, X, Code } from "lucide-react";
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
  fixed w-full z-50 h-20
  backdrop-blur-md
  transition-all duration-500
  ${
    darkMode
      ? scrolled
        ? "bg-slate-900/95 shadow-lg border-b border-white/10"
        : "bg-slate-900/80 border-b border-white/5"
      : scrolled
      ? "bg-slate-500/90 shadow-lg border-b border-black/10"
      : "bg-slate-400/75 border-b border-black/5"
  }
`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-20 h-20">
              <Image
                src="/logo1.png"
                alt="Infyra Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Infyra
              </div>
              <div className="text-xs opacity-60">IT Solutions</div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex space-x-8 items-center">
            {[
              "home",
              "about",
              "services",
              "technologies",
              "testimonials",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-blue-600 transition-colors font-medium capitalize"
              >
                {item === "home" ? "Home" : item.replace("-", " ")}
              </button>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* CTA — NO transition-all */}
            <button
              onClick={() => scrollToSection("contact")}
              className="
                px-6 py-2 rounded-lg font-semibold text-white
                bg-gradient-to-r from-blue-600 to-purple-600
                transition-shadow duration-300
                hover:shadow-lg
              "
            >
              Get Started
            </button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center space-x-2">
            <button onClick={toggleDarkMode} className="p-2">
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className={`
            lg:hidden
            transition-colors duration-300
            ${darkMode ? "bg-gray-800" : "bg-white"}
            border-t ${darkMode ? "border-gray-700" : "border-gray-200"}
          `}
        >
          {[
            "home",
            "about",
            "services",
            "technologies",
            "testimonials",
            "contact",
          ].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full px-6 py-4 text-left font-medium capitalize hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {item === "home" ? "Home" : item.replace("-", " ")}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
