import { GitBranch, GitMerge, Eye, Layout, Terminal, Settings, Globe, Layers, Search, Undo2, GitPullRequest, Workflow } from "lucide-react";
import type { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  graphSvg: ReactNode;
}

function BranchGraph() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
      <line x1="10" y1="40" x2="50" y2="40" stroke="#138ee3" strokeWidth="2.5" />
      <line x1="50" y1="40" x2="90" y2="40" stroke="#138ee3" strokeWidth="2.5" />
      <line x1="90" y1="40" x2="110" y2="40" stroke="#138ee3" strokeWidth="2.5" />
      <line x1="50" y1="40" x2="70" y2="20" stroke="#9b51e0" strokeWidth="2.5" />
      <line x1="70" y1="20" x2="90" y2="20" stroke="#9b51e0" strokeWidth="2.5" />
      <line x1="90" y1="20" x2="110" y2="20" stroke="#9b51e0" strokeWidth="2.5" />
      <circle cx="10" cy="40" r="4" fill="#138ee3" />
      <circle cx="50" cy="40" r="5" fill="#138ee3" />
      <circle cx="90" cy="40" r="4" fill="#138ee3" />
      <circle cx="110" cy="40" r="4" fill="#138ee3" />
      <circle cx="70" cy="20" r="4" fill="#9b51e0" />
      <circle cx="90" cy="20" r="4" fill="#9b51e0" />
      <circle cx="110" cy="20" r="4" fill="#9b51e0" />
    </svg>
  );
}

function MergeGraph() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
      <line x1="10" y1="25" x2="40" y2="25" stroke="#9b51e0" strokeWidth="2.5" />
      <line x1="40" y1="25" x2="70" y2="25" stroke="#9b51e0" strokeWidth="2.5" />
      <line x1="10" y1="55" x2="40" y2="55" stroke="#138ee3" strokeWidth="2.5" />
      <line x1="40" y1="55" x2="70" y2="55" stroke="#138ee3" strokeWidth="2.5" />
      <line x1="70" y1="25" x2="95" y2="40" stroke="#9b51e0" strokeWidth="2.5" />
      <line x1="70" y1="55" x2="95" y2="40" stroke="#138ee3" strokeWidth="2.5" />
      <line x1="95" y1="40" x2="115" y2="40" stroke="#138ee3" strokeWidth="2.5" />
      <circle cx="10" cy="25" r="4" fill="#9b51e0" />
      <circle cx="40" cy="25" r="4" fill="#9b51e0" />
      <circle cx="70" cy="25" r="4" fill="#9b51e0" />
      <circle cx="10" cy="55" r="4" fill="#138ee3" />
      <circle cx="40" cy="55" r="4" fill="#138ee3" />
      <circle cx="70" cy="55" r="4" fill="#138ee3" />
      <circle cx="95" cy="40" r="6" fill="url(#mergeGrad)" />
      <circle cx="115" cy="40" r="4" fill="#138ee3" />
      <defs>
        <linearGradient id="mergeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#138ee3" />
          <stop offset="100%" stopColor="#9b51e0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function PredictGraph() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
      <line x1="10" y1="40" x2="40" y2="40" stroke="#138ee3" strokeWidth="2.5" />
      <line x1="40" y1="40" x2="70" y2="40" stroke="#138ee3" strokeWidth="2.5" />
      <line x1="70" y1="40" x2="100" y2="30" stroke="#138ee3" strokeWidth="2" strokeDasharray="5,3" opacity="0.5" />
      <line x1="70" y1="40" x2="100" y2="50" stroke="#9b51e0" strokeWidth="2" strokeDasharray="5,3" opacity="0.5" />
      <circle cx="10" cy="40" r="4" fill="#138ee3" />
      <circle cx="40" cy="40" r="4" fill="#138ee3" />
      <circle cx="70" cy="40" r="5" fill="#138ee3" />
      <circle cx="100" cy="30" r="4" fill="#138ee3" opacity="0.4" strokeWidth="1.5" stroke="#138ee3" />
      <circle cx="100" cy="50" r="4" fill="#9b51e0" opacity="0.4" strokeWidth="1.5" stroke="#9b51e0" />
      <text x="98" y="18" fill="#138ee3" fontSize="8" textAnchor="middle" opacity="0.6">?</text>
      <text x="98" y="68" fill="#9b51e0" fontSize="8" textAnchor="middle" opacity="0.6">?</text>
    </svg>
  );
}

function DAGGraph() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
      <line x1="15" y1="40" x2="40" y2="20" stroke="#138ee3" strokeWidth="2" />
      <line x1="15" y1="40" x2="40" y2="60" stroke="#9b51e0" strokeWidth="2" />
      <line x1="40" y1="20" x2="70" y2="15" stroke="#138ee3" strokeWidth="2" />
      <line x1="40" y1="20" x2="70" y2="40" stroke="#138ee3" strokeWidth="2" />
      <line x1="40" y1="60" x2="70" y2="40" stroke="#9b51e0" strokeWidth="2" />
      <line x1="40" y1="60" x2="70" y2="65" stroke="#9b51e0" strokeWidth="2" />
      <line x1="70" y1="15" x2="105" y2="30" stroke="#138ee3" strokeWidth="2" />
      <line x1="70" y1="40" x2="105" y2="30" stroke="#138ee3" strokeWidth="2" />
      <line x1="70" y1="65" x2="105" y2="55" stroke="#9b51e0" strokeWidth="2" />
      <circle cx="15" cy="40" r="5" fill="url(#dagGrad)" />
      <circle cx="40" cy="20" r="4" fill="#138ee3" />
      <circle cx="40" cy="60" r="4" fill="#9b51e0" />
      <circle cx="70" cy="15" r="3.5" fill="#138ee3" />
      <circle cx="70" cy="40" r="4" fill="#138ee3" />
      <circle cx="70" cy="65" r="3.5" fill="#9b51e0" />
      <circle cx="105" cy="30" r="4.5" fill="#138ee3" />
      <circle cx="105" cy="55" r="4" fill="#9b51e0" />
      <defs>
        <linearGradient id="dagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#138ee3" />
          <stop offset="100%" stopColor="#9b51e0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SimpleGraph() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
      <line x1="20" y1="40" x2="50" y2="40" stroke="#138ee3" strokeWidth="2.5" />
      <line x1="50" y1="40" x2="80" y2="40" stroke="#9b51e0" strokeWidth="2.5" />
      <line x1="80" y1="40" x2="105" y2="40" stroke="#138ee3" strokeWidth="2.5" />
      <circle cx="20" cy="40" r="5" fill="#138ee3" />
      <circle cx="50" cy="40" r="5" fill="#9b51e0" />
      <circle cx="80" cy="40" r="5" fill="#138ee3" />
      <circle cx="105" cy="40" r="5" fill="#9b51e0" />
    </svg>
  );
}

