import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Wrench,
  TrendingDown,
  CheckCircle2,
  Gauge,
  Flame,
  Filter,
  Layers,
  Sparkles,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Layers3,
  Cog,
  RotateCw,
} from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import SectionHeading from "../components/SectionHeading";
import SEO from "../components/SEO";

const BENEFITS = [
  { icon: ShieldCheck, title: "Built for extreme wear conditions", body: "Advanced materials engineered to perform in the harshest applications." },
  { icon: Clock, title: "Longer service life", body: "Maximize uptime and productivity with solutions that last longer." },
  { icon: Wrench, title: "Lower maintenance", body: "Reduce maintenance intervals and operating costs with superior wear resistance." },
  { icon: TrendingDown, title: "Lower total ownership cost", body: "Engineered for value through extended life, efficiency and reliability." },
];

const ENGINEERING = [
  {
    title: "Exact OEM Match & Improvement",
    body: "Dimensionally identical to OEM spec, with upgraded metallurgy higher alloy, to increase wear life in high-abrasion zones.",
  },
  {
    title: "Short Lead Times & Local Holding",
    body: "Consignment stock arrangements and Australian buffer inventory available for high-turnover items. Emergency dispatches within 24–48 hours.",
  },
  {
    title: "Low Minimum Orders",
    body: "Order as few as 1 to 10 units without massive upfront costs. Ideal for testing, repairs, or niche applications. We scale to your needs.",
  },
  {
    title: "Metallurgical Traceability",
    body: "Material test reports (MTRs), hardness testing and chemical composition data provided with critical wear part shipments.",
  },
];

