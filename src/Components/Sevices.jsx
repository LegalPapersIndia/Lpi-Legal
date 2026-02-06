import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Utensils, Globe, FileCheck, BadgeCheck, Clock, 
  ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, FileText, Scale, MessageCircle 
} from 'lucide-react';

const Services = () => {
  const serviceList = [
    {
      title: "Company Incorporation",
      icon: <Building2 size={32} />,
      timing: "7 - 10 Working Days",
      description: "Complete legal setup for your startup. We handle DSC, DIN, MOA, and AOA drafting.",
      features: ["Pvt Ltd, LLP, OPC", "PAN & TAN Included", "Bank Account Assistance"],
      color: "blue"
    },
    {
      title: "Food License (FSSAI)",
      icon: <Utensils size={32} />,
      timing: "3 - 5 Working Days",
      description: "Mandatory for food supply chains. We assist in Basic, State, and Central licenses.",
      features: ["Health Compliance", "Hygiene Audit Prep", "Renewal Tracking"],
      color: "orange"
    },
    {
      title: "Import Export Code",
      icon: <Globe size={32} />,
      timing: "1 - 2 Working Days",
      description: "Required for international trade. DGFT experts ensure IEC issued with lifetime validity.",
      features: ["Global Market Access", "Lifetime Validity", "Online Processing"],
      color: "emerald"
    },
    {
      title: "GST Registration",
      icon: <FileCheck size={32} />,
      timing: "3 - 7 Working Days",
      description: "Stay tax compliant. We manage registration, HSN mapping, and provide filing roadmaps.",
      features: ["GSTIN Generation", "Input Tax Credit Advice", "Lut Application"],
      color: "indigo"
    },
    {
      title: "Trademark Filing",
      icon: <BadgeCheck size={32} />,
      timing: "24 Hours (App)",
      description: "Protect brand identity. We conduct deep searches to ensure no legal hurdles.",
      features: ["Global Brand Search", "Objection Handling", "TM Status Tracking"],
      color: "purple"
    },
    {
      title: "MSME / Udyam",
      icon: <ShieldCheck size={32} />,
      timing: "1 Working Day",
      description: "Unlock government subsidies, lower interest rates, and priority sector lending benefits.",
      features: ["Govt Tender Priority", "Subsidy Eligibility", "ISO Cost Refund"],
      color: "rose"
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden" id="services">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="bg-blue-100 text-blue-700 font-bold tracking-[0.2em] text-xs uppercase px-4 py-1.5 rounded-full mb-4 inline-block">
            Professional Solutions
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Compliance Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-500">Janseva</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Legal complexity simplified. We combine deep regulatory expertise with modern technology to launch your business faster.
          </p>
        </motion.div>

        {/* --- TRUST STATS --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Avoid Penalties", desc: "Timely submissions to save you from heavy government fines.", icon: <AlertCircle />, color: "text-rose-500", bg: "bg-rose-50" },
            { title: "Build Trust", desc: "Verified status to attract premium clients and investors.", icon: <CheckCircle2 />, color: "text-emerald-500", bg: "bg-emerald-50" },
            { title: "Legal Shield", desc: "Corporate structures designed to protect your personal wealth.", icon: <Scale />, color: "text-blue-500", bg: "bg-blue-50" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-5 shadow-xl shadow-slate-200/50"
            >
              <div className={`${item.bg} ${item.color} p-4 rounded-xl`}>{item.icon}</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SERVICES GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {serviceList.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col h-full relative"
            >
              {/* Timing Badge */}
              <div className="absolute top-8 right-8 flex items-center gap-1.5 bg-slate-50 text-slate-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                <Clock size={12} /> {service.timing}
              </div>

              <div className="mb-8 p-4 bg-blue-50 text-blue-700 w-fit rounded-2xl group-hover:bg-blue-700 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{service.title}</h4>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-semibold italic">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <CheckCircle2 size={12} className="text-blue-700" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className="flex items-center justify-between w-full group/btn pt-6 border-t border-slate-50">
                <span className="text-slate-900 font-bold text-sm group-hover/btn:text-blue-700 transition-colors">View Requirements</span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-blue-700 group-hover/btn:text-white transition-all">
                  <ArrowRight size={16} />
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* --- COMPARISON TABLE --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="hidden lg:block mb-24"
        >
        </motion.div>

        {/* --- FINAL CTA SECTION --- */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="relative rounded-[3rem] p-1 md:p-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 shadow-2xl"
        >
          <div className="bg-slate-900 rounded-[2.8rem] px-8 py-12 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>

            <div className="relative z-10 text-center md:text-left">
              <h4 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
                Still Unsure?
              </h4>
              <p className="text-blue-300 font-bold mb-6 italic tracking-wide">"LPI-Legal: Aapki Pragati, Hamari Pehchan"</p>
              <p className="text-slate-400 max-w-md">
                Get a free roadmap for your business compliance within 15 minutes. No strings attached.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10">
              <a 
                href="https://wa.me/917505266931" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all shadow-[0_20px_40px_-15px_rgba(16,185,129,0.4)] active:scale-95"
              >
                <MessageCircle className="fill-white/20" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;