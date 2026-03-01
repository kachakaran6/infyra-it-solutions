"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
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

export default function Testimonials({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest mb-6">
            Social Proof
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            The <span className="italic font-display opacity-40">Voice</span> of our Clients.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="group relative p-10 rounded-[32px] glass border border-primary/5 hover:border-primary/20 transition-all duration-500 overflow-hidden"
            >
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors rotate-12" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 opacity-80 italic">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary p-[1px]">
                    <div className="w-full h-full rounded-[15px] bg-background flex items-center justify-center font-bold text-xl text-primary font-display">
                      {item.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">{item.name}</div>
                    <div className="text-sm opacity-60 font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">{item.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
