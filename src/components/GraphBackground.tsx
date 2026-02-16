export default function GraphBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Grid dots */}
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="1" fill="#138ee3" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Graph edges */}
        <line x1="200" y1="150" x2="400" y2="300" stroke="#138ee3" strokeWidth="1.5" opacity="0.5" />
        <line x1="400" y1="300" x2="650" y2="250" stroke="#9b51e0" strokeWidth="1.5" opacity="0.5" />
        <line x1="400" y1="300" x2="500" y2="500" stroke="#138ee3" strokeWidth="1.5" opacity="0.4" />
        <line x1="650" y1="250" x2="900" y2="350" stroke="#9b51e0" strokeWidth="1.5" opacity="0.4" />
        <line x1="500" y1="500" x2="750" y2="550" stroke="#138ee3" strokeWidth="1.5" opacity="0.3" />
        <line x1="900" y1="350" x2="1100" y2="200" stroke="#9b51e0" strokeWidth="1.5" opacity="0.3" />
        <line x1="900" y1="350" x2="1050" y2="550" stroke="#138ee3" strokeWidth="1.5" opacity="0.3" />
        <line x1="1100" y1="200" x2="1350" y2="300" stroke="#9b51e0" strokeWidth="1.5" opacity="0.4" />
        <line x1="1350" y1="300" x2="1550" y2="200" stroke="#138ee3" strokeWidth="1.5" opacity="0.3" />
        <line x1="1350" y1="300" x2="1500" y2="500" stroke="#9b51e0" strokeWidth="1.5" opacity="0.3" />

        {/* Bottom area edges */}
        <line x1="150" y1="700" x2="350" y2="800" stroke="#9b51e0" strokeWidth="1.5" opacity="0.3" />
        <line x1="350" y1="800" x2="600" y2="750" stroke="#138ee3" strokeWidth="1.5" opacity="0.3" />
        <line x1="600" y1="750" x2="850" y2="850" stroke="#9b51e0" strokeWidth="1.5" opacity="0.2" />
        <line x1="1200" y1="700" x2="1400" y2="800" stroke="#138ee3" strokeWidth="1.5" opacity="0.3" />
        <line x1="1400" y1="800" x2="1650" y2="750" stroke="#9b51e0" strokeWidth="1.5" opacity="0.2" />

        {/* Graph nodes */}
        {[
          { cx: 200, cy: 150, r: 8, color: "#138ee3" },
          { cx: 400, cy: 300, r: 10, color: "#9b51e0" },
          { cx: 650, cy: 250, r: 7, color: "#138ee3" },
          { cx: 500, cy: 500, r: 6, color: "#9b51e0" },
          { cx: 900, cy: 350, r: 9, color: "#138ee3" },
          { cx: 750, cy: 550, r: 5, color: "#9b51e0" },
          { cx: 1100, cy: 200, r: 8, color: "#9b51e0" },
          { cx: 1050, cy: 550, r: 6, color: "#138ee3" },
          { cx: 1350, cy: 300, r: 10, color: "#138ee3" },
          { cx: 1550, cy: 200, r: 7, color: "#9b51e0" },
          { cx: 1500, cy: 500, r: 6, color: "#138ee3" },
          { cx: 150, cy: 700, r: 7, color: "#138ee3" },
          { cx: 350, cy: 800, r: 8, color: "#9b51e0" },
          { cx: 600, cy: 750, r: 6, color: "#138ee3" },
          { cx: 850, cy: 850, r: 5, color: "#9b51e0" },
          { cx: 1200, cy: 700, r: 7, color: "#9b51e0" },
          { cx: 1400, cy: 800, r: 8, color: "#138ee3" },
          { cx: 1650, cy: 750, r: 6, color: "#9b51e0" },
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.cx} cy={node.cy} r={node.r * 3} fill={node.color} opacity="0.15" />
            <circle cx={node.cx} cy={node.cy} r={node.r} fill={node.color} opacity="0.6" />
          </g>
        ))}
      </svg>

      {/* Top gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent" />
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
