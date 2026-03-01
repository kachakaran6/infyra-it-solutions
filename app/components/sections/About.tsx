"use client";

import {
  Globe,
  Star,
  Briefcase,
  Award,
  Users,
  Shield,
  Clock,
  ArrowUpRight
} from "lucide-react";

export default function About({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Visual Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 glass rounded-[40px] p-8 md:p-12 border border-primary/10 overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>

              <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-foreground">
                Architecting the <span className="text-gradient">Digital Edge</span> of your business.
              </h3>

              <div className="space-y-6">
                <p className="text-lg opacity-70 leading-relaxed text-foreground">
                  Founded on the principles of excellence and innovation, Infyra has grown into a global powerhouse in IT consulting and digital transformation.
                </p>
                <p className="text-lg opacity-70 leading-relaxed text-foreground">
                  We don't just build software; we build the future infrastructure of enterprise success.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="p-6 rounded-3xl glass border border-foreground/5 group-hover:border-primary/20 transition-colors">
                  <div className="text-3xl font-bold text-primary mb-1">10+</div>
                  <div className="text-xs uppercase tracking-widest opacity-50 font-bold text-foreground">Years of Excellence</div>
                </div>
                <div className="p-6 rounded-3xl glass border border-foreground/5 group-hover:border-secondary/20 transition-colors">
                  <div className="text-3xl font-bold text-secondary mb-1">150+</div>
                  <div className="text-xs uppercase tracking-widest opacity-50 font-bold text-foreground">Global Clients</div>
                </div>
              </div>

              <button className="mt-10 flex items-center gap-2 text-primary font-bold group/btn">
                Read Our Story
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
          </div>

          {/* Text/Content Side */}
          <div className="order-1 lg:order-2 space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest mb-6">
                Our Identity
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Transforming <span className="opacity-40 italic font-display">Ideas</span> Into Reality.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold">Global Mission</h4>
                <p className="text-sm opacity-60 leading-relaxed">
                  Empowering businesses worldwide through cutting-edge technology that drives efficiency.
                </p>
              </div>

              <div className="space-y-4 group">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold">Quality Vision</h4>
                <p className="text-sm opacity-60 leading-relaxed">
                  Being the recognized leader in IT innovation, shaping tomorrow's digital landscape.
                </p>
              </div>

              <div className="space-y-4 group">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold">Secured Logic</h4>
                <p className="text-sm opacity-60 leading-relaxed">
                  Enterprise-grade security built into every line of code we ship.
                </p>
              </div>

              <div className="space-y-4 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-400/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-all duration-500">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold">Expert Team</h4>
                <p className="text-sm opacity-60 leading-relaxed">
                  A elite squad of developers and designers with decades of experience.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
