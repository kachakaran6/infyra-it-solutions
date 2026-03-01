"use client";

import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGraphql,
  SiFirebase,
  SiPrisma,
  SiRedis,
  SiFramer
} from "react-icons/si";

const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "Framer", icon: SiFramer, color: "text-[#0055FF]" },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
      { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
      { name: "GraphQL", icon: SiGraphql, color: "text-[#E10098]" },
      { name: "Prisma", icon: SiPrisma, color: "text-[#2D3748]" },
    ]
  },
  {
    category: "Database & Cloud",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "Redis", icon: SiRedis, color: "text-[#DC382D]" },
      { name: "AWS", icon: FaAws, color: "text-[#FF9900]" },
      { name: "Docker", icon: FaDocker, color: "text-[#2496ED]" },
    ]
  }
];

export default function Technologies({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="technologies" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest mb-6">
            Our Stack
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Powered by <span className="text-gradient">Elite</span> Technology.
          </h2>
          <p className="text-xl opacity-60 max-w-2xl mx-auto">
            We leverage the most advanced tools in the industry to build robust, future-proof digital assets.
          </p>
        </div>

        <div className="space-y-16">
          {techStack.map((group, i) => (
            <div key={i} className="space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity-40 whitespace-nowrap">
                  {group.category}
                </h3>
                <div className="h-px w-full bg-gradient-to-r from-primary/10 to-transparent"></div>
              </div>

              <div className="flex flex-wrap gap-4 md:gap-6">
                {group.items.map((tech, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-3 px-6 py-4 glass rounded-2xl border border-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <tech.icon className={`text-2xl transition-all duration-300 ${tech.color} group-hover:scale-110`} />
                    <span className="font-bold text-sm tracking-tight">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
