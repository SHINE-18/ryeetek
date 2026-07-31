import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Users, FileCheck2, ClipboardList, CheckCircle2 } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import SectionHeading from "../components/SectionHeading";
import SEO from "../components/SEO";

const OFFER = [
  "Concept engineering, feasibility review and duty definition",
  "3D layouts, GA drawings, equipment interfaces and manufacturing documents",
  "Product development, prototype support and test planning",
  "Vendor coordination, selective manufacturing support and quality checkpoints",
  "Commissioning inputs, manuals, spares planning and lifecycle support",
];

const HIGHLIGHTS = [
  { icon: Search, title: "Fewer Blind Spots", body: "Mechanical, thermal, control and maintenance requirements are considered together." },
  { icon: Users, title: "Buyer Confidence", body: "Clear project thinking and documented inputs support better decision-making." },
  { icon: FileCheck2, title: "Buildable Detail", body: "Designs are developed around fabrication, assembly, transport and site installation realities." },
  { icon: ClipboardList, title: "Commercial Clarity", body: "Scope boundaries, assumptions and project inputs are stated early to reduce disputes." },
];

const STAGES = [
  { step: "Concept", body: "Feasibility review, duty definition and early options assessment." },
  { step: "Design", body: "3D layouts, GA drawings and equipment interface documentation." },
  { step: "Build support", body: "Vendor coordination, manufacturing support and quality checkpoints." },
  { step: "Commission", body: "FAT planning, commissioning inputs, manuals and spares planning." },
];

export default function Engineering() {
  return (
    <div>
      <SEO
        title="Custom Industrial Equipment Engineering & R&D Australia | Ryetek"
        description="Concept engineering, 3D design, product development, vendor coordination, FAT and documentation for buildable industrial equipment and plant systems."
        path="/engineering"
      />
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block">
          <PhotoPlaceholder motif="desk" image="/images/engineering-rd.png" className="h-full w-full" label="Engineering team" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/50 to-transparent" />
        </div>
        <div className="container-xl relative">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-teal-400">
              09 / Capabilities
            </p>
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.02] text-white sm:text-5xl lg:text-6xl">
              Engineering, R&D &<br />
              <span className="text-teal-400">Product Development</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
              From concept to commissioned equipment, with practical engineering support at
              every stage. Industrial buyers often need a partner who can turn a requirement
              into a buildable, maintainable and commercially sensible system.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker="What Ryetek can offer"
              title="Coordinated"
              accent="end-to-end"
              description="Ryetek coordinates concept development, 3D design, manufacturing support, FAT planning, documentation and commissioning inputs as one connected process."
            />
            <ul className="mt-7 space-y-3">
              {OFFER.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-navy-700/80">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-teal-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative overflow-hidden border-l-4 border-teal-500 bg-gradient-to-br from-teal-50/50 to-white p-6 shadow-sm border-t border-r border-b border-teal-100 transition-all hover:-translate-y-1 hover:shadow-md hover:border-teal-400"
                >
                  <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-teal-500/10 p-2.5 text-teal-600 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-bold text-navy-950 uppercase tracking-wide">{h.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-navy-700/80">{h.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>      {/* Distinct Light Process & CTA Section */}
      <section className="section-pad relative overflow-hidden bg-gradient-to-b from-paper-50 to-paper-100 border-t border-b border-line-200">
        <div className="container-xl relative">
          <SectionHeading
            kicker="How a project moves"
            title="Concept through"
            accent="to commissioning"
          />

          {/* 4 Process Cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STAGES.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative overflow-hidden border-t-4 border-teal-500 bg-white p-6 shadow-sm border-r border-b border-l border-line-200 transition-all hover:-translate-y-1 hover:shadow-md hover:border-teal-400"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-bold text-teal-600">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold uppercase tracking-wide text-navy-950">
                  {s.step}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-700/80">{s.body}</p>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-12 border-t border-line-200 pt-8">
            <h3 className="mb-6 font-display text-xl font-bold uppercase text-navy-950">
              Engineering & R&D FAQs
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <details className="group border border-line-200 bg-white p-5 transition-all [&[open]]:border-teal-400 [&[open]]:shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-xs uppercase tracking-wide text-navy-950 hover:text-teal-600">
                  <span>Can Ryetek develop equipment for another OEM?</span>
                  <span className="ml-2 text-teal-500 font-bold transition-transform group-open:rotate-180">↓</span>
                </summary>
                <p className="mt-3 text-xs leading-relaxed text-navy-700/80 pt-2.5 border-t border-line-100">
                  Potentially. The commercial model, confidentiality, ownership of background and project IP, design responsibility and manufacturing support should be agreed at the start.
                </p>
              </details>
              <details className="group border border-line-200 bg-white p-5 transition-all [&[open]]:border-teal-400 [&[open]]:shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-xs uppercase tracking-wide text-navy-950 hover:text-teal-600">
                  <span>Do you provide only drawings?</span>
                  <span className="ml-2 text-teal-500 font-bold transition-transform group-open:rotate-180">↓</span>
                </summary>
                <p className="mt-3 text-xs leading-relaxed text-navy-700/80 pt-2.5 border-t border-line-100">
                  The recommended service begins with duty and concept definition. Drawing-only work can create risk when the process basis and interfaces have not been established.
                </p>
              </details>
            </div>
          </div>

          {/* Bottom Integrated CTA Card */}
          <div className="mt-12 overflow-hidden border-l-4 border-teal-500 bg-white p-8 shadow-md border-r border-t border-b border-line-200 sm:p-10 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="mb-2 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-teal-700">
                Turn Ideas Into Infrastructure
              </span>
              <h2 className="font-display text-2xl font-bold uppercase leading-tight text-navy-950 sm:text-3xl lg:text-4xl">
                Have a requirement that needs turning into a <span className="text-teal-600">buildable system?</span>
              </h2>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex shrink-0 items-center gap-2.5 bg-teal-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-navy-950 transition-all hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20 lg:mt-0"
            >
              Talk to our engineers <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
