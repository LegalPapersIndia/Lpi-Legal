import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, PlayCircle, ExternalLink } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Suresh Mehra",
      position: "Founder, Mehra Tech Solutions",
      comment: "LPI-Legal made my Company Incorporation incredibly easy. I was worried about the paperwork, but their team handled everything from DSC to PAN within 10 days.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
      tag: "Incorporation"
    },
    {
      name: "Priya Sharma",
      position: "Owner, The Organic Kitchen",
      comment: "Getting an FSSAI license was a headache until I found Janseva. They explained the requirements clearly and got my certificate faster than expected. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
      tag: "FSSAI License"
    },
    {
      name: "Amit Patel",
      position: "Exporter",
      comment: "Professional and transparent. They helped me with my Import Export Code and GST registration. Their direct message support is very responsive.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
      tag: "GST & IEC"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white overflow-hidden" id="testimonial">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-blue-600"></span>
              <span className="text-blue-700 font-black tracking-widest text-xs uppercase">Social Proof</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Verified Success <br />
              With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Janseva Legal</span>
            </h3>
            <p className="text-slate-500 text-lg">
              We've helped over 5,000+ entrepreneurs cross the legal finish line. Here is how we've changed their business journey.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="bg-slate-900 text-white p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group">
              <div className="relative z-10 flex items-center gap-4">
                <div className="text-right">
                  <div className="flex text-amber-400 mb-1 justify-end">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Avg Rating 4.9/5</p>
                </div>
                <div className="h-10 w-px bg-white/10"></div>
                <div className="text-2xl font-black">5k+ <span className="text-blue-400 text-sm block font-medium">Reviews</span></div>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-600/20 blur-2xl -mr-8 -mt-8"></div>
            </div>
          </motion.div>
        </div>

        {/* --- TESTIMONIALS GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {reviews.map((review, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-500 group"
            >
              {/* Service Tag */}
              <div className="mb-6 inline-block bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {review.tag}
              </div>

              {/* Quote Icon Background */}
              <Quote size={60} className="absolute top-8 right-8 text-slate-50 group-hover:text-blue-50 transition-colors -z-0" fill="currentColor" />

              {/* Stars */}
              <div className="flex text-amber-400 mb-6 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="mr-0.5" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 font-medium leading-relaxed mb-10 relative z-10">
                "{review.comment}"
              </p>

              {/* Client Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50 relative z-10">
                <div className="relative">
                   <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-14 h-14 rounded-2xl object-cover ring-4 ring-white shadow-md group-hover:rotate-3 transition-transform"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full border-2 border-white">
                    <CheckCircle2 size={10} />
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm tracking-tight">{review.name}</h4>
                  <p className="text-slate-400 text-xs font-bold">{review.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- VIDEO / CTA BOX --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[3rem] p-12 text-white relative overflow-hidden"
        >
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mt-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-48 -mb-48"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="text-center lg:text-left">
              <h4 className="text-3xl font-black mb-4">See how we help businesses grow</h4>
              <p className="text-blue-100 max-w-md mx-auto lg:mx-0">
                LPI-Legal ensures your business is compliant so you can focus on building your empire. 
              </p>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-2xl font-black hover:bg-blue-50 transition-all shadow-xl">
                  Get Started Now <ExternalLink size={18} />
                </button>
                <button className="flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-2xl font-black hover:bg-white/20 transition-all backdrop-blur-md border border-white/10">
                  <PlayCircle size={18} /> Watch Stories
                </button>
              </div>
            </div>

            {/* Visual Social Proof Element */}
            <div className="flex -space-x-4">
                {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-16 h-16 rounded-full border-4 border-blue-800 bg-slate-200 overflow-hidden shadow-2xl hover:-translate-y-4 transition-transform duration-300">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                ))}
                <div className="w-16 h-16 rounded-full border-4 border-blue-800 bg-blue-600 flex items-center justify-center font-bold text-xs shadow-2xl">
                    +4.8k
                </div>
            </div>
          </div>
        </motion.div>

        {/* --- TRUST BAR --- */}
        <div className="mt-20">
          <p className="text-center text-slate-400 text-xs font-black uppercase tracking-[0.3em] mb-10">Trusted & Verified By Platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            <span className="text-2xl font-black text-slate-900">GOOGLE BUSINESS</span>
            <span className="text-2xl font-black text-slate-900">JUSTDIAL</span>
            <span className="text-2xl font-black text-slate-900">TRUSTPILOT</span>
            <span className="text-2xl font-black text-slate-900">SULEKHA</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;