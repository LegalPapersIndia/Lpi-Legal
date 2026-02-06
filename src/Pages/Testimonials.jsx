import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ShieldCheck, 
  Zap, 
  Award, 
  Star, 
  Quote, 
  CheckCircle2, 
  BarChart3, 
  Scale, 
  HeartHandshake,
  TrendingUp,
  Globe2,
  PlayCircle
} from 'lucide-react';

const TestimonialsAndWhyChooseUs = () => {
  const values = [
    {
      title: "100% Paperless Process",
      desc: "Upload documents via WhatsApp or our secure portal. No need to visit any office physically.",
      icon: <Zap size={24} />,
      accent: "blue"
    },
    {
      title: "Transparent Fixed Pricing",
      desc: "No hidden government fees or surprise professional charges. What you see is what you pay.",
      icon: <Scale size={24} />,
      accent: "emerald"
    },
    {
      title: "Expert Legal Brains",
      desc: "Your files are handled by experienced CAs and Advocates, not just data entry operators.",
      icon: <Award size={24} />,
      accent: "purple"
    },
    {
      title: "Lifetime Compliance",
      desc: "We don't just register; we send you automated alerts for renewals and annual filings.",
      icon: <ShieldCheck size={24} />,
      accent: "rose"
    }
  ];

  const detailedTestimonials = [
    {
      name: "Rahul Deshmukh",
      role: "Founder, AgriTech Solutions",
      tag: "Company Incorporation",
      content: "I was confused between LLP and Pvt Ltd. The team at LPI-Legal didn't just sell me a service; they explained the tax implications clearly. That's real Janseva.",
      avatar: "https://i.pravatar.cc/150?u=rahul"
    },
    {
      name: "Meenakshi Iyer",
      role: "Owner, Gourmet Bakes",
      tag: "FSSAI & Trademark",
      content: "Getting my food license and protecting my brand name was seamless. Their WhatsApp support is incredibly fast. Got my certificate in 4 days!",
      avatar: "https://i.pravatar.cc/150?u=meenakshi"
    },
    {
      name: "Sandeep Khurana",
      role: "Importer, Global Gear",
      tag: "Import Export Code",
      content: "I needed my IEC urgently for a shipment. These guys got it done within 24 hours. Their transparency regarding fees is what I liked most.",
      avatar: "https://i.pravatar.cc/150?u=sandeep"
    }
  ];

  return (
    <div className="bg-white">
      {/* --- WHY CHOOSE US: THE JANSEVA ADVANTAGE --- */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
                The Janseva Advantage
              </span>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tighter">
                Why Thousands Trust <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic">
                  LPI-Legal
                </span>
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-16 max-w-xl">
                We have re-engineered the Indian legal experience to be digital-first, 
                human-centric, and completely transparent.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((item, i) => (
                  <div key={i} className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-500">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-slate-900 border border-white/10 text-white group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <h4 className="font-black text-lg mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
               <div className="relative z-10 p-4 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Corporate Office" 
                    className="rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  {/* Floating Trust Card */}
                  <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block border border-slate-100">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex -space-x-3">
                            {[1,2,3].map(i => (
                                <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                            ))}
                        </div>
                        <p className="text-xs font-black text-slate-900 uppercase tracking-tighter">Joined this week</p>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-600 font-black text-xl">
                        <TrendingUp size={20} /> +128% <span className="text-slate-400 text-xs font-medium">Growth in 2025</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PERFORMANCE METRICS --- */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Client Retention", val: "94%", icon: <HeartHandshake size={18}/> },
              { label: "Compliance Experts", val: "50+", icon: <Users size={18}/> },
              { label: "Cities Covered", val: "150+", icon: <Globe2 size={18}/> },
              { label: "Filing Speed", val: "2X Faster", icon: <Zap size={18}/> },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-white/40 mb-4 flex justify-center group-hover:text-white transition-colors">
                    {stat.icon}
                </div>
                <p className="text-4xl md:text-5xl font-black text-white mb-2">{stat.val}</p>
                <p className="text-blue-100 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS: REAL STORIES --- */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-blue-700 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Success Stories</span>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                Entrepreneurs <br />Building the Future
              </h3>
            </div>
            <p className="text-slate-500 text-lg max-w-sm border-l-2 border-blue-600 pl-6">
              Helping India's brightest minds turn their vision into registered reality.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {detailedTestimonials.map((review, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                <Quote className="text-blue-50 group-hover:text-blue-100 transition-colors mb-8" size={48} fill="currentColor" />
                
                <span className="inline-block px-3 py-1 rounded-lg bg-slate-50 text-slate-400 text-[9px] font-black uppercase tracking-widest mb-6">
                  {review.tag}
                </span>

                <p className="text-slate-700 text-xl font-medium leading-relaxed mb-10">
                  "{review.content}"
                </p>

                <div className="flex items-center gap-4">
                  <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-2xl grayscale group-hover:grayscale-0 transition-all shadow-lg" />
                  <div>
                    <h4 className="font-black text-slate-900 text-lg">{review.name}</h4>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-32 relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-1 scale-[1.02] opacity-10 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="relative bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center overflow-hidden">
               <div className="relative z-10">
                  <h4 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                    Join the next generation of <br />
                    <span className="text-blue-400">Compliant Businesses</span>
                  </h4>
                  <div className="flex flex-wrap justify-center gap-6">
                    <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-blue-900/40">
                      Start Your Journey
                    </button>
                    <button className="flex items-center gap-3 bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-white/10 transition-all">
                      <PlayCircle size={20} className="text-blue-400" /> Watch Case Studies
                    </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsAndWhyChooseUs;