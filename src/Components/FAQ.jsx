import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, HelpCircle, Search, MessageSquare, 
  FileText, ShieldCheck, Briefcase, CreditCard 
} from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Incorporation", "Taxation", "Compliance", "IPR & Licenses"];

  const faqs = [
    {
      category: "Incorporation",
      question: "What documents are required for Company Incorporation?",
      answer: "Commonly, you need PAN cards, Aadhaar cards, photographs of directors, and proof of registered office address (like a utility bill or NOC from the owner). For foreign directors, a passport copy is mandatory. Our team provides a specific checklist based on whether you choose a Pvt Ltd, LLP, or OPC."
    },
    {
      category: "Taxation",
      question: "How long does it take to get a GST registration number?",
      answer: "Usually, GST registration takes 3 to 7 working days. However, if the department issues a clarification notice (SCN), it may take an additional 7 days. We ensure your documentation is 100% accurate to avoid such delays."
    },
    {
      category: "IPR & Licenses",
      question: "Is FSSAI (Food License) mandatory for home-based kitchens?",
      answer: "Yes, even if you operate from home, any food-related business in India must have at least a Basic FSSAI registration. As your turnover crosses ₹12 Lakhs, you must upgrade to a State License."
    },
    {
      category: "IPR & Licenses",
      question: "Can I apply for a Trademark for my logo and brand name together?",
      answer: "Yes, you can apply for a 'Device Mark' which covers both the logo and the brand name. However, if you plan to change the logo frequently while keeping the name, we recommend filing them separately for stronger protection."
    },
    {
      category: "Compliance",
      question: "What are the benefits of MSME/Udyam Registration?",
      answer: "MSME registration offers massive benefits: collateral-free bank loans, 50% subsidy on patent/trademark registration, protection against delayed payments (mandatory interest if not paid in 45 days), and eligibility for exclusive government tenders."
    },
    {
      category: "Compliance",
      question: "What is an Import Export Code (IEC) and is it permanent?",
      answer: "An IEC is a 10-digit code required for anyone looking to import or export goods/services. It has lifetime validity. Note: Even if you don't export daily, you must update your IEC profile on the DGFT portal once a year (April-June)."
    },
    {
      category: "Incorporation",
      question: "What is a DSC and why do I need it?",
      answer: "A Digital Signature Certificate (DSC) is the electronic equivalent of a physical signature. It is mandatory for filing all incorporation forms and tax returns. We provide Class 3 DSCs, which offer the highest level of security."
    },
    {
      category: "Compliance",
      question: "What happens if I miss the annual compliance deadline?",
      answer: "Missing ROC or Tax filings can lead to heavy penalties (up to ₹100 per day per form) and director disqualification. LPI-Legal provides an automated compliance calendar to ensure you never miss a due date."
    }
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <section className="py-24 bg-slate-50" id="faq">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-700 font-black tracking-widest text-xs uppercase bg-blue-100 px-4 py-1.5 rounded-full"
          >
            Knowledge Base
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-6">
            Common Questions, <span className="text-blue-700">Expert Answers.</span>
          </h2>
          
          {/* Search Bar */}
          <div className="relative mt-8 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search for a service, document, or keyword..."
              className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                ? "bg-slate-900 text-white shadow-lg" 
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto min-h-[400px]">
          {filteredFaqs.length > 0 ? (
            <div className="grid gap-4">
              {filteredFaqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`group border transition-all duration-300 rounded-2xl overflow-hidden ${
                    openIndex === index ? "border-blue-500 bg-white shadow-xl scale-[1.01]" : "border-slate-200 bg-white hover:border-blue-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        openIndex === index ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600"
                      }`}>
                        <HelpCircle size={20} />
                      </div>
                      <span className={`text-lg font-bold ${openIndex === index ? "text-slate-900" : "text-slate-700"}`}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={`transition-transform duration-300 ${openIndex === index ? "rotate-180 text-blue-600" : "text-slate-400"}`}>
                      <ChevronDown size={24} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pl-[72px] text-slate-600 leading-relaxed text-base border-t border-slate-50 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-slate-300">
              <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={32} className="text-slate-300" />
              </div>
              <p className="text-slate-500 font-bold">No results found for "{searchTerm}"</p>
              <button onClick={() => {setSearchTerm(""); setActiveCategory("All")}} className="text-blue-700 text-sm font-bold mt-2 hover:underline">Clear all filters</button>
            </div>
          )}
        </div>

        {/* Support CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 md:p-12 bg-blue-700 rounded-[3rem] text-center relative overflow-hidden"
        >
          {/* Decorative icons in background */}
          <MessageSquare className="absolute -left-10 -bottom-10 text-white/10 w-40 h-40 -rotate-12" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Didn't find what you were looking for?</h3>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">Our legal experts are available 24/7 to help you navigate through your business registration and compliance needs.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-black hover:bg-blue-50 transition-colors shadow-lg">
                Talk to an Expert
              </a>
              <a href="https://wa.me/yournumber" className="bg-blue-600/50 text-white border border-blue-400/30 backdrop-blur-md px-8 py-4 rounded-2xl font-black hover:bg-blue-600 transition-colors">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;