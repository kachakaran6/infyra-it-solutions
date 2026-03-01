"use client";

import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import Image from "next/image";

export default function Hero({ darkMode }: { darkMode: boolean }) {
  const techLogos = [
    { icon: <FaReact className="text-blue-400" />, label: "React" },
    { icon: <FaNodeJs className="text-green-500" />, label: "Node.js" },
    { icon: <FaPython className="text-blue-500" />, label: "Python" },
    { icon: <FaAws className="text-orange-500" />, label: "AWS" },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 min-h-screen flex items-center overflow-hidden px-4"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] animate-pulse delay-700"></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[160px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center text-left">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/20 text-sm font-medium text-primary mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Accelerating Digital Innovation
          </div>

          <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight text-foreground">
            Engineering
            <span className="block text-gradient">Tomorrow's</span>
            Solutions Today.
          </h1>

          <p className="text-xl md:text-2xl opacity-80 max-w-xl leading-relaxed text-foreground">
            Enterprise-grade development, AI-driven automation, and digital
            transformation that scales with your ambition.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] transition-all hover:scale-[1.02] flex items-center justify-center group glow-btn shadow-xl shadow-primary/20"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 glass rounded-2xl font-bold text-lg hover:bg-primary/5 transition-all flex items-center justify-center border border-primary/10 text-foreground"
            >
              Explore Services
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {techLogos.map((tech, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background glass flex items-center justify-center text-lg shadow-lg">
                  {tech.icon}
                </div>
              ))}
            </div>
            <div className="text-sm opacity-70 text-foreground">
              <span className="font-bold text-foreground">500+</span> Projects Delivered Successfully
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative z-10 glass rounded-[60px] p-4 border border-white/10 shadow-2xl animate-float">
            <div className="relative rounded-[45px] overflow-hidden aspect-video bg-black/20 group">
              <Image
                src="/hero-viz.png"
                alt="Digital Architecture Visualization"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              {/* Overlay Terminal Effect */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-1.5 focus-glow">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-[10px] font-mono opacity-50 uppercase tracking-widest bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur text-white border border-white/5">
                    Infyra Core v4.0.2
                  </div>
                </div>
              </div>
            </div>

            {/* Floating UI Elements */}
            <div className="absolute -top-12 -right-12 glass p-6 rounded-[32px] border border-primary/10 shadow-2xl animate-float delay-700 bg-background/80 backdrop-blur-xl z-20">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/5 border border-emerald-500/20">
                  <CheckCircle2 className="text-emerald-500 w-7 h-7" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-60 text-foreground mb-1">Success Rate</div>
                  <div className="text-3xl font-bold text-gradient">99.98%</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-14 -left-12 glass p-7 rounded-[32px] border border-primary/10 shadow-2xl animate-float delay-1000 bg-background/80 backdrop-blur-xl z-20">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary shadow-[0_0_15px_var(--primary-glow)]"></span>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-60 text-foreground">Operational Status</div>
                </div>
                <div className="h-2.5 w-44 bg-foreground/5 rounded-full overflow-hidden border border-foreground/5">
                  <div className="h-full w-[94%] bg-gradient-to-r from-primary to-blue-400 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <div className="text-xs font-bold opacity-80 text-foreground">Global Systems</div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-[10px] font-black tracking-tighter">
                    <span className="w-1 h-1 rounded-full bg-primary animate-pulse"></span>
                    LIVE
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full -z-10 pointer-events-none opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-primary/5 rounded-full -z-10 animate-reverse-spin pointer-events-none opacity-10"></div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Scroll</span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
