import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Navigation,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

const ContactPage = () => {
  const CONTACT_EMAIL = "udit9407@gmail.com";

  return (
    <div className="bg-white">
      {/* --- PREMIUM HEADER --- */}
      <section className="relative bg-slate-950 pt-32 pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Let's Start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Conversation
              </span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto">
              Ready to cross the legal finish line? Our compliance experts are 
              standing by to simplify your business journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6 -mt-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* --- LEFT SIDE: INFO & TRUST --- */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-50">
              <h3 className="text-2xl font-black text-slate-900 mb-10">
                Official Channels
              </h3>

              <div className="space-y-10">
                <div className="group flex gap-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Direct Line</p>
                    <p className="text-slate-900 font-black text-lg">+91 75052 66931</p>
                    <p className="text-slate-500 text-xs mt-1 font-medium">Available Mon-Sat, 10-7</p>
                  </div>
                </div>

                <div className="group flex gap-6">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Support Email</p>
                    <p className="text-slate-900 font-black text-lg">contact@lpilegal.com</p>
                    <p className="text-slate-500 text-xs mt-1 font-medium">Avg. response: 4 hours</p>
                  </div>
                </div>

                <div className="group flex gap-6">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">HQ Address</p>
                    <p className="text-slate-900 font-black text-lg">F-2, Sector 8, Noida</p>
                    <p className="text-slate-500 text-xs mt-1 font-medium">UP, India - 201301</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-slate-100">
                 <div className="bg-slate-50 p-6 rounded-2xl">
                    <div className="flex items-center gap-2 mb-4">
                        <ShieldCheck className="text-blue-600" size={18} />
                        <span className="text-xs font-black uppercase text-slate-900">Data Guarantee</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                        Your information is protected by 256-bit encryption. We never share your data with third-party solicitors.
                    </p>
                 </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: INTERACTIVE FORM --- */}
          <div className="lg:col-span-8 bg-white p-8 md:p-16 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
            <div className="max-w-2xl">
              <h3 className="text-4xl font-black text-slate-900 mb-4">
                Inquiry Portal
              </h3>
              <p className="text-slate-500 text-lg mb-12">
                Our senior legal advisors will review your requirements and 
                reach out with a custom quote.
              </p>

              <form
                action={`https://formsubmit.co/${CONTACT_EMAIL}`}
                method="POST"
                className="space-y-8"
              >
                <input type="hidden" name="_subject" value="URGENT: New Legal Lead" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Cooper"
                      className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-slate-900"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">WhatsApp Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98XXX-XXXXX"
                      className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-slate-900"
                    />
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Department</label>
                    <select
                      name="service"
                      className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-bold text-slate-900 appearance-none"
                    >
                      <option>Private Limited Incorporation</option>
                      <option>GST Compliance & Returns</option>
                      <option>Trademark & Copyright</option>
                      <option>MSME/Udyam Registration</option>
                      <option>FSSAI Food License</option>
                    </select>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">How can we help?</label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      placeholder="Describe your current business stage or legal bottleneck..."
                      className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-slate-900"
                    ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-blue-600 text-white font-black py-6 rounded-[2rem] shadow-xl shadow-slate-900/10 transition-all flex items-center justify-center gap-3 group text-xs tracking-[0.2em] uppercase"
                >
                  Initiate Consultation
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* --- MAP & FOOTPRINT --- */}
        <div className="mt-32">
          <div className="bg-slate-50 rounded-[4rem] p-12 md:p-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/3">
                <h3 className="text-4xl font-black text-slate-900 mb-6">
                  Pan-India <br />Digital Presence
                </h3>
                <p className="text-slate-500 mb-10 font-medium">
                  While our HQ is in Noida, we serve entrepreneurs in all 28 states through our digital-first compliance portal.
                </p>
                <div className="space-y-4">
                    {[
                        "Virtual Consultations",
                        "Doorstep Document Pickup",
                        "24/7 Portal Access",
                        "Dedicated Account Manager"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <CheckCircle size={18} className="text-blue-600" />
                            <span className="text-sm font-black text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
                <a
                  href="https://maps.app.goo.gl/YourActualMapLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-black text-xs tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                >
                  OPEN IN GOOGLE MAPS <Navigation size={16} />
                </a>
              </div>
              
              <div className="lg:w-2/3 w-full h-[500px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.791552597394!2d77.3150596753037!3d28.57602057569566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4590393998f%3A0xa196f7c18174780e!2sSector%208%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1708680000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;