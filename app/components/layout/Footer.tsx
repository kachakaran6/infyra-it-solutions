"use client";

import { Code, Linkedin, Twitter, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
type FooterProps = {
  darkMode: boolean;
};

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer
      className={`py-16 px-4 ${
        darkMode
          ? "bg-gray-950 border-t border-gray-800"
          : "bg-gray-900 text-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-20 h-20">
                <Image
                  src="/logo1.png"
                  alt="Infyra Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Infyra
                </div>
                <div className="text-xs opacity-60">IT Solutions</div>
              </div>
            </div>

            <p className="opacity-70 mb-6 leading-relaxed">
              Transforming businesses through innovative technology solutions
              and digital excellence.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3 opacity-70">
              {[
                "About Us",
                "Services",
                "Technologies",
                "Careers",
                "Blog",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <button className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3 opacity-70">
              {[
                "Web Development",
                "UI/UX Design",
                "Automation & Bots",
                "Custom Software",
                "API Integration",
                "Data Analytics",
              ].map((service) => (
                <li
                  key={service}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="opacity-70 mb-4">
              Subscribe for updates, insights, and industry trends
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="opacity-70 text-sm">
              &copy; {new Date().getFullYear()} Infyra IT Solutions. All rights
              reserved.
            </p>

            <div className="flex gap-6 text-sm opacity-70">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
