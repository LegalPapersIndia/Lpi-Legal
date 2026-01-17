import React from 'react';
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
  ExternalLink
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

  return (
    <div className="bg-white pt-24">
      {/* --- HERO SECTION --- */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Legacy of <span className="text-blue-400">Janseva</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            LPI-Legal is more than a consultancy. We are a bridge between the complexities of law and the dreams of every Indian entrepreneur.
          </p>
        </div>
      </section>

      {/* --- STATS OVERLAY --- */}
      <div className="container mx-auto px-6 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white shadow-2xl rounded-2xl p-8 border border-slate-100">
          {stats.map((stat, i) => (
            <div key={i} className="text-center border-r last:border-0 border-slate-100">
              <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- COMPANY HISTORY --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-4">
              <History size={14} /> OUR JOURNEY
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Established in 2012 with a Mission to Decentralize Legal Access</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                LPI-Legal (Legal Service Janseva) started in a small office with a big vision: 
                to make legal compliance as easy as ordering groceries. Our founder recognized that thousands of businesses fail not because of poor ideas, but due to overwhelming paperwork.
              </p>
              <p>
                In 2015, we digitized our operations, allowing us to serve clients across all 28 states. By 2020, we were recognized as one of the fastest-growing legal-tech startups in the "Janseva" sector.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                {["ISO 9001 Certified", "Government Approved", "Pan India Presence", "Paperless Process"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-800 font-semibold">
                    <CheckCircle className="text-green-500" size={18} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" 
              className="rounded-3xl shadow-lg border-8 border-slate-50"
              alt="History" 
            />
          </div>
        </div>
      </section>

      {/* --- RATINGS ON PLATFORMS --- */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Proven Trust Across Platforms</h2>
            <p className="text-slate-500 mt-2">We let our numbers and our clients speak for us.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ratings.map((rate, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center border border-slate-100">
                <h4 className={`text-xl font-bold mb-2 ${rate.color}`}>{rate.platform}</h4>
                <div className="flex justify-center text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-4xl font-bold text-slate-900 mb-1">{rate.score}/5</p>
                <p className="text-slate-500 text-sm">Based on {rate.reviews} reviews</p>
                <button className="mt-6 text-blue-700 text-sm font-bold flex items-center justify-center gap-1 mx-auto hover:underline">
                  View Profile <ExternalLink size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MEET THE LEADERSHIP --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">The Minds Behind LPI-Legal</h2>
          <p className="text-slate-600">A blend of legal wisdom and technological innovation.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { name: "Adv. Animesh Das", role: "Chief Legal Strategist", desc: "Expert in Corporate Law with 20+ years experience." },
            { name: "CA Shruti Iyer", role: "Head of Taxation", desc: "Specializes in International Taxation and GST audits." },
            { name: "Vikram Singh", role: "Director of Operations", desc: "Driving the 'Janseva' tech portal to automate legal filings." }
          ].map((member, i) => (
            <div key={i} className="group text-center">
              <div className="w-48 h-48 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg grayscale group-hover:grayscale-0 transition duration-500">
                <img src={`https://static.vecteezy.com/system/resources/thumbnails/051/669/063/small/a-lone-figure-dressed-in-a-hooded-sweatshirt-stands-amidst-darkness-and-blurred-shadows-photo.jpeg`} alt={member.name} />
              </div>
              <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              <p className="text-slate-500 text-sm px-4">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONNECT WITH US (Contact) --- */}
      <section className="bg-blue-700 py-20 text-white rounded-t-[50px]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">How to Connect with Us?</h2>
              <p className="text-blue-100 mb-10 leading-relaxed">
                Whether you're a startup looking for incorporation or an established firm needing GST support, 
                our doors and phone lines are always open.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center"><Phone /></div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase font-bold">Call for Consultation</p>
                    <p className="text-lg font-semibold">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center"><Mail /></div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase font-bold">Email Support</p>
                    <p className="text-lg font-semibold">help@lpilegal.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center"><MapPin /></div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase font-bold">Our Head Office</p>
                    <p className="text-lg font-semibold">Sector 18, Business Hub, Noida, UP</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl text-slate-900">
              <h3 className="text-2xl font-bold mb-6">Drop a Message</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:outline-blue-500" />
                  <input type="email" placeholder="Email Address" className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:outline-blue-500" />
                </div>
                <select className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:outline-blue-500 text-slate-500">
                  <option>Select Service</option>
                  <option>Company Incorporation</option>
                  <option>GST Registration</option>
                  <option>Other Legal Work</option>
                </select>
                <textarea rows="4" placeholder="How can we help?" className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:outline-blue-500"></textarea>
                <button className="w-full bg-blue-700 text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition shadow-lg">
                  Send Message
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