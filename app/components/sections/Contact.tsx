"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

type ContactProps = {
  darkMode: boolean;
};

export default function Contact({ darkMode }: ContactProps) {
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

  const cardBg = darkMode ? "bg-gray-800" : "bg-white";

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-600/10 border border-purple-600/20 rounded-full mb-4">
            <span className="text-purple-600 dark:text-purple-400 font-semibold">
              Contact Us
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our expert team
            today
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div
              className={`p-8 rounded-2xl ${cardBg} border ${
                darkMode ? "border-gray-700" : "border-gray-200"
              } shadow-xl`}
            >
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <ContactItem
                  icon={<Mail className="w-6 h-6 text-blue-600" />}
                  title="Email"
                  lines={["contact@infyra.com", "sales@infyra.com"]}
                />

                <ContactItem
                  icon={<Phone className="w-6 h-6 text-blue-600" />}
                  title="Phone"
                  lines={["+1 (555) 123-4567", "+1 (555) 987-6543"]}
                />

                <ContactItem
                  icon={<MapPin className="w-6 h-6 text-blue-600" />}
                  title="Headquarters"
                  lines={[
                    "123 Tech Boulevard",
                    "Silicon Valley, CA 94025",
                    "United States",
                  ]}
                />

                <ContactItem
                  icon={<Clock className="w-6 h-6 text-blue-600" />}
                  title="Business Hours"
                  lines={[
                    "Mon - Fri: 9:00 AM - 6:00 PM",
                    "24/7 Emergency Support",
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div
              className={`p-10 rounded-2xl ${cardBg} border ${
                darkMode ? "border-gray-700" : "border-gray-200"
              } shadow-2xl`}
            >
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <InputField
                    label="Full Name *"
                    value={formData.name}
                    onChange={(v) => setFormData({ ...formData, name: v })}
                    error={formErrors.name}
                    darkMode={darkMode}
                    placeholder="John Doe"
                  />

                  {/* Email */}
                  <InputField
                    label="Email Address *"
                    type="email"
                    value={formData.email}
                    onChange={(v) => setFormData({ ...formData, email: v })}
                    error={formErrors.email}
                    darkMode={darkMode}
                    placeholder="john@company.com"
                  />
                </div>

                {/* Company */}
                <InputField
                  label="Company Name (Optional)"
                  value={formData.company}
                  onChange={(v) => setFormData({ ...formData, company: v })}
                  darkMode={darkMode}
                  placeholder="Your Company Inc."
                />

                {/* Message */}
                <TextareaField
                  label="Project Details *"
                  value={formData.message}
                  onChange={(v) => setFormData({ ...formData, message: v })}
                  error={formErrors.message}
                  darkMode={darkMode}
                  placeholder="Tell us about your project, requirements, timeline, and budget..."
                />

                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Send Message <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-sm opacity-60 text-center">
                  We&apos;ll get back to you within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small Reusable Parts ---------- */

function ContactItem({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-600/10 rounded-lg">{icon}</div>
      <div>
        <p className="font-semibold mb-1">{title}</p>
        {lines.map((line, i) => (
          <p key={i} className="opacity-80">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  error,
  darkMode,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
  darkMode: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="block mb-2 font-semibold">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full p-4 rounded-xl border ${
          error ? "border-red-500" : "border-gray-300"
        } ${darkMode ? "bg-gray-700" : "bg-gray-50"}
        focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all`}
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}

function TextareaField({
  label,
  value,
  onChange,
  placeholder,
  error,
  darkMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
  darkMode: boolean;
}) {
  return (
    <div>
      <label className="block mb-2 font-semibold">{label}</label>
      <textarea
        rows={6}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full p-4 rounded-xl border ${
          error ? "border-red-500" : "border-gray-300"
        } ${darkMode ? "bg-gray-700" : "bg-gray-50"}
        focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none`}
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
