import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram,
  ArrowRight, Gavel, ShieldCheck, FileText, Send, Clock, Globe
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: "Company Incorporation", href: "/services/incorporation" },
    { name: "GST Registration & Filing", href: "/services/gst" },
    { name: "Trademark & IPR Filing", href: "/services/trademark" },
    { name: "FSSAI Food License", href: "/services/fssai" },
    { name: "Import Export Code (IEC)", href: "/services/iec" },
    { name: "MSME/Udyam Registration", href: "/services/msme" },
    { name: "ISO Certification", href: "/services/iso" },
  ];

  const resources = [
    { name: "Compliance Calendar", href: "/resources" },
    { name: "Document Checklist", href: "/resources" },
    { name: "Blog & Legal Updates", href: "/blog" },
    { name: "Success Stories", href: "/testimonials" },
    { name: "Career with Us", href: "/careers" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] -z-0" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- TOP SECTION: NEWSLETTER & CTA --- */}
        <div className="grid lg:grid-cols-3 gap-12 pb-16 border-b border-slate-800 mb-16">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl md:text-3xl font-black text-white">Stay updated with legal insights.</h3>
            <p className="text-slate-400 max-w-md">Join 5,000+ entrepreneurs receiving monthly compliance alerts and business growth tips directly in their inbox.</p>
          </div>
          <div className="flex items-start">
            <form className="flex w-full group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-slate-800 border-none rounded-l-xl px-5 py-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-r-xl transition-all flex items-center gap-2 font-bold text-sm">
                Subscribe <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Contact */}
          <div className="space-y-8">
            <Link to="/" className="flex flex-col w-fit group">
              <span className="text-2xl font-black tracking-tighter text-white">
                LPI-<span className="text-blue-500 group-hover:text-blue-400 transition-colors">LEGAL</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 leading-none">
                Legal Service Janseva
              </span>
            </Link>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                  <MapPin className="text-blue-500" size={18} />
                </div>
                <p className="text-sm leading-relaxed">
                  F-2, Sector 8, Noida <br />
                  Uttar Pradesh, India - 201301
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                  <Phone className="text-blue-500" size={18} />
                </div>
                <p className="text-sm font-bold">+91 75052 66931</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                  <Mail className="text-blue-500" size={18} />
                </div>
                <p className="text-sm">support@lpilegal.com</p>
              </div>
            </div>

            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all border border-slate-700">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-black mb-8 text-sm uppercase tracking-widest border-l-4 border-blue-600 pl-4">Core Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                    <ArrowRight size={14} className="-ml-4 opacity-0 group-hover:ml-0 group-hover:opacity-100 transition-all text-blue-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-black mb-8 text-sm uppercase tracking-widest border-l-4 border-blue-600 pl-4">Resources</h4>
            <ul className="space-y-4">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                    <ArrowRight size={14} className="-ml-4 opacity-0 group-hover:ml-0 group-hover:opacity-100 transition-all text-blue-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Trust & Disclaimer */}
          <div className="space-y-8">
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="text-blue-500" size={18} /> Verified Partner
              </h4>
              <p className="text-xs leading-relaxed text-slate-400">
                LPI-Legal is a registered entity under the Startup India initiative. We follow the strict guidelines of MCA, GSTN, and MSME departments.
              </p>
              <div className="mt-4 flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                {/* Placeholder for Trust Badges/Logos */}
                <div className="w-12 h-8 bg-slate-700 rounded flex items-center justify-center text-[8px] font-bold">MCA</div>
                <div className="w-12 h-8 bg-slate-700 rounded flex items-center justify-center text-[8px] font-bold">GSTN</div>
                <div className="w-12 h-8 bg-slate-700 rounded flex items-center justify-center text-[8px] font-bold">MSME</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-xs">
              <Clock className="text-blue-500" size={14} />
              <span>Office Hours: Mon - Sat (10 AM - 7 PM)</span>
            </div>
          </div>

        </div>

        {/* --- DISCLAIMER --- */}
        <div className="bg-slate-950/50 p-6 rounded-2xl mb-12 border border-slate-800">
          <p className="text-[10px] leading-relaxed text-slate-500 uppercase font-medium mb-2 tracking-wider">Legal Disclaimer</p>
          <p className="text-[10px] leading-relaxed text-slate-500">
            Legal Service Janseva (LPI-Legal) is a technology-driven platform that provides legal and secretarial assistance. We are not a law firm and do not provide legal advice, opinions, or recommendations about your legal rights or strategies. The information provided on this website is for general informational purposes only. Use of this website is subject to our Terms of Service and Privacy Policy.
          </p>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[11px] font-medium">© {currentYear} LPI-Legal. Proudly Supporting Indian Startups.</p>
            <div className="flex gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="w-1 h-1 bg-slate-700 rounded-full my-auto" />
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <span className="w-1 h-1 bg-slate-700 rounded-full my-auto" />
              <Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-slate-800/30 px-4 py-2 rounded-full border border-slate-800">
            <Globe size={14} className="text-blue-500" />
            <span className="text-[10px] font-bold tracking-widest uppercase">India (Global Operations)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;