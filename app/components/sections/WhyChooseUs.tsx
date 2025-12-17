"use client";

import { Zap, Shield, Users, Award } from "lucide-react";
import { JSX } from "react";

type WhyChooseUsItem = {
  icon: JSX.Element;
  title: string;
  desc: string;
  stat: string;
};

type WhyChooseUsProps = {
  darkMode: boolean;
};

const whyChooseUs: WhyChooseUsItem[] = [
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Lightning Fast",
    desc: "Agile sprints with 2-week delivery cycles",
    stat: "40% faster",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Bank-Grade Security",
    desc: "ISO 27001 certified with end-to-end encryption",
    stat: "99.9% uptime",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Expert Team",
    desc: "50+ certified developers with 10+ years experience",
    stat: "50+ experts",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Quality First",
    desc: "Comprehensive testing with 95%+ code coverage",
    stat: "98% satisfaction",
  },
];

export default function WhyChooseUs({ darkMode }: WhyChooseUsProps) {
  const sectionBg = darkMode ? "bg-gray-950" : "bg-slate-100";
  const cardBg = darkMode ? "bg-gray-900" : "bg-white";

  return (
    <section id="why-us" className={`relative py-28 px-4 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-purple-600/10 border border-purple-600/20 rounded-full mb-4">
            <span className="text-purple-600 dark:text-purple-400 font-semibold">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The Infyra Advantage
          </h2>

          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Industry-leading expertise backed by proven results
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, i) => (
            <div
              key={i}
              className={`
                group p-8 rounded-2xl ${cardBg}
                border ${darkMode ? "border-gray-800" : "border-gray-200"}
                shadow-lg
                hover:shadow-2xl
                transition-all duration-300
                hover:-translate-y-2
                text-center
              `}
            >
              <div className="inline-flex items-center justify-center p-5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{item.title}</h3>

              <p className="opacity-80 mb-4">{item.desc}</p>

              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {item.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
