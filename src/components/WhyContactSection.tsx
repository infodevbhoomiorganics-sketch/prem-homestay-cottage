import { Compass, Leaf, PhoneCall, Route } from "lucide-react";

const FEATURES = [
  {
    icon: Leaf,
    title: "Peaceful Setting",
    text: "Located in the rural surroundings of Village Hawani, away from the rush of the highway towns.",
  },
  {
    icon: Compass,
    title: "Regional Exploration",
    text: "A starting point for exploring Sundernagar, the Mandi district and its surrounding valleys.",
  },
  {
    icon: PhoneCall,
    title: "Direct Enquiries",
    text: "Contact the property directly to discuss availability, rates and the details of your stay.",
  },
  {
    icon: Route,
    title: "Journey Planning",
    text: "Ask about a stay when traveling through the region along the Chandigarh–Manali highway corridor.",
  },
];

export default function WhyContactSection() {
  return (
    <section className="bg-beige py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-wide text-earth uppercase">
            Why enquire here
          </p>
          <h2 className="font-display text-3xl font-semibold text-forest-deep sm:text-4xl">
            Why Contact Prem Homestay Cottage?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Speaking with the property directly is the simplest way to plan a
            stay that fits your route and your dates.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-3xl bg-card p-7 text-center shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest-soft/60 text-forest">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-forest-deep">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
