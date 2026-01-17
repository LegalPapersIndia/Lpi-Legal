import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Hero = () => {
  const slides = [
    {
      title: "Company Incorporation",
      description: "Start your business journey with expert legal guidance. We handle all paperwork for Private Limited, LLP, and OPC.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600",
      cta: "Register Now"
    },
    {
      title: "Food License (FSSAI)",
      description: "Ensure your food business is compliant with FSSAI standards. Fast-track registration and licensing services.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1600",
      cta: "Get Licensed"
    },
    {
      title: "Import Export Code (IEC)",
      description: "Expand your business globally. Quick issuance of Import Export Code for international trade hassle-free.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1600",
      cta: "Apply IEC"
    },
    {
      title: "GST Registration & Filing",
      description: "Stay tax-compliant with our GST services. Monthly filings, annual returns, and new registrations made easy.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1600",
      cta: "Register GST"
    },
    {
      title: "Trademark Registration",
      description: "Protect your brand identity and intellectual property. Expert trademark filing and objection handling.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600",
      cta: "Protect Brand"
    }
  ];

  const [current, setCurrent] = useState(0);

  // Auto-play feature
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);

  return (
    <section className="relative h-[600px] w-full overflow-hidden mt-[110px]"> {/* Margin-top to account for fixed navbar */}
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms]"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                transform: index === current ? 'scale(1.1)' : 'scale(1)' 
              }}
            >
              <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for text readability */}
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center px-6 md:px-20">
              <div className="max-w-2xl text-white space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-in fade-in slide-in-from-left duration-700">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 animate-in fade-in slide-in-from-left duration-1000">
                  {slide.description}
                </p>
                <div className="pt-4 animate-in fade-in slide-in-from-bottom duration-1000">
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-bold flex items-center gap-2 group transition-all">
                    {slide.cta}
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all z-20"
      >
        <ChevronLeft size={30} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all z-20"
      >
        <ChevronRight size={30} />
      </button>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 transition-all rounded-full ${
              index === current ? "w-8 bg-blue-600" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;