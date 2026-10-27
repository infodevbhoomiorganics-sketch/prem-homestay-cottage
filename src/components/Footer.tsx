import { MapPin, Phone, TreePine } from "lucide-react";
import { HOMESTAY } from "@/lib/homestay";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stay Experience", href: "#stay" },
  { label: "Nearby Places", href: "#nearby" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-forest-deep text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 font-display text-xl font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream">
                <TreePine className="h-5 w-5" aria-hidden="true" />
              </span>
              {HOMESTAY.name}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/75">
              A peaceful homestay in Village Hawani, near Sundernagar, in the
              Mandi district of Himachal Pradesh.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-wide text-sun uppercase">
              Contact
            </h2>
            <p className="mt-4 flex gap-2 text-sm leading-relaxed text-cream/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{HOMESTAY.addressLine}</span>
            </p>
            <a
              href={`tel:${HOMESTAY.phoneDial}`}
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-cream underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-ring"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {HOMESTAY.phoneDisplay}
            </a>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-wide text-sun uppercase">
              Explore
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/80 underline-offset-4 transition-colors hover:text-cream hover:underline focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6 text-center text-xs text-cream/60">
          © {new Date().getFullYear()} {HOMESTAY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
