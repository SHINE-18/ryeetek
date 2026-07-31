import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Wrench,
  TrendingDown,
  CheckCircle2,
  Gauge,
} from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import SectionHeading from "../components/SectionHeading";

const BENEFITS = [
  { icon: ShieldCheck, title: "Built for extreme wear conditions", body: "Advanced materials engineered to perform in the harshest applications." },
  { icon: Clock, title: "Longer service life", body: "Maximize uptime and productivity with solutions that last longer." },
  { icon: Wrench, title: "Lower maintenance", body: "Reduce maintenance intervals and operating costs with superior wear resistance." },
  { icon: TrendingDown, title: "Lower total ownership cost", body: "Engineered for value through extended life, efficiency and reliability." },
];

const ENGINEERING = [
  {
    title: "Exact OEM Match & Improvement",
    body: "Dimensionally identical to OEM spec, with upgraded metallurgy (higher alloy, targeted chill) to increase wear life in high-abrasion zones.",
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

const PRODUCT_LINES = [
  {
    id: "rotary-dryers",
    name: "Dryer Drum Wear Components",
    badge: "Asphalt & Aggregate Dryers",
    body: "Sprockets and trunnion wheels, drum internals and discharge flights, thrust and trunnion wheels for any brand, any era. Heavy-duty trunnion wheels and rollers, dryer rings, girth gears and machined components, heat-treated to meet rigorous performance requirements.",
    items: ["Trunnion wheels & rollers", "Internal flighting & veeing flights", "Thrust roller assemblies", "Girth gear & pinion sets", "Seal rings & housing components"],
    image: "/images/rotary-dryer.png",
  },
  {
    id: "mixers",
    name: "Pugmill & Mixer Wear Parts",
    badge: "Continuous & Batch Mixers",
    body: "Premium mixer components engineered for maximum wear life including mixer liners, paddles, tips and other critical wear parts in Ni-Hard or high-chrome premium castings, with smart arm-protection covers to shield softer cast mixer arms from direct abrasion.",
    items: ["Mixer tips, paddles & arms", "Ni-Hard & high-chrome liner plates", "Arm protection guards & covers", "Discharge door seals & liners", "Shaft sleeve protectors"],
    image: "/images/mixer-wear-parts.png",
  },
  {
    id: "custom",
    name: "Reverse-Engineered & Custom Wear Components",
    badge: "Obsolescence & Specialty Parts",
    body: "We reverse-engineer (design to prototype) even low-volume parts for freedom from paying premium for OEM monopolies. Every part is custom designed to outlast the original, not just match its dimensions.",
    items: ["3D laser scanning & reverse engineering", "Alloy selection for specific abrasive duties", "Pattern making & trial castings", "Small-run & prototype production", "Hardness & metallurgy reporting"],
    image: "/images/custom-engineering-parts.png",
  },
];

export default function WearGuard() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block">
          <PhotoPlaceholder motif="drum" image="/images/wearguard-callout.png" className="h-full w-full" label="Product photography" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/50 to-transparent" />
        </div>
        <div className="container-xl relative">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              A Ryetek Industrial Systems product line
            </p>
            <h1 className="font-display text-5xl font-bold uppercase leading-[0.98] text-white sm:text-6xl">
              Wear<span className="text-amber-400">Guard</span>
            </h1>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
              Outlast the grind
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
              End wear nightmares with custom-engineered wear parts, tailored alloys,
              small-batch flexibility and fast global delivery — for dryer drums, mixers and
              any process equipment across construction, concrete and asphalt industries.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-amber-400 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-300"
              >
                Request a wear audit <ArrowRight size={16} />
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
                  className="border border-line-200 p-6"
                >
                  <Icon className="text-amber-500" size={26} strokeWidth={1.7} />
                  <h3 className="mt-4 text-sm font-semibold text-navy-950">{b.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-navy-700/70">{b.body}</p>
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
            <h2 className="font-display text-3xl font-bold uppercase leading-tight text-navy-950 sm:text-4xl">
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
                className="border-l-2 border-amber-400 bg-white p-5"
              >
                <h3 className="text-sm font-semibold text-navy-950">{e.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-navy-700/70">{e.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product lines */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <SectionHeading
            kicker="What we make"
            title="Wear plate, liners, castings"
            accent="& components"
            description="Custom protection. Longer life. We don't just match dimensions — we improve performance."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PRODUCT_LINES.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="overflow-hidden border border-line-200"
              >
                <PhotoPlaceholder motif={p.motif} image={p.image} className="aspect-[16/10] w-full" />
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold uppercase text-navy-950">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-navy-700/70">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Distinct CTA & Results Section */}
      <section className="section-pad relative overflow-hidden bg-gradient-to-b from-paper-100 to-paper-200 border-t border-b border-line-200">
        <div className="container-xl relative">
          <div className="relative overflow-hidden border border-line-200 bg-white p-8 shadow-md sm:p-12 lg:p-14">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-teal-500" />
            
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Heading & Value Prop */}
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

              {/* Right Column: Key Metrics & Highlights */}
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
                    <p className="text-xs leading-relaxed text-navy-700/80">{item.desc}</p>
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
