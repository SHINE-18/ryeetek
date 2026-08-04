export default function RyetekLogo({ showSubtitle = true, className = "" }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {/* Official Ryetek Logo Image */}
      <img
        src="/images/logo.svg"
        alt="RYETEK Industrial Systems"
        className="w-[135px] h-10 sm:w-[145px] sm:h-11 object-contain shrink-0 -mr-3.5 sm:-mr-4.5"
      />
      {showSubtitle && (
        <div className="hidden items-center gap-2 sm:flex shrink-0">
          <span className="h-6 w-px bg-white/30 shrink-0" />
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/75 whitespace-nowrap">
            Industrial Systems
          </span>
        </div>
      )}
    </div>
  );
}
