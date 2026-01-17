import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  FileText,
  ShieldCheck,
  ArrowRight,
  Zap,
  Lock,
  Sparkles,
  Briefcase,
  Scale,
  MessageCircle,
} from "lucide-react";

const ServicesPage = () => {
  const WHATSAPP_NUMBER = "917505266931"; 

  const serviceCategories = [
    {
      category: "Business Incorporation",
      description: "Legalize your business structure and protect your personal assets.",
      accent: "blue",
      icon: <Briefcase size={32} />,
      services: [
        {
          title: "Private Limited Company",
          tat: "10-15 Days",
          description: "The most popular legal structure for startups. Offers limited liability and high credibility for investors.",
          includes: ["2 DSC & DIN", "MOA/AOA Drafting", "Certificate of Incorporation", "PAN & TAN"],
          bestFor: "Startups looking for funding and long-term scaling.",
        },
        {
          title: "LLP Registration",
          tat: "12-18 Days",
          description: "Combines the benefits of a company and a partnership. Easy to maintain with fewer compliance requirements.",
          includes: ["Partner Agreements", "DSC for Partners", "LLP Name Approval"],
          bestFor: "Professional consultants and service providers.",
        },
      ],
    },
    {
      category: "Taxation & Licensing",
      description: "Mandatory government registrations to stay compliant with Indian laws.",
      accent: "indigo",
      icon: <Scale size={32} />,
      services: [
        {
          title: "GST Registration",
          tat: "3-7 Days",
          description: "Mandatory if your turnover exceeds ₹40 Lakhs (Goods) or ₹20 Lakhs (Services).",
          includes: ["GST Certificate", "HSN/SAC Code Selection", "Portal Setup"],
          bestFor: "Traders, Manufacturers, and E-commerce sellers.",
        },
        {
          title: "FSSAI Food License",
          tat: "5-10 Days",
          description: "Legal permission to operate a food business. Ensures food safety standards are met.",
          includes: ["Basic/State/Central License", "Renewal Alerts", "Compliance Guidance"],
          bestFor: "Restaurants, cloud kitchens, and food manufacturers.",
        },
      ],
    },
  ];

  const handleWhatsAppRedirect = (serviceTitle) => {
    const message = encodeURIComponent(
      `Hi Janseva, I am interested in starting the registration for: ${serviceTitle}. Could you please guide me on the next steps?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="bg-[#FDFDFD] pt-32 pb-20 overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* --- HERO HEADER --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mb-32 pt-10 text-center md:text-left mx-auto md:mx-0"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <span className="w-12 h-1.5 bg-blue-600 rounded-full"></span>
            <span className="text-blue-700 font-black tracking-[0.3em] text-[10px] uppercase">
              Our Expertise
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
            Scale with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500">
              Legal Precision
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">
            We've digitized the legal backbone of India. From garage
            startups to global exporters, we navigate complexity so you can focus on building.
          </p>
        </motion.div>

        {/* --- SERVICE CATEGORIES --- */}
        {serviceCategories.map((cat, idx) => (
          <div key={idx} className="mb-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-slate-100 pb-10"
            >
              <div className="max-w-2xl">
                <div className={`mb-6 p-4 w-fit rounded-3xl bg-${cat.accent}-50 text-${cat.accent}-600`}>
                  {cat.icon}
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                  {cat.category}
                </h2>
                <p className="text-slate-500 font-medium text-lg italic">
                  {cat.description}
                </p>
              </div>
              <button className="flex items-center gap-2 text-blue-700 font-bold hover:gap-4 transition-all group px-6 py-3 rounded-xl bg-blue-50/50 hover:bg-blue-100 w-fit">
                Download Catalog <ArrowRight size={20} />
              </button>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {cat.services.map((service, sIdx) => (
                <motion.div
                  key={sIdx}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/40 transition-all duration-500 overflow-hidden"
                >
                  {/* Decorative Gradient Glow */}
                  <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-100/30 blur-[80px] rounded-full group-hover:bg-blue-400/20 transition-colors duration-700" />
                  
                  <div className="flex justify-between items-start mb-12 relative z-10">
                    <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 shadow-inner">
                      <FileText size={28} />
                    </div>
                    <div className="flex items-center gap-2 bg-white border border-slate-100 text-slate-600 px-4 py-2 rounded-2xl text-xs font-bold shadow-sm">
                      <Clock size={14} className="text-amber-500" /> {service.tat}
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight relative z-10 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-lg mb-10 leading-relaxed relative z-10 min-h-[4rem]">
                    {service.description}
                  </p>

                  <div className="space-y-10 relative z-10">
                    <div>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
                        <Sparkles size={14} /> Core Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.includes.map((item, iIdx) => (
                          <div key={iIdx} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                            <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                              <CheckCircle2 size={14} />
                            </div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 bg-slate-50/50 rounded-3xl border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/30 transition-all">
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-2">Ideal for</span>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">{service.bestFor}</p>
                    </div>

                    <button 
                      onClick={() => handleWhatsAppRedirect(service.title)}
                      className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black text-sm hover:bg-blue-600 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-900/20 active:scale-95"
                    >
                      <MessageCircle size={18} />
                      Start Registration
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

        {/* --- PROCESS SECTION --- */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[4rem] p-10 lg:p-24 text-white relative overflow-hidden shadow-3xl"
        >
          {/* Animated Background Orbs */}
          <div className="absolute top-0 right-0 w-full h-full">
             <div className="absolute top-10 right-10 w-64 h-64 bg-blue-600/30 blur-[120px] rounded-full animate-pulse" />
             <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-600/20 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-5 gap-20 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
                The <span className="text-blue-400 italic">Janseva</span>
                <br />
                Edge
              </h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                We've automated the friction out of legal filing. Secure, paperless, and lightning fast.
              </p>

              <div className="inline-flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <Lock className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-md font-black">Bank-Grade Security</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">AES-256 Encryption</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              {[
                {
                  step: "01",
                  icon: <FileText size={20} />,
                  title: "Digital Vault",
                  desc: "Upload documents once. Encrypted and ready for all your filings.",
                },
                {
                  step: "02",
                  icon: <Zap size={20} />,
                  title: "Expert Verification",
                  desc: "Our CAs audit every detail to ensure 0% rejection rates.",
                },
                {
                  step: "03",
                  icon: <ShieldCheck size={20} />,
                  title: "Dashboard Delivery",
                  desc: "Access your certificates instantly on your personalized portal.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 15 }}
                  className="flex gap-8 p-10 bg-white/5 rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all group"
                >
                  <span className="text-6xl font-black text-white/5 group-hover:text-blue-500/20 transition-colors duration-500">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 flex items-center gap-3">
                      <span className="text-blue-400">{item.icon}</span>
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ServicesPage;