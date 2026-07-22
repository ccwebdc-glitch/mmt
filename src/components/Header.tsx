import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, ArrowUpRight, PhoneCall } from "lucide-react";

interface NavItem {
  label: string;
  targetId: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", targetId: "home" },
  { label: "About", targetId: "about" },
  { label: "Technology", targetId: "technology" },
  { label: "Why MMT", targetId: "why-mmt" },
  { label: "Facility", targetId: "facility" },
  { label: "Day & Night", targetId: "day-night" },
  { label: "MMT vs Others", targetId: "mmt-comparison" },
  { label: "Projects", targetId: "projects" },
  { label: "Presence", targetId: "presence" },
  { label: "Contact", targetId: "contact" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple intersection detection for active state
      const scrollPos = window.scrollY + 120;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.targetId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.targetId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#f5f0e6]/95 backdrop-blur-md border-b border-[#0090e7]/20 py-4 shadow-sm"
          : "bg-transparent border-b border-[#1b2234]/10 py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 flex items-center justify-between">
        {/* Dynamic Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="hover:opacity-90 transition-opacity"
          id="header-logo-link"
        >
          <Logo className="h-9 sm:h-11" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1" id="desktop-nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.targetId}
              href={`#${item.targetId}`}
              onClick={(e) => handleNavClick(e, item.targetId)}
              className={`px-3 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-300 relative font-medium ${
                activeSection === item.targetId
                  ? "text-electric-blue font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.targetId && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-electric-blue shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
              )}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="group px-5 py-2.5 rounded-full border border-mmt-blue/30 text-xs uppercase tracking-widest font-semibold text-white bg-mmt-blue/10 hover:bg-mmt-blue hover:border-mmt-blue hover:text-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(10,92,255,0.1)]"
            id="header-cta"
          >
            Inquire Now
            <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 top-[73px] bg-dark-graphite z-45 flex flex-col justify-between p-8 border-t border-white/5 animate-fade-in"
          id="mobile-nav-menu"
        >
          <div className="flex flex-col gap-5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.targetId}
                href={`#${item.targetId}`}
                onClick={(e) => handleNavClick(e, item.targetId)}
                className={`text-lg uppercase tracking-[0.2em] font-medium py-1 border-b border-white/5 ${
                  activeSection === item.targetId
                    ? "text-electric-blue pl-2"
                    : "text-gray-400"
                } transition-all`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-white/5 pt-8">
            <div className="text-gray-500 text-xs uppercase tracking-widest">Global Headquarters</div>
            <div className="text-white text-sm">Dubai Investment Park 1, Dubai, UAE</div>
            <a
              href="tel:+97148853123"
              className="text-electric-blue text-sm font-semibold flex items-center gap-2 mt-2"
            >
              <PhoneCall className="h-4 w-4" />
              +971 4 885 3123
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
