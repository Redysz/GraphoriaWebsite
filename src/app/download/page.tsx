import { Monitor, Apple, Terminal, Github } from "lucide-react";
import Image from "next/image";

export default function DownloadPage() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image
              src="/icons/graphoria-icon.svg"
              alt="Graphoria"
              width={80}
              height={80}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Download Graphoria</span>
          </h1>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Free, open source, and available on all major platforms.
          </p>
        </div>

        {/* Download cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Windows */}
          <a
            href="https://github.com/Redysz/Graphoria/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-surface/80 border border-border/50 hover:border-accent-blue/50 transition-all duration-300 text-center"
          >
            <div className="p-4 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-accent-blue group-hover:scale-110 transition-transform">
              <Monitor size={36} />
            </div>
            <div>
              <div className="text-xl font-bold mb-1">Windows</div>
              <div className="text-sm text-muted">Windows 10+</div>
              <div className="text-xs text-muted mt-1">.msi / .exe installer</div>
            </div>
            <span className="px-5 py-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white text-sm font-semibold group-hover:opacity-90 transition-opacity">
              Download
            </span>
          </a>

          {/* macOS */}
          <a
            href="https://github.com/Redysz/Graphoria/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-surface/80 border border-border/50 hover:border-accent-purple/50 transition-all duration-300 text-center"
          >
            <div className="p-4 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 text-accent-purple group-hover:scale-110 transition-transform">
              <Apple size={36} />
            </div>
            <div>
              <div className="text-xl font-bold mb-1">macOS</div>
              <div className="text-sm text-muted">macOS 11+</div>
              <div className="text-xs text-muted mt-1">.dmg installer</div>
            </div>
            <span className="px-5 py-2 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white text-sm font-semibold group-hover:opacity-90 transition-opacity">
              Download
            </span>
          </a>

          {/* Linux */}
          <a
            href="https://github.com/Redysz/Graphoria/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-surface/80 border border-border/50 hover:border-accent-blue/50 transition-all duration-300 text-center"
          >
            <div className="p-4 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-accent-blue group-hover:scale-110 transition-transform">
              <Terminal size={36} />
            </div>
            <div>
              <div className="text-xl font-bold mb-1">Linux</div>
              <div className="text-sm text-muted">Ubuntu, Fedora, Arch...</div>
              <div className="text-xs text-muted mt-1">.deb / .AppImage</div>
            </div>
            <span className="px-5 py-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white text-sm font-semibold group-hover:opacity-90 transition-opacity">
              Download
            </span>
          </a>
        </div>

        {/* System requirements */}
        <div className="rounded-2xl bg-surface/80 border border-border/50 p-8">
          <h2 className="text-2xl font-bold mb-6">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold mb-2 text-accent-blue">Minimum</h3>
              <ul className="space-y-1.5 text-muted">
                <li>- 4 GB RAM</li>
                <li>- 200 MB disk space</li>
                <li>- Git 2.20+</li>
                <li>- 64-bit operating system</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-accent-purple">Recommended</h3>
              <ul className="space-y-1.5 text-muted">
                <li>- 8 GB RAM</li>
                <li>- SSD storage</li>
                <li>- Git 2.40+</li>
                <li>- Hardware-accelerated graphics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Build from source */}
        <div className="mt-8 rounded-2xl bg-surface/80 border border-border/50 p-8">
          <h2 className="text-2xl font-bold mb-4">Build from Source</h2>
          <p className="text-muted mb-4">
            Graphoria is built with Tauri (Rust) + React (TypeScript).
          </p>
          <ol className="text-sm text-muted mb-4 space-y-1 list-decimal list-inside">
            <li>Install <strong className="text-foreground">Node.js</strong> (npm) and <strong className="text-foreground">Rust</strong>.</li>
            <li>Clone/download the repository.</li>
            <li>Go to the project directory.</li>
            <li>Install dependencies and start:</li>
          </ol>
          <div className="bg-background rounded-xl p-4 font-mono text-sm text-muted space-y-1">
            <div><span className="text-accent-blue">$</span> git clone https://github.com/Redysz/Graphoria.git</div>
            <div><span className="text-accent-blue">$</span> cd Graphoria</div>
            <div><span className="text-accent-blue">$</span> npm install</div>
            <div><span className="text-accent-blue">$</span> npm run tauri dev</div>
          </div>
          <p className="text-xs text-muted mt-3">
            Requires: Node.js (npm), Rust (cargo). On Windows/PowerShell, if you see a script execution error, run: <code className="text-accent-blue">Set-ExecutionPolicy RemoteSigned -Scope CurrentUser</code>
          </p>
          <div className="mt-4">
            <a
              href="https://github.com/Redysz/Graphoria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-blue hover:underline font-medium text-sm"
            >
              <Github size={16} />
              View source on GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
