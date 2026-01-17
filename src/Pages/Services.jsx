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
  Scale
} from "lucide-react";

const ServicesPage = () => {
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    },
  };

  return (
    /* INCREASED OUTER PADDING: pt-48 (192px) or pt-56 (224px) */
    <div className="bg-[#FDFDFD] pt-48 pb-20 overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* --- HERO HEADER: Added pt-20 for extra internal breathing room --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mb-24 pt-20" 
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-1.5 bg-blue-600 rounded-full"></span>
            <span className="text-blue-700 font-black tracking-[0.2em] text-xs uppercase">
              Our Expertise
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
              Legal Licensing
            </span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
            We don't just process papers; we build foundations. From garage
            startups to global exporters, we navigate the complexity of Indian
            Law for you.
          </p>
        </motion.div>

        {/* --- SERVICE CATEGORIES --- */}
        {serviceCategories.map((cat, idx) => (
          <div key={idx} className="mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-100 pb-8"
            >
              <div className="max-w-xl">
                <div className={`mb-4 text-${cat.accent}-600`}>
                  {cat.icon}
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-2">
                  {cat.category}
                </h2>
                <p className="text-slate-500 font-medium text-lg italic">
                  {cat.description}
                </p>
              </div>
              <button className="flex items-center gap-2 text-blue-700 font-bold hover:gap-4 transition-all group px-4 py-2 rounded-lg hover:bg-blue-50">
                Download Brochure{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid lg:grid-cols-2 gap-10"
            >
              {cat.services.map((service, sIdx) => (
                <motion.div
                  key={sIdx}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 relative overflow-hidden group"
                >
                  <Sparkles
                    className="absolute -top-6 -right-6 text-slate-50 group-hover:text-blue-50/50 transition-colors duration-500"
                    size={160}
                  />

                  <div className="flex justify-between items-center mb-10 relative z-10">
                    <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                      <FileText size={32} />
                    </div>
                    <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase border border-amber-100">
                      <Clock size={14} /> {service.tat}
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-lg mb-10 leading-relaxed relative z-10 min-h-[4rem]">
                    {service.description}
                  </p>

                  <div className="space-y-8 relative z-10">
                    <div>
                      <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                        Core Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                        {service.includes.map((item, iIdx) => (
                          <div
                            key={iIdx}
                            className="flex items-center gap-3 text-slate-700 font-bold text-sm"
                          >
                            <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                              <CheckCircle2
                                size={12}
                                className="text-emerald-600"
                              />
                            </div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                      <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest block mb-2">
                        Target Audience
                      </span>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">
                        {service.bestFor}
                      </p>
                    </div>

                    <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-xl shadow-slate-900/10 active:scale-95">
                      Start Registration
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

        {/* --- MODERN PROCESS SECTION --- */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 blur-[100px] rounded-full -ml-48 -mb-48" />

          <div className="relative z-10 grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                The <span className="text-blue-400 font-extrabold italic">Janseva</span>
                <br />
                Digital Journey
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                We've automated the friction out of legal filing. No physical
                visits, no hidden fees, just pure efficiency.
              </p>

              <div className="inline-flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/40">
                  <Lock className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm font-black">Bank-Grade Security</p>
                  <p className="text-xs text-slate-500">
                    AES-256 Document Encryption
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-4">
              {[
                {
                  step: "01",
                  icon: <FileText className="text-blue-400" />,
                  title: "Digital Onboarding",
                  desc: "Upload KYC docs to your private encrypted vault.",
                },
                {
                  step: "02",
                  icon: <Zap className="text-blue-400" />,
                  title: "Expert Review",
                  desc: "Our CAs and Advocates scrub files for 100% accuracy.",
                },
                {
                  step: "03",
                  icon: <ShieldCheck className="text-blue-400" />,
                  title: "Instant Issuance",
                  desc: "Get your digital license on your personal dashboard.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="flex gap-6 p-8 bg-white/5 rounded-[2.5rem] border border-white/5 transition-all cursor-default group"
                >
                  <span className="text-5xl font-black text-white/10 group-hover:text-blue-500 transition-colors duration-300">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold mb-2 flex items-center gap-3">
                      <span className="p-1.5 bg-blue-500/10 rounded-lg">{item.icon}</span>
                      {item.title}
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
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