// "use client";

// import { useState, useEffect } from "react";
// import {
//   Moon,
//   Sun,
//   Menu,
//   X,
//   Code,
//   Palette,
//   Cog,
//   Laptop,
//   Database,
//   TrendingUp,
//   CheckCircle,
//   Mail,
//   Phone,
//   MapPin,
//   Linkedin,
//   Twitter,
//   Github,
//   ArrowRight,
//   Zap,
//   Shield,
//   Users,
//   Award,
//   ChevronDown,
//   Star,
//   Briefcase,
//   Globe,
//   Clock,
// } from "lucide-react";

// const Home = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeService, setActiveService] = useState(0);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     message: "",
//   });
//   const [formErrors, setFormErrors] = useState<{
//     name?: string;
//     email?: string;
//     message?: string;
//   }>({});
//   const [stats, setStats] = useState({
//     projects: 0,
//     clients: 0,
//     years: 0,
//     satisfaction: 0,
//   });

//   useEffect(() => {
//     const saved = localStorage.getItem("infyra-dark-mode");
//     if (saved) setDarkMode(JSON.parse(saved));

//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);

//     // Animate stats counter
//     const targets = {
//       projects: 500,
//       clients: 150,
//       years: 10,
//       satisfaction: 98,
//     };
//     const duration = 2000;
//     const steps = 60;
//     const increment = duration / steps;

//     let step = 0;
//     const timer = setInterval(() => {
//       step++;
//       setStats({
//         projects: Math.floor((targets.projects / steps) * step),
//         clients: Math.floor((targets.clients / steps) * step),
//         years: Math.floor((targets.years / steps) * step),
//         satisfaction: Math.floor((targets.satisfaction / steps) * step),
//       });
//       if (step >= steps) clearInterval(timer);
//     }, increment);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       clearInterval(timer);
//     };
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("infyra-dark-mode", JSON.stringify(darkMode));
//   }, [darkMode]);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   const services = [
//     {
//       icon: <Code className="w-10 h-10" />,
//       title: "Web Development",
//       desc: "Build high-performance, scalable web applications using React, Next.js, and modern frameworks with optimal SEO and lighthouse scores.",
//       features: [
//         "Progressive Web Apps",
//         "E-commerce Solutions",
//         "CMS Integration",
//         "Performance Optimization",
//       ],
//     },
//     {
//       icon: <Palette className="w-10 h-10" />,
//       title: "UI/UX Design",
//       desc: "Create stunning, user-centered interfaces with comprehensive research, prototyping, and testing for maximum engagement.",
//       features: [
//         "User Research",
//         "Wireframing",
//         "Interactive Prototypes",
//         "Design Systems",
//       ],
//     },
//     {
//       icon: <Cog className="w-10 h-10" />,
//       title: "Automation & Bots",
//       desc: "Streamline operations with intelligent RPA solutions, chatbots, and workflow automation to boost productivity by up to 70%.",
//       features: [
//         "Process Automation",
//         "AI Chatbots",
//         "Workflow Integration",
//         "Custom Scripts",
//       ],
//     },
//     {
//       icon: <Laptop className="w-10 h-10" />,
//       title: "Custom Software",
//       desc: "Develop bespoke enterprise solutions tailored to your unique business processes, from CRM to ERP systems.",
//       features: [
//         "Enterprise Applications",
//         "SaaS Platforms",
//         "Legacy Modernization",
//         "Cloud Migration",
//       ],
//     },
//     {
//       icon: <Database className="w-10 h-10" />,
//       title: "API & Backend",
//       desc: "Design robust, secure APIs and backend architectures with microservices, ensuring scalability and reliability.",
//       features: ["RESTful APIs", "GraphQL", "Microservices", "Database Design"],
//     },
//     {
//       icon: <TrendingUp className="w-10 h-10" />,
//       title: "Data Analytics",
//       desc: "Transform data into strategic insights with advanced analytics, BI dashboards, and predictive modeling.",
//       features: [
//         "Business Intelligence",
//         "Data Visualization",
//         "Predictive Analytics",
//         "Real-time Reporting",
//       ],
//     },
//   ];

