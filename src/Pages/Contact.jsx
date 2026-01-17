import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Navigation,
  MessageSquare,
  Globe,
} from "lucide-react";

const ContactPage = () => {
  // Replace this with your actual email address
  const CONTACT_EMAIL = "udit9407@gmail.com";

  return (
    <div className="bg-white pt-24">
      {/* --- HEADER SECTION --- */}
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">
            Let's Start a <span className="text-blue-400">Conversation</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have questions about business registration or legal compliance? Our
            experts are ready to help you navigate the process.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* --- CONTACT INFO CARDS --- */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Details
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-700 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                      Call Us
                    </p>
                    <p className="text-slate-900 font-semibold">
                      +91 75052 66931
                    </p>
                    <p className="text-slate-500 text-sm">
                      Mon-Sat, 10am - 7pm
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-700 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                      Email Us
                    </p>
                    <p className="text-slate-900 font-semibold">
                      contact@lpilegal.com
                    </p>
                    <p className="text-slate-500 text-sm">
                      Response within 24hrs
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-700 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                      Visit Us
                    </p>
                    <p className="text-slate-900 font-semibold">
                     F-2 , Sector 8, Noida 
                    </p>
                    <p className="text-slate-500 text-sm">
                      Uttar Pradesh, India - 201301
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-blue-200">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-blue-700" /> Office Hours
                </h4>
                <div className="text-sm text-slate-600 space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>{" "}
                    <span className="font-bold">10:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>{" "}
                    <span className="font-bold">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between text-red-500">
                    <span>Sunday:</span>{" "}
                    <span className="font-bold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- CONTACT FORM (FORMSUBMIT) --- */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">
              Send us a Message
            </h3>
            <p className="text-slate-500 mb-8">
              Fill out the form below and our legal consultant will get back to
              you shortly.
            </p>

            <form
              action={`https://formsubmit.co/${CONTACT_EMAIL}`}
              method="POST"
              className="space-y-6"
            >
              {/* FormSubmit Configuration */}
              <input
                type="hidden"
                name="_subject"
                value="New Legal Inquiry - LPI Legal"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 00000 00000"
                    className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Required Service
                </label>
                <select
                  name="service"
                  className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition"
                >
                  <option>Company Incorporation</option>
                  <option>GST Registration</option>
                  <option>Trademark Filing</option>
                  <option>FSSAI License</option>
                  <option>Other Legal Assistance</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us briefly about your business needs..."
                  className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 group"
              >
                Submit Inquiry{" "}
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>

        {/* --- MAP & DIRECTIONS --- */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Find Us on the Map
              </h3>
              <p className="text-slate-500">
                Visit our head office for a face-to-face consultation.
              </p>
            </div>
            <a
              href="https://www.google.com/maps/dir//Your+Location+Link+Here"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition"
            >
              Get Directions <Navigation size={18} />
            </a>
          </div>

          <div className="w-full h-[450px] rounded-[2.5rem] overflow-hidden border-8 border-slate-100 shadow-inner">
            {/* Replace the URL in src with your actual Google Maps Embed link */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.144949367901!2d77.31967657533409!3d28.59542807568502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2290a24adc2aa39f%3A0x6393f050e681d51e!2sLegal%20Papers%20India!5e0!3m2!1sen!2sin!4v1768646803796!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