// ── REUSABLE INFINITE MARQUEE PILLS ──────────────────────────────────────────
const MarqueePills = ({ items, icon: Icon, bgClass = "bg-paper-50", sectionBg = "from-white", speed = 35 }) => {
  // Quadruple items so the loop never runs out of content on wide screens
  const quadItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className="relative mt-12 w-full overflow-hidden py-1">
      {/* Subtle edge fade overlays */}
      <div className={`pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-24 bg-gradient-to-r ${sectionBg} to-transparent`} />
      <div className={`pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-24 bg-gradient-to-l ${sectionBg} to-transparent`} />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
        className="flex w-max gap-3"
      >
        {quadItems.map((tag, idx) => (
          <span
            key={idx}
            className={`inline-flex items-center gap-1.5 rounded-full border border-navy-950/15 ${bgClass} px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-navy-950 shadow-sm whitespace-nowrap`}
          >
            {Icon && <Icon size={13} className="text-amber-500 shrink-0" />}
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const PRODUCT_LINES = [

  {
    id: "rotary-dryers",
    name: "Dryer Drum Wear Components",
    badge: "Dryer Range",
    body: "Sprockets and trunnion wheels, drum internals and discharge flights, thrust and trunnion wheels for any brand, any era. Heavy-duty trunnion wheels and rollers, dryer rings, girth gears and machined components, heat-treated to meet rigorous performance requirements.",
    items: ["Trunnion wheels & rollers", "Internal flighting & veeing flights", "Thrust roller assemblies", "Girth gear & pinion sets", "Seal rings & housing components"],
    image: "/images/materials/product-lines-dryer-drum.png",
    motif: "drum",
  },
  {
    id: "mixers",
    name: "Pugmill & Mixer Wear Parts",
    badge: "Mixer Range",
    body: "Premium mixer components engineered for maximum wear life including mixer liners, paddles, tips and other critical wear parts in Ni-Hard or high-chrome premium castings, with smart arm-protection covers to shield softer cast mixer arms from direct abrasion.",
    items: ["Mixer tips, paddles & arms", "Ni-Hard & high-chrome liner plates", "Arm protection guards & covers", "Discharge door seals & liners", "Shaft sleeve protectors"],
    image: "/images/materials/product-lines-pugmill-mixer.png",
    motif: "gears",
  },
  {
    id: "custom",
    name: "Reverse-Engineered & Custom Wear Components",
    badge: "Custom Range",
    body: "We reverse-engineer (design to prototype) even low-volume parts for freedom from paying premium for OEM monopolies. Every part is custom designed to outlast the original, not just match its dimensions.",
    items: ["3D laser scanning & reverse engineering", "Alloy selection for specific abrasive duties", "Pattern making & trial castings", "Small-run & prototype production", "Hardness & metallurgy reporting"],
    image: "/images/materials/product-lines-custom-wear.png",
    motif: "parts",
  },
];

// ── DRYER COMPONENTS SLIDESHOW DATA ──────────────────────────────────────────
const DRYER_SLIDES = [
  {
    id: "dryer-combo",
    title: "Dryer Components Suite",
    subtitle: "Complete Dryer Drives, Trunnions & Internals",
    image: "/images/materials/dryer-combo.png",
    tag: "4K Studio Overview",
  },
  {
    id: "rotary-dryer",
    title: "Rotary Dryer Drum System",
    subtitle: "High-Efficiency Drying & Thermal Transfer",
    image: "/images/rotary-dryer.png",
    tag: "Complete Drum System",
  },
  {
    id: "drum-flights",
    title: "Drum Internals & CFD Flights",
    subtitle: "Internal Lifter Flights & Veeing Flighting",
    image: "/images/wearguard-callout.png",
    tag: "8K Flighting System",
  },
  {
    id: "trunnion-wheels",
    title: "Thrust & Trunnion Wear Liners",
    subtitle: "Machined Cylindrical Rollers & Bearing Blocks",
    image: "/images/wearguard-parts.png",
    tag: "Machined Castings",
  },
];

// ── FILTER COMPONENTS SLIDESHOW DATA ─────────────────────────────────────────
const FILTER_SLIDES = [
  {
    id: "baghouse-tower",
    title: "Green Industrial Baghouse Filtration Tower",
    subtitle: "Complete Baghouse Filtration System & Pulse-Jet Extraction",
    image: "/images/Ryetek bag house filter.png",
    tag: "Baghouse Tower",
  },
  {
    id: "filter-combo",
    title: "Filter Component Suite",
    subtitle: "Complete Baghouse Filtration System",
    image: "/images/materials/filter-combo.png",
    tag: "High-Efficiency System",
  },
  {
    id: "filter-bags",
    title: "Nomex® & Meta-Aramid Bags",
    subtitle: "400–650 gsm High-Temp Filtration",
    image: "/images/materials/filter-bags.png",
    tag: "High-Temp Resistance",
  },
  {
    id: "filter-cages",
    title: "Stainless Steel Filter Cages",
    subtitle: "Heavy-Duty Wire Cages & Venturis",
    image: "/images/materials/filter-cages.png",
    tag: "Corrosion Resistant",
  },
  {
    id: "exhaust-fan",
    title: "Exhaust Fan & Blower Impeller",
    subtitle: "Wear-Lined Scroll Housing & Wheels",
    image: "/images/materials/exhaust-fan.png",
    tag: "High-Extraction Fan",
  },
];

// ── BUCKET ELEVATOR COMPONENTS SLIDESHOW DATA ────────────────────────────────
const ELEVATOR_SLIDES = [
  {
    id: "elevator-combo",
    title: "Elevator & Conveyor Suite",
    subtitle: "Complete Drive Sprockets, Drag Chains & Buckets",
    image: "/images/materials/elevator-combo.png",
    tag: "System Overview",
  },
  {
    id: "elevator-buckets",
    title: "Deep Steel Elevator Buckets",
    subtitle: "Reinforced Wear Lips & High-Tensile Chain Mounts",
    image: "/images/materials/elevator-buckets.png",
    tag: "Elevator Elements",
  },
  {
    id: "drive-sprockets",
    title: "Drive Sprockets & Traction Wheels",
    subtitle: "Segmented Bolt-On Teeth & Hardened Rim Wheels",
    image: "/images/materials/drive-sprockets.png",
    tag: "Drive Components",
  },
  {
    id: "material-handling",
    title: "Bucket Elevator Plant System",
    subtitle: "Heavy-Duty Bulk Handling & Conveying Towers",
    image: "/images/materials/elevator-plant.png",
    tag: "High-Capacity Elevators",
  },
];

// ── MIXER COMPONENTS SLIDESHOW DATA ──────────────────────────────────────────
const MIXER_SLIDES = [
  {
    id: "mixer-paddle-arms",
    title: "Mixer Paddle Arms",
    subtitle: "Ni-Hard & High-Chrome Cast Arms",
    image: "/images/materials/mixer-paddle-arms.png",
    tag: "High-Impact Castings",
  },
  {
    id: "arm-protection",
    title: "Smart Arm-Protection Covers",
    subtitle: "Replaceable Split-Half Shield Guards",
    image: "/images/materials/arm-protection.png",
    tag: "Shaft Protection",
  },
  {
    id: "premium-castings",
    title: "High-Chrome Mixer Tips",
    subtitle: "Wearcast 600 / Ultra 800 Alloy Tips",
    image: "/images/materials/premium-castings.png",
    tag: "600–800 HBW Hardness",
  },
  {
    id: "sacrificial-inserts",
    title: "Mixer Wear Blocks & Liners",
    subtitle: "Replaceable Sacrificial Wear Liners",
    image: "/images/materials/sacrificial-inserts.png",
    tag: "Quick Replacement",
  },
];

// ── FLOW & WEAR LINERS SLIDESHOW DATA ─────────────────────────────────────────
const FLOW_SLIDES = [
  {
    id: "wear-steel-liners",
    title: "Wear Steel Chute Liners",
    subtitle: "Quenched & Tempered P400/P500 Liners",
    image: "/images/materials/wear-steel.png",
    tag: "Chute Protection",
  },
  {
    id: "hardfaced-impact",
    title: "Hardfaced Impact Plates",
    subtitle: "58–65 HRC Chromium-Carbide Matrix",
    image: "/images/materials/hardfaced-plate.png",
    tag: "High Velocity Impact",
  },
  {
    id: "ceramic-liners",
    title: "Alumina Ceramic Wear Liners",
    subtitle: "92% & 95% High-Purity Ceramic Tiles",
    image: "/images/materials/ceramic-liners.png",
    tag: "Sliding Abrasion",
  },
  {
    id: "sacrificial-bars",
    title: "Sacrificial Inserts & Wear Bars",
    subtitle: "Replaceable Bolt-In & Weld-On Runner Bars",
    image: "/images/materials/sacrificial-inserts.png",
    tag: "Quick Replacement",
  },
];

// ── MATERIAL SLIDESHOW ITEMS (Clean Studio Product Photos Only) ──────────────
const MATERIAL_SLIDES = [
  {
    id: "wear-steel",
    title: "Wear Steel",
    subtitle: "400–500 BHN Quenched & Tempered",
    image: "/images/materials/wear-steel.png",
    tag: "Abrasion Resistant",
    desc: "High-strength alloy steel plate (WearGuard P400/P450/P500). Delivers exceptional structural strength and sliding abrasion resistance.",
  },
  {
    id: "hardfaced-plate",
    title: "Hardfaced Plate",
    subtitle: "58–65 HRC Chromium-Carbide Overlay",
    image: "/images/materials/hardfaced-plate.png",
    tag: "Extreme Erosion",
    desc: "EnduraCast Z-Core hardfaced plates with dense chromium-carbide weld overlay matrix for severe scraping and fine particle velocity erosion.",
  },
  {
    id: "premium-castings",
    title: "Premium Castings",
    subtitle: "600–800 HBW / 62 HRC Alloy",
    image: "/images/materials/premium-castings.png",
    tag: "High-Chrome Castings",
    desc: "Precision-cast Wearcast 600 / Ultra 800 mixer paddle arms, tips, liners, and arm protection guards.",
  },
  {
    id: "ceramic-liners",
    title: "Ceramic Liners",
    subtitle: "92–95% Alumina Hexagonal Tiles",
    image: "/images/materials/ceramic-liners.png",
    tag: "9 Mohs Scale",
    desc: "High-density alumina ceramic tile matrix bonded to heavy steel backing. Impervious to fine sand, slurry, and pneumatic wear.",
  },
  {
    id: "rubber-ceramic",
    title: "Rubber-Ceramic",
    subtitle: "Shock-Absorbing Matrix Panel",
    image: "/images/materials/rubber-ceramic.png",
    tag: "Impact + Abrasion",
    desc: "Alumina ceramic blocks embedded in energy-absorbing elastomeric rubber. Absorbs heavy rock impact while ceramic face resists sliding abrasion.",
  },
  {
    id: "polymer-liners",
    title: "Polymer Liners",
    subtitle: "UHMW-PE & Polyurethane",
    image: "/images/materials/polymer-liners.png",
    tag: "Zero Material Sticking",
    desc: "Ultra-High Molecular Weight Polyethylene liners providing ultra-low friction to eliminate material sticking and rat-holing.",
  },
  {
    id: "sacrificial-inserts",
    title: "Sacrificial Inserts",
    subtitle: "Replaceable Wear Bars & Blocks",
    image: "/images/materials/sacrificial-inserts.png",
    tag: "Quick 15-Min Swap",
    desc: "Bolt-in and weld-on sacrificial wear bars and runner strips designed to protect structural frames and simplify maintenance.",
  },
];

export default function WearGuard() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [dryerSlideIdx, setDryerSlideIdx] = useState(0);
  const [isDryerPaused, setIsDryerPaused] = useState(false);

  const [filterSlideIdx, setFilterSlideIdx] = useState(0);
  const [isFilterPaused, setIsFilterPaused] = useState(false);

  const [elevatorSlideIdx, setElevatorSlideIdx] = useState(0);
  const [isElevatorPaused, setIsElevatorPaused] = useState(false);

  const [mixerSlideIdx, setMixerSlideIdx] = useState(0);
  const [isMixerPaused, setIsMixerPaused] = useState(false);

  const [flowSlideIdx, setFlowSlideIdx] = useState(0);
  const [isFlowPaused, setIsFlowPaused] = useState(false);

  // Auto-play Material Technologies slideshow
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % MATERIAL_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Auto-play Dryer Components slideshow
  useEffect(() => {
    if (isDryerPaused) return;
    const timer = setInterval(() => {
      setDryerSlideIdx((prev) => (prev + 1) % DRYER_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isDryerPaused]);

  // Auto-play Filter Components slideshow
  useEffect(() => {
    if (isFilterPaused) return;
    const timer = setInterval(() => {
      setFilterSlideIdx((prev) => (prev + 1) % FILTER_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isFilterPaused]);

  // Auto-play Elevator Components slideshow
  useEffect(() => {
    if (isElevatorPaused) return;
    const timer = setInterval(() => {
      setElevatorSlideIdx((prev) => (prev + 1) % ELEVATOR_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isElevatorPaused]);

  // Auto-play Mixer Components slideshow
  useEffect(() => {
    if (isMixerPaused) return;
    const timer = setInterval(() => {
      setMixerSlideIdx((prev) => (prev + 1) % MIXER_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isMixerPaused]);

  // Auto-play Flow & Wear Liners slideshow
  useEffect(() => {
    if (isFlowPaused) return;
    const timer = setInterval(() => {
      setFlowSlideIdx((prev) => (prev + 1) % FLOW_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isFlowPaused]);

  return (
    <div>
      <SEO
        title="WearGuard Wear Parts & Castings | Ryetek Industrial Systems"
        description="Custom-engineered wear parts, liners, castings and dryer components for concrete, asphalt and bulk material handling plants. Tailored alloys, fast global delivery."
        path="/wearguard"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a1628] pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[65%] lg:block">
          <PhotoPlaceholder motif="parts" image="/images/wearguard-hero-option2.png" className="h-full w-full object-cover" label="WearGuard Cast Alloy Liner" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/85 via-45% to-transparent z-10" />
        </div>
        <div className="container-xl relative z-20">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
              A Ryetek Industrial Systems product line
            </p>

            {/* 3D Metallic Emblem Header */}
            <div className="relative my-3 inline-block rounded-xl border-2 border-amber-400/80 bg-gradient-to-b from-navy-900/90 via-navy-950 to-navy-950 px-6 py-4.5 shadow-[0_12px_35px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,215,0,0.5)] backdrop-blur-md">
              {/* Metallic Top Reflection Line */}
              <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
              
              <h1 className="font-display text-4xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] sm:text-5xl lg:text-6xl">
                WEAR<span className="bg-clip-text bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 text-transparent">GUARD</span>
              </h1>

              <div className="mt-2 flex items-center justify-between gap-3 border-t border-amber-500/40 pt-2">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
                <p className="font-display text-xs font-extrabold uppercase tracking-[0.35em] text-amber-300 drop-shadow-sm sm:text-sm">
                  OUTLAST THE GRIND
                </p>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-amber-400/60 to-transparent" />
              </div>
            </div>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
              End wear nightmares with custom-engineered wear parts, tailored alloys,
              small-batch flexibility and fast global delivery — for dryer drums, mixers, filters and
              any process equipment across construction, concrete and asphalt industries.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-sm bg-amber-400 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-navy-950 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-amber-300 transition-transform duration-300 ease-out -translate-x-full group-hover:translate-x-0" />
                <span className="relative z-10 flex items-center gap-2.5">
                  <span>Request a wear audit</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <SectionHeading
            kicker="Engineered solutions. Built to last."
            title="WearGuard delivers advanced"
            accent="wear solutions"
            accentColor="amber"
            description="Extended component life, reduced downtime, and lower total cost of ownership in the world's toughest industries."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative overflow-hidden border border-line-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-amber-400 hover:shadow-md hover:shadow-amber-900/5"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  <Icon className="text-amber-500" size={26} strokeWidth={1.7} />
                  <h3 className="mt-4 text-sm font-semibold text-navy-950">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-800">{b.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom engineering */}
      <section className="section-pad bg-paper-100">
        <div className="container-xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-600">
              Custom engineering
            </p>
            <h2 className="font-display text-3xl font-bold uppercase leading-tight text-navy-950 sm:text-4xl lg:text-5xl">
              Engineered to suit your needs
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-700/80">
              Tired of downtime, OEM overcharges, and low-wear life parts? WearGuard offers
              free wear audits, tailored alloy selection and a partner approach to solving
              your toughest wear challenges with confidence.
            </p>
          </motion.div>
          <div className="grid gap-4">
            {ENGINEERING.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group border border-line-200 border-l-2 border-l-amber-400 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-l-4 hover:border-l-amber-500 hover:shadow-md hover:shadow-amber-900/5"
              >
                <h3 className="font-display text-base font-extrabold uppercase tracking-wider text-amber-600">{e.title}</h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-navy-700/75">{e.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: Dryer Drum Components & Retrofits with Studio Slideshow & Marquee Pills */}
      <section id="dryer-drums" className="scroll-mt-20 section-pad bg-white">
        <div className="container-xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
            
            {/* Dryer Slideshow Container (Left Side) */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div
                onMouseEnter={() => setIsDryerPaused(true)}
                onMouseLeave={() => setIsDryerPaused(false)}
                className="relative w-full overflow-hidden rounded-lg border border-line-200 bg-white shadow-md aspect-[4/3] group transition-all duration-500 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/15 cursor-pointer"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={dryerSlideIdx}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src={DRYER_SLIDES[dryerSlideIdx].image}
                      alt={DRYER_SLIDES[dryerSlideIdx].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Active Dryer Slide Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between z-10 pointer-events-none">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-navy-950/80 px-2 py-0.5 rounded border border-amber-400/30">
                          {DRYER_SLIDES[dryerSlideIdx].tag}
                        </span>
                        <h4 className="font-display text-lg font-bold uppercase mt-1 text-white">
                          {DRYER_SLIDES[dryerSlideIdx].title}
                        </h4>
                        <p className="text-xs text-white/75 font-mono">
                          {DRYER_SLIDES[dryerSlideIdx].subtitle}
                        </p>
                      </div>

                      {/* Manual Slide Dots */}
                      <div className="flex items-center gap-1.5 pointer-events-auto">
                        {DRYER_SLIDES.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setDryerSlideIdx(i)}
                            className={`h-2 rounded-full transition-all ${
                              dryerSlideIdx === i ? "w-6 bg-amber-400" : "w-2 bg-white/40 hover:bg-white"
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Side Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                — Any brand. Any era. No excuses.
              </p>
              <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] text-navy-950 sm:text-4xl lg:text-5xl">
                Dryer Drum Components <span className="text-amber-500">& Retrofits</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-navy-800 sm:text-sm">
                We don't just rebuild or supply dryer drums; we engineer better drying performance.
                WearGuard retrofits combine CFD-analyzed flighting, optimized material curtains and
                wear-reducing technologies to improve heat transfer, moisture removal, retention time and mixing
                while lowering fuel, power and energy consumption.
              </p>

              <div className="mt-6 group border border-line-200 border-l-2 border-l-amber-400 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-l-4 hover:border-l-amber-500 hover:shadow-md hover:shadow-amber-900/5">
                <h4 className="font-display text-base font-extrabold uppercase tracking-wider text-amber-600">
                  Engineering Assistance & Support
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-navy-700/75">
                  At WearGuard, you receive more than high-quality replacement parts. You gain access to global specialists in dryer engineering who bring the knowledge, analysis and practical support required to diagnose operating challenges, identify the right upgrades and improve the efficiency, reliability and performance of your drying system.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "Dryer Drum Sprockets & Trunnion",
                body: "Heavy-duty trunnion wheels and rollers, dryer rings, girth gears and machined components, heat-treated to meet rigorous performance requirements.",
              },
              {
                title: "Drum Internals & Discharge Flights",
                body: "All types of dryer drum internal flights, dam plates, exit chutes, discharge flights, RAP inlets and covers in high wear-resistant alloy steels.",
              },
              {
                title: "Thrust & Trunnion Wheels",
                body: "Available in machined and cast options, complete with bearings and assemblies to enable quick change-out and lower downtime.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-line-200 bg-white p-5 shadow-sm transition-all hover:border-amber-400 hover:shadow-md"
              >
                <h3 className="text-xs font-bold uppercase tracking-wide text-navy-950">{card.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-700/75">{card.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Running Marquee Pills for Dryer Components */}
          {/* <MarqueePills
            items={[
              "Trunnion Wheels & Rollers",
              "CFD Lifter Flights",
              "Girth Gears & Pinions",
              "Thrust Roller Assemblies",
              "Discharge Flights",
              "Seal Rings & Bearings",
            ]}
            icon={RotateCw}
            bgClass="bg-paper-50"
            sectionBg="from-white"
            speed={35}
          /> */}
        </div>
      </section>

      {/* SECTION 2: Filter Components with Studio Slideshow & Running Marquee Pills */}
      <section id="filter-components" className="scroll-mt-20 section-pad bg-paper-100 border-t border-line-200">
        <div className="container-xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:order-1"
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                — Premium performing filter elements
              </p>
              <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] text-navy-950 sm:text-4xl lg:text-5xl">
                Filter <span className="text-amber-500">Components</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-navy-800 sm:text-sm">
                We don't just supply filter bags and cages; we engineer cleaner airflow and dependable
                filtration. WearGuard offers Nomex® and meta-aramid bags in 400–650 gsm and other options,
                stainless steel snap rings, precision cages with high-temperature resistant treatments, and
                corrosion-resistant stainless-steel alternatives for demanding applications.
              </p>

              <div className="mt-6 group border border-line-200 border-l-2 border-l-amber-400 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-l-4 hover:border-l-amber-500 hover:shadow-md hover:shadow-amber-900/5">
                <h4 className="font-display text-base font-extrabold uppercase tracking-wider text-amber-600">
                  Stainless Steel Protection
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-navy-700/75">
                  For highly corrosive, humid and abrasive conditions, opt for the custom designed stainless steel cages, filter covers & plenum plates to enjoy long trouble free life.
                </p>
              </div>
            </motion.div>

            {/* Filter Components Slideshow Container */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center lg:order-2"
            >
              <div
                onMouseEnter={() => setIsFilterPaused(true)}
                onMouseLeave={() => setIsFilterPaused(false)}
                className="relative w-full overflow-hidden rounded-lg border border-line-200 bg-white shadow-md aspect-[4/3] group transition-all duration-500 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/15 cursor-pointer"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={filterSlideIdx}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src={FILTER_SLIDES[filterSlideIdx].image}
                      alt={FILTER_SLIDES[filterSlideIdx].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Active Filter Slide Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between z-10 pointer-events-none">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-navy-950/80 px-2 py-0.5 rounded border border-amber-400/30">
                          {FILTER_SLIDES[filterSlideIdx].tag}
                        </span>
                        <h4 className="font-display text-lg font-bold uppercase mt-1 text-white">
                          {FILTER_SLIDES[filterSlideIdx].title}
                        </h4>
                        <p className="text-xs text-white/75 font-mono">
                          {FILTER_SLIDES[filterSlideIdx].subtitle}
                        </p>
                      </div>

                      {/* Manual Slide Dots */}
                      <div className="flex items-center gap-1.5 pointer-events-auto">
                        {FILTER_SLIDES.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setFilterSlideIdx(i)}
                            className={`h-2 rounded-full transition-all ${
                              filterSlideIdx === i ? "w-6 bg-amber-400" : "w-2 bg-white/40 hover:bg-white"
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Running Marquee Pills for Filter Components */}
          {/* <MarqueePills
            items={[
              "Nomex® Filter Bags",
              "Stainless Steel Cages",
              "Exhaust Fan Impellers",
              "Meta-Aramid Bags",
              "Blower Scroll Housings",
              "Plenum Plates & Snap Rings",
            ]}
            icon={Filter}
            bgClass="bg-white"
            sectionBg="from-paper-100"
            speed={35}
          /> */}
        </div>
      </section>

      {/* SECTION 3: Mixer Components & Shafts with Studio Slideshow & Running Marquee Pills */}
      <section id="mixer-shafts" className="scroll-mt-20 section-pad bg-white border-t border-line-200">
        <div className="container-xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
            
            {/* Mixer Slideshow Container (Left Side) */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div
                onMouseEnter={() => setIsMixerPaused(true)}
                onMouseLeave={() => setIsMixerPaused(false)}
                className="relative w-full overflow-hidden rounded-lg border border-line-200 bg-white shadow-md aspect-[4/3] group transition-all duration-500 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/15 cursor-pointer"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mixerSlideIdx}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src={MIXER_SLIDES[mixerSlideIdx].image}
                      alt={MIXER_SLIDES[mixerSlideIdx].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Active Mixer Slide Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between z-10 pointer-events-none">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-navy-950/80 px-2 py-0.5 rounded border border-amber-400/30">
                          {MIXER_SLIDES[mixerSlideIdx].tag}
                        </span>
                        <h4 className="font-display text-lg font-bold uppercase mt-1 text-white">
                          {MIXER_SLIDES[mixerSlideIdx].title}
                        </h4>
                        <p className="text-xs text-white/75 font-mono">
                          {MIXER_SLIDES[mixerSlideIdx].subtitle}
                        </p>
                      </div>

                      {/* Manual Slide Dots */}
                      <div className="flex items-center gap-1.5 pointer-events-auto">
                        {MIXER_SLIDES.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setMixerSlideIdx(i)}
                            className={`h-2 rounded-full transition-all ${
                              mixerSlideIdx === i ? "w-6 bg-amber-400" : "w-2 bg-white/40 hover:bg-white"
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Side Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                — Any brand. Any era. No excuses.
              </p>
              <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] text-navy-950 sm:text-4xl lg:text-5xl">
                Mixer Components <span className="text-amber-500">& Shafts</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-navy-800 sm:text-sm">
                Upgrade your mixer shafts to high performance and low maintenance with WearGuard's fully covered shaft design with High-chrome castings built for extreme abrasion resistance and long service life.
              </p>

              <div className="mt-6 group border border-line-200 border-l-2 border-l-amber-400 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-l-4 hover:border-l-amber-500 hover:shadow-md hover:shadow-amber-900/5">
                <h4 className="font-display text-base font-extrabold uppercase tracking-wider text-amber-600">
                  Smart Arm-Protection Covers
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-navy-700/75">
                  WearGuard supplies premium mixer components engineered for maximum wear life. Smart arm-protection covers shield softer cast mixer arms from direct abrasion, extending component life and reducing replacement frequency.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "Mixer Paddle Arms",
                body: "Engineered for maximum impact resistance and wear protection in the harshest conditions.",
              },
              {
                title: "Arm Protection",
                body: "Smart shields that protect mixer arms from abrasion, extending component life and reducing maintenance.",
              },
              {
                title: "Mixer Tips",
                body: "Engineered for maximum impact resistance and wear protection in the harshest conditions.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-line-200 bg-paper-50 p-6 shadow-sm transition-all hover:border-amber-400 hover:bg-white hover:shadow-md"
              >
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy-950">{card.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-700/75">{card.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Running Marquee Pills for Mixer Components */}
          {/* <MarqueePills
            items={[
              "Mixer Paddle Arms",
              "Arm Protection Covers",
              "Ni-Hard Liner Plates",
              "High-Chrome Tips",
              "Mixer Shaft Sleeves",
              "Discharge Door Liners",
            ]}
            icon={Cog}
            bgClass="bg-paper-50"
            sectionBg="from-white"
            speed={35}
          /> */}

          {/* Core Product lines grid */}
          <div className="mt-14 pt-10 border-t border-line-200">
            <h3 className="mb-6 font-display text-xl font-bold uppercase text-navy-950">
              Core WearGuard Product Lines
            </h3>
            <div className="grid gap-6 lg:grid-cols-3">
              {PRODUCT_LINES.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="group relative overflow-hidden border border-line-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-amber-400 hover:shadow-md hover:shadow-amber-900/5"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <PhotoPlaceholder motif={p.motif} image={p.image} className="aspect-[16/10] w-full object-cover" label={p.badge} />
                  <div className="p-6">
                    <h4 className="font-display text-base font-bold uppercase text-navy-950">
                      {p.name}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-navy-800">{p.body}</p>
                    <ul className="mt-4 space-y-1.5 border-t border-line-100 pt-3">
                      {p.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-navy-700/80">
                          <CheckCircle2 size={13} className="text-amber-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Bucket Elevators & Drag Conveyors with Studio Slideshow & Running Marquee Pills */}
      <section id="elevators-conveyors" className="scroll-mt-20 section-pad bg-paper-100 border-t border-line-200">
        <div className="container-xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
            
            {/* Elevator Slideshow Container (Left Side) */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div
                onMouseEnter={() => setIsElevatorPaused(true)}
                onMouseLeave={() => setIsElevatorPaused(false)}
                className="relative w-full overflow-hidden rounded-lg border border-line-200 bg-white shadow-md aspect-[4/3] group transition-all duration-500 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/15 cursor-pointer"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={elevatorSlideIdx}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src={ELEVATOR_SLIDES[elevatorSlideIdx].image}
                      alt={ELEVATOR_SLIDES[elevatorSlideIdx].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Active Elevator Slide Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between z-10 pointer-events-none">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-navy-950/80 px-2 py-0.5 rounded border border-amber-400/30">
                          {ELEVATOR_SLIDES[elevatorSlideIdx].tag}
                        </span>
                        <h4 className="font-display text-lg font-bold uppercase mt-1 text-white">
                          {ELEVATOR_SLIDES[elevatorSlideIdx].title}
                        </h4>
                        <p className="text-xs text-white/75 font-mono">
                          {ELEVATOR_SLIDES[elevatorSlideIdx].subtitle}
                        </p>
                      </div>

                      {/* Manual Slide Dots */}
                      <div className="flex items-center gap-1.5 pointer-events-auto">
                        {ELEVATOR_SLIDES.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setElevatorSlideIdx(i)}
                            className={`h-2 rounded-full transition-all ${
                              elevatorSlideIdx === i ? "w-6 bg-amber-400" : "w-2 bg-white/40 hover:bg-white"
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Side Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                — Long-life components for elevating, conveying & loading
              </p>
              <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] text-navy-950 sm:text-4xl lg:text-5xl">
                Bucket Elevators & <span className="text-amber-500">Drag Conveyors</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-navy-800 sm:text-sm">
                WearGuard delivers engineered protection for bucket elevators, conveyors and loading
                zones exposed to continuous abrasive and impact. Our range includes elevator buckets, reinforced
                lips, wear strips, chain and sprocket components, conveyor skirts and replaceable impact
                elements. Designed for long service life and fast maintenance, these components protect critical
                equipment, reduce unplanned stoppages and support dependable material flow across demanding
                asphalt, aggregate, cement and industrial handling applications.
              </p>

              <div className="mt-6 group border border-line-200 border-l-2 border-l-amber-400 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-l-4 hover:border-l-amber-500 hover:shadow-md hover:shadow-amber-900/5">
                <h4 className="font-display text-base font-extrabold uppercase tracking-wider text-amber-600">
                  Chain, Sprockets & Wear Components
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-navy-700/75">
                  Engineered chain-related parts, sprocket wear components and replaceable strips help maintain alignment, dependable drive performance and longer service intervals.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Running Marquee Pills for Elevator Components */}
          {/* <MarqueePills
            items={[
              "Elevator Buckets",
              "Drive Sprockets",
              "Traction Wheels",
              "Forged Drag Chains",
              "Conveyor Skirt Liners",
              "Impact Flights",
            ]}
            icon={Layers3}
            bgClass="bg-white"
            sectionBg="from-paper-100"
            speed={35}
          /> */}
        </div>
      </section>

      {/* SECTION 5: Flow & Wear Liners */}
      <section id="wear-liners" className="scroll-mt-20 section-pad bg-white border-t border-line-200">
        <div className="container-xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                — Engineered wear protection for every critical transfer zone
              </p>
              <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] text-navy-950 sm:text-4xl lg:text-5xl">
                Control the Flow. <span className="text-amber-500">Outlast the Impact.</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-navy-800 sm:text-sm">
                WearGuard protects the high-impact zones where bulk materials change direction, accelerate and strike equipment surfaces. Our engineered chute, hopper and transfer-point solutions include liners, skirt systems, impact plates, rock-box components and bolt-in wear assemblies. Each system is tailored to material size, velocity, moisture and abrasion severity, helping reduce structural damage, simplify replacement, extend service intervals and keep critical material-handling points operating with fewer interruptions, greater reliability and lower maintenance costs.
              </p>

              <div className="mt-6 group border border-line-200 border-l-2 border-l-amber-400 bg-paper-50 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-l-4 hover:border-l-amber-500 hover:shadow-md hover:shadow-amber-900/5">
                <h4 className="font-display text-base font-extrabold uppercase tracking-wider text-amber-600">
                  Application-Matched Liner Systems
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-navy-700/75">
                  Mixer Liners · Hopper Liners · Bin Liners · Skirt Liners · Impact Plates · Rock-Box Components · Wear Blocks
                </p>
              </div>
            </motion.div>

            {/* Flow & Wear Liners Slideshow Container */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div
                onMouseEnter={() => setIsFlowPaused(true)}
                onMouseLeave={() => setIsFlowPaused(false)}
                className="relative w-full overflow-hidden rounded-lg border border-line-200 bg-white shadow-md aspect-[4/3] group transition-all duration-500 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/15 cursor-pointer"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={flowSlideIdx}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src={FLOW_SLIDES[flowSlideIdx].image}
                      alt={FLOW_SLIDES[flowSlideIdx].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Active Flow Slide Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between z-10 pointer-events-none">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-navy-950/80 px-2 py-0.5 rounded border border-amber-400/30">
                          {FLOW_SLIDES[flowSlideIdx].tag}
                        </span>
                        <h4 className="font-display text-lg font-bold uppercase mt-1 text-white">
                          {FLOW_SLIDES[flowSlideIdx].title}
                        </h4>
                        <p className="text-xs text-white/75 font-mono">
                          {FLOW_SLIDES[flowSlideIdx].subtitle}
                        </p>
                      </div>

                      {/* Manual Slide Dots */}
                      <div className="flex items-center gap-1.5 pointer-events-auto">
                        {FLOW_SLIDES.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setFlowSlideIdx(i)}
                            className={`h-2 rounded-full transition-all ${
                              flowSlideIdx === i ? "w-6 bg-amber-400" : "w-2 bg-white/40 hover:bg-white"
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Marquee Pills */}
          {/* <MarqueePills
            items={[
              "Mixer Liners",
              "Hopper Liners",
              "Bin Liners",
              "Skirt Liners",
              "Impact Plates",
              "Rock-Box Components",
              "Wear Blocks",
            ]}
            icon={CheckCircle2}
            bgClass="bg-paper-50"
            sectionBg="from-white"
            speed={35}
          /> */}
        </div>
      </section>

      {/* ── SECTION 6: MATERIAL TECHNOLOGIES — Studio Product Photos Slideshow + Running Pills ── */}
      <section id="material-technologies" className="scroll-mt-20 section-pad bg-paper-100 border-t border-line-200">
        <div className="container-xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
            
            {/* Left Side Slideshow Container */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="relative w-full overflow-hidden rounded-lg border border-line-200 bg-white shadow-md aspect-[4/3] group transition-all duration-500 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/15 cursor-pointer"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slideIdx}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src={MATERIAL_SLIDES[slideIdx].image}
                      alt={MATERIAL_SLIDES[slideIdx].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Active Slide Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between z-10 pointer-events-none">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-navy-950/80 px-2 py-0.5 rounded border border-amber-400/30">
                          {MATERIAL_SLIDES[slideIdx].tag}
                        </span>
                        <h4 className="font-display text-lg font-bold uppercase mt-1 text-white">
                          {MATERIAL_SLIDES[slideIdx].title}
                        </h4>
                        <p className="text-xs text-white/75 font-mono">
                          {MATERIAL_SLIDES[slideIdx].subtitle}
                        </p>
                      </div>

                      {/* Manual Slide Dots */}
                      <div className="flex items-center gap-1.5 pointer-events-auto">
                        {MATERIAL_SLIDES.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setSlideIdx(i)}
                            className={`h-2 rounded-full transition-all ${
                              slideIdx === i ? "w-6 bg-amber-400" : "w-2 bg-white/40 hover:bg-white"
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Content Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                — Application-engineered materials for longer service life
              </p>
              <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] text-navy-950 sm:text-4xl lg:text-5xl">
                Material <span className="text-amber-500">Technologies</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-navy-800 sm:text-sm">
                WearGuard combines advanced materials with application-specific engineering to solve difficult wear problems. Solutions include abrasive-resistant steel, hardfaced plates, premium castings, ceramic liners, rubber-ceramic systems, polymers and low-friction materials. Replaceable sacrificial strips and inserts protect structural components while simplifying maintenance. By matching material technology to impact, abrasion, temperature, corrosion and flow conditions, we deliver longer service life, improved reliability and lower total ownership cost across demanding industrial equipment and process applications.
              </p>

              <div className="mt-6 group border border-line-200 border-l-2 border-l-amber-400 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-l-4 hover:border-l-amber-500 hover:shadow-md hover:shadow-amber-900/5">
                <h4 className="font-display text-base font-extrabold uppercase tracking-wider text-amber-600">
                  Right Material for the Right Wear Zone
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-navy-700/75">
                  Wear Steel | Hardfaced Plate | Premium Castings | Ceramic Liners | Rubber-Ceramic | Polymer Liners | Sacrificial Inserts
                </p>
              </div>
            </motion.div>
          </div>

          {/* Running Marquee Pills for Material Technologies */}
          <MarqueePills
            items={[
              "Wear Steel",
              "Hardfaced Plate",
              "Premium Castings",
              "Ceramic Liners",
              "Rubber-Ceramic",
              "Polymer Liners",
              "Sacrificial Inserts",
            ]}
            icon={Sparkles}
            bgClass="bg-white"
            sectionBg="from-paper-100"
            speed={35}
          />
        </div>
      </section>

      {/* SECTION 7: Wear Solution Selection Table */}
      <section id="wear-selection" className="scroll-mt-20 section-pad bg-white border-t border-line-200">
        <div className="container-xl">
          <SectionHeading
            kicker="Technical Specifications"
            title="Select the Right"
            accent="Wear Solution"
            accentColor="amber"
            description="Custom-built wear materials for abrasion, impact, erosion and high-temperature service."
          />

          <div className="mt-8 group border border-line-200 border-l-2 border-l-amber-400 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-l-4 hover:border-l-amber-500 hover:shadow-md hover:shadow-amber-900/5">
            <h4 className="font-display text-base font-extrabold uppercase tracking-wider text-amber-600">
              Selection Guidance
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-navy-700/75">
              Choose by wear mode, impact severity, temperature, corrosion exposure and service life targets. WearGuard can custom-build the right solution for your application.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {[
              {
                title: "WearGuard Designed & Cut to Shape Parts",
                items: [
                  { name: "WearGuard P400", hardness: "400 BHN", use: "Recommended for normal wear applications in asphalt, cement, mining and steel industries. Ideal for liners, chutes, buckets and similar components." },
                  { name: "WearGuard P450", hardness: "450 BHN", use: "For high wear applications in asphalt, mining and steel industries. Suitable for heavy-duty components such as mixer liners." },
                  { name: "WearGuard P500", hardness: "500 BHN", use: "For superior high wear applications in asphalt, cement, mining and steel industries. Ideal for mixer tips and wear edges." },
                ]
              },
              {
                title: "EnduraCast Z-Core Liners — tough specially abrasion resistant lined parts",
                items: [
                  { name: "EnduraCast Z-Core Liners", hardness: "58–62 HRC", use: "For extreme abrasive and erosive wear applications in asphalt, cement, mining and steel industries. Available in 6 to 24 mm tinsel." },
                  { name: "EnduraCast Ultra Liners", hardness: "60–65 HRC", use: "Best for recycling needs. For extreme abrasive and high erosive wear applications in asphalt, cement, mining and steel industries. Available in 100% to 20 mm." },
                  { name: "EnduraCast Z-Core Max Liners", hardness: "60–65 HRC", use: "Best for high-temperature recycling needs. For extreme abrasive and high erosive wear within the asphalt and steel industries. Available in 100% to 20 mm." },
                ]
              },
              {
                title: "Wearcast Grades",
                items: [
                  { name: "Wearcast 600", hardness: "Wearcast 600", use: "For abrasive and erosive wear applications in asphalt, cement, mining and steel industries." },
                  { name: "Wearcast Ultra 800", hardness: "Wearcast Ultra 800", use: "For extreme abrasive and high erosive wear applications in asphalt, cement, mining and steel industries." },
                  { name: "Wearcast Max 1100", hardness: "Wearcast Max 1100", use: "For extreme abrasive and high erosive wear applications with carbide lining for maximum performance in the asphalt and steel industries." },
                ]
              }
            ].map((group, gIdx) => (
              <details
                key={gIdx}
                className="group border border-line-200 border-l-4 border-l-amber-500 bg-paper-50 p-5 shadow-sm transition-all hover:bg-white hover:shadow-md [&[open]]:bg-white [&[open]]:shadow-md [&[open]]:border-amber-400"
                open={gIdx === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between font-display text-base font-bold uppercase tracking-wider text-navy-950 hover:text-amber-600">
                  <span>{group.title}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 shadow-sm transition-all duration-300 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-navy-950 group-open:rotate-180 group-open:bg-amber-500 group-open:text-navy-950">
                    <ChevronDown size={18} className="transition-transform duration-300" />
                  </span>
                </summary>
                <div className="mt-4 overflow-x-auto pt-4 border-t border-line-100">
                  <table className="w-full text-left text-sm text-navy-950 min-w-[580px]">
                    <thead className="bg-navy-950 text-white font-bold uppercase tracking-wider text-[11px]">
                      <tr>
                        <th className="p-3 w-1/3">Product</th>
                        <th className="p-3 w-1/4">Hardness / Grade</th>
                        <th className="p-3">Recommended Use</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line-100">
                      {group.items.map((item, iIdx) => (
                        <tr key={iIdx} className="hover:bg-paper-50 transition-colors">
                          <td className="p-3 font-bold">{item.name}</td>
                          <td className="p-3 text-navy-700 font-medium">{item.hardness}</td>
                          <td className="p-3 text-navy-700/85 text-xs sm:text-sm leading-relaxed">{item.use}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Earthmoving Bucket Tips */}
      <section id="earthmoving-tips" className="scroll-mt-20 section-pad bg-paper-100 border-t border-line-200">
        <div className="container-xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:order-1"
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                — Engineered penetration & wear protection
              </p>
              <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] text-navy-950 sm:text-4xl lg:text-5xl">
                Earthmoving <span className="text-amber-500">Bucket Tips</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-navy-800 sm:text-sm">
                WearGuard bucket tips are engineered to deliver dependable penetration, impact
                resistance and long service life in harsh earthmoving conditions. Manufactured in high wear
                resistant alloys and application-matched materials, they help reduce change-outs, protect
                adapters and improve machine productivity. From general excavation to abrasive rock handling,
                our tip systems are built for strength, consistent fitment and reliable performance where wear,
                shock and material flow demand more every day on tough working sites.
              </p>

              <div className="mt-6 group border border-line-200 border-l-2 border-l-amber-400 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-l-4 hover:border-l-amber-500 hover:shadow-md hover:shadow-amber-900/5">
                <h4 className="font-display text-base font-extrabold uppercase tracking-wider text-amber-600">
                  Custom-Engineered Tip Solutions
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-navy-700/75">
                  WearGuard can design and custom build bucket tips in profiles and wear materials matched to your machine, ground conditions and abrasive challenges, helping improve life, fitment and field performance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center lg:order-2"
            >
              <div className="relative w-full overflow-hidden rounded-lg border border-line-200 bg-white shadow-md">
                <PhotoPlaceholder
                  motif="parts"
                  image="/images/materials/sacrificial-inserts.png"
                  className="aspect-[4/3] w-full object-cover"
                  label="Custom Castings & Tips"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distinct CTA & Results Section */}
      <section className="section-pad relative overflow-hidden bg-gradient-to-b from-paper-100 to-paper-200 border-t border-line-200" id="auditForm">
        <div className="container-xl relative">
          <div className="relative overflow-hidden border border-line-200 bg-white p-8 shadow-md sm:p-12 lg:p-14">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-teal-500" />

            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-amber-700">
                  <Gauge size={14} className="text-amber-600" /> Wear Solutions · Real Results
                </span>
                <h2 className="font-display text-3xl font-bold uppercase leading-tight text-navy-950 sm:text-4xl lg:text-5xl">
                  From design to delivery,
                  <br />
                  <span className="text-amber-600">WearGuard partners with you</span>
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-700/80">
                  Stop overpaying OEM margins and struggling with premature component failure.
                  Get custom alloy engineering tailored specifically to your plant's abrasion profile.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 bg-amber-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20"
                  >
                    Get a Free Wear Audit <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 border border-navy-950/20 bg-navy-950 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-navy-900"
                  >
                    Speak with Engineer
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
                {[
                  { title: "1–10 Unit Runs", desc: "Small-batch flexibility with no massive upfront tooling costs." },
                  { title: "20–60% Longer Life", desc: "Significant wear resistance improvement over standard alloys." },
                  { title: "6–8 Week Turnaround", desc: "Rapid quote-to-delivery pathway for high-priority replacement." },
                  { title: "Global Support", desc: "Worldwide shipping with on-site engineering and audit consultations." },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="group relative overflow-hidden border-l-4 border-amber-500 bg-amber-50/60 p-5 border-t border-r border-b border-amber-200/80 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-amber-50 hover:shadow-md hover:border-amber-400"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-amber-600 shrink-0" />
                      <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wide">{item.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-navy-800">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
