export default function RyetekLogo({ showSubtitle = true, className = "" }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official Ryetek Logo Image */}
      <img
        src="/images/logo.png"
        alt="RYETEK Industrial Systems"
        className="h-5 w-auto object-contain sm:h-6"
      />
      {showSubtitle && (
        <span className="hidden border-l border-white/20 pl-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 sm:inline-block">
          Industrial Systems
        </span>
      )}
    </div>
  );
}
