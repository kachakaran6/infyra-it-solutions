"use client";

import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

type TechnologiesProps = {
  darkMode: boolean;
};

const technologies = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Python", icon: FaPython },
];

export default function Technologies({ darkMode }: TechnologiesProps) {
  const sectionBg = darkMode ? "bg-gray-900" : "bg-slate-50";
  const cardBg = darkMode ? "bg-gray-900/70" : "bg-white";

  return (
    <section
      id="technologies"
      className={`relative py-28 px-4 overflow-hidden ${sectionBg}`}
    >
      {/* Tech Glow Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute top-1/4 left-1/2 -translate-x-1/2
            w-[700px] h-[700px]
            bg-blue-500/10
            blur-[140px]
          "
        />
        <div
          className="
            absolute bottom-1/4 right-1/3
            w-[500px] h-[500px]
            bg-purple-500/10
            blur-[140px]
          "
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full mb-4">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              Tech Stack
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Powered by Modern Technology
          </h2>

          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            We use industry-leading tools and frameworks to build fast,
            scalable, and reliable solutions.
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
          {technologies.map((tech, i) => {
            const Icon = tech.icon;

            return (
              <div
                key={i}
                className={`
                  group relative w-28 h-28
                  flex items-center justify-center
                  rounded-2xl ${cardBg}
                  border ${darkMode ? "border-gray-800" : "border-gray-200"}
                  shadow-lg
                  hover:shadow-2xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:ring-1 hover:ring-blue-500/30
                  cursor-pointer
                `}
              >
                {/* Icon */}
                <Icon
                  className="
                    text-4xl
                    text-blue-500
                    group-hover:text-purple-500
                    transition-colors duration-300
                  "
                />

                {/* Name on hover */}
                <span
                  className="
                    absolute bottom-3
                    text-sm font-semibold
                    opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300
                    pointer-events-none
                  "
                >
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
