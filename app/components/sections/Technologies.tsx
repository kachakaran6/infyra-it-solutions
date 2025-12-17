"use client";

type Technology = {
  name: string;
  category: string;
};

type TechnologiesProps = {
  darkMode: boolean;
};

const technologies: Technology[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "TypeScript", category: "Language" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "GraphQL", category: "API" },
  { name: "TailwindCSS", category: "Styling" },
  { name: "Redis", category: "Cache" },
];

export default function Technologies({ darkMode }: TechnologiesProps) {
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";
  const sectionBg = darkMode ? "bg-gray-800" : "bg-gray-50";

  return (
    <section id="technologies" className={`py-24 px-4 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full mb-4">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              Tech Stack
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Powered by Modern Technology
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            We leverage cutting-edge tools and frameworks to build robust,
            scalable solutions
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className={`group p-8 rounded-2xl ${cardBg} border ${
                darkMode ? "border-gray-700" : "border-gray-200"
              } shadow-lg hover:shadow-2xl transition-all text-center hover:scale-105 cursor-pointer`}
            >
              <div className="text-2xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                {tech.name}
              </div>
              <div className="text-sm opacity-60">{tech.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
