import { MessageCircle, Navigation, Phone } from "lucide-react";
import {
  createWhatsAppEnquiry,
  EMPTY_ENQUIRY,
  HOMESTAY,
} from "@/lib/homestay";

export default function FinalCta() {
  const whatsappUrl = createWhatsAppEnquiry(EMPTY_ENQUIRY);

  return (
    <section id="contact" className="scroll-mt-24 bg-cream px-4 py-16 sm:px-6 lg:py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-5xl bg-forest-deep px-6 py-14 text-center text-cream shadow-xl sm:px-12 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-leaf/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-sun/20 blur-3xl"
        />

        <div className="relative">
          <h2 className="font-display text-3xl font-semibold sm:text-5xl">
            Plan Your Stay Near Sundernagar
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-cream/85 sm:text-base">
            Contact Prem Homestay Cottage to enquire about available rooms,
            current rates and details for your travel dates.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`tel:${HOMESTAY.phoneDial}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-forest-deep shadow-md transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-ring sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {HOMESTAY.phoneDisplay}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sun px-7 py-3.5 text-sm font-semibold text-forest-deep shadow-md transition-colors hover:brightness-105 focus-visible:outline-2 focus-visible:outline-ring sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Send Enquiry on WhatsApp
            </a>
            <a
              href={HOMESTAY.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/50 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-ring sm:w-auto"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
