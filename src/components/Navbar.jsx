import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import RyetekLogo from "./RyetekLogo";

const LINKS = [
  { to: "/capabilities", label: "Capabilities" },
  { to: "/wearguard", label: "WearGuard" },
  { to: "/engineering", label: "Engineering" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-xl shadow-black/30 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div
        className={`container-xl flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"
        }`}
      >
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
          <RyetekLogo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-xs font-semibold uppercase tracking-wider transition-colors ${
                  isActive ? "text-teal-400" : "text-white/85 hover:text-teal-300"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="tel:+61437433890"
            className="flex items-center gap-2 rounded-sm bg-teal-500 px-4 py-2 text-xs font-bold text-navy-950 transition-all duration-300 hover:bg-teal-400"
          >
            <Phone size={14} /> +61 437 433 890
          </a>
        </nav>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 lg:hidden">
          <nav className="container-xl flex flex-col gap-1 py-4">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded px-2 py-3 text-base font-medium uppercase tracking-wide ${
                    isActive ? "text-teal-400" : "text-white/85"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="tel:+61437433890"
              className="mt-2 flex items-center justify-center gap-2 rounded-sm bg-teal-500 px-4 py-3 text-sm font-semibold text-navy-950"
            >
              <Phone size={15} /> +61 437 433 890
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
