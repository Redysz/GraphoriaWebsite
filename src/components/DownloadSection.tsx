import { Monitor, Apple } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Get Graphoria</span>
        </h2>
        <p className="text-lg text-muted max-w-xl mx-auto mb-12">
          Free, open source, and built for every platform. Download the latest release or build from source.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Windows */}
          <a
            href="https://github.com/Redysz/Graphoria/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-5 rounded-2xl bg-surface border border-border/50 hover:border-accent-blue/50 transition-all duration-300 w-full sm:w-auto"
          >
            <div className="p-3 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-accent-blue group-hover:scale-110 transition-transform">
              <Monitor size={28} />
            </div>
            <div className="text-left">
              <div className="text-sm text-muted">Download for</div>
              <div className="text-xl font-bold">Windows</div>
            </div>
          </a>

          {/* Mac */}
          <a
            href="https://github.com/Redysz/Graphoria/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-5 rounded-2xl bg-surface border border-border/50 hover:border-accent-purple/50 transition-all duration-300 w-full sm:w-auto"
          >
            <div className="p-3 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 text-accent-purple group-hover:scale-110 transition-transform">
              <Apple size={28} />
            </div>
            <div className="text-left">
              <div className="text-sm text-muted">Download for</div>
              <div className="text-xl font-bold">macOS</div>
            </div>
          </a>
        </div>

        <p className="text-sm text-muted mt-8">
          Also available on Linux.{" "}
          <a
            href="https://github.com/Redysz/Graphoria"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-blue hover:underline"
          >
            View all releases on GitHub →
          </a>
        </p>
      </div>
    </section>
  );
}
