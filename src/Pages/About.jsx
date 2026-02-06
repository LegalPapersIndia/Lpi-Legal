import React from 'react';
import { motion } from 'framer-motion';
import { 
  History, 
  Users, 
  Star, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Phone, 
  CheckCircle,
  Globe,
  Award,
  ExternalLink,
  Target,
  Eye,
  ShieldCheck,
  Briefcase,
  ArrowRight
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: "Years of Excellence", value: "12+" },
    { label: "Cases Resolved", value: "15k+" },
    { label: "Corporate Clients", value: "2,500+" },
    { label: "Customer Rating", value: "4.9/5" },
  ];
    
  const ratings = [
    { platform: "Google Business", score: "4.9", reviews: "1,200+", color: "text-blue-600" },
    { platform: "Justdial", score: "4.8", reviews: "850+", color: "text-blue-500" },
    { platform: "Trustpilot", score: "4.7", reviews: "300+", color: "text-green-500" },
  ];

  const coreValues = [
    { title: "Mission", desc: "To democratize legal services by making them accessible, affordable, and digital for every Indian citizen.", icon: <Target className="text-blue-600" />, bg: "bg-blue-50" },
    { title: "Vision", desc: "To become India's most trusted one-stop digital platform for all legal and business compliance needs.", icon: <Eye className="text-purple-600" />, bg: "bg-purple-50" },
    { title: "Trust", desc: "Building long-term relationships through transparent pricing and 100% data confidentiality.", icon: <ShieldCheck className="text-emerald-600" />, bg: "bg-emerald-50" },
  ];

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-950 pt-32 pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full -mr-64"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
              Empowering Entrepreneurs
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Our Legacy of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">LPI-Legal Janseva</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto">
              LPI-Legal is more than a consultancy. We are a bridge between the complexities of law and the dreams of the Indian startup ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- STATS OVERLAY --- */}
      <div className="container mx-auto px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] rounded-[2.5rem] p-10 border border-slate-100">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:border-r last:border-0 border-slate-100">
              <p className="text-4xl font-black text-slate-900 mb-1">{stat.value}</p>
              <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- CORE VALUES --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {coreValues.map((value, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`${value.bg} p-10 rounded-[2.5rem] transition-all`}
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- COMPANY HISTORY --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
                className="rounded-[3rem] shadow-2xl relative z-10"
                alt="Our Heritage" 
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-[3rem] -z-0 hidden lg:block"></div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-blue-700 text-xs font-black tracking-widest mb-6 shadow-sm">
                <History size={14} /> OUR JOURNEY
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                Established in 2012 to Decentralize Legal Access
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  LPI-Legal (Legal Service Janseva) started in a small office with a big vision: 
                  to make legal compliance as easy as ordering groceries. Our founder recognized that thousands of businesses fail not because of poor ideas, but due to overwhelming paperwork.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                  {["ISO 9001 Certified", "Govt Registered", "Pan India Presence", "Paperless Process"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                      <CheckCircle className="text-emerald-500" size={20} />
                      <span className="text-slate-900 font-bold text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RATINGS ON PLATFORMS --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Market Presence</h2>
            <p className="text-slate-500 max-w-xl mx-auto">We maintain an industry-leading satisfaction rate across all major review aggregators.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ratings.map((rate, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border border-slate-100 text-center group">
                <h4 className={`text-xl font-black mb-4 ${rate.color}`}>{rate.platform}</h4>
                <div className="flex justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-5xl font-black text-slate-900 mb-2">{rate.score}</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Verified {rate.reviews} Reviews</p>
                <button className="mt-10 w-full py-4 rounded-2xl bg-slate-50 text-slate-900 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all">
                  View Case Studies <ExternalLink size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MEET THE LEADERSHIP --- */}
      <section className="py-24 bg-slate-950 text-white rounded-[4rem] mx-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">The Minds Behind LPI</h2>
              <p className="text-slate-400 max-w-md">A blend of seasoned legal wisdom and technological innovation driving the next gen of compliance.</p>
            </div>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-xs tracking-widest flex items-center gap-2">
              JOIN OUR TEAM <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Adv. Animesh Das", role: "Chief Legal Strategist", desc: "Expert in Corporate Law with 20+ years of litigation and advisory experience.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
              { name: "CA Shruti Iyer", role: "Head of Taxation", desc: "Specializes in International Taxation, GST audits, and complex financial restructuring.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
              { name: "Vikram Singh", role: "Director of Operations", desc: "Driving the 'Janseva' tech portal to automate legal filings and cloud-based documentation.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-[2.5rem] mb-8">
                  <img src={member.img} className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt={member.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-2xl font-black mb-1">{member.name}</h4>
                <p className="text-blue-400 font-black text-[10px] uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONNECT SECTION --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="bg-blue-700 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="text-white">
              <h2 className="text-5xl font-black mb-8 leading-tight">Ready to start your <br />legal journey?</h2>
              <p className="text-blue-100 text-lg mb-12 max-w-md">Whether you are a solo founder or a scaling enterprise, our legal experts are one click away.</p>
              
              <div className="space-y-8">
                {[
                  { icon: <Phone size={20} />, label: "Consultation", val: "+91 7505266931" },
                  { icon: <Mail size={20} />, label: "Support", val: "contact@lpilegal.com" },
                  { icon: <MapPin size={20} />, label: "Head Office", val: "Sector 18, Business Hub, Noida" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-blue-200 text-[10px] font-black uppercase tracking-widest">{item.label}</p>
                      <p className="text-xl font-black">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-2xl">
              <h3 className="text-2xl font-black text-slate-900 mb-8">Drop a Message</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" />
                <input type="email" placeholder="Email" className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" />
                <select className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium text-slate-500">
                  <option>Inquiry Type</option>
                  <option>Company Setup</option>
                  <option>GST & Taxes</option>
                </select>
                <textarea rows="4" placeholder="Briefly describe your requirements" className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium"></textarea>
                <button className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/20 uppercase text-xs tracking-widest">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;