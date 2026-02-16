import Image from "next/image";
import Link from "next/link";
import { Github, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/icons/graphoria-icon.svg"
                alt="Graphoria"
                width={32}
                height={32}
              />
              <span className="text-lg font-bold gradient-text">Graphoria</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              A powerful Git GUI client that visualizes your entire repository as an interactive directed acyclic graph.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted">Pages</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/docs", label: "Documentation" },
                { href: "/news", label: "News" },
                { href: "/download", label: "Download" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted">Community</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Redysz/Graphoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Github size={14} /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Redysz/Graphoria/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Report an Issue
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Redysz/Graphoria/blob/master/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Contribute
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@graphoria.dev"
                  className="text-sm text-muted hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Mail size={14} /> contact@graphoria.dev
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Graphoria. Free and open source software.
          </p>
          <p className="text-sm text-muted flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400" /> by the Graphoria team
          </p>
        </div>
      </div>
    </footer>
  );
}
