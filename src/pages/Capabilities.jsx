import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import SEO from "../components/SEO";
import { capabilities } from "../data/capabilities";

const HERO_SLIDES = [
  { image: "/images/HEROSECTION/asphalt5.png", motif: "silos" },
  { image: "/images/HEROSECTION/bitumen5.png", motif: "tanks" },
  { image: "/images/HEROSECTION/process-systems.png", motif: "tanks" },
  { image: "/images/HEROSECTION/material-handling.png", motif: "conveyor" },
  { image: "/images/HEROSECTION/recycling-systems.png", motif: "conveyor" },
  { image: "/images/HEROSECTION/automation5.png", motif: "control" },
  { image: "/images/HEROSECTION/engineering-rd.png", motif: "desk" },
  { image: "/images/HEROSECTION/EnginerringR&D.png", motif: "desk" },
  { image: "/images/HEROSECTION/ryetek_real_engineering_hq_1785489693920.png", motif: "desk" },
];

function CapabilityCardSlideshow({ capId, capTitle, defaultMotif, slides, defaultImage }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlides = slides && slides.length > 0 ? slides : [
    { title: capTitle, subtitle: "Engineered System Package", image: defaultImage, tag: "Standard Scope" }
  ];

  useEffect(() => {
    if (isPaused || activeSlides.length <= 1) return;
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % activeSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, activeSlides.length]);

  const current = activeSlides[slideIdx] || activeSlides[0];

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-line-200 bg-navy-950 shadow-md transition-all hover:shadow-xl group/slide"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover/slide:scale-105"
          >
            <PhotoPlaceholder
              motif={defaultMotif}
              image={current.image || defaultImage}
              className="h-full w-full object-cover"
              imgStyle={current.imageStyle}
              cropRegion={current.cropRegion}
              label={current.title}
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay for Readable Text */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-transparent pointer-events-none z-[5]" />

        {/* Slide Title & Subtitle Caption */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
          <h4 className="font-display text-lg font-bold uppercase leading-tight text-white drop-shadow-sm">
            {current.title}
          </h4>
          {current.subtitle && (
            <p className="mt-0.5 text-xs text-teal-300/90 font-medium">
              {current.subtitle}
            </p>
          )}
        </div>

      </div>

    </div>
  );
}

