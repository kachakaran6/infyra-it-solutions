"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from "lucide-react";

export default function Contact({ darkMode }: { darkMode: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validateForm = () => {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      alert("Thank you! Our team will contact you within 24 hours.");
      setFormData({ name: "", email: "", company: "", message: "" });
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest mb-6">
                Connect
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Let's Build the <span className="text-gradient">Next Big</span> Thing.
              </h2>
              <p className="text-xl opacity-60 max-w-lg leading-relaxed">
                Ready to transform your business? Reach out and let's discuss how we can help you scale.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Mail className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-widest text-xs">Email</span>
                </div>
                <p className="font-medium opacity-80">info@infyra.it.com</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-secondary">
                  <Phone className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-widest text-xs">Phone</span>
                </div>
                <p className="font-medium opacity-80">+91 93283 77900</p>
              </div>

              <div className="space-y-4 col-span-full">
                <div className="flex items-center gap-3 text-accent">
                  <MapPin className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-widest text-xs">Headquarters</span>
                </div>
                <p className="font-medium opacity-80 leading-relaxed">
                  Orion Building, 3rd Floor, Street No. 3, Rajkot, Gujarat, India.
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass rounded-[32px] p-8 md:p-12 border border-primary/10 shadow-2xl relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors"></div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-40 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full glass py-4 px-6 rounded-2xl border border-primary/5 focus:border-primary/50 outline-none transition-all placeholder:opacity-30"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {formErrors.name && <p className="text-red-500 text-[10px] ml-2 font-bold uppercase tracking-wider">{formErrors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-40 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full glass py-4 px-6 rounded-2xl border border-primary/5 focus:border-primary/50 outline-none transition-all placeholder:opacity-30"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {formErrors.email && <p className="text-red-500 text-[10px] ml-2 font-bold uppercase tracking-wider">{formErrors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-40 ml-1">Company (Optional)</label>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  className="w-full glass py-4 px-6 rounded-2xl border border-primary/5 focus:border-primary/50 outline-none transition-all placeholder:opacity-30"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-40 ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals..."
                  className="w-full glass py-4 px-6 rounded-2xl border border-primary/5 focus:border-primary/50 outline-none transition-all placeholder:opacity-30 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
                {formErrors.message && <p className="text-red-500 text-[10px] ml-2 font-bold uppercase tracking-wider">{formErrors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:scale-[1.01] glow-btn"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
