"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

type HeroProps = {
  darkMode: boolean;
};

export default function Hero({ darkMode }: HeroProps) {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const targets = {
      projects: 500,
      clients: 150,
      years: 10,
      satisfaction: 98,
    };

    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setStats({
        projects: Math.floor((targets.projects / steps) * step),
        clients: Math.floor((targets.clients / steps) * step),
        years: Math.floor((targets.years / steps) * step),
        satisfaction: Math.floor((targets.satisfaction / steps) * step),
      });

      if (step >= steps) clearInterval(timer);
    }, increment);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const cardBg = darkMode ? "bg-gray-800" : "bg-white";

  return (
    <section
      id="home"
      className="pt-32 pb-24 px-4 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />

      {/* Floating blobs */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        {/* Badge */}
        <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full mb-6">
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            🚀 Trusted by 150+ Companies Worldwide
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Build The Future with
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
            Smart IT Solutions
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto opacity-90 leading-relaxed">
          Enterprise-grade development, automation, and digital transformation
          services that scale with your ambition
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection("contact")}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all flex items-center justify-center gap-2 hover:scale-105"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className={`px-8 py-4 border-2 border-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            View Services
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { label: "Projects Completed", value: stats.projects, suffix: "+" },
            { label: "Happy Clients", value: stats.clients, suffix: "+" },
            { label: "Years Experience", value: stats.years, suffix: "+" },
            {
              label: "Client Satisfaction",
              value: stats.satisfaction,
              suffix: "%",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl ${cardBg} shadow-lg backdrop-blur-sm border ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-sm opacity-70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 opacity-50" />
      </div>
    </section>
  );
}
