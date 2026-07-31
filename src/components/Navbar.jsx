import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const LINKS = [
  { to: "/capabilities", label: "Capabilities" },
  { to: "/wearguard", label: "WearGuard" },
  { to: "/engineering", label: "Engineering & R&D" },
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
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-navy-950/95 backdrop-blur shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="container-xl flex h-16 items-center justify-between lg:h-20">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-bold tracking-wide text-white">
            RYE<span className="text-teal-400">TEK</span>
          </span>
          <span className="hidden border-l border-white/20 pl-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 sm:block">
            Industrial Systems
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-wide transition-colors ${
                  isActive ? "text-teal-400" : "text-white/85 hover:text-teal-300"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="tel:+61437433890"
            className="flex items-center gap-2 rounded-sm bg-teal-500 px-4 py-2 text-sm font-semibold text-navy-950 transition-colors hover:bg-teal-400"
          >
            <Phone size={15} /> +61 437 433 890
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
