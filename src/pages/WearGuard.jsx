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
  Flame,
  Filter,
  Layers,
  Sparkles,
  ChevronDown,
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

const PRODUCT_LINES = [
  {
    id: "rotary-dryers",
    name: "Dryer Drum Wear Components",
    badge: "Asphalt & Aggregate Dryers",
    body: "Sprockets and trunnion wheels, drum internals and discharge flights, thrust and trunnion wheels for any brand, any era. Heavy-duty trunnion wheels and rollers, dryer rings, girth gears and machined components, heat-treated to meet rigorous performance requirements.",
    items: ["Trunnion wheels & rollers", "Internal flighting & veeing flights", "Thrust roller assemblies", "Girth gear & pinion sets", "Seal rings & housing components"],
    image: "/images/rotary-dryer.png",
    motif: "drum",
  },
  {
    id: "mixers",
    name: "Pugmill & Mixer Wear Parts",
    badge: "Continuous & Batch Mixers",
    body: "Premium mixer components engineered for maximum wear life including mixer liners, paddles, tips and other critical wear parts in Ni-Hard or high-chrome premium castings, with smart arm-protection covers to shield softer cast mixer arms from direct abrasion.",
    items: ["Mixer tips, paddles & arms", "Ni-Hard & high-chrome liner plates", "Arm protection guards & covers", "Discharge door seals & liners", "Shaft sleeve protectors"],
    image: "/images/wearguard-parts.png",
    motif: "gears",
  },
  {
    id: "custom",
    name: "Reverse-Engineered & Custom Wear Components",
    badge: "Obsolescence & Specialty Parts",
    body: "We reverse-engineer (design to prototype) even low-volume parts for freedom from paying premium for OEM monopolies. Every part is custom designed to outlast the original, not just match its dimensions.",
    items: ["3D laser scanning & reverse engineering", "Alloy selection for specific abrasive duties", "Pattern making & trial castings", "Small-run & prototype production", "Hardness & metallurgy reporting"],
    image: "/images/contact_engineering_hq_1785489060344.png",
    motif: "parts",
  },
];

