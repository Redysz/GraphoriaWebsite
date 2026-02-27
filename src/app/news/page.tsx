import { Calendar, Tag, Play } from "lucide-react";
import Image from "next/image";

interface NewsItem {
  date: string;
  version?: string;
  title: string;
  description: string;
  youtubeId?: string;
  youtubeUrl?: string;
}

const newsItems: NewsItem[] = [
  {
    date: "2026-02-27",
    title: "New tutorial: Resolve merge conflicts in git",
    description:
      "A new video walkthrough covering two approaches to merge conflict resolution — quick one-click fixes with Take ours / Take theirs and manual line-by-line editing in the Resolve tab.",
    youtubeId: "x9lA8GJ9ul0",
    youtubeUrl: "https://youtu.be/x9lA8GJ9ul0",
  },
  {
    date: "2026-02-18",
    title: "New tutorial: Fixing a Detached HEAD in git",
    description:
      "Our first video tutorial is live! It covers 5 practical ways to recover from a detached HEAD state — whether you want to keep your changes, discard them, or move them to another branch.",
    youtubeId: "C83DS_6sG18",
    youtubeUrl: "https://youtu.be/C83DS_6sG18",
  },
  {
    date: "2026-02-14",
    version: "v0.9.9",
    title: "Initial pre-release",
    description:
      "The first public pre-release of Graphoria is here! This is a test version leading up to v1.0 — it includes the full feature set: interactive DAG visualization, commit graph, branch management, merge/rebase/cherry-pick, conflict resolver, interactive rebase, stash support, diff viewer, keyboard shortcuts, themes, and more. Feel free to download, test, and report any issues.",
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

        <div className="space-y-6">
          {newsItems.map((item, i) => (
            <article
              key={i}
              className="rounded-2xl bg-surface/80 border border-border/50 p-6 hover:border-accent-blue/30 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="flex items-center gap-1.5 text-sm text-muted">
                  <Calendar size={14} />
                  {item.date}
                </span>
                {item.version && (
                  <a
                    href="https://github.com/Redysz/Graphoria/releases/tag/v0.9.9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 text-accent-blue text-sm font-medium hover:from-accent-blue/30 hover:to-accent-purple/30 transition-colors"
                  >
                    <Tag size={12} />
                    {item.version}
                  </a>
                )}
                {item.youtubeId && (
                  <span className="flex items-center gap-1.5 text-sm text-accent-purple">
                    <Play size={14} />
                    Video
                  </span>
                )}
              </div>

              <div className="flex gap-5 items-start">
                {item.youtubeId && item.youtubeUrl && (
                  <a
                    href={item.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 relative w-40 aspect-video rounded-lg overflow-hidden border border-border/50 hover:border-accent-blue/40 transition-colors group"
                  >
                    <Image
                      src={`https://img.youtube.com/vi/${item.youtubeId}/mqdefault.jpg`}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-accent-blue/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play size={14} className="text-white ml-0.5" fill="white" />
                      </div>
                    </div>
                  </a>
                )}
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
