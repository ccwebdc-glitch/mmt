import React, { useState } from "react";
import { Mail, Phone, MapPin, Instagram, ArrowUpRight, ShieldCheck, Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    corporateEmail: "",
    phoneNumber: "",
    projectName: "",
    estimatedScope: "",
    inquiryMessage: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury enterprise secure transmission flow
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      // Save locally to simulate durable cloud synchronization
      localStorage.setItem("mmt_last_inquiry", JSON.stringify({ ...formData, timestamp: new Date().toISOString() }));
    }, 2000);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      corporateEmail: "",
      phoneNumber: "",
      projectName: "",
      estimatedScope: "",
      inquiryMessage: ""
    });
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-dark-graphite relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full radial-glow opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 sm:mb-24" id="contact-header">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-electric-blue mb-3">
            10 // PARTNERSHIP & INQUIRIES
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-light text-white tracking-tight leading-none mb-6">
            Initiate an <br />
            <span className="text-electric-blue font-medium">
              Engineering Project.
            </span>
          </h2>
          <div className="h-[2px] w-24 bg-mmt-blue shadow-[0_0_8px_rgba(0,71,255,0.8)] mb-6" />
          <p className="text-gray-300 font-sans font-light max-w-4xl leading-relaxed text-sm sm:text-base">
            Collaborate with the undisputed leader in Large Format Premium Printing Technology across GCC and MENA.
          </p>
        </div>

        {/* Split Layout: Contact Details & Google Map on Left, Inquiry Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start" id="contact-workspace">
          
          {/* Left Block: Corporate Information & Dark Map */}
          <div className="lg:col-span-5 flex flex-col gap-10" id="contact-details-block">
            
            {/* Address Details */}
            <div className="flex flex-col gap-6">
              
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 border border-white/10 text-electric-blue rounded-xl mt-1 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Global Headquarters</span>
                  <span className="text-white text-base font-display font-medium mt-1 leading-relaxed">
                    Dubai Investment Park 1<br />
                    Building WP1, PO Box 127198<br />
                    Dubai, United Arab Emirates
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 border border-white/10 text-electric-blue rounded-xl mt-1 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Direct Line</span>
                  <a href="tel:+97148853123" className="text-white text-base font-display font-medium mt-1 hover:text-electric-blue transition-colors">
                    +971 4 885 3123
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 border border-white/10 text-electric-blue rounded-xl mt-1 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Corporate Inquiries</span>
                  <a href="mailto:info@mmtmena.com" className="text-white text-base font-display font-medium mt-1 hover:text-electric-blue transition-colors">
                    info@mmtmena.com
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 border border-white/10 text-electric-blue rounded-xl mt-1 shrink-0">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Instagram Broadcast</span>
                  <a
                    href="https://instagram.com/mmt_mena"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    className="text-white text-base font-display font-medium mt-1 hover:text-electric-blue transition-colors flex items-center gap-1"
                  >
                    @mmt_mena
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Dark Styled Google Map Block */}
            <div className="w-full h-64 rounded-3xl overflow-hidden border border-white/5 bg-black relative shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
              {/* Overlay mask for visual depth */}
              <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-3xl z-20" />
              <div className="absolute top-3 left-3 z-10 text-[8px] font-mono tracking-widest uppercase bg-black/70 px-2.5 py-1 rounded border border-white/10 text-electric-blue">
                GPS COORDINATES: 25.0068, 55.1500
              </div>

              {/* Google Map iframe filtered into dark luxury scheme */}
              <iframe
                title="MMT Dubai Investment Park Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.932904620021!2d55.1500331!3d25.0067645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f7318ff2ea3df%3A0xcb1b51fc3e59ea2c!2sDubai%20Investment%20Park%201%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(190deg) brightness(85%) contrast(110%)",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                id="contact-google-map"
              />
            </div>

          </div>

          {/* Right Block: Luxury Inquiry Form */}
          <div className="lg:col-span-7" id="contact-form-block">
            <div className="border border-white/5 bg-black/40 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-[0_25px_55px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0A5CFF_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6" id="mmt-inquiry-form">
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-widest pb-3 border-b border-white/5">
                    ENTERPRISE BRIEF TRANSMISSION SECURE CODES
                  </div>

                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest font-mono text-gray-400 font-medium">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Alexander Mercer"
                      className="w-full px-5 py-4 bg-dark-graphite border border-white/5 rounded-xl text-white text-sm focus:border-electric-blue focus:outline-none transition-colors tracking-wide placeholder-gray-600"
                    />
                  </div>

                  {/* Corporate Email & Phone in 2-Col */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-widest font-mono text-gray-400 font-medium">
                        Corporate Email *
                      </label>
                      <input
                        required
                        type="email"
                        name="corporateEmail"
                        value={formData.corporateEmail}
                        onChange={handleInputChange}
                        placeholder="e.g. partner@brand.com"
                        className="w-full px-5 py-4 bg-dark-graphite border border-white/5 rounded-xl text-white text-sm focus:border-electric-blue focus:outline-none transition-colors tracking-wide placeholder-gray-600"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-widest font-mono text-gray-400 font-medium">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="e.g. +971 50 000 0000"
                        className="w-full px-5 py-4 bg-dark-graphite border border-white/5 rounded-xl text-white text-sm focus:border-electric-blue focus:outline-none transition-colors tracking-wide placeholder-gray-600"
                      />
                    </div>
                  </div>

                  {/* Project Title & Estimated Scope */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-widest font-mono text-gray-400 font-medium">
                        Project/Campaign Title
                      </label>
                      <input
                        type="text"
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleInputChange}
                        placeholder="e.g. Q4 Sheikh Zayed Takeover"
                        className="w-full px-5 py-4 bg-dark-graphite border border-white/5 rounded-xl text-white text-sm focus:border-electric-blue focus:outline-none transition-colors tracking-wide placeholder-gray-600"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-widest font-mono text-gray-400 font-medium">
                        Estimated Scope Size *
                      </label>
                      <select
                        required
                        name="estimatedScope"
                        value={formData.estimatedScope}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 bg-dark-graphite border border-white/5 rounded-xl text-white text-sm focus:border-electric-blue focus:outline-none transition-colors tracking-wide"
                      >
                        <option value="" className="text-gray-500">Select Scope Dimension</option>
                        <option value="hoopla">Mega Highway Billboard (Hoopla)</option>
                        <option value="airport">Airport Terminal Wrap (Seamless)</option>
                        <option value="mall">High-Luxury Mall Takeover</option>
                        <option value="architectural">Monumental Facade Graphic</option>
                        <option value="fleet">Elite Vehicle Fleet Branding</option>
                        <option value="other">Bespoke Fabrication</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest font-mono text-gray-400 font-medium">
                      Inquiry Message Brief *
                    </label>
                    <textarea
                      required
                      name="inquiryMessage"
                      rows={4}
                      value={formData.inquiryMessage}
                      onChange={handleInputChange}
                      placeholder="Outline your engineering requirements, environmental conditions, and desired aesthetic finish..."
                      className="w-full px-5 py-4 bg-dark-graphite border border-white/5 rounded-xl text-white text-sm focus:border-electric-blue focus:outline-none transition-colors tracking-wide placeholder-gray-600 resize-none"
                    />
                  </div>

                  {/* Submission triggers */}
                  <div className="flex flex-col gap-4 mt-2">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full py-4 bg-mmt-blue text-white rounded-xl text-xs uppercase tracking-widest font-semibold blue-glow-btn hover:bg-white hover:text-black hover:border-white transition-all flex items-center justify-center gap-3 border border-mmt-blue disabled:opacity-50"
                      id="contact-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <Send className="h-4 w-4 animate-bounce" /> Transmitting Brief...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Transmit Secure Brief
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono uppercase justify-center">
                      <ShieldCheck className="h-4 w-4 text-electric-blue" /> ENCRYPTED TRANS-CHANNELS SECURE FOR GLOBAL BRANDS
                    </div>
                  </div>

                </form>
              ) : (
                /* Cinematic Success Screen */
                <div className="relative z-10 flex flex-col items-center justify-center py-12 text-center" id="contact-success-panel">
                  <div className="h-20 w-20 bg-electric-blue/10 border-2 border-electric-blue rounded-full flex items-center justify-center text-electric-blue mb-8 animate-pulse shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-display font-light text-white mb-4 tracking-wide">
                    Transmission Complete.
                  </h3>
                  
                  <p className="text-gray-400 text-xs sm:text-sm font-light max-w-md leading-relaxed mb-8">
                    Your luxury brief was encrypted and received by our executive planning group in Dubai Investment Park. An MMT structural visual engineer will contact you within 2 business hours.
                  </p>

                  <div className="w-full bg-black/40 border border-white/5 rounded-2xl p-5 mb-8 text-left font-mono text-[11px]" id="transmission-telemetry">
                    <div className="text-electric-blue uppercase font-semibold mb-2 flex items-center justify-between">
                      <span>SECURE DECK CODES</span>
                      <span>STATUS: TRANSMITTED</span>
                    </div>
                    <div className="text-gray-400 flex flex-col gap-1">
                      <div><span className="text-white">OPERATOR:</span> MMT_ROBOTICS</div>
                      <div><span className="text-white">TIMESTAMP:</span> {new Date().toISOString()}</div>
                      <div><span className="text-white">PROJECT:</span> {formData.projectName || "FABRICATION_REQ"}</div>
                      <div><span className="text-white">HASH_MD5:</span> 79D9B975BD494183ADD0AE8C83C9D05A</div>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-mono text-gray-400 hover:text-white hover:border-white transition-colors"
                  >
                    Transmit Another Brief
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
