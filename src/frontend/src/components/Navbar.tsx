import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services" },
  { label: "STORY", href: "#about" },
  { label: "GALLERY", href: "#gallery" },
  { label: "TEAM", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F6F2ED]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNav("#home")}
          data-ocid="nav.link"
          className="font-serif text-2xl font-bold tracking-wide"
          style={{ color: scrolled ? "#B98C86" : "#F6F2ED" }}
        >
          Vicky's
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.label}
              onClick={() => handleNav(link.href)}
              data-ocid="nav.link"
              className="text-sm font-semibold tracking-widest transition-colors duration-200 hover:text-rose-gold"
              style={{ color: scrolled ? "#1F1A18" : "rgba(246,242,237,0.85)" }}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNav("#contact")}
            data-ocid="nav.primary_button"
            className="btn-rose px-6 py-2 rounded-full text-sm font-bold tracking-widest"
          >
            BOOK ONLINE
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          data-ocid="nav.toggle"
          aria-label="Toggle menu"
          style={{ color: scrolled ? "#1F1A18" : "#F6F2ED" }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F6F2ED]/98 backdrop-blur-md border-t border-[#EAD3CF]">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => handleNav(link.href)}
                data-ocid="nav.link"
                className="text-sm font-semibold tracking-widest text-left text-[#1F1A18] hover:text-[#B98C86] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNav("#contact")}
              data-ocid="nav.primary_button"
              className="btn-rose px-6 py-3 rounded-full text-sm font-bold tracking-widest self-start"
            >
              BOOK ONLINE
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
