import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Technical Skills" },
  { to: "soft-skills", label: "Soft Skills" },
  { to: "projects", label: "Projects" },
  { to: "certificates", label: "Certificates" },
  { to: "resume", label: "Resume" },
  { to: "education", label: "Education" },
  { to: "location", label: "Location" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => document.getElementById(l.to));
      const scrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(links[i].to);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="font-display text-2xl font-bold text-gradient">
          B
        </button>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.to}
              onClick={() => scrollTo(l.to)}
              className={`nav-link text-sm font-medium pb-1 ${
                activeSection === l.to ? "active" : ""
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-glass-border/10"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <button
                  key={l.to}
                  onClick={() => scrollTo(l.to)}
                  className={`nav-link text-sm font-medium pb-1 text-left ${
                    activeSection === l.to ? "active" : ""
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
