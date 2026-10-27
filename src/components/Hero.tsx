import { MapPin, MessageCircle, Mountain, TreePine } from "lucide-react";
import cottageExterior from "@/assets/cottage-exterior.jpg";
import cottageSignboard from "@/assets/cottage-signboard.jpg";
import { createWhatsAppEnquiry, EMPTY_ENQUIRY } from "@/lib/homestay";

const HIGHLIGHTS = [
  { icon: MapPin, label: "Village Hawani, Sundernagar" },
  { icon: Mountain, label: "Mandi district, Himachal Pradesh" },
  { icon: TreePine, label: "A peaceful rural setting" },
];

export default function Hero() {
  const whatsappUrl = createWhatsAppEnquiry(EMPTY_ENQUIRY);

  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      {/* Decorative nature shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-forest-soft/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -right-32 h-96 w-96 rounded-full bg-earth-soft/70 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-14 pb-16 sm:px-6 lg:grid-cols-2 lg:pt-20 lg:pb-24">
        <div className="animate-fade-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-wide text-earth uppercase">
            <TreePine className="h-4 w-4" aria-hidden="true" />
            Homestay in Village Hawani, near Sundernagar
          </p>
          <h1 className="font-display text-4xl leading-tight font-semibold text-forest-deep sm:text-5xl lg:text-6xl">
            Find Your Peaceful Stay in the Hills of Himachal
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Welcome to Prem Homestay Cottage, nestled in the tranquil
            surroundings of Village Hawani near Sundernagar, Mandi. A welcoming
            base for travelers exploring Himachal Pradesh or journeying toward
            the Kullu and Manali valleys.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-forest-deep focus-visible:outline-2 focus-visible:outline-ring"
            >
              Enquire About Your Stay
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary bg-card px-6 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest-soft/50 focus-visible:outline-2 focus-visible:outline-ring"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Us
            </a>
            <a
              href="#location"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-forest underline-offset-4 transition-colors hover:text-forest-deep hover:underline focus-visible:outline-2 focus-visible:outline-ring"
            >
              Explore the Location
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-earth"
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-fade-up">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -top-6 -right-6 h-28 w-28 rounded-full border-4 border-dashed border-leaf/40 animate-float"
            />
            <img
              src={cottageExterior}
              alt="Prem Homestay Cottage building in Village Hawani with balconies overlooking the valley"
              className="relative w-full rounded-4xl object-cover shadow-xl"
              width={669}
              height={458}
            />
            <img
              src={cottageSignboard}
              alt="Front of Prem Homestay Cottage with its blue signboard, Village Hawani, Sundernagar"
              className="absolute -bottom-10 -left-4 hidden w-44 rounded-2xl border-4 border-card object-cover shadow-lg sm:block sm:w-56"
              width={611}
              height={220}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
