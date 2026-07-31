import { useState } from "react";

const MOTIFS = {
  silos: (
    <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.9">
      <rect x="40" y="70" width="34" height="90" rx="4" />
      <rect x="90" y="50" width="34" height="110" rx="4" />
      <rect x="140" y="85" width="30" height="75" rx="4" />
      <line x1="40" y1="95" x2="74" y2="95" />
      <line x1="90" y1="80" x2="124" y2="80" />
      <path d="M57 70 L57 55 L57 40" strokeLinecap="round" />
      <circle cx="107" cy="45" r="4" />
      <line x1="20" y1="160" x2="190" y2="160" />
    </g>
  ),
  tanks: (
    <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.9">
      <rect x="50" y="60" width="45" height="95" rx="6" />
      <rect x="115" y="75" width="45" height="80" rx="6" />
      <line x1="50" y1="80" x2="95" y2="80" />
      <line x1="115" y1="95" x2="160" y2="95" />
      <path d="M72 60 V45 M137 75 V55" strokeLinecap="round" />
      <path d="M95 110 H115" strokeDasharray="3 3" />
      <line x1="20" y1="155" x2="190" y2="155" />
    </g>
  ),
  conveyor: (
    <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.9">
      <path d="M30 140 L120 60" strokeLinecap="round" />
      <path d="M30 150 L130 65" strokeLinecap="round" />
      <circle cx="30" cy="145" r="10" />
      <circle cx="125" cy="62" r="8" />
      <path d="M140 62 Q170 62 170 90 L170 150" strokeLinecap="round" />
      <path d="M0 160 Q40 130 80 160" strokeDasharray="2 4" />
    </g>
  ),
  gears: (
    <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.9">
      <circle cx="75" cy="90" r="30" />
      <circle cx="75" cy="90" r="10" />
      <circle cx="135" cy="115" r="20" />
      <circle cx="135" cy="115" r="7" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x1 = 75 + Math.cos(angle) * 30;
        const y1 = 90 + Math.sin(angle) * 30;
        const x2 = 75 + Math.cos(angle) * 37;
        const y2 = 90 + Math.sin(angle) * 37;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </g>
  ),
  control: (
    <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.9">
      <rect x="35" y="55" width="130" height="80" rx="4" />
      <line x1="35" y1="72" x2="165" y2="72" />
      <path d="M50 100 L70 85 L90 105 L110 80 L130 95 L150 90" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="55" cy="145" r="6" />
      <circle cx="80" cy="145" r="6" />
      <circle cx="105" cy="145" r="6" />
    </g>
  ),
  parts: (
    <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.9">
      <rect x="40" y="60" width="50" height="50" rx="4" transform="rotate(-8 65 85)" />
      <circle cx="140" cy="90" r="28" />
      <circle cx="140" cy="90" r="8" />
      <path d="M112 90 h-8 M168 90 h8 M140 62 v-8 M140 118 v8" />
    </g>
  ),
  drum: (
    <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.9">
      <ellipse cx="100" cy="90" rx="70" ry="34" />
      <path d="M30 90 v10 a70 24 0 0 0 140 0 v-10" />
      <line x1="45" y1="72" x2="45" y2="106" strokeDasharray="2 4" />
      <line x1="70" y1="64" x2="70" y2="116" strokeDasharray="2 4" />
      <line x1="130" y1="64" x2="130" y2="116" strokeDasharray="2 4" />
      <line x1="155" y1="72" x2="155" y2="106" strokeDasharray="2 4" />
    </g>
  ),
  desk: (
    <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.9">
      <rect x="45" y="55" width="60" height="42" rx="3" />
      <line x1="75" y1="97" x2="75" y2="108" />
      <line x1="60" y1="108" x2="90" y2="108" />
      <path d="M120 130 h35 M120 118 h50 M120 106 h30" />
      <circle cx="150" cy="70" r="14" />
    </g>
  ),
};

export default function PhotoPlaceholder({ motif = "silos", image, className = "", label }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950 text-teal-400 ${className}`}
    >
      {image && !imgError ? (
        <img
          src={image.startsWith("/") ? `${import.meta.env.BASE_URL}${image.slice(1)}` : image}
          alt={label || motif}
          onError={() => setImgError(true)}
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
      ) : (
        <svg
          viewBox="0 0 200 180"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {MOTIFS[motif] || MOTIFS.silos}
        </svg>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />
      {label && (
        <span className="absolute bottom-3 left-3 rounded bg-navy-950/70 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-teal-300 pointer-events-none">
          {label}
        </span>
      )}
    </div>
  );
}
