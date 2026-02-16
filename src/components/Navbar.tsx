"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Github, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Documentation" },
  { href: "/news", label: "News" },
  { href: "/download", label: "Download" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/icons/graphoria-icon.svg"
            alt="Graphoria"
            width={36}
            height={36}
            className="transition-transform group-hover:scale-110"
          />
          <span className="text-xl font-bold gradient-text hidden sm:inline">
            Graphoria
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface-light"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://github.com/Redysz/Graphoria"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface-light"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:contact@graphoria.dev"
            className="p-2 text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface-light"
            aria-label="Contact"
          >
            <Mail size={20} />
          </a>
          <Link
            href="/download"
            className="ml-2 px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white hover:opacity-90 transition-opacity"
          >
            Download
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-muted hover:text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface-light"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 px-4 pt-3 border-t border-border/50 mt-2">
              <a
                href="https://github.com/Redysz/Graphoria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:contact@graphoria.dev"
                className="text-muted hover:text-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
