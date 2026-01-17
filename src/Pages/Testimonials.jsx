import React from 'react';
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
  HeartHandshake 
} from 'lucide-react';

const TestimonialsAndWhyChooseUs = () => {
  const values = [
    {
      title: "100% Paperless Process",
      desc: "Upload documents via WhatsApp or our secure portal. No need to visit any office physically.",
      icon: <Zap className="text-blue-600" />,
      color: "bg-blue-50"
    },
    {
      title: "Transparent Fixed Pricing",
      desc: "No hidden government fees or surprise professional charges. What you see is what you pay.",
      icon: <Scale className="text-green-600" />,
      color: "bg-green-50"
    },
    {
      title: "Expert Legal Brains",
      desc: "Your files are handled by experienced CAs and Advocates, not just data entry operators.",
      icon: <Award className="text-purple-600" />,
      color: "bg-purple-50"
    },
    {
      title: "Lifetime Compliance Support",
      desc: "We don't just register; we send you automated alerts for renewals and annual filings.",
      icon: <ShieldCheck className="text-red-600" />,
      color: "bg-red-50"
    }
  ];

  const detailedTestimonials = [
    {
      name: "Rahul Deshmukh",
      role: "Founder, AgriTech Solutions",
      tag: "Company Incorporation",
      content: "I was confused between LLP and Pvt Ltd. The team at LPI-Legal didn't just sell me a service; they sat down with me for 30 minutes to explain the tax implications of both. That's real Janseva.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=rahul"
    },
    {
      name: "Meenakshi Iyer",
      role: "Owner, Gourmet Bakes",
      tag: "FSSAI & Trademark",
      content: "Getting my food license and protecting my brand name was seamless. Their WhatsApp support is incredibly fast. I got my FSSAI certificate in just 4 days!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=meena"
    },
    {
      name: "Sandeep Khurana",
      role: "Importer, Global Gear",
      tag: "Import Export Code",
      content: "I needed my IEC urgently for a shipment. These guys got it done within 24 hours. Their transparency regarding government fees is what I liked the most.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=sandy"
    }
  ];

  return (
    <div className="bg-white pt-24">
      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-4">The Janseva Advantage</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Why Thousands of Businesses Trust <span className="text-blue-400">LPI-Legal</span>
              </h3>
              <p className="text-slate-400 text-lg mb-10">
                In a world of complex legal jargon, we provide clarity. We have re-engineered the legal experience to be fast, affordable, and human-centric.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((item, i) => (
                  <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}>
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative z-10 bg-white p-2 rounded-[2rem] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800" 
                  alt="Team working" 
                  className="rounded-[1.8rem]"
                />
              </div>
              {/* Abstract decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PERFORMANCE METRICS --- */}
      <section className="py-12 bg-blue-700">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Client Retention", val: "94%" },
              { label: "Legal Professionals", val: "50+" },
              { label: "Cities Covered", val: "150+" },
              { label: "Avg. TAT Reduction", val: "40%" },
            ].map((stat, i) => (
              <div key={i} className="text-center text-white border-r border-blue-600 last:border-0">
                <p className="text-3xl md:text-4xl font-bold mb-1">{stat.val}</p>
                <p className="text-blue-100 text-xs uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-blue-700 font-bold text-sm uppercase tracking-widest mb-3">Testimonials</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Stories of Growth & Partnership</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We don't just provide certificates; we provide the peace of mind that allows entrepreneurs to focus on what they do best.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {detailedTestimonials.map((review, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-2xl transition-all duration-500">
                <Quote className="absolute top-8 right-8 text-slate-100 group-hover:text-blue-50 transition-colors" size={60} />
                
                <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase mb-6 relative z-10">
                  {review.tag}
                </div>

                <div className="flex gap-1 mb-6 text-amber-400 relative z-10">
                  {[...Array(review.rating)].map((_, star) => <Star key={star} size={16} fill="currentColor" />)}
                </div>

                <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10 italic">
                  "{review.content}"
                </p>

                <div className="flex items-center gap-4 border-t border-slate-50 pt-8 relative z-10">
                  <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full border-2 border-blue-100" />
                  <div>
                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                    <p className="text-slate-500 text-sm">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Testimonial Placeholder */}
          <div className="mt-20 bg-slate-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <HeartHandshake className="text-blue-500 mx-auto mb-6" size={48} />
              <h4 className="text-3xl font-bold text-white mb-6">Building a Legacy Together</h4>
              <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                "Our philosophy is simple: Your business is our business. When you grow, Janseva grows. We are committed to being the most reliable legal partner in your entrepreneurial journey."
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-900/20">
                  Read Case Studies
                </button>
                <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition">
                  Watch Video Reviews
                </button>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST FOOTER (LOGOS) --- */}
      <section className="py-20 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.3em] mb-12">Trusted by entities across industries</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="flex items-center gap-2 font-black text-2xl text-slate-800"><BarChart3 /> FINTECH</div>
             <div className="flex items-center gap-2 font-black text-2xl text-slate-800"><Users /> EDTECH</div>
             <div className="flex items-center gap-2 font-black text-2xl text-slate-800"><CheckCircle2 /> REALTY</div>
             <div className="flex items-center gap-2 font-black text-2xl text-slate-800"><ShieldCheck /> E-COM</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsAndWhyChooseUs;