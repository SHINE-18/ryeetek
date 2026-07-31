import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import SEO from "../components/SEO";
import { capabilities } from "../data/capabilities";

export default function Capabilities() {
  const { hash } = useLocation();
  const [selectedCap, setSelectedCap] = useState("");

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
      setSelectedCap(hash.replace("#", ""));
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const handleSelectChange = (e) => {
    const val = e.target.value;
    if (val) {
      setSelectedCap(val);
      const el = document.getElementById(val);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <SEO
        title="Industrial Plant Equipment & Systems | Ryetek Capabilities"
        description="Asphalt, concrete, bitumen storage, thermal, bulk material handling, processing, recycling, automation and engineering capabilities for Australian industrial projects."
        path="/capabilities"
      />
      <section className="bg-navy-950 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
            Capabilities
          </p>
          <h1 className="font-display max-w-3xl text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Ten engineered capability areas,
            <span className="text-teal-400"> one industrial partner</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/60">
            Select a capability from the menu below to jump straight to that equipment area.
          </p>

          {/* Quick Dropdown Menu for Mobile */}
          <div className="mt-6 max-w-md lg:hidden">
            <div className="relative">
              <select
                value={selectedCap}
                onChange={handleSelectChange}
                className="w-full appearance-none rounded-lg border border-teal-500/40 bg-white/10 px-4 py-3 pr-10 text-xs font-bold uppercase tracking-wider text-teal-300 backdrop-blur-md outline-none transition-all focus:border-teal-400 focus:bg-white/15"
              >
                <option value="" className="bg-navy-950 text-white">Select a Capability Area...</option>
                {capabilities.map((c) => (
                  <option key={c.id} value={c.id} className="bg-navy-950 text-white">
                    {c.number} — {c.title} {c.accent}
                  </option>
                ))}
              </select>
              <ChevronDown size={18} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-teal-400" />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {capabilities.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                onClick={() => setSelectedCap(c.id)}
                className={`group inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                  selectedCap === c.id
                    ? "border-teal-400 bg-teal-500/20 text-teal-300"
                    : "border-white/15 bg-white/5 text-white/70 hover:border-teal-400 hover:bg-teal-500/10 hover:text-teal-300"
                }`}
              >
                {c.number} · {c.title} {c.accent}
              </a>
            ))}
          </div>
        </div>
      </section>

      {capabilities.map((cap, idx) => {
        const Icon = cap.icon;
        const imageFirst = idx % 2 === 0;
        return (
          <section
            id={cap.id}
            key={cap.id}
            className={`scroll-mt-20 section-pad ${idx % 2 === 0 ? "bg-white" : "bg-paper-100"}`}
          >
            <div className="container-xl">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
                <motion.div
                  initial={{ opacity: 0, x: imageFirst ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="relative w-full overflow-hidden rounded-lg border border-line-200 bg-white shadow-md transition-all hover:shadow-lg">
                    <PhotoPlaceholder
                      motif={cap.motif}
                      image={cap.image}
                      className="aspect-[4/3] w-full object-cover"
                      label={`${cap.title} ${cap.accent}`}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col justify-center ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1 text-teal-600">
                      <Icon size={16} strokeWidth={2} />
                      <span className="text-[11px] font-bold uppercase tracking-widest">
                        {cap.number} / Capabilities
                      </span>
                    </div>
                    <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] text-navy-950 sm:text-4xl">
                      {cap.title} <span className="text-teal-600">{cap.accent}</span>
                    </h2>
                    <p className="mt-3 text-base font-semibold text-navy-900 leading-snug">{cap.summary}</p>
                    <p className="mt-2.5 text-xs leading-relaxed text-navy-700/80">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-4">
                    {cap.groups.map((group) => {
                      const GroupIcon = group.icon;
                      return (
                        <div
                          key={group.title}
                          className="w-full rounded-lg border border-line-200 bg-white p-5 shadow-sm transition-all hover:border-teal-400 hover:shadow-md"
                        >
                          <div className="mb-3 flex items-center gap-2 border-b border-line-200 pb-2.5 text-navy-950">
                            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-teal-500/10 text-teal-600">
                              <GroupIcon size={16} strokeWidth={2} />
                            </div>
                            <h3 className="text-xs font-bold uppercase tracking-wide">{group.title}</h3>
                          </div>
                          <ul className="grid gap-2.5 sm:grid-cols-1">
                            {group.items.map((item) => (
                              <li
                                key={item}
                                className="group/item flex items-start gap-2.5 text-xs text-navy-700/85 transition-colors hover:text-navy-950"
                              >
                                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-teal-500 transition-transform group-hover/item:scale-110" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Highlight Cards with Top Border & Hover Indicator */}
              <div className="mt-10 grid gap-4 border-t border-line-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
                {cap.highlights.map((h, i) => (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="group relative overflow-hidden border border-line-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-400 hover:shadow-md hover:shadow-teal-900/5"
                  >
                    {/* Top gradient highlight bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600 opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600">
                        Key Advantage
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-navy-950 transition-colors group-hover:text-teal-600">
                      {h.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-navy-700/70">{h.body}</p>
                  </motion.div>
                ))}
              </div>

              {/* FAQ Accordion Section */}
              {cap.faqs && cap.faqs.length > 0 && (
                <div className="mt-8 border-t border-line-200 pt-6">
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-navy-950">
                    Frequently Asked Questions
                  </h4>
                  <div className="space-y-3">
                    {cap.faqs.map((faq, fIdx) => (
                      <details
                        key={fIdx}
                        className="group border border-line-200 bg-white p-4 transition-all [&[open]]:border-teal-400 [&[open]]:shadow-sm"
                      >
                        <summary className="flex cursor-pointer items-center justify-between font-semibold text-xs text-navy-950 hover:text-teal-600">
                          <span>{faq.q}</span>
                          <span className="ml-2 text-teal-500 font-bold transition-transform group-open:rotate-180">↓</span>
                        </summary>
                        <p className="mt-2.5 text-xs leading-relaxed text-navy-700/80 pt-2 border-t border-line-100">
                          {faq.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        );
      })}

      <section className="section-pad bg-paper-100 border-t border-line-200">
        <div className="container-xl">
          <div className="overflow-hidden border-l-4 border-teal-500 bg-white p-8 shadow-md border-r border-t border-b border-line-200 sm:p-10 lg:flex lg:items-center lg:justify-between">
            <div>
              <span className="mb-2 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-teal-700">
                Get In Touch
              </span>
              <h2 className="font-display max-w-lg text-2xl font-bold uppercase leading-tight text-navy-950 sm:text-3xl">
                Not sure which capability <span className="text-teal-600">fits your project?</span>
              </h2>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex shrink-0 items-center gap-2.5 bg-teal-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-all hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20 lg:mt-0"
            >
              Talk it through with us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
