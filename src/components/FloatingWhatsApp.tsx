import { MessageCircle } from "lucide-react";
import { createWhatsAppEnquiry, EMPTY_ENQUIRY } from "@/lib/homestay";

export default function FloatingWhatsApp() {
  return (
    <a
      href={createWhatsAppEnquiry(EMPTY_ENQUIRY)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-ring"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
