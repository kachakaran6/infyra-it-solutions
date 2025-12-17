"use client";

import { Code, Palette, Cog, Laptop, Database, TrendingUp } from "lucide-react";

type ServicesProps = {
  darkMode: boolean;
};

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    desc: "Modern, fast, and scalable websites using React, Next.js, and Node.js.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI / UX Design",
    desc: "User-centered design with clean interfaces and seamless experiences.",
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: "Automation & Bots",
    desc: "Workflow automation, chatbots, and RPA to boost productivity.",
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Custom Software",
    desc: "Tailor-made software solutions built for your business needs.",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "API & Backend",
    desc: "Secure, scalable APIs and backend systems with cloud integration.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Data & Analytics",
    desc: "Data-driven insights, dashboards, and reporting solutions.",
  },
];

export default function Services({ darkMode }: ServicesProps) {
  const sectionBg = darkMode ? "bg-gray-900" : "bg-white";
  const cardBg = darkMode ? "bg-gray-800" : "bg-gray-50";

  return (
    <section id="services" className={`py-28 px-4 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full mb-4">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              Services
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            What We Provide
          </h2>

          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            We help businesses build, scale, and optimize their digital products
            with reliable and future-ready technology solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className={`p-8 rounded-xl ${cardBg} border ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              <p className="opacity-80 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
