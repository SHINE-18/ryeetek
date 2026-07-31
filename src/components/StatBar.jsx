import { motion } from "framer-motion";

const STATS = [
  { value: "10+", label: "Capability areas", sub: "from concrete plants to digital controls" },
  { value: "AU", label: "Australian-facing", sub: "design standards & documentation" },
  { value: "1", label: "Single partner", sub: "concept through commissioning" },
  { value: "0", label: "Guesswork", sub: "on compliance, uptime or handover" },
];

export default function StatBar() {
  return (
    <section className="border-y border-white/10 bg-navy-950 py-10">
      <div className="container-xl grid grid-cols-2 gap-6 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="border-l-2 border-teal-500/40 pl-5"
          >
            <div className="font-display text-4xl font-extrabold text-teal-400 lg:text-5xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs font-bold uppercase tracking-wider text-white">
              {s.label}
            </div>
            <div className="mt-1 text-xs text-white/50">{s.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