//   const technologies = [
//     { name: "React", category: "Frontend" },
//     { name: "Next.js", category: "Framework" },
//     { name: "Node.js", category: "Backend" },
//     { name: "Python", category: "Backend" },
//     { name: "TypeScript", category: "Language" },
//     { name: "MongoDB", category: "Database" },
//     { name: "PostgreSQL", category: "Database" },
//     { name: "AWS", category: "Cloud" },
//     { name: "Docker", category: "DevOps" },
//     { name: "GraphQL", category: "API" },
//     { name: "TailwindCSS", category: "Styling" },
//     { name: "Redis", category: "Cache" },
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "CTO, TechCorp",
//       text: "Infyra transformed our entire digital infrastructure. Their expertise and dedication are unmatched.",
//       rating: 5,
//     },
//     {
//       name: "Michael Chen",
//       role: "CEO, InnovateLabs",
//       text: "Outstanding service! They delivered our complex project ahead of schedule with exceptional quality.",
//       rating: 5,
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "Director, GlobalFinance",
//       text: "The automation solutions saved us 60% in operational costs. Highly recommend!",
//       rating: 5,
//     },
//   ];

//   const whyChooseUs = [
//     {
//       icon: <Zap className="w-7 h-7" />,
//       title: "Lightning Fast",
//       desc: "Agile sprints with 2-week delivery cycles",
//       stat: "40% faster",
//     },
//     {
//       icon: <Shield className="w-7 h-7" />,
//       title: "Bank-Grade Security",
//       desc: "ISO 27001 certified with end-to-end encryption",
//       stat: "99.9% uptime",
//     },
//     {
//       icon: <Users className="w-7 h-7" />,
//       title: "Expert Team",
//       desc: "50+ certified developers with 10+ years experience",
//       stat: "50+ experts",
//     },
//     {
//       icon: <Award className="w-7 h-7" />,
//       title: "Quality First",
//       desc: "Comprehensive testing with 95%+ code coverage",
//       stat: "98% satisfaction",
//     },
//   ];

//   const validateForm = () => {
//     const errors: { name?: string; email?: string; message?: string } = {};
//     if (!formData.name.trim()) errors.name = "Name is required";
//     if (!formData.email.trim()) errors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email))
//       errors.email = "Email is invalid";
//     if (!formData.message.trim()) errors.message = "Message is required";
//     return errors;
//   };

//   const handleSubmit = () => {
//     const errors = validateForm();
//     if (Object.keys(errors).length === 0) {
//       alert("Thank you! Our team will contact you within 24 hours.");
//       setFormData({ name: "", email: "", company: "", message: "" });
//       setFormErrors({});
//     } else {
//       setFormErrors(errors);
//     }
//   };

//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setMobileMenuOpen(false);
//   };