export default function WearGuard() {
  return (
    <div>
      <SEO
        title="WearGuard Wear Parts & Castings | Ryetek Industrial Systems"
        description="Custom-engineered wear parts, liners, castings and dryer components for concrete, asphalt and bulk material handling plants. Tailored alloys, fast global delivery."
        path="/wearguard"
      />

      {/* Hero */}
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
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.02] text-white sm:text-5xl lg:text-6xl">
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
                  {/* Top gradient highlight bar */}
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

      {/* SECTION 1: Dryer Drum Components & Retrofits */}
      <section id="dryer-drums" className="scroll-mt-20 section-pad bg-white">
        <div className="container-xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="relative w-full overflow-hidden rounded-lg border border-line-200 bg-white shadow-md">
                <PhotoPlaceholder
                  motif="drum"
                  image="/images/rotary-dryer.png"
                  className="aspect-[4/3] w-full object-cover"
                  label="Dryer Drum Engineering"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                — Any brand. Any era.
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
        </div>
      </section>

      {/* SECTION 2: Filter Components */}
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

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center lg:order-2"
            >
              <div className="relative w-full overflow-hidden rounded-lg border border-line-200 bg-white shadow-md">
                <PhotoPlaceholder
                  motif="filter"
                  image="/images/process-systems.png"
                  className="aspect-[4/3] w-full object-cover"
                  label="Baghouse Filter Systems"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Mixer Components & Shafts */}
      <section id="mixer-shafts" className="scroll-mt-20 section-pad bg-white border-t border-line-200">
        <div className="container-xl">
          <SectionHeading
            kicker="Engineered to outlast the mix"
            title="Mixer Shafts &"
            accent="Arm Protection"
            description="Upgrade your mixer shafts to high performance and low maintenance with WearGuard's fully covered shaft design with High-chrome castings built for extreme abrasion resistance and long service life."
          />

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

          {/* Existing Product lines grid */}
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
                  {/* Top gradient highlight bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <PhotoPlaceholder motif={p.motif} image={p.image} className="aspect-[16/10] w-full" label={p.badge} />
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

      {/* SECTION 4: Bucket Elevators & Drag Conveyors */}
      <section id="elevators-conveyors" className="scroll-mt-20 section-pad bg-paper-100 border-t border-line-200">
        <div className="container-xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="relative w-full overflow-hidden rounded-lg border border-line-200 bg-white shadow-md">
                <PhotoPlaceholder
                  motif="elevator"
                  image="/images/material-handling.png"
                  className="aspect-[4/3] w-full object-cover"
                  label="Elevator & Conveyor Components"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                — Elevating, conveying & loading
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
        </div>
      </section>

      {/* SECTION 5: Flow & Wear Liners */}
      <section id="wear-liners" className="scroll-mt-20 section-pad bg-white border-t border-line-200">
        <div className="container-xl">
          <SectionHeading
            kicker="Engineered wear protection for every critical transfer zone"
            title="Control the Flow."
            accent="Outlast the Impact."
            description="WearGuard protects the high-impact zones where bulk materials change direction, accelerate and strike equipment surfaces. Our engineered chute, hopper and transfer-point solutions include liners, skirt systems, impact plates, rock-box components and bolt-in wear assemblies. Each system is tailored to material size, velocity, moisture and abrasion severity, helping reduce structural damage, simplify replacement, extend service intervals and keep critical material-handling points operating with fewer interruptions, greater reliability and lower maintenance costs."
          />

          {/* Section 5 Ticker Carousel (Natural Smooth Marquee) */}
          <div className="mt-8 overflow-hidden relative w-full">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex w-max gap-3 py-1"
            >
              {[
                "Mixer Liners",
                "Hopper Liners",
                "Bin Liners",
                "Skirt Liners",
                "Impact Plates",
                "Rock-Box Components",
                "Wear Blocks",
                "Mixer Liners",
                "Hopper Liners",
                "Bin Liners",
                "Skirt Liners",
                "Impact Plates",
                "Rock-Box Components",
                "Wear Blocks",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 rounded-full border border-navy-950/10 bg-paper-50 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-navy-950 shadow-sm whitespace-nowrap"
                >
                  <CheckCircle2 size={13} className="text-amber-500 shrink-0" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Material Technologies */}
      <section id="material-technologies" className="scroll-mt-20 section-pad bg-paper-100 border-t border-line-200">
        <div className="container-xl">
          <SectionHeading
            kicker="Application-engineered materials for longer service life"
            title="Material"
            accent="Technologies"
            description="WearGuard combines advanced materials with application-specific engineering to solve difficult wear problems. Solutions include abrasive-resistant steel, hardfaced plates, premium castings, ceramic liners, rubber-ceramic systems, polymers and low-friction materials. Replaceable sacrificial strips and inserts protect structural components while simplifying maintenance. By matching material technology to impact, abrasion, temperature, corrosion and flow conditions, we deliver longer service life, improved reliability and lower total ownership cost across demanding industrial equipment and process applications."
          />

          {/* Right Material Card - Placed above the sliding pills (Left-aligned) */}
          <div className="mt-8 max-w-3xl group border border-line-200 border-l-2 border-l-amber-400 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-l-4 hover:border-l-amber-500 hover:shadow-md hover:shadow-amber-900/5">
            <h4 className="font-display text-base font-extrabold uppercase tracking-wider text-amber-600">
              Right Material for the Right Wear Zone
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-navy-700/75">
              Premium wear plate and hardfaced components provide robust protection in high-abrasion zones exposed to sliding, scraping and continuous material flow.
            </p>
          </div>

          {/* Section 6 Ticker Carousel (Natural Smooth Marquee) */}
          <div className="mt-8 overflow-hidden relative w-full">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex w-max gap-3 py-1"
            >
              {[
                "Wear Steel",
                "Hardfaced Plate",
                "Premium Castings",
                "Ceramic Liners",
                "Rubber-Ceramic",
                "Polymer Liners",
                "Sacrificial Inserts",
                "Wear Steel",
                "Hardfaced Plate",
                "Premium Castings",
                "Ceramic Liners",
                "Rubber-Ceramic",
                "Polymer Liners",
                "Sacrificial Inserts",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 rounded-full border border-navy-950/15 bg-white px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-navy-950 shadow-sm whitespace-nowrap"
                >
                  <Sparkles size={13} className="text-amber-500 shrink-0" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Wear Solution Selection Table */}
      <section id="wear-selection" className="scroll-mt-20 section-pad bg-white border-t border-line-200">
        <div className="container-xl">
          <SectionHeading
            kicker="Technical Specifications"
            title="Select the Right"
            accent="Wear Solution"
            description="Custom-built wear materials for abrasion, impact, erosion and high-temperature service."
          />

          {/* Selection Guidance Card - Moved above the accordions */}
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
                  image="/images/wearguard-parts.png"
                  className="aspect-[4/3] w-full object-cover"
                  label="Earthmoving & Casting Range"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distinct CTA & Results Section */}
      <section className="section-pad relative overflow-hidden bg-gradient-to-b from-paper-100 to-paper-200 border-t border-line-200">
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
