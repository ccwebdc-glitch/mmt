import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const FAQ_DATA = [
    {
      question: "What makes MMT's printing technology different from conventional digital printing?",
      answer: "At MMT, we do not simply print graphics—we engineer visual experiences. Unlike standard digital printers that use transient solvent or UV inks on standard vinyl, MMT utilizes custom Robotic Paint Drum Printers to apply premium acrylic paint formulations directly onto high-tension PVC substrates. This creates a highly saturated, chemically inert, and weatherproof color layer that retains its brilliance far longer than conventional alternatives."
    },
    {
      question: "What is the outdoor durability of MMT's large-format displays?",
      answer: "Our displays are engineered specifically to withstand the demanding climate of the GCC and MENA region. MMT's proprietary Acrylic Paint Technology provides outstanding resistance against intense UV radiation, high temperatures, humidity, and dust. We offer an industry-leading up to 4 Years Fade Resistance Warranty, during which our graphics maintain at least 95% of their original color brilliance and depth."
    },
    {
      question: "How does the Double-Sided Backlit Printing Technology work?",
      answer: "Conventional single-sided backlit billboards often appear washed out or dull once internal illumination is activated. MMT's proprietary Double-Sided Backlit Printing Technology prints the identical image on both the front and reverse sides of a semi-translucent coated substrate, using computer-aligned registration. When illuminated at night, both layers work in perfect harmony to reproduce identical color intensity, deep blacks, and remarkable visual contrast, ensuring your campaign remains vibrant 24 hours a day."
    },
    {
      question: "What is Radio Frequency (RF) Welding, and why is it used?",
      answer: "Large-format displays often require multiple substrate panels to be joined together. Standard heat welding or adhesive taping can create weak joints and visible dark lines that disrupt the graphic. MMT uses advanced Radio Frequency (RF) Welding, which passes high-frequency electromagnetic energy through the overlapping vinyl. This excites the molecules and fuses the layers together at a molecular level, creating a seam that is virtually invisible and stronger than the parent material itself."
    },
    {
      question: "Can MMT handle customized dimensions for unique installations?",
      answer: "Yes. Our robotic printing systems and advanced finishing departments are fully optimized to handle custom dimensions, oversized projects, and complex shapes. We can manufacture seamless graphics in sizes up to 7 metres × 14 metres or 18 metres in a single production cycle, and join panels using RF welding to cover skyscrapers, airport terminals, shopping mall facades, and landmark city hoardings of any scale."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-dark-graphite relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full radial-glow opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20" id="faq-header">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-electric-blue mb-3">
            09 // FAQ INTEL
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-light text-white tracking-tight leading-none mb-6">
            Everything You Need <br />
            <span className="text-electric-blue font-medium">
              to Know About Our Technology.
            </span>
          </h2>
          <div className="h-[2px] w-24 bg-mmt-blue shadow-[0_0_8px_rgba(0,71,255,0.8)] mb-6" />
          <p className="text-gray-400 font-sans font-light max-w-xl leading-relaxed text-xs sm:text-sm">
            Empirical answers to critical technical questions regarding our manufacturing processes, material durability, and warranty parameters.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4" id="faq-list">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "bg-black border-electric-blue/30 shadow-[0_0_15px_rgba(0,229,255,0.05)]"
                    : "bg-black/30 border-white/5 hover:border-white/10 hover:bg-black/20"
                }`}
                id={`faq-item-${idx}`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left transition-colors"
                >
                  <span className={`text-sm sm:text-base font-display font-light tracking-wide transition-colors ${
                    isOpen ? "text-electric-blue" : "text-white"
                  }`}>
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg border transition-all ${
                    isOpen
                      ? "bg-electric-blue/10 border-electric-blue/30 text-electric-blue"
                      : "bg-white/5 border-white/10 text-gray-400"
                  }`}>
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {/* Animated Answer height drawer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-white/5" : "max-h-0"
                  }`}
                >
                  <div className="px-6 sm:px-8 py-5 sm:py-6 text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
