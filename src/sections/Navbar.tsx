import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { DynamicIcon } from "@/components/DynamicIcon";

const navLinks = [
  { id: "inicio", label: "Início" },
  { id: "sistemas", label: "Sistemas" },
  { id: "privacidade", label: "Privacidade" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 h-14 transition-all duration-300 ${
        scrolled ? "bg-[#005A8C]/95 backdrop-blur-md" : "bg-[#005A8C]"
      }`}
      style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-4 lg:px-5vw">
        {/* Logo */}
        <div className="flex items-center bg-white rounded-lg px-3 py-1.5 gap-3">
          <img
            src="/logo-ati.png"
            alt="ATI Tocantins"
            className="h-7 w-auto object-contain shrink-0"
          />
          <div className="w-px h-6 bg-gray-300 shrink-0" />
          <img
            src="/logo-governo.png"
            alt="Governo do Tocantins"
            className="h-7 w-auto object-contain shrink-0"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 relative">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm transition-opacity duration-200 ${
                activeSection === link.id
                  ? "text-white opacity-100"
                  : "text-white opacity-70 hover:opacity-100"
              }`}
            >
              {link.label}
            </button>
          ))}
          {/* Active underline */}
          <div
            className="absolute bottom-[-18px] h-0.5 bg-[#C49A2C] rounded-full transition-transform duration-300 ease-out"
            style={{
              width: "40px",
              transform: `translateX(${
                navLinks.findIndex((l) => l.id === activeSection) * 85
              }px)`,
            }}
          />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <DynamicIcon name="Menu" size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#005A8C] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-left text-sm py-2 px-3 rounded-lg transition-colors duration-200 ${
                activeSection === link.id
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
