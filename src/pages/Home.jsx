import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import SectionHeading from "../components/SectionHeading";
import StatBar from "../components/StatBar";
import { capabilities, forWho } from "../data/capabilities";

const PROCESS = [
  { step: "01", title: "Scope & site review", body: "We define materials, capacity, site conditions and constraints before anything is specified." },
  { step: "02", title: "Engineered supply & compliance", body: "Equipment is selected and documented against Australian design standards." },
  { step: "03", title: "Installation, commissioning & handover", body: "Local support through to a clear, documented handover." },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 pt-28 pb-16 lg:pt-40 lg:pb-24">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] lg:block">
          <PhotoPlaceholder motif="silos" image="/images/asphalt-plant.png" className="h-full w-full" label="Plant photography" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/40 to-transparent" />
        </div>

        <div className="container-xl relative">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-5xl font-bold uppercase leading-[0.98] text-white sm:text-6xl lg:text-7xl"
            >
              Industrial Systems for
              <br />
              <span className="text-teal-400">Australian Projects</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-white/70"
            >
              Concrete & asphalt systems, thermal equipment, bulk materials handling,
              controls & automation and engineered industrial packages.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-teal-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy-950 transition-colors hover:bg-teal-400"
              >
                Discuss a project <ArrowRight size={16} />
              </Link>
              <Link
                to="/capabilities"
                className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-white/60"
              >
                View capabilities
              </Link>
            </motion.div>

            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:gap-10">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 shrink-0 text-teal-400" size={22} />
                <p className="text-sm text-white/70">
                  <span className="block font-semibold text-white">Built around</span>
                  Compliance, uptime and clear handover.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-teal-400" size={22} />
                <p className="max-w-xs text-sm text-white/70">
                  For plant owners, contractors, infrastructure projects, concrete producers,
                  asphalt operators, EPCs and industrial manufacturers across Australia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatBar />

      {/* WHO WE SERVE TICKER */}
      <section className="relative overflow-hidden border-y border-white/10 bg-navy-900 py-4">
        <div className="flex items-center">
          {/* Fixed Label on Left with Gradient Overlay */}
          <div className="relative z-10 flex shrink-0 items-center bg-navy-900 px-6 pr-8 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
              Who we work with
            </span>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-navy-900 to-transparent" />
          </div>

          {/* Marquee Track */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_50px,black_calc(100%-50px),transparent)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
              className="flex shrink-0 items-center gap-4 pr-4 whitespace-nowrap"
            >
              {[...forWho, ...forWho, ...forWho].map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-teal-400 hover:text-teal-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400/60" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES OVERVIEW */}
      <section className="section-pad bg-white relative border-t border-line-200">
        <div className="container-xl">
          <div>
            <SectionHeading
              kicker="What we deliver"
              title="Capabilities built"
              accent="around your process"
              description="Ten engineered capability areas, delivered as complete packages or targeted upgrades, with local support and Australian-facing documentation."
            />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.slice(0, 6).map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    to={`/capabilities#${cap.id}`}
                    className="group relative flex h-full flex-col justify-between overflow-hidden border border-line-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-400/80 hover:shadow-lg hover:shadow-teal-900/10"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <span className="font-display text-3xl font-extrabold text-navy-950/80 transition-colors group-hover:text-teal-600">
                          {cap.number}
                        </span>
                        <Icon className="text-teal-500" size={26} strokeWidth={1.6} />
                      </div>
                      <h3 className="font-display text-xl font-bold uppercase leading-tight text-navy-950">
                        {cap.title} <span className="text-teal-500">{cap.accent}</span>
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-navy-700/70">
                        {cap.summary}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-1 text-xs font-bold text-teal-600">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 border border-navy-950 bg-navy-950 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-teal-500 hover:border-teal-500 hover:text-navy-950"
            >
              View All 10 Capabilities <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad bg-paper-50 border-t border-b border-line-200">
        <div className="container-xl">
          <SectionHeading
            kicker="How we work"
            title="A straightforward"
            accent="delivery process"
            description="From first scope conversation to a documented handover, we act as one partner across the whole project."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group relative overflow-hidden border-t-4 border-teal-500 bg-white p-8 shadow-sm border-r border-b border-l border-line-200 transition-all hover:-translate-y-1 hover:shadow-md hover:border-teal-400"
              >
                <span className="font-display text-5xl font-extrabold text-teal-600">
                  {p.step}
                </span>
                <h3 className="mt-4 text-xl font-bold uppercase tracking-wide text-navy-950">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-700/80">{p.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Integrated CTA Card */}
          <div className="mt-16 overflow-hidden border-l-4 border-teal-500 bg-white p-8 shadow-md border-r border-t border-b border-line-200 sm:p-10 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="mb-2 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-teal-700">
                Start Your Project
              </span>
              <h2 className="font-display text-3xl font-bold uppercase leading-tight text-navy-950 sm:text-4xl">
                Ready to discuss a system, <span className="text-teal-600">upgrade or equipment package?</span>
              </h2>
              <p className="mt-3 text-sm text-navy-700/80">
                Send your project requirement and Ryetek will help define the practical equipment scope, documentation needs and installation pathway.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex shrink-0 items-center gap-2.5 bg-teal-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-navy-950 transition-all hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20 lg:mt-0"
            >
              Contact Ryetek <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
