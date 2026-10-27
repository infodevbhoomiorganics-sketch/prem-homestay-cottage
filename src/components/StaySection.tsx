import { BedDouble, Luggage, MessageCircle, Users } from "lucide-react";
import cottageBedroom from "@/assets/cottage-bedroom.jpg";
import cottageStaircase from "@/assets/cottage-staircase.jpg";
import { createWhatsAppEnquiry, EMPTY_ENQUIRY } from "@/lib/homestay";

const CARDS = [
  {
    icon: BedDouble,
    title: "Stay Enquiries",
    text: "Ask about available accommodation, current rates and booking conditions for your travel dates.",
  },
  {
    icon: Users,
    title: "Family and Group Enquiries",
    text: "Planning to travel together? Contact the property to discuss arrangements for families and groups.",
  },
  {
    icon: Luggage,
    title: "Travel Stopover Enquiries",
    text: "Breaking up a journey through Himachal? Enquire about a comfortable pause near Sundernagar.",
  },
];

export default function StaySection() {
  const whatsappUrl = createWhatsAppEnquiry(EMPTY_ENQUIRY);

  return (
    <section id="stay" className="scroll-mt-24 bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-wide text-earth uppercase">
            Your stay
          </p>
          <h2 className="font-display text-3xl font-semibold text-forest-deep sm:text-4xl">
            Make Your Himachal Journey Comfortable
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Guests are welcome to contact the property directly to ask about
            available accommodation, current rates, room facilities and
            booking conditions. Share your travel dates and the cottage will
            help you plan a comfortable stay.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CARDS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-3xl bg-card p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-soft/60 text-forest">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-forest-deep">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid items-center gap-8 rounded-4xl bg-beige p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={cottageBedroom}
              alt="Guest bedroom at Prem Homestay Cottage with a made-up double bed"
              className="w-full rounded-3xl object-cover shadow-md"
              width={678}
              height={452}
            />
            <img
              src={cottageStaircase}
              alt="Interior staircase with potted plants inside Prem Homestay Cottage"
              className="mt-6 w-full rounded-3xl object-cover shadow-md"
              width={375}
              height={500}
            />
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold text-forest-deep">
              Curious about the rooms?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The best way to know what is available for your dates is simply
              to ask. Message the property on WhatsApp or call to discuss room
              options and rates before you travel.
            </p>
            <a
              href="#enquiry"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-forest-deep focus-visible:outline-2 focus-visible:outline-ring"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Ask About Available Rooms
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              Photographs show the property; room availability and facilities
              are confirmed by the property on enquiry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
