const RivaayaLogo = ({ className = "w-36 h-auto" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg viewBox="0 0 64 64" className="w-8 h-8" aria-hidden>
      <defs>
        <linearGradient id="rv-gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#9b87f5" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      {/* Thread spool icon */}
      <rect x="10" y="12" width="44" height="40" rx="6" fill="url(#rv-gradient)" />
      <rect x="14" y="18" width="36" height="4" rx="2" fill="#ffffff" opacity="0.9" />
      <rect x="14" y="26" width="36" height="4" rx="2" fill="#ffffff" opacity="0.8" />
      <rect x="14" y="34" width="36" height="4" rx="2" fill="#ffffff" opacity="0.7" />
      <rect x="14" y="42" width="36" height="4" rx="2" fill="#ffffff" opacity="0.6" />
    </svg>
    <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-violet-600 to-cyan-300 bg-clip-text text-transparent">
      Rivaaya
    </span>
  </div>
);

export default RivaayaLogo;
