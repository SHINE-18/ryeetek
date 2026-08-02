import { motion } from "framer-motion";

export default function SectionHeading({
  kicker,
  title,
  accent,
  description,
  align = "left",
  light = false,
  accentColor = "teal", // "teal" | "amber"
}) {
  const isAmber = accentColor === "amber";
  const textColor = isAmber ? "text-amber-500" : "text-teal-500";
  const bgColor = isAmber ? "bg-amber-500" : "bg-teal-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {kicker && (
        <p className={`mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${textColor}`}>
          <span className={`h-px w-6 ${bgColor}`} />
          {kicker}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-navy-950"
        }`}
      >
        {title} {accent && <span className={textColor}>{accent}</span>}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/70" : "text-navy-700/80"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

