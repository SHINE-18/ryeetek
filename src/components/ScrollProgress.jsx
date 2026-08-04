import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const current = (window.scrollY / totalScroll) * 100;
        setProgress(Math.min(100, Math.max(0, current)));
      } else {
        setProgress(0);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  const displayPercent = Math.round(progress);
  const formattedProgress = String(displayPercent).padStart(2, "0");

  return (
    <div
      className="fixed left-6 lg:left-8 bottom-8 z-40 hidden md:flex flex-col items-center gap-2 pointer-events-none select-none"
      aria-label={`Scroll progress ${displayPercent}%`}
    >
      {/* Vertical Progress Bar Track */}
      <div className="relative h-24 w-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 overflow-hidden shadow-inner">
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-teal-400 via-cyan-400 to-teal-300 rounded-full transition-[height] duration-150 ease-out shadow-[0_0_10px_rgba(45,212,191,0.6)]"
          style={{ height: `${progress}%` }}
        />
      </div>

      {/* Percentage Readout Below Bar */}
      <span className="font-mono text-[11px] font-bold tracking-widest text-teal-400 bg-navy-950/85 px-1.5 py-0.5 rounded border border-teal-500/20 backdrop-blur-md shadow-md shadow-black/40">
        {formattedProgress}%
      </span>
    </div>
  );
}
