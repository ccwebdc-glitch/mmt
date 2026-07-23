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
  { label: "Work Slide", targetId: "work-showcase" },
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
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-2 xl:gap-4 flex-nowrap w-full">
        {/* Dynamic Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="hover:opacity-90 transition-opacity shrink-0 flex items-center"
          id="header-logo-link"
        >
          <Logo className="h-8 sm:h-9 xl:h-10 w-auto" />
        </a>

        {/* Desktop Navigation - Strictly One Line */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar py-1" id="desktop-nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.targetId}
              href={`#${item.targetId}`}
              onClick={(e) => handleNavClick(e, item.targetId)}
              className={`px-2 xl:px-3 py-1.5 text-[11px] xl:text-xs uppercase tracking-[0.12em] transition-all duration-300 relative font-medium shrink-0 font-display ${
                activeSection === item.targetId
                  ? "text-[#0090e7] font-semibold"
                  : "text-[#1b2234] hover:text-[#f25c05]"
              }`}
            >
              {item.label}
              {activeSection === item.targetId && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#0090e7] via-[#f25c05] to-[#d81b60] rounded-full shadow-[0_0_8px_rgba(0,144,231,0.5)]" />
              )}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="group px-4 xl:px-5 py-2 rounded-full border border-orange-400/50 text-[11px] xl:text-xs uppercase tracking-widest font-bold text-white bg-gradient-to-r from-[#f25c05] via-orange-500 to-[#e04800] hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap shadow-[0_4px_15px_rgba(242,92,5,0.35)] hover:shadow-[0_4px_25px_rgba(242,92,5,0.55)] font-display shrink-0"
            id="header-cta"
          >
            <span>Inquire Now</span>
            <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-white" />
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#1b2234] hover:text-[#f25c05] transition-colors shrink-0"
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
