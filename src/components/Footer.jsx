import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import RyetekLogo from "./RyetekLogo";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sec) => {
    setOpenSection(openSection === sec ? null : sec);
  };

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-xl py-10 lg:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Col */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/">
              <RyetekLogo showSubtitle={false} />
            </Link>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/70">
              Industrial systems for Australian projects, specializing in concrete & asphalt equipment,
              thermal systems, bulk materials handling, controls & automation.
            </p>
          </div>

          {/* Capabilities Col (Accordion on mobile) */}
          <div className="border-b border-white/10 pb-4 sm:border-0 sm:pb-0">
            <button
              onClick={() => toggleSection("capabilities")}
              className="flex w-full items-center justify-between py-2 text-left text-xs font-semibold uppercase tracking-widest text-teal-400 sm:cursor-default sm:py-0"
            >
              <span>Capabilities</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 sm:hidden ${
                  openSection === "capabilities" ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`space-y-2 text-xs pt-3 sm:block sm:pt-4 ${
                openSection === "capabilities" ? "block" : "hidden"
              }`}
            >
              <li><Link to="/capabilities#concrete-asphalt" className="hover:text-white transition-colors">Concrete & Asphalt Plants</Link></li>
              <li><Link to="/capabilities#bitumen-storage" className="hover:text-white transition-colors">Bitumen Storage Systems</Link></li>
              <li><Link to="/capabilities#thermal-systems" className="hover:text-white transition-colors">Thermal Systems</Link></li>
              <li><Link to="/capabilities#material-handling" className="hover:text-white transition-colors">Material Handling & Storage</Link></li>
              <li><Link to="/capabilities#automation" className="hover:text-white transition-colors">Automation & Digital Controls</Link></li>
              <li><Link to="/capabilities" className="text-teal-300 font-semibold hover:text-teal-200">View all 10 →</Link></li>
            </ul>
          </div>

          {/* Company Col (Accordion on mobile) */}
          <div className="border-b border-white/10 pb-4 sm:border-0 sm:pb-0">
            <button
              onClick={() => toggleSection("company")}
              className="flex w-full items-center justify-between py-2 text-left text-xs font-semibold uppercase tracking-widest text-teal-400 sm:cursor-default sm:py-0"
            >
              <span>Company</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 sm:hidden ${
                  openSection === "company" ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`space-y-2 text-xs pt-3 sm:block sm:pt-4 ${
                openSection === "company" ? "block" : "hidden"
              }`}
            >
              <li><Link to="/engineering" className="hover:text-white transition-colors">Engineering & Product R&D</Link></li>
              <li><Link to="/wearguard" className="hover:text-white transition-colors">WearGuard Wear Parts</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact & Enquiries</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="py-2 text-xs font-semibold uppercase tracking-widest text-teal-400 sm:py-0">
              Contact
            </h4>
            <ul className="mt-3 space-y-2.5 text-xs sm:mt-4">
              <li className="flex items-center gap-2">
                <Globe size={14} className="text-teal-400 shrink-0" /> ryetek.com.au
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-teal-400 shrink-0" /> sales@ryetek.com.au
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-teal-400 shrink-0" /> +61 437 433 890
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-teal-400" /> Warner, Brisbane QLD 4500
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-xl flex flex-col items-center justify-between gap-3 text-center text-xs text-white/40 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Ryetek Industrial Systems. All rights reserved.</p>
          <p className="text-[11px]">Engineered for Performance · Brisbane, Australia</p>
        </div>
      </div>
    </footer>
  );
}
