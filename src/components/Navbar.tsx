import { useState } from "react";
import { Menu, X, TreePine } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stay Experience", href: "#stay" },
  { label: "Nearby Places", href: "#nearby" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-cream/90 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a
          href="#home"
          className="flex items-center gap-2 rounded-md font-display text-lg font-semibold text-forest-deep focus-visible:outline-2 focus-visible:outline-ring"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <TreePine className="h-5 w-5" aria-hidden="true" />
          </span>
          Prem Homestay Cottage
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md text-sm font-medium text-foreground/80 transition-colors hover:text-forest focus-visible:outline-2 focus-visible:outline-ring"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#enquiry"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-forest-deep focus-visible:outline-2 focus-visible:outline-ring sm:inline-flex"
          >
            Enquire Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-ring lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-cream lg:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#enquiry"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground focus-visible:outline-2 focus-visible:outline-ring"
              >
                Enquire Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
