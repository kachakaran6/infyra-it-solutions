"use client";

import { Zap, Shield, Users, Award } from "lucide-react";

const whyChooseUs = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Agile Development",
    desc: "Rapid-cycle delivery with 2-week sprints ensuring continuous value.",
    stat: "40% Faster",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Bank-Grade Security",
    desc: "ISO 27001 certified architectures with end-to-end encryption.",
    stat: "Zero Breaches",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Elite Developers",
    desc: "Top 1% talent with 10+ years of enterprise experience.",
    stat: "50+ Experts",
    color: "from-rose-500 to-pink-500"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Proven Excellence",
    desc: "A track record of 98% client satisfaction across global sectors.",
    stat: "99.8% Success",
    color: "from-emerald-500 to-teal-500"
  },
];

export default function WhyChooseUs({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="why-us" className="py-24 px-4 relative overflow-hidden bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest mb-6">
            The Advantage
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
            Why <span className="text-gradient">Industry Leaders</span> Partner with Us.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-[32px] glass border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 text-center flex flex-col items-center"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} p-[1px] mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/5`}>
                <div className="w-full h-full rounded-[15px] bg-background flex items-center justify-center text-foreground group-hover:bg-transparent group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-sm opacity-60 mb-8 leading-relaxed text-foreground">
                {item.desc}
              </p>

              <div className="mt-auto pt-6 border-t border-foreground/5 w-full">
                <div className="text-2xl font-bold tracking-tight text-gradient">
                  {item.stat}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
