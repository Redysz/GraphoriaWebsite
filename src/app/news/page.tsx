import { Calendar, Tag, Play } from "lucide-react";

interface NewsItem {
  date: string;
  version?: string;
  title: string;
  description: string;
  youtubeId?: string;
}

const newsItems: NewsItem[] = [
  {
    date: "2026-02-15",
    version: "v0.5.0",
    title: "Interactive Rebase & Conflict Resolution",
    description: "This release introduces a full interactive rebase UI with drag-and-drop commit reordering, squash support, and a brand new side-by-side merge conflict resolver with ours/theirs comparison.",
  },
  {
    date: "2026-01-28",
    version: "v0.4.0",
    title: "Graph Prediction Engine",
    description: "Preview how your repository graph will look after any operation — before executing it. Our unique prediction engine simulates merges, rebases, and resets to eliminate guesswork.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    date: "2026-01-10",
    version: "v0.3.0",
    title: "Multi-repo Tabs & Detached HEAD Helper",
    description: "Open multiple repositories in tabs and switch between them seamlessly. Also added a smart Detached HEAD detection and recovery assistant with visual previews.",
  },
  {
    date: "2025-12-20",
    version: "v0.2.0",
    title: "Four Themes & Full Customization",
    description: "Introducing Light, Dark, Nord, and Solarized themes. Every aspect of the UI is now configurable via JSON configuration files — from button order to background colors.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    date: "2025-12-01",
    version: "v0.1.0",
    title: "Initial Release",
    description: "The first public release of Graphoria! Features include interactive DAG visualization, basic Git operations (commit, push, pull, fetch), branch management, and dual view mode.",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">News</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            Release notes, updates, and video tutorials for Graphoria.
          </p>
        </div>

        <div className="space-y-8">
          {newsItems.map((item, i) => (
            <article
              key={i}
              className="rounded-2xl bg-surface/80 border border-border/50 p-6 md:p-8 hover:border-accent-blue/30 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="flex items-center gap-1.5 text-sm text-muted">
                  <Calendar size={14} />
                  {item.date}
                </span>
                {item.version && (
                  <span className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 text-accent-blue text-sm font-medium">
                    <Tag size={12} />
                    {item.version}
                  </span>
                )}
                {item.youtubeId && (
                  <span className="flex items-center gap-1.5 text-sm text-accent-purple">
                    <Play size={14} />
                    Video available
                  </span>
                )}
              </div>

              <h2 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h2>
              <p className="text-muted leading-relaxed">{item.description}</p>

              {item.youtubeId && (
                <div className="mt-6 aspect-video rounded-xl overflow-hidden border border-border/50">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0`}
                    title={item.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
