export default function Themes() {
  const themes = [
    {
      name: "Light",
      bg: "bg-[#f5f5f5]",
      surface: "bg-white",
      text: "text-gray-900",
      accent: "bg-[#138ee3]",
      border: "border-gray-200",
      mainColor: "#138ee3",
      branchColor: "#9b51e0",
    },
    {
      name: "Dark",
      bg: "bg-[#1a1a2e]",
      surface: "bg-[#16213e]",
      text: "text-gray-100",
      accent: "bg-[#9b51e0]",
      border: "border-gray-700",
      mainColor: "#138ee3",
      branchColor: "#9b51e0",
    },
    {
      name: "Blue",
      bg: "bg-[#0d1b2a]",
      surface: "bg-[#1b2838]",
      text: "text-[#c5d0dc]",
      accent: "bg-[#1e90ff]",
      border: "border-[#2a3f55]",
      mainColor: "#1e90ff",
      branchColor: "#60a5fa",
    },
    {
      name: "Sepia",
      bg: "bg-[#f4ecd8]",
      surface: "bg-[#faf6eb]",
      text: "text-[#5b4636]",
      accent: "bg-[#a0522d]",
      border: "border-[#d4c5a9]",
      mainColor: "#a0522d",
      branchColor: "#c0814a",
    },
  ];

  return (
    <section id="themes" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Distinctly personal.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Four built-in themes to match your style. Fully customizable UI — from backgrounds to button order — via settings or JSON config files.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme) => (
            <div
              key={theme.name}
              className="group rounded-2xl border border-border/50 overflow-hidden hover:border-accent-blue/30 transition-all duration-300"
            >
              {/* Mini app preview */}
              <div className={`${theme.bg} p-4 h-48 relative`}>
                {/* Title bar */}
                <div className={`${theme.surface} rounded-t-lg p-2 flex items-center gap-1.5 border-b ${theme.border}`}>
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className={`ml-2 text-[9px] font-medium ${theme.text} opacity-60`}>Graphoria</span>
                </div>

                {/* Content area */}
                <div className={`${theme.surface} rounded-b-lg p-3 flex gap-2`}>
                  {/* Sidebar */}
                  <div className="w-16 space-y-1.5">
                    <div className={`h-1.5 rounded ${theme.accent} opacity-60 w-10`} />
                    <div className={`h-1.5 rounded ${theme.accent} opacity-30 w-12`} />
                    <div className={`h-1.5 rounded ${theme.accent} opacity-30 w-8`} />
                    <div className={`h-1.5 rounded ${theme.accent} opacity-20 w-11`} />
                  </div>

                  {/* Graph area */}
                  <div className="flex-1 relative">
                    <svg viewBox="0 0 100 60" className="w-full h-full">
                      <line x1="10" y1="30" x2="35" y2="30" stroke={theme.mainColor} strokeWidth="2" />
                      <line x1="35" y1="30" x2="60" y2="30" stroke={theme.mainColor} strokeWidth="2" />
                      <line x1="60" y1="30" x2="90" y2="30" stroke={theme.mainColor} strokeWidth="2" />
                      <line x1="35" y1="30" x2="55" y2="15" stroke={theme.branchColor} strokeWidth="2" />
                      <line x1="55" y1="15" x2="75" y2="15" stroke={theme.branchColor} strokeWidth="2" />
                      <circle cx="10" cy="30" r="3" fill={theme.mainColor} />
                      <circle cx="35" cy="30" r="4" fill={theme.mainColor} />
                      <circle cx="60" cy="30" r="3" fill={theme.mainColor} />
                      <circle cx="90" cy="30" r="3" fill={theme.mainColor} />
                      <circle cx="55" cy="15" r="3" fill={theme.branchColor} />
                      <circle cx="75" cy="15" r="3" fill={theme.branchColor} />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Theme name */}
              <div className="bg-surface p-4 text-center">
                <h3 className="font-semibold">{theme.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