//   const theme = darkMode
//     ? "bg-gray-900 text-gray-100"
//     : "bg-white text-gray-900";
//   const cardBg = darkMode ? "bg-gray-800" : "bg-white";
//   const sectionBg = darkMode ? "bg-gray-800" : "bg-gray-50";
//   const navBg = darkMode ? "bg-gray-900/95" : "bg-white/95";

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${theme}`}>
//       {/* Navigation */}
//       <nav
//         className={`fixed w-full z-50 transition-all duration-300 ${
//           scrolled ? `${navBg} backdrop-blur-md shadow-lg` : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                 <Code className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   Infyra
//                 </div>
//                 <div className="text-xs opacity-60">IT Solutions</div>
//               </div>
//             </div>

//             <div className="hidden lg:flex space-x-8 items-center">
//               {[
//                 "home",
//                 "about",
//                 "services",
//                 "technologies",
//                 "testimonials",
//                 "contact",
//               ].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item)}
//                   className="hover:text-blue-600 transition-colors capitalize font-medium"
//                 >
//                   {item === "home" ? "Home" : item.replace("-", " ")}
//                 </button>
//               ))}
//               <button
//                 onClick={toggleDarkMode}
//                 className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//               >
//                 {darkMode ? (
//                   <Sun className="w-5 h-5" />
//                 ) : (
//                   <Moon className="w-5 h-5" />
//                 )}
//               </button>
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
//               >
//                 Get Started
//               </button>
//             </div>

//             <div className="lg:hidden flex items-center space-x-2">
//               <button onClick={toggleDarkMode} className="p-2">
//                 {darkMode ? (
//                   <Sun className="w-5 h-5" />
//                 ) : (
//                   <Moon className="w-5 h-5" />
//                 )}
//               </button>
//               <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//                 {mobileMenuOpen ? (
//                   <X className="w-6 h-6" />
//                 ) : (
//                   <Menu className="w-6 h-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {mobileMenuOpen && (
//           <div
//             className={`lg:hidden ${
//               darkMode ? "bg-gray-800" : "bg-white"
//             } shadow-lg border-t ${
//               darkMode ? "border-gray-700" : "border-gray-200"
//             }`}
//           >
//             {[
//               "home",
//               "about",
//               "services",
//               "technologies",
//               "testimonials",
//               "contact",
//             ].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className="block w-full text-left px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-700 capitalize font-medium border-b border-gray-100 dark:border-gray-700"
//               >
//                 {item === "home" ? "Home" : item.replace("-", " ")}
//               </button>
//             ))}
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section
//         id="home"
//         className="pt-32 pb-24 px-4 relative overflow-hidden min-h-screen flex items-center"
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
//         <div className="absolute inset-0 opacity-30">
//           {[...Array(20)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute bg-blue-500/20 rounded-full blur-3xl animate-pulse"
//               style={{
//                 width: `${Math.random() * 300 + 100}px`,
//                 height: `${Math.random() * 300 + 100}px`,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 3}s`,
//                 animationDuration: `${Math.random() * 3 + 3}s`,
//               }}
//             />
//           ))}
//         </div>

//         <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
//           <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full mb-6">
//             <span className="text-blue-600 dark:text-blue-400 font-semibold">
//               🚀 Trusted by 150+ Companies Worldwide
//             </span>
//           </div>

//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
//             Build The Future with
//             <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
//               Smart IT Solutions
//             </span>
//           </h1>

//           <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto opacity-90 leading-relaxed">
//             Enterprise-grade development, automation, and digital transformation
//             services that scale with your ambition
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all flex items-center justify-center gap-2 hover:scale-105"
//             >
//               Start Your Project{" "}
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button
//               onClick={() => scrollToSection("services")}
//               className={`px-8 py-4 border-2 border-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all ${
//                 darkMode ? "text-blue-400" : "text-blue-600"
//               }`}
//             >
//               View Services
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
//             {[
//               {
//                 label: "Projects Completed",
//                 value: stats.projects,
//                 suffix: "+",
//               },
//               { label: "Happy Clients", value: stats.clients, suffix: "+" },
//               { label: "Years Experience", value: stats.years, suffix: "+" },
//               {
//                 label: "Client Satisfaction",
//                 value: stats.satisfaction,
//                 suffix: "%",
//               },
//             ].map((stat, i) => (
//               <div
//                 key={i}
//                 className={`p-6 rounded-2xl ${cardBg} shadow-lg backdrop-blur-sm border ${
//                   darkMode ? "border-gray-700" : "border-gray-200"
//                 }`}
//               >
//                 <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
//                   {stat.value}
//                   {stat.suffix}
//                 </div>
//                 <div className="text-sm opacity-70">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="w-8 h-8 opacity-50" />
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className={`py-24 px-4 ${sectionBg}`}>
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full mb-4">
//               <span className="text-blue-600 dark:text-blue-400 font-semibold">
//                 About Us
//               </span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-bold mb-6">
//               Transforming Ideas Into Reality
//             </h2>
//             <p className="text-xl opacity-80 max-w-3xl mx-auto">
//               We&apos;re not just developers—we&apos;re digital architects
//               crafting the future of business technology
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//             <div className="space-y-6">
//               <div
//                 className={`p-8 rounded-2xl ${cardBg} shadow-xl border ${
//                   darkMode ? "border-gray-700" : "border-gray-200"
//                 }`}
//               >
//                 <Globe className="w-12 h-12 text-blue-600 mb-4" />
//                 <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
//                 <p className="text-lg opacity-90 leading-relaxed">
//                   To empower businesses worldwide through cutting-edge
//                   technology solutions that drive innovation, efficiency, and
//                   sustainable growth in the digital era.
//                 </p>
//               </div>

//               <div
//                 className={`p-8 rounded-2xl ${cardBg} shadow-xl border ${
//                   darkMode ? "border-gray-700" : "border-gray-200"
//                 }`}
//               >
//                 <Star className="w-12 h-12 text-purple-600 mb-4" />
//                 <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
//                 <p className="text-lg opacity-90 leading-relaxed">
//                   To be the global leader in IT innovation, recognized for
//                   transformative solutions that shape how businesses operate in
//                   tomorrow&apos;s digital landscape.
//                 </p>
//               </div>
//             </div>

//             <div
//               className={`p-10 rounded-2xl ${cardBg} shadow-2xl border ${
//                 darkMode ? "border-gray-700" : "border-gray-200"
//               }`}
//             >
//               <h3 className="text-3xl font-bold mb-8 text-center">
//                 Why Top Companies Choose Us
//               </h3>
//               <div className="space-y-5">
//                 {[
//                   {
//                     icon: <Briefcase className="w-6 h-6" />,
//                     text: "10+ Years Industry Leadership",
//                   },
//                   {
//                     icon: <Award className="w-6 h-6" />,
//                     text: "ISO 9001 & ISO 27001 Certified",
//                   },
//                   {
//                     icon: <Users className="w-6 h-6" />,
//                     text: "150+ Enterprise Clients Worldwide",
//                   },
//                   {
//                     icon: <Star className="w-6 h-6" />,
//                     text: "98% Client Retention Rate",
//                   },
//                   {
//                     icon: <Shield className="w-6 h-6" />,
//                     text: "Microsoft & AWS Certified Partners",
//                   },
//                   {
//                     icon: <Clock className="w-6 h-6" />,
//                     text: "24/7 Dedicated Support Team",
//                   },
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-600/5 transition-colors"
//                   >
//                     <div className="text-blue-600 flex-shrink-0">
//                       {item.icon}
//                     </div>
//                     <span className="text-lg font-medium">{item.text}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-24 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-block px-4 py-2 bg-purple-600/10 border border-purple-600/20 rounded-full mb-4">
//               <span className="text-purple-600 dark:text-purple-400 font-semibold">
//                 Our Services
//               </span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-bold mb-6">
//               Comprehensive IT Solutions
//             </h2>
//             <p className="text-xl opacity-80 max-w-3xl mx-auto">
//               End-to-end technology services designed to accelerate your digital
//               transformation
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, i) => (
//               <div
//                 key={i}
//                 className={`group p-8 rounded-2xl ${cardBg} border ${
//                   darkMode ? "border-gray-700" : "border-gray-200"
//                 } hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden`}
//                 onMouseEnter={() => setActiveService(i)}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500"></div>

//                 <div className="relative z-10">
//                   <div className="inline-block p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
//                     {service.icon}
//                   </div>

//                   <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
//                     {service.title}
//                   </h3>
//                   <p className="opacity-80 mb-6 leading-relaxed">
//                     {service.desc}
//                   </p>

//                   <div className="space-y-2">
//                     {service.features.map((feature, idx) => (
//                       <div
//                         key={idx}
//                         className="flex items-center gap-2 text-sm"
//                       >
//                         <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
//                         <span className="opacity-70">{feature}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <button className="mt-6 text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
//                     Learn More <ArrowRight className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technologies Section */}
//       <section id="technologies" className={`py-24 px-4 ${sectionBg}`}>
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full mb-4">
//               <span className="text-blue-600 dark:text-blue-400 font-semibold">
//                 Tech Stack
//               </span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-bold mb-6">
//               Powered by Modern Technology
//             </h2>
//             <p className="text-xl opacity-80 max-w-3xl mx-auto">
//               We leverage cutting-edge tools and frameworks to build robust,
//               scalable solutions
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {technologies.map((tech, i) => (
//               <div
//                 key={i}
//                 className={`group p-8 rounded-2xl ${cardBg} border ${
//                   darkMode ? "border-gray-700" : "border-gray-200"
//                 } shadow-lg hover:shadow-2xl transition-all text-center hover:scale-105 cursor-pointer`}
//               >
//                 <div className="text-2xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
//                   {tech.name}
//                 </div>
//                 <div className="text-sm opacity-60">{tech.category}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section id="why-us" className="py-24 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-block px-4 py-2 bg-purple-600/10 border border-purple-600/20 rounded-full mb-4">
//               <span className="text-purple-600 dark:text-purple-400 font-semibold">
//                 Why Choose Us
//               </span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-bold mb-6">
//               The Infyra Advantage
//             </h2>
//             <p className="text-xl opacity-80 max-w-3xl mx-auto">
//               Industry-leading expertise backed by proven results
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {whyChooseUs.map((item, i) => (
//               <div
//                 key={i}
//                 className={`group p-8 rounded-2xl ${cardBg} border ${
//                   darkMode ? "border-gray-700" : "border-gray-200"
//                 } hover:shadow-2xl transition-all hover:-translate-y-2 text-center`}
//               >
//                 <div className="inline-block p-5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//                 <p className="opacity-80 mb-4">{item.desc}</p>
//                 <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   {item.stat}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section id="testimonials" className={`py-24 px-4 ${sectionBg}`}>
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full mb-4">
//               <span className="text-blue-600 dark:text-blue-400 font-semibold">
//                 Testimonials
//               </span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-bold mb-6">
//               What Our Clients Say
//             </h2>
//             <p className="text-xl opacity-80 max-w-3xl mx-auto">
//               Don&apos;t just take our word for it—hear from industry leaders
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, i) => (
//               <div
//                 key={i}
//                 className={`p-8 rounded-2xl ${cardBg} border ${
//                   darkMode ? "border-gray-700" : "border-gray-200"
//                 } shadow-xl hover:shadow-2xl transition-all`}
//               >
//                 <div className="flex gap-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, idx) => (
//                     <Star
//                       key={idx}
//                       className="w-5 h-5 fill-yellow-400 text-yellow-400"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-lg mb-6 italic leading-relaxed">
//                   {testimonial.text}
//                 </p>
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
//                     {testimonial.name.charAt(0)}
//                   </div>
//                   <div>
//                     <div className="font-bold">{testimonial.name}</div>
//                     <div className="text-sm opacity-60">{testimonial.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-24 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-block px-4 py-2 bg-purple-600/10 border border-purple-600/20 rounded-full mb-4">
//               <span className="text-purple-600 dark:text-purple-400 font-semibold">
//                 Contact Us
//               </span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-bold mb-6">
//               Let&apos;s Build Something Amazing
//             </h2>
//             <p className="text-xl opacity-80 max-w-3xl mx-auto">
//               Ready to transform your business? Get in touch with our expert
//               team today
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-5 gap-12">
//             <div className="lg:col-span-2 space-y-8">
//               <div
//                 className={`p-8 rounded-2xl ${cardBg} border ${
//                   darkMode ? "border-gray-700" : "border-gray-200"
//                 } shadow-xl`}
//               >
//                 <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <div className="p-3 bg-blue-600/10 rounded-lg">
//                       <Mail className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <p className="font-semibold mb-1">Email</p>
//                       <p className="opacity-80">contact@infyra.com</p>
//                       <p className="opacity-80">sales@infyra.com</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <div className="p-3 bg-blue-600/10 rounded-lg">
//                       <Phone className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <p className="font-semibold mb-1">Phone</p>
//                       <p className="opacity-80">+1 (555) 123-4567</p>
//                       <p className="opacity-80">+1 (555) 987-6543</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <div className="p-3 bg-blue-600/10 rounded-lg">
//                       <MapPin className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <p className="font-semibold mb-1">Headquarters</p>
//                       <p className="opacity-80">
//                         123 Tech Boulevard
//                         <br />
//                         Silicon Valley, CA 94025
//                         <br />
//                         United States
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <div className="p-3 bg-blue-600/10 rounded-lg">
//                       <Clock className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <p className="font-semibold mb-1">Business Hours</p>
//                       <p className="opacity-80">Mon - Fri: 9:00 AM - 6:00 PM</p>
//                       <p className="opacity-80">24/7 Emergency Support</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-3">
//               <div
//                 className={`p-10 rounded-2xl ${cardBg} border ${
//                   darkMode ? "border-gray-700" : "border-gray-200"
//                 } shadow-2xl`}
//               >
//                 <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
//                 <div className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block mb-2 font-semibold">
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         value={formData.name}
//                         onChange={(e) =>
//                           setFormData({ ...formData, name: e.target.value })
//                         }
//                         placeholder="John Doe"
//                         className={`w-full p-4 rounded-xl border ${
//                           formErrors.name ? "border-red-500" : "border-gray-300"
//                         } ${
//                           darkMode ? "bg-gray-700" : "bg-gray-50"
//                         } focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all`}
//                       />
//                       {formErrors.name && (
//                         <p className="text-red-500 text-sm mt-2">
//                           {formErrors.name}
//                         </p>
//                       )}
//                     </div>
//                     <div>
//                       <label className="block mb-2 font-semibold">
//                         Email Address *
//                       </label>
//                       <input
//                         type="email"
//                         value={formData.email}
//                         onChange={(e) =>
//                           setFormData({ ...formData, email: e.target.value })
//                         }
//                         placeholder="john@company.com"
//                         className={`w-full p-4 rounded-xl border ${
//                           formErrors.email
//                             ? "border-red-500"
//                             : "border-gray-300"
//                         } ${
//                           darkMode ? "bg-gray-700" : "bg-gray-50"
//                         } focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all`}
//                       />
//                       {formErrors.email && (
//                         <p className="text-red-500 text-sm mt-2">
//                           {formErrors.email}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block mb-2 font-semibold">
//                       Company Name (Optional)
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.company}
//                       onChange={(e) =>
//                         setFormData({ ...formData, company: e.target.value })
//                       }
//                       placeholder="Your Company Inc."
//                       className={`w-full p-4 rounded-xl border border-gray-300 ${
//                         darkMode ? "bg-gray-700" : "bg-gray-50"
//                       } focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all`}
//                     />
//                   </div>
//                   <div>
//                     <label className="block mb-2 font-semibold">
//                       Project Details *
//                     </label>
//                     <textarea
//                       value={formData.message}
//                       onChange={(e) =>
//                         setFormData({ ...formData, message: e.target.value })
//                       }
//                       rows={6}
//                       placeholder="Tell us about your project, requirements, timeline, and budget..."
//                       className={`w-full p-4 rounded-xl border ${
//                         formErrors.message
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       } ${
//                         darkMode ? "bg-gray-700" : "bg-gray-50"
//                       } focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none`}
//                     ></textarea>
//                     {formErrors.message && (
//                       <p className="text-red-500 text-sm mt-2">
//                         {formErrors.message}
//                       </p>
//                     )}
//                   </div>
//                   <button
//                     onClick={handleSubmit}
//                     className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2"
//                   >
//                     Send Message <ArrowRight className="w-5 h-5" />
//                   </button>
//                   <p className="text-sm opacity-60 text-center">
//                     We&apos;ll get back to you within 24 hours
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer
//         className={`py-16 px-4 ${
//           darkMode
//             ? "bg-gray-950 border-t border-gray-800"
//             : "bg-gray-900 text-gray-100"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                   <Code className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                     Infyra
//                   </div>
//                   <div className="text-xs opacity-60">IT Solutions</div>
//                 </div>
//               </div>
//               <p className="opacity-70 mb-6 leading-relaxed">
//                 Transforming businesses through innovative technology solutions
//                 and digital excellence.
//               </p>
//               <div className="flex gap-4">
//                 <a
//                   href="#"
//                   className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
//                 >
//                   <Twitter className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="#"
//                   className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
//                 >
//                   <Github className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-4">Company</h4>
//               <ul className="space-y-3 opacity-70">
//                 {[
//                   "About Us",
//                   "Services",
//                   "Technologies",
//                   "Careers",
//                   "Blog",
//                   "Contact",
//                 ].map((link) => (
//                   <li key={link}>
//                     <button
//                       onClick={() =>
//                         scrollToSection(link.toLowerCase().replace(" ", "-"))
//                       }
//                       className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
//                     >
//                       {link}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-4">Services</h4>
//               <ul className="space-y-3 opacity-70">
//                 <li className="hover:text-blue-400 transition-colors cursor-pointer">
//                   Web Development
//                 </li>
//                 <li className="hover:text-blue-400 transition-colors cursor-pointer">
//                   UI/UX Design
//                 </li>
//                 <li className="hover:text-blue-400 transition-colors cursor-pointer">
//                   Automation & Bots
//                 </li>
//                 <li className="hover:text-blue-400 transition-colors cursor-pointer">
//                   Custom Software
//                 </li>
//                 <li className="hover:text-blue-400 transition-colors cursor-pointer">
//                   API Integration
//                 </li>
//                 <li className="hover:text-blue-400 transition-colors cursor-pointer">
//                   Data Analytics
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-4">Newsletter</h4>
//               <p className="opacity-70 mb-4">
//                 Subscribe for updates, insights, and industry trends
//               </p>
//               <div className="flex gap-2">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//                 <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all">
//                   <ArrowRight className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//               <p className="opacity-70 text-sm">
//                 &copy; 2024 Infyra IT Solutions. All rights reserved.
//               </p>
//               <div className="flex gap-6 text-sm opacity-70">
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   Privacy Policy
//                 </a>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   Terms of Service
//                 </a>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   Cookie Policy
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;

import HomeClient from "./components/HomeClient";

export default function Page() {
  return <HomeClient />;
}