export default function Capabilities() {
  const { hash } = useLocation();
  const [selectedCap, setSelectedCap] = useState("");
  const [heroSlide, setHeroSlide] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);

  useEffect(() => {
    if (isHeroPaused) return;
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHeroPaused]);

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

  const handlePillClick = (e, id) => {
    e.preventDefault();
    setSelectedCap(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <SEO
        title="Industrial Plant Equipment & Systems | Ryetek Capabilities"
        description="Asphalt, concrete, bitumen storage, thermal, bulk material handling, processing, recycling, automation and engineering capabilities for Australian industrial projects."
        path="/capabilities"
      />
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div 
          className="absolute inset-y-0 right-0 hidden w-[68%] lg:block overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsHeroPaused(true)}
          onMouseLeave={() => setIsHeroPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={heroSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out hover:scale-105"
            >
              <PhotoPlaceholder
                motif={HERO_SLIDES[heroSlide].motif}
                image={HERO_SLIDES[heroSlide].image}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 via-45% to-transparent z-10" />
        </div>
        <div className="container-xl relative z-20">
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

          {/* 3 Vertical Columns (4-4-2 Flow: Downward order, Max-W Adjusted) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-w-3xl w-full">
            {[
              capabilities.slice(0, 4),
              capabilities.slice(4, 8),
              capabilities.slice(8, 10),
            ].map((colList, colIdx) => {
              const shortNames = {
                "concrete-asphalt": "Concrete & Asphalt",
                "bitumen-storage": "Bitumen Storage",
                "process-systems": "Process Systems",
                "thermal-systems": "Thermal Systems",
                "material-handling": "Material Handling",
                "material-processing": "Material Processing",
                "recycling": "Recycling Systems",
                "automation": "Automation & Controls",
                "engineering-rd": "Engineering & R&D",
                "machine-parts": "Machine Parts",
              };
              return (
                <div key={colIdx} className="flex flex-col gap-2.5">
                  {colList.map((c) => (
                    <a
                      key={c.id}
                      href={`#${c.id}`}
                      onClick={(e) => handlePillClick(e, c.id)}
                      className={`inline-flex h-9 items-center justify-start rounded-full border pl-4 pr-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all text-left ${
                        selectedCap === c.id
                          ? "border-teal-400 bg-teal-500/25 text-teal-300 shadow-md shadow-teal-500/20"
                          : "border-white/20 bg-navy-900/90 text-white hover:border-teal-400 hover:bg-teal-500/20 hover:text-teal-300"
                      }`}
                    >
                      <span className="w-6 shrink-0 text-teal-400 font-mono font-bold text-[11px]">{c.number}</span>
                      <span className="truncate">{shortNames[c.id] || c.title}</span>
                    </a>
                  ))}
                </div>
              );
            })}
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
                  <CapabilityCardSlideshow
                    capId={cap.id}
                    capTitle={`${cap.title} ${cap.accent}`}
                    defaultMotif={cap.motif}
                    slides={cap.slides}
                    defaultImage={cap.image}
                  />
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
                    <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] text-navy-950 sm:text-4xl lg:text-5xl">
                      {cap.title} <span className="text-teal-600">{cap.accent}</span>
                    </h2>
                    <p className="mt-3 text-base font-semibold text-navy-950 leading-snug">{cap.summary}</p>
                    <p className="mt-2.5 text-sm leading-relaxed text-navy-800">
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
                            <h3 className="text-sm font-bold uppercase tracking-wide">{group.title}</h3>
                          </div>
                          <ul className="grid gap-2.5 sm:grid-cols-1">
                            {group.items.map((item) => (
                              <li
                                key={item}
                                className="group/item flex items-start gap-2.5 text-xs sm:text-sm text-navy-800 transition-colors hover:text-navy-950"
                              >
                                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-teal-500 transition-transform group-hover/item:scale-110" />
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
                      <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600">
                        Key Advantage
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-navy-950 transition-colors group-hover:text-teal-600">
                      {h.title}
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-navy-700/80">{h.body}</p>
                  </motion.div>
                ))}
              </div>

              {/* FAQ Accordion Section */}
              {cap.faqs && cap.faqs.length > 0 && (
                <div className="mt-8 border-t border-line-200 pt-6">
                  <details className="group border border-line-200 bg-white p-4 shadow-sm transition-all [&[open]]:border-teal-400">
                    <summary className="flex cursor-pointer items-center justify-between font-bold text-xs sm:text-sm uppercase tracking-wider text-navy-950 hover:text-teal-600">
                      <span className="flex items-center gap-2">
                        <span>Frequently Asked Questions</span>
                        <span className="rounded-full bg-teal-500/10 px-2.5 py-0.5 text-[11px] text-teal-700 font-bold lowercase tracking-normal">
                          {cap.faqs.length} questions
                        </span>
                      </span>
                      <span className="text-teal-500 font-bold transition-transform group-open:rotate-180">↓</span>
                    </summary>
                    <div className="mt-4 space-y-3 pt-4 border-t border-line-100">
                      {cap.faqs.map((faq, fIdx) => (
                        <details
                          key={fIdx}
                          className="group/item border border-line-200 bg-paper-50 p-4 transition-all [&[open]]:border-teal-400 [&[open]]:bg-white"
                        >
                          <summary className="flex cursor-pointer items-center justify-between font-semibold text-xs sm:text-sm text-navy-950 hover:text-teal-600">
                            <span>{faq.q}</span>
                            <span className="ml-2 text-teal-500 font-bold transition-transform group-open/item:rotate-180">↓</span>
                          </summary>
                          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-navy-700/80 pt-2 border-t border-line-100">
                            {faq.a}
                          </p>
                        </details>
                      ))}
                    </div>
                  </details>
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
