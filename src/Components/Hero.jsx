import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, ArrowRight, 
  ShieldCheck, Star, Zap, Users 
} from 'lucide-react';

const Hero = () => {
  const slides = [
    {
      title: "Scale Your Vision with Corporate Precision ",
      highlight: "Company Incorporation",
      description: "From Pvt Ltd to LLPs, we handle the legal architecture so you can focus on building your empire.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600",
      cta: "Start Your Incorporation",
      stats: { label: "Registered Today", value: "42+" }
    },
    {
      title: "Global Markets are Waiting for You ",
      highlight: "Import Export Code",
      description: "Break geographical barriers. Get your IEC issued in 24 hours and start trading globally with ease.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1600",
      cta: "Get Export Ready",
      stats: { label: "Global Reach", value: "120+ Countries" }
    },
    {
      title: "Your Brand is Your Most Valuable Asset ",
      highlight: "Trademark Protection",
      description: "Don't let copycats dilute your hard work. Secure your identity with ironclad trademark filing.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600",
      cta: "Secure My Brand",
      stats: { label: "Success Rate", value: "99.2%" }
    }
  ];

  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 6000; // 6 seconds per slide
    const interval = 100; // update progress every 100ms
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
          return 0;
        }
        return prev + (interval / duration) * 100;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [current, slides.length]);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
    setProgress(0);
  };

  return (
    <section className="relative h-[750px] w-full overflow-hidden bg-slate-900 mt-[80px]">
      
      {/* --- BACKGROUND LAYER --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* --- CONTENT LAYER --- */}
      <div className="relative h-full container mx-auto px-6 md:px-12 flex items-center">
        <div className="max-w-3xl z-10">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-blue-600 p-1 rounded-md text-white">
                <ShieldCheck size={18} />
              </span>
              <span className="text-blue-400 font-black tracking-[0.2em] text-xs uppercase">
                Govt. Approved Consultancy
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6">
              {slides[current].title.split(slides[current].highlight)[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                {slides[current].highlight}
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
              {slides[current].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 group transition-all shadow-2xl shadow-blue-600/30">
                {slides[current].cta}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="text-center">
                  <p className="text-2xl font-black text-white leading-none">{slides[current].stats.value}</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">{slides[current].stats.label}</p>
                </div>
                <div className="w-[1px] h-8 bg-white/20" />
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- SIDE SOCIAL PROOF --- */}
      <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-6 z-20">
        {[
          { icon: <Star className="text-yellow-400" />, label: "4.9/5 Rating" },
          { icon: <Zap className="text-blue-400" />, label: "Fast-Track" },
          { icon: <Users className="text-indigo-400" />, label: "5k+ Clients" }
        ].map((item, i) => (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + (i*0.1) }}
            key={i} 
            className="flex items-center gap-4 bg-slate-900/50 backdrop-blur-xl border border-white/10 p-4 rounded-2xl"
          >
            {item.icon}
            <span className="text-sm font-bold text-white whitespace-nowrap">{item.label}</span>
          </motion.div>
        ))}
      </div>

      {/* --- CONTROLS & PROGRESS --- */}
      <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 z-30">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Progress Indicators */}
          <div className="flex gap-4 w-full md:w-auto">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => { setCurrent(index); setProgress(0); }}
                className="relative h-1 bg-white/20 flex-1 md:w-32 rounded-full overflow-hidden"
              >
                {index === current && (
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="absolute inset-0 bg-blue-500"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Nav Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;