import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What documents are required for Company Incorporation?",
      answer: "Commonly, you need PAN cards, Aadhaar cards, photographs of directors, and proof of registered office address (like a utility bill or NOC from the owner). Our team provides a specific checklist based on whether you choose a Pvt Ltd, LLP, or OPC."
    },
    {
      question: "How long does it take to get a GST registration number?",
      answer: "Usually, GST registration takes 3 to 7 working days. However, this depends on government portal processing times and the accuracy of the documents provided."
    },
    {
      question: "Is FSSAI (Food License) mandatory for home-based kitchens?",
      answer: "Yes, even if you operate from home, any food-related business in India must have at least a Basic FSSAI registration to ensure legal compliance and consumer trust."
    },
    {
      question: "Can I apply for a Trademark for my logo and brand name together?",
      answer: "Yes, you can apply for a 'Device Mark' which covers both the logo and the brand name. LPI-Legal helps you conduct a search before filing to avoid objections."
    },
    {
      question: "What are the benefits of MSME/Udyam Registration?",
      answer: "MSME registration allows you to access collateral-free bank loans, lower interest rates, protection against delayed payments, and various government subsidies."
    },
    {
      question: "What is an Import Export Code (IEC) and is it permanent?",
      answer: "An IEC is a 10-digit code required for anyone looking to import or export goods/services from India. It has lifetime validity and does not require any renewal."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50" id="faq">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Got Questions?
            </span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Everything you need to know about our legal services and registration processes.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border transition-all duration-300 rounded-xl overflow-hidden ${
                openIndex === index ? "border-blue-500 bg-white shadow-md" : "border-slate-200 bg-white"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle size={20} className={openIndex === index ? "text-blue-600" : "text-slate-400"} />
                  <span className={`font-bold ${openIndex === index ? "text-blue-700" : "text-slate-800"}`}>
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-blue-600" />
                ) : (
                  <ChevronDown size={20} className="text-slate-400" />
                )}
              </button>

              {/* Answer with slide-down feel */}
              {openIndex === index && (
                <div className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support Link */}
        <div className="mt-12 text-center">
          <p className="text-slate-500">
            Still have questions? 
            <a href="#contact" className="text-blue-700 font-bold ml-2 hover:underline">
              Contact our support team
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default FAQ;