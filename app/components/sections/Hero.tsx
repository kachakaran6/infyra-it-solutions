"use client";

import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero({ darkMode }: { darkMode: boolean }) {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="pt-32 pb-24 min-h-screen flex items-center text-center px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          Build The Future with
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Smart IT Solutions
          </span>
        </h1>

        <p className="text-xl opacity-80 max-w-3xl mx-auto mb-10">
          Enterprise-grade development, automation, and digital transformation
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold"
          >
            Start Your Project <ArrowRight className="inline w-5 h-5 ml-2" />
          </button>
        </div>

        <div className="mt-20 animate-bounce flex justify-center">
          <ChevronDown className="w-8 h-8 opacity-50" />
        </div>
      </div>
    </section>
  );
}
