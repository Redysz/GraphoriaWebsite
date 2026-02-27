import { BookOpen, Download, PlayCircle, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Tutorial {
  title: string;
  description: string;
  youtubeId: string;
  thumbnail?: string;
  href?: string;
}

const tutorials: Tutorial[] = [
  {
    title: "Fixing a Detached HEAD in git",
    description:
      "5 practical ways to recover from a detached HEAD state — whether you want to keep your changes, discard them, or move them to another branch.",
    youtubeId: "C83DS_6sG18",
  },
  {
    title: "Resolve merge conflicts in git",
    description:
      "How to resolve merge conflicts using quick one-click actions (Take ours / Take theirs) and by manually selecting lines in the Resolve tab.",
    youtubeId: "x9lA8GJ9ul0",
  },
  {
    title: "How to remove Graphoria (explained by Rick)",
    description:
      "Yes, this is exactly what you think it is. No, it is not a bug.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/easter.png",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            Learn Graphoria through short, focused video tutorials — from first
            install to advanced conflict resolution.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap gap-4 mb-14">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl bg-surface/80 border border-border/50 px-5 py-4 hover:border-accent-blue/30 transition-all duration-300 hover:bg-surface-light/50"
          >
            <BookOpen size={18} className="text-accent-blue" />
            <div>
              <h3 className="font-semibold text-sm">Overview</h3>
              <p className="text-xs text-muted">What is Graphoria and how does it work?</p>
            </div>
          </Link>
          <Link
            href="/download"
            className="flex items-center gap-3 rounded-xl bg-surface/80 border border-border/50 px-5 py-4 hover:border-accent-blue/30 transition-all duration-300 hover:bg-surface-light/50"
          >
            <Download size={18} className="text-accent-blue" />
            <div>
              <h3 className="font-semibold text-sm">Installation</h3>
              <p className="text-xs text-muted">Download and install on Windows, macOS, or Linux.</p>
            </div>
          </Link>
        </div>

        {/* Video Tutorials */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-foreground">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tutorials.map((tutorial) => (
              <a
                key={tutorial.youtubeId}
                href={tutorial.href || `https://youtu.be/${tutorial.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-surface/80 border border-border/50 overflow-hidden hover:border-accent-blue/40 transition-all duration-300 hover:bg-surface-light/50"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-surface">
                  <Image
                    src={tutorial.thumbnail || `https://img.youtube.com/vi/${tutorial.youtubeId}/maxresdefault.jpg`}
                    alt={tutorial.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Dark tint */}
                  <div className="absolute inset-0 bg-black/15 pointer-events-none transition-opacity duration-300 group-hover:bg-black/25" />
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-accent-blue/90 flex items-center justify-center shadow-lg shadow-accent-blue/30">
                      <PlayCircle size={32} className="text-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-semibold text-base mb-2 group-hover:text-accent-blue transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {tutorial.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-surface/80 border border-border/50 text-center">
          <p className="text-muted mb-4">
            More tutorials are on the way. In the meantime, explore the source code:
          </p>
          <a
            href="https://github.com/Redysz/Graphoria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-blue hover:underline font-medium"
          >
            <Github size={18} />
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
