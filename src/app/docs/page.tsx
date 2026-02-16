import { BookOpen, Download, Code, Palette, Terminal, Settings, GitBranch, Layers, Keyboard, HelpCircle } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "Getting Started",
    items: [
      { icon: <BookOpen size={18} />, label: "Overview", description: "What is Graphoria and how does it work?" },
      { icon: <Download size={18} />, label: "Installation", description: "Download and install on Windows, macOS, or Linux." },
      { icon: <HelpCircle size={18} />, label: "FAQ", description: "Frequently asked questions about Graphoria." },
    ],
  },
  {
    title: "Core Features",
    items: [
      { icon: <GitBranch size={18} />, label: "Graph View", description: "Navigate your repository as an interactive DAG." },
      { icon: <Layers size={18} />, label: "Dual View Mode", description: "Switch between graph and classic commit table." },
      { icon: <Terminal size={18} />, label: "Git Operations", description: "Merge, rebase, cherry-pick, reset and more — all visual." },
    ],
  },
  {
    title: "Customization",
    items: [
      { icon: <Palette size={18} />, label: "Themes", description: "Built-in themes and how to create your own." },
      { icon: <Settings size={18} />, label: "Configuration", description: "JSON config files for complete UI control." },
      { icon: <Keyboard size={18} />, label: "Key Bindings", description: "Remap shortcuts to match your workflow." },
    ],
  },
  {
    title: "Contributing",
    items: [
      { icon: <Code size={18} />, label: "Building from Source", description: "Set up the dev environment with Tauri + React." },
      { icon: <BookOpen size={18} />, label: "Code Style", description: "Coding conventions and project structure." },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            Everything you need to get started with Graphoria, from installation to advanced configuration.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold mb-6 text-foreground">{section.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map((item) => (
                  <div
                    key={item.label}
                    className="group rounded-xl bg-surface/80 border border-border/50 p-5 hover:border-accent-blue/30 transition-all duration-300 cursor-pointer hover:bg-surface-light/50"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-accent-blue">{item.icon}</div>
                      <h3 className="font-semibold">{item.label}</h3>
                    </div>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-surface/80 border border-border/50 text-center">
          <p className="text-muted mb-4">
            Full documentation is being written. In the meantime, check out the source code:
          </p>
          <a
            href="https://github.com/Redysz/Graphoria"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-blue hover:underline font-medium"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
