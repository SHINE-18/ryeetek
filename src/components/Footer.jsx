import { Link } from "react-router-dom";
import { Globe, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-xl grid gap-10 py-14 lg:grid-cols-4">
        <div>
          <span className="font-display text-2xl font-bold tracking-wide text-white">
            RYE<span className="text-teal-400">TEK</span>
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Industrial systems for Australian projects, specializing in concrete & asphalt equipment,
            thermal systems, bulk materials handling, controls & automation and engineered
            industrial packages.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal-400">
            Capabilities
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/capabilities#concrete-asphalt" className="hover:text-white">Concrete & Asphalt Plant Solutions</Link></li>
            <li><Link to="/capabilities#bitumen-storage" className="hover:text-white">Bitumen Storage Systems</Link></li>
            <li><Link to="/capabilities#thermal-systems" className="hover:text-white">Thermal Systems</Link></li>
            <li><Link to="/capabilities#material-handling" className="hover:text-white">Material Handling & Storage</Link></li>
            <li><Link to="/capabilities#automation" className="hover:text-white">Automation & Digital Controls</Link></li>
            <li><Link to="/capabilities" className="text-teal-300 hover:text-teal-200">View all →</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal-400">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/engineering" className="hover:text-white">Engineering, R&D & Product Development</Link></li>
            <li><Link to="/wearguard" className="hover:text-white">WearGuard Wear Parts</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact & Enquiries</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal-400">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Globe size={15} className="text-teal-400" /> ryetek.com.au
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-teal-400" /> sales@ryetek.com.au
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-teal-400" /> +61 437 433 890
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-teal-400" /> Warner, Brisbane QLD 4500
            </li>
          </ul>
        </div>
      </div>

      <div className="container-xl flex justify-center pb-6 text-xs text-white/40">
        <p>© {new Date().getFullYear()} Ryetek Industrial Systems. Engineered for performance.</p>
      </div>
    </footer>
  );
}
