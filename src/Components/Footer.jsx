import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Gavel
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: "Company Incorporation", href: "/services" },
    { name: "GST Registration", href: "/services" },
    { name: "Trademark Filing", href: "/services" },
    { name: "FSSAI License", href: "/services" },
    { name: "Import Export Code", href: "/services" },
    { name: "MSME Registration", href: "/services" }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* --- MAIN CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col w-fit">
              <span className="text-2xl font-bold tracking-tighter text-white">
                LPI-<span className="text-blue-500">LEGAL</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-400 leading-none">
                Legal Service Janseva
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Leading legal consultancy providing seamless registration and compliance services across India. Dedicated to empowering entrepreneurs with expert "Janseva."
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-blue-400 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-pink-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 shrink-0" size={20} />
                <span className="text-sm">
                  F-2 , Sector 8, Noida <br />
                  Uttar Pradesh, India - 201301
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 shrink-0" size={20} />
                <span className="text-sm">+91 75052 66931</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 shrink-0" size={20} />
                <span className="text-sm">support@lpilegal.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} LPI-Legal (Legal Service Janseva). All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;