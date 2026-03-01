"use client";

import { Linkedin, Twitter, Github, ArrowRight, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer({ darkMode }: { darkMode: boolean }) {
  return (
    <footer className="py-24 px-4 relative overflow-hidden bg-background border-t border-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/icon1.png"
                  alt="Infyra Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tighter">
                Infyra<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs">
              Architecting the next generation of digital infrastructure. We transform complex problems into elegant software solutions.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-xl glass border border-primary/5 flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-40">Resources</h4>
            <ul className="space-y-4">
              {["Platform", "Partners", "News", "Careers"].map((item) => (
                <li key={item}>
                  <button className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-primary" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-40">Solutions</h4>
            <ul className="space-y-4">
              {["Web Architectures", "Cloud Logic", "Enterprise Bot", "Data Studio"].map((item) => (
                <li key={item}>
                  <button className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-primary" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-40">Stay Updated</h4>
            <div className="space-y-4">
              <p className="text-sm opacity-60">Join our newsletter for the latest tech insights.</p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full glass py-4 px-6 rounded-2xl border border-primary/5 focus:border-primary/50 outline-none transition-all placeholder:opacity-30 text-sm"
                />
                <button className="absolute right-2 top-2 bottom-2 px-4 bg-primary text-white rounded-xl flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="pt-12 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium opacity-40 tracking-wider">
            &copy; {new Date().getFullYear()} INFYRA IT SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest opacity-40">
            <button className="hover:text-primary transition-colors">Privacy</button>
            <button className="hover:text-primary transition-colors">Terms</button>
            <button className="hover:text-primary transition-colors">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
