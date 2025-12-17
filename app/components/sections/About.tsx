"use client";

import {
  Globe,
  Star,
  Briefcase,
  Award,
  Users,
  Shield,
  Clock,
} from "lucide-react";

type AboutProps = {
  darkMode: boolean;
};

export default function About({ darkMode }: AboutProps) {
  const sectionBg = darkMode ? "bg-slate-950" : "bg-slate-100";
  const cardBg = darkMode ? "bg-gray-900" : "bg-white";

  return (
    <section id="about" className={`relative py-28 px-4 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full mb-4">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              About Us
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Transforming Ideas Into Reality
          </h2>

          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            We&apos;re not just developers—we&apos;re digital architects
            crafting the future of business technology.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mission & Vision */}
          <div className="space-y-8">
            <div
              className={`p-8 rounded-2xl ${cardBg} shadow-lg border ${
                darkMode ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                To empower businesses worldwide through cutting-edge technology
                solutions that drive innovation, efficiency, and sustainable
                growth in the digital era.
              </p>
            </div>

            <div
              className={`p-8 rounded-2xl ${cardBg} shadow-lg border ${
                darkMode ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <Star className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                To be the global leader in IT innovation, recognized for
                transformative solutions that shape how businesses operate in
                tomorrow&apos;s digital landscape.
              </p>
            </div>
          </div>

          {/* Why Companies Choose Us */}
          <div
            className={`p-10 rounded-2xl ${cardBg} shadow-xl border ${
              darkMode ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <h3 className="text-3xl font-bold mb-8 text-center">
              Why Top Companies Choose Us
            </h3>

            <div className="space-y-4">
              {[
                {
                  icon: <Briefcase className="w-6 h-6" />,
                  text: "10+ Years Industry Leadership",
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  text: "ISO 9001 & ISO 27001 Certified",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  text: "150+ Enterprise Clients Worldwide",
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  text: "98% Client Retention Rate",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  text: "Microsoft & AWS Certified Partners",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  text: "24/7 Dedicated Support Team",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-600/5 transition-colors"
                >
                  <div className="text-blue-600 flex-shrink-0">{item.icon}</div>
                  <span className="text-lg font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
