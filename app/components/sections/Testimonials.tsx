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
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    text: "Infyra transformed our entire digital infrastructure. Their expertise and dedication are unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO, InnovateLabs",
    text: "Outstanding service! They delivered our complex project ahead of schedule with exceptional quality.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Director, GlobalFinance",
    text: "The automation solutions saved us 60% in operational costs. Highly recommend!",
    rating: 5,
  },
];

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";
  const sectionBg = darkMode ? "bg-gray-800" : "bg-gray-50";

  return (
    <section id="testimonials" className={`py-24 px-4 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
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
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl ${cardBg} border ${
                darkMode ? "border-gray-700" : "border-gray-200"
              } shadow-xl hover:shadow-2xl transition-all`}
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
              <p className="text-lg mb-6 italic leading-relaxed">
                &quot;{testimonial.text}&quot;
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
