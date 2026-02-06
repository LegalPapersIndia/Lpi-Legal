import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Facebook, Twitter, Linkedin, Menu, X, 
  Search, Globe, ChevronDown, ShieldCheck 
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'TESTIMONIAL', href: '/testimonials' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  // --- SCROLL LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 50);

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false); // Scrolling Down
      } else {
        setIsVisible(true);  // Scrolling Up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -140 }} 
      transition={{ duration: 0.4, ease: "circOut" }}
      className="w-full fixed top-0 z-[100]"
    >
      {/* --- TOP CONTACT BAR (Dark Theme) --- */}
      <div className="bg-slate-950 text-slate-300 py-2.5 px-4 md:px-12 flex justify-between items-center text-[11px] md:text-xs border-b border-white/5">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer">
            <Phone size={12} className="text-blue-500" />
            <span className="font-medium">+91 7505266931</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer">
            <Mail size={12} className="text-blue-500" />
            <span className="font-medium">contact@lpilegal.com</span>
          </div>
        </div>
        
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-2 border-r border-slate-700 pr-5 mr-1">
            <ShieldCheck size={12} className="text-blue-500" />
            <span className="font-bold tracking-widest uppercase">Verified Legal Provider</span>
          </div>
          <div className="flex items-center gap-3">
            <Facebook size={14} className="cursor-pointer hover:text-blue-500 transition-colors" />
            <Twitter size={14} className="cursor-pointer hover:text-sky-400 transition-colors" />
            <Linkedin size={14} className="cursor-pointer hover:text-blue-700 transition-colors" />
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR (Glassmorphism) --- */}
      <nav className={`transition-all duration-500 px-4 md:px-12 py-4 flex justify-between items-center ${
        isAtTop 
          ? 'bg-white border-transparent' 
          : 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200 py-3'
      }`}>
        
        {/* Brand Logo */}
        <Link to="/" className="flex flex-col group">
          <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none">
            LPI-<span className="text-blue-700 group-hover:text-slate-900 transition-colors">LEGAL</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mt-1">
            Legal Service Janseva
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[13px] font-black tracking-widest transition-all relative py-1 ${
                location.pathname === link.href ? 'text-blue-700' : 'text-slate-600 hover:text-blue-700'
              }`}
            >
              {link.name}
              {location.pathname === link.href && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-700 rounded-full"
                />
              )}
            </Link>
          ))}
          
          <div className="h-6 w-[1px] bg-slate-200 mx-2" />
          
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-slate-600 hover:text-blue-700 transition-colors"
          >
            <Search size={18} />
          </button>

          <Link to="/contact">
            <button className="bg-blue-700 text-white px-7 py-3 rounded-xl text-xs font-black tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-blue-700/20 active:scale-95">
              FREE CONSULTATION
            </button>
          </Link>
        </div>

        {/* Mobile Buttons */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 text-slate-600">
            <Search size={22} />
          </button>
          <button 
            className="p-2 bg-slate-100 rounded-lg text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- SEARCH BAR OVERLAY --- */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl p-4"
          >
            <div className="container mx-auto max-w-4xl flex gap-4">
              <input 
                type="text" 
                placeholder="Search for legal services..." 
                className="w-full bg-slate-100 border-none rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                autoFocus
              />
              <button className="bg-blue-700 text-white px-6 rounded-xl font-bold">Search</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MOBILE SIDEBAR --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[200] lg:hidden flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-slate-100">
              <span className="font-black text-slate-400 tracking-widest text-xs uppercase">Menu</span>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-900 text-white rounded-xl">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 px-8 py-12 space-y-8 overflow-y-auto">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block text-4xl font-black tracking-tighter ${
                    location.pathname === link.href ? 'text-blue-700' : 'text-slate-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
            </div>

            <div className="p-8 border-t border-slate-100 bg-slate-50">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-blue-700 text-white py-5 rounded-2xl font-black tracking-widest text-sm shadow-2xl shadow-blue-700/30">
                  FREE CONSULTATION
                </button>
              </Link>
              <div className="mt-8 flex justify-center gap-6 text-slate-400">
                <Facebook size={20} />
                <Twitter size={20} />
                <Linkedin size={20} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;