function ResetGraph() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
      <line x1="10" y1="40" x2="35" y2="40" stroke="#138ee3" strokeWidth="2.5" />
      <line x1="35" y1="40" x2="60" y2="40" stroke="#138ee3" strokeWidth="2.5" />
      <line x1="60" y1="40" x2="85" y2="40" stroke="#138ee3" strokeWidth="2" strokeDasharray="4,3" opacity="0.3" />
      <line x1="85" y1="40" x2="110" y2="40" stroke="#138ee3" strokeWidth="2" strokeDasharray="4,3" opacity="0.3" />
      <circle cx="10" cy="40" r="4" fill="#138ee3" />
      <circle cx="35" cy="40" r="4" fill="#138ee3" />
      <circle cx="60" cy="40" r="5" fill="#138ee3" />
      <circle cx="85" cy="40" r="4" fill="#138ee3" opacity="0.25" />
      <circle cx="110" cy="40" r="4" fill="#138ee3" opacity="0.25" />
      <path d="M55 22 L65 22 L60 28 Z" fill="#e04040" opacity="0.7" />
      <text x="60" y="18" fill="#e04040" fontSize="7" textAnchor="middle" opacity="0.7">HEAD</text>
    </svg>
  );
}

const features: Feature[] = [
  {
    icon: <Layout size={24} />,
    title: "Interactive DAG Visualization",
    description: "See your entire Git history as a beautiful directed acyclic graph. Pan, zoom, and drag commits for a bird's-eye view of your project.",
    graphSvg: <DAGGraph />,
  },
  {
    icon: <GitBranch size={24} />,
    title: "Branch & Checkout",
    description: "Create, switch, and manage branches with visual clarity. See exactly where branches diverge and converge in your graph.",
    graphSvg: <BranchGraph />,
  },
  {
    icon: <GitMerge size={24} />,
    title: "Merge & Rebase",
    description: "Perform merges and interactive rebases with visual guides. Drag-and-drop commit reordering, squash, and edit operations.",
    graphSvg: <MergeGraph />,
  },
  {
    icon: <Eye size={24} />,
    title: "Graph Prediction",
    description: "Preview how your graph will look after an operation — before executing it. A unique feature that eliminates guesswork.",
    graphSvg: <PredictGraph />,
  },
  {
    icon: <GitPullRequest size={24} />,
    title: "Conflict Resolution",
    description: "Side-by-side diff viewer with ours/theirs comparison. Resolve merge conflicts visually with full context of changes.",
    graphSvg: <MergeGraph />,
  },
  {
    icon: <Undo2 size={24} />,
    title: "Reset & Reverse",
    description: "Soft and hard resets, reverse commits — all clickable. Tooltips explain every operation so you never lose work.",
    graphSvg: <ResetGraph />,
  },
  {
    icon: <Terminal size={24} />,
    title: "Integrated Terminal",
    description: "Built-in terminal for when you need raw Git power. Switch seamlessly between GUI and command line.",
    graphSvg: <SimpleGraph />,
  },
  {
    icon: <Workflow size={24} />,
    title: "Dual View Mode",
    description: "Toggle between graph visualization and classic commit table. Choose the view that fits your current workflow.",
    graphSvg: <DAGGraph />,
  },
  {
    icon: <Globe size={24} />,
    title: "Multi-Platform Support",
    description: "Works on GitHub, GitLab, Bitbucket, and Atlassian. Push, fetch, and clone from any remote seamlessly.",
    graphSvg: <SimpleGraph />,
  },
  {
    icon: <Settings size={24} />,
    title: "Fully Configurable",
    description: "Customize everything — from button order to backgrounds. JSON config files give you total control over your environment.",
    graphSvg: <SimpleGraph />,
  },
  {
    icon: <Layers size={24} />,
    title: "Multiple Repos & Tabs",
    description: "Open and manage multiple repositories in tabs. Switch between projects without losing your place.",
    graphSvg: <BranchGraph />,
  },
  {
    icon: <Search size={24} />,
    title: "Smart Tooltips",
    description: "Every button and operation has detailed hover tooltips. Understand exactly what each Git command will do before running it.",
    graphSvg: <PredictGraph />,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative pt-16 pb-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">It already does that.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Everything you need from a Git client — reimagined as an interactive graph experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-surface/80 border border-border/50 p-6 hover:border-accent-blue/30 transition-all duration-300 hover:bg-surface-light/50"
            >
              {/* Mini graph illustration */}
              <div className="h-16 mb-4 opacity-60 group-hover:opacity-100 transition-opacity">
                {feature.graphSvg}
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-accent-blue">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
              </div>

              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
