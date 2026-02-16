import Image from "next/image";
import Link from "next/link";
import HeroGallery from "@/components/HeroGallery";
import Features from "@/components/Features";
import Themes from "@/components/Themes";
import DownloadSection from "@/components/DownloadSection";
import { Github, ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20">
        {/* Radial glow behind hero */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto mb-12">
          <div className="flex justify-center mb-8">
            <Image
              src="/icons/graphoria-logo.svg"
              alt="Graphoria"
              width={320}
              height={80}
              priority
              className="h-16 md:h-20 w-auto"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Git as a{" "}
            <span className="gradient-text">Graph</span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            A powerful, open-source Git GUI that visualizes your entire repository as an interactive directed acyclic graph. Branch, merge, rebase, and predict — all visually.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/download"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-accent-purple/20"
            >
              Download for free
            </Link>
            <a
              href="https://github.com/Redysz/Graphoria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-border hover:border-accent-blue/50 text-foreground font-medium text-lg transition-colors"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>
        </div>

        {/* Gallery */}
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <HeroGallery />
        </div>

        {/* Scroll indicator */}
        <a href="#features" className="mt-8 animate-bounce text-muted hover:text-foreground transition-colors cursor-pointer">
          <ArrowDown size={24} />
        </a>
      </section>

      {/* ===== FEATURES ===== */}
      <Features />

      {/* ===== THEMES ===== */}
      <Themes />

      {/* ===== OPEN SOURCE SECTION ===== */}
      <section className="relative py-32 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Built by the community.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
            Graphoria is free and open-source software. Built with Tauri, React, and Rust — designed to be fast, extensible, and cross-platform. Join us and help shape the future of Git tooling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/Redysz/Graphoria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-accent-blue/50 text-foreground font-medium transition-colors"
            >
              <Github size={18} />
              Contribute on GitHub
            </a>
            <a
              href="https://github.com/Redysz/Graphoria/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue hover:underline font-medium"
            >
              Report an issue →
            </a>
          </div>
        </div>
      </section>

      {/* ===== DOWNLOAD ===== */}
      <DownloadSection />
    </>
  );
}
