import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Award, Users, Scale, ShieldCheck, 
  Linkedin, Mail, ArrowUpRight, TrendingUp 
} from 'lucide-react';

const AboutUs = () => {
  const expertise = [
    { title: "Corporate Law", icon: <Scale />, desc: "Framework for modern startups." },
    { title: "Taxation & GST", icon: <ShieldCheck />, desc: "Strategic fiscal compliance." },
    { title: "IPR & Trademarks", icon: <Award />, desc: "Protecting your unique identity." },
    { title: "Licensing", icon: <CheckCircle />, desc: "Government approvals simplified." },
  ];

  const team = [
    {
      name: "Adv. Rajesh Kumar",
      role: "Founder & Senior Consultant",
      image: "https://media.istockphoto.com/id/1290743328/vector/faceless-man-abstract-silhouette-of-person-the-figure-of-man-without-a-face-front-view.jpg?s=612x612&w=0&k=20&c=Ys-4Co9NaWFFBDjmvDJABB2BPePxJwHugC8_G5u0rOk=",
    },
    {
      name: "CA Ananya Sharma",
      role: "Head of Taxation",
      image: "https://media.istockphoto.com/id/1290743328/vector/faceless-man-abstract-silhouette-of-person-the-figure-of-man-without-a-face-front-view.jpg?s=612x612&w=0&k=20&c=Ys-4Co9NaWFFBDjmvDJABB2BPePxJwHugC8_G5u0rOk=",
    },
    {
      name: "Sandeep Verma",
      role: "Compliance Expert",
      image: "https://media.istockphoto.com/id/1290743328/vector/faceless-man-abstract-silhouette-of-person-the-figure-of-man-without-a-face-front-view.jpg?s=612x612&w=0&k=20&c=Ys-4Co9NaWFFBDjmvDJABB2BPePxJwHugC8_G5u0rOk=",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden" id="about">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 translate-x-1/2 -z-10" />
      
      <div className="container mx-auto px-6 md:px-12">
        
        {/* --- HERO SECTION --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image with decorative border */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://img.freepik.com/free-photo/photorealistic-law-environment_23-2151202465.jpg?w=740" 
                alt="Legal Office" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Experience Card */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -right-6 md:right-10 bg-blue-700 text-white p-8 rounded-3xl shadow-2xl z-20 flex flex-col items-center text-center"
            >
              <div className="bg-white/20 p-3 rounded-2xl mb-3">
                <TrendingUp size={24} />
              </div>
              <p className="text-5xl font-black mb-1">15+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-100">Years of <br/> Excellence</p>
            </motion.div>

            {/* Background element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl -z-0" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-blue-700 font-black tracking-[0.3em] text-xs uppercase bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">
                Our Legacy
              </span>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.15]">
                Empowering Dreams Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-500">Legal Precision.</span>
              </h3>
            </div>
            
            <p className="text-slate-500 text-lg leading-relaxed">
              Legal Service Janseva (LPI-Legal) isn't just a consultancy; we are the architectural partners of your business success. We've replaced traditional legal bureaucracy with digital-first efficiency.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors group"
                >
                  <div className="p-2.5 bg-white rounded-xl shadow-sm text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">{item.title}</span>
                    <span className="text-xs text-slate-400">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* --- STATS DASHBOARD --- */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[3rem] p-8 md:p-16 mb-32 relative overflow-hidden shadow-2xl shadow-blue-900/20"
        >
          {/* Decorative background circle */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {[
              { val: "5k+", label: "Happy Clients" },
              { val: "1.2k+", label: "Incorporations" },
              { val: "99%", label: "Success Rate" },
              { val: "24/7", label: "Expert Support" }
            ].map((s, i) => (
              <div key={i} className="text-center group">
                <p className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">{s.val}</p>
                <div className="h-1 w-8 bg-blue-600 mx-auto mb-3 rounded-full group-hover:w-12 transition-all" />
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- TEAM SECTION --- */}
        <div className="text-center mb-20">
          <span className="text-blue-700 font-black tracking-widest text-xs uppercase mb-3 block">The Brain Trust</span>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Meet the Professionals</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-100 mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Action */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 hover:bg-blue-100 transition-colors">
                      <Linkedin size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 hover:bg-blue-100 transition-colors">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start px-2">
                <div>
                  <h4 className="text-2xl font-black text-slate-900 leading-none mb-2">{member.name}</h4>
                  <p className="text-blue-700 font-bold text-sm tracking-wide">{member.role}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all cursor-pointer">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;