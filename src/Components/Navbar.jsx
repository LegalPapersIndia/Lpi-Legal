import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Added Framer Motion
import { Phone, Mail, Facebook, Twitter, Linkedin, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  
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

      // 1. Check if we are at the top for styling
      setIsAtTop(currentScrollY < 50);

      // 2. Hide when scrolling down, show when scrolling up
      // We add a 10px buffer to prevent jitter
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
      // Animate the header Y position based on visibility
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -130 }} 
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`w-full fixed top-0 z-50 transition-shadow duration-300 ${
        isAtTop ? 'shadow-none' : 'shadow-md'
      }`}
    >
      {/* --- TOP CONTACT BAR --- */}
      <div className="bg-slate-900 text-white py-2 px-4 md:px-12 flex justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2">
            <Phone size={14} className="text-blue-400" />
            <span>+91 7505266931</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-blue-400" />
            <span>contact@lpilegal.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-block text-slate-400">Follow us:</span>
          <Facebook size={16} className="cursor-pointer hover:text-blue-500 transition" />
          <Twitter size={16} className="cursor-pointer hover:text-sky-400 transition" />
          <Linkedin size={16} className="cursor-pointer hover:text-blue-700 transition" />
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <nav className="bg-white border-b border-gray-100 px-4 md:px-12 py-4 flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-tighter text-slate-900">
            LPI-<span className="text-blue-700">LEGAL</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-500 leading-none">
            Legal Service Janseva
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-semibold transition-colors duration-200 ${
                location.pathname === link.href ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <button className="bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-bold hover:bg-blue-800 transition">
              FREE CONSULTATION
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white w-full absolute top-[100%] left-0 p-6 flex flex-col gap-6 shadow-xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-xl font-bold border-b border-gray-100 pb-2 ${
                  location.pathname === link.href ? 'text-blue-700' : 'text-slate-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="bg-blue-700 text-white py-4 w-full rounded-lg font-bold">
                GET STARTED
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;