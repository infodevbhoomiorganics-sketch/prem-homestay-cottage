import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import {
  createWhatsAppEnquiry,
  EMPTY_ENQUIRY,
  HOMESTAY,
} from "@/lib/homestay";

export default function LocationSection() {
  const whatsappUrl = createWhatsAppEnquiry(EMPTY_ENQUIRY);

  return (
    <section id="location" className="scroll-mt-24 bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-wide text-earth uppercase">
            Location
          </p>
          <h2 className="font-display text-3xl font-semibold text-forest-deep sm:text-4xl">
            Finding Us in Village Hawani
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The cottage is in the Sundernagar area of Mandi district, along
            the Chandigarh–Manali highway corridor. Use the map below to see
            the exact listed position before you travel.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-card p-7 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-soft/60 text-forest">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                Full address
              </h3>
              <p className="mt-2 leading-relaxed text-foreground">
                {HOMESTAY.addressLine}
              </p>
              <a
                href={`tel:${HOMESTAY.phoneDial}`}
                className="mt-4 inline-flex items-center gap-2 font-semibold text-forest underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-ring"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {HOMESTAY.phoneDisplay}
              </a>
            </div>

            <div className="grid gap-3">
              <a
                href={HOMESTAY.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-forest-deep focus-visible:outline-2 focus-visible:outline-ring"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </a>
              <a
                href={`tel:${HOMESTAY.phoneDial}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-card px-6 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest-soft/50 focus-visible:outline-2 focus-visible:outline-ring"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call the Property
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-card px-6 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest-soft/50 focus-visible:outline-2 focus-visible:outline-ring"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Enquiry
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <iframe
              src={HOMESTAY.mapEmbedUrl}
              title="Google Map showing the location of Prem Homestay Cottage, Village Hawani, Sundernagar, Mandi district, Himachal Pradesh"
              className="h-full min-h-[360px] w-full border-0 lg:min-h-[460px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
