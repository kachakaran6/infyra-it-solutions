"use client";

import { Code, Palette, Cog, Laptop, Database, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    desc: "High-performance, scalable web applications built with Next.js, React, and modern tech stacks for optimal UX.",
    features: ["Progressive Web Apps", "E-commerce Solutions", "CMS Integration"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI / UX Design",
    desc: "User-centric design systems that bridge the gap between aesthetics and functionality for maximum engagement.",
    features: ["Interface Design", "User Research", "Prototyping"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: "Automation & Bots",
    desc: "Intelligent RPA and chatbot solutions designed to streamline workflows and reduce operational overhead.",
    features: ["Process Automation", "AI Chatbots", "Workflow Logic"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Custom Software",
    desc: "Bespoke enterprise software tailored to your specific business logic, from CRM to ERP architectures.",
    features: ["Enterprise Apps", "SaaS Platforms", "Legacy Migration"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "API & Backend",
    desc: "Robust, secure, and scalable backend infrastructures with cloud-native architectures and microservices.",
    features: ["REST & GraphQL", "Serverless", "Database Design"],
    color: "from-blue-600 to-indigo-600"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Data & Analytics",
    desc: "Turning raw data into strategic insights with advanced modeling, BI dashboards, and visualization.",
    features: ["Predictive Analysis", "BI Dashboards", "Big Data"],
    color: "from-rose-500 to-orange-500"
  },
];

export default function Services({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest mb-6">
              Expertise
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering your business with <span className="text-gradient">Premium</span> Solutions.
            </h2>
          </div>
          <p className="text-xl opacity-60 max-w-sm leading-relaxed mb-4">
            We don't just write code; we architect systems that drive growth and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-[32px] glass border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full rounded-[15px] bg-background flex items-center justify-center text-foreground group-hover:bg-transparent group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 flex items-center justify-between">
                  {service.title}
                  <span className="text-xs font-mono opacity-20">0{i + 1}</span>
                </h3>

                <p className="opacity-70 leading-relaxed mb-8 text-sm">
                  {service.desc}
                </p>

                <div className="space-y-3 mt-auto mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                      <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-primary font-bold text-sm group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
