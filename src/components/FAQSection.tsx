import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HOMESTAY } from "@/lib/homestay";

const FAQS = [
  {
    question: "Where is Prem Homestay Cottage located?",
    answer:
      "The property is listed at Village Hawani, near Sundernagar, in Mandi district, Himachal Pradesh 175018.",
  },
  {
    question: "How can I enquire about a stay?",
    answer: `Call ${HOMESTAY.phoneDisplay} or use the website's WhatsApp enquiry form.`,
  },
  {
    question: "How much does a stay cost?",
    answer:
      "The supplied listing shows an indicative price of approximately ₹739. Contact the property to confirm the current rate for your dates.",
  },
  {
    question: "Can I enquire about room facilities?",
    answer:
      "Yes. Contact the property directly to confirm available room types, facilities and occupancy details.",
  },
  {
    question: "Is the property suitable for a stopover?",
    answer:
      "Its location near Sundernagar and the Chandigarh–Manali highway corridor may be convenient for some travelers. Plan your route and confirm access before traveling.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer: "Contact the property to confirm current timings.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-beige py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-4 text-xs font-semibold tracking-wide text-earth uppercase">
            Good to know
          </p>
          <h2 className="font-display text-3xl font-semibold text-forest-deep sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-4">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="rounded-2xl border border-border bg-card px-6 shadow-sm last:border-b"
            >
              <AccordionTrigger className="py-4 text-left font-display text-base font-semibold text-forest-deep hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
