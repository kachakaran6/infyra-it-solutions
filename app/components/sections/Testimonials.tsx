"use client";

import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

type TestimonialsProps = {
  darkMode: boolean;
};

const testimonials: Testimonial[] = [
  {
    name: "Aisha",
    role: "Founder, TrustTracker",
    text: "Infyra built TrustTracker with exceptional attention to detail. The expense tracking system is advanced, fast, and incredibly user-friendly. Exactly what I envisioned and more.",
    rating: 5,
  },
  {
    name: "Chandresh",
    role: "Owner, ACK Construction",
    text: "They delivered a beautiful and professional landing page that perfectly represents our construction and renovation business. The design and performance are top-notch.",
    rating: 5,
  },
  {
    name: "Divyaraj",
    role: "Founder, Sonal Krupa Tours & Travels",
    text: "Infyra created an elegant and smooth website for our travel agency. It showcases our services perfectly and has helped us attract more customers online.",
    rating: 5,
  },
  {
    name: "Keyur",
    role: "Photographer, Ankush Photography",
    text: "The portfolio website is unique, visually stunning, and truly reflects my photography style. Infyra exceeded my expectations with creativity and execution.",
    rating: 5,
  },
];

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const sectionBg = darkMode ? "bg-gray-900" : "bg-white";
  const cardBg = darkMode ? "bg-gray-900/70" : "bg-slate-50";

  return (
    <section id="testimonials" className={`relative py-28 px-4 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full mb-4">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              Testimonials
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            What Our Clients Say
          </h2>

          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Don&apos;t just take our word for it—hear from industry leaders
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`
                p-8 rounded-2xl ${cardBg}
                border ${darkMode ? "border-gray-800" : "border-gray-200"}
                shadow-lg
                hover:shadow-2xl
                transition-all duration-300
                hover:-translate-y-1
              `}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg mb-6 italic leading-relaxed opacity-90">
                “{testimonial.text}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm opacity-60">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
