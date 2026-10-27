import { ArrowRight, Mountain, MountainSnow, Waves } from "lucide-react";
import sundernagarLake from "@/assets/sundernagar-lake.jpg";
import sundernagarValley from "@/assets/sundernagar-valley.jpg";

const PLACES = [
  {
    icon: Waves,
    image: sundernagarLake,
    alt: "Sundernagar Lake on a misty morning, surrounded by forested hills",
    title: "Sundernagar Lake",
    text: "A nearby area of interest for visitors exploring Sundernagar — a calm stretch of water set against wooded hills. Ask locally about the best time to visit.",
  },
  {
    icon: Mountain,
    image: sundernagarValley,
    alt: "Valley and mountain landscape in the region around Sundernagar, Mandi district",
    title: "Suket Valley",
    text: "The surrounding regional landscape offers plenty for travelers keen on exploring the Mandi area's countryside and valleys.",
  },
  {
    icon: Mountain,
    image: null,
    title: "Mandi",
    text: "The district's main town is a natural regional destination — a base for further travel and a place to experience local Himachali life.",
  },
  {
    icon: MountainSnow,
    image: null,
    title: "Kullu and Manali Route",
    text: "Traveling onward toward Kullu and Manali? The cottage's position near the Chandigarh–Manali highway corridor can make it a useful stopover point.",
  },
];

export default function AttractionsSection() {
  return (
    <section id="nearby" className="scroll-mt-24 bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-wide text-earth uppercase">
            Nearby places
          </p>
          <h2 className="font-display text-3xl font-semibold text-forest-deep sm:text-4xl">
            Places to Explore Around Sundernagar
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The homestay sits in a region with lakes, valleys and hill roads
            to discover. Travel times vary with the season and road
            conditions — plan your route and confirm details locally.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {PLACES.map(({ icon: Icon, image, alt, title, text }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-3xl bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              {image ? (
                <img
                  src={image}
                  alt={alt}
                  className="aspect-[16/9] w-full object-cover"
                  width={1360}
                  height={765}
                />
              ) : (
                <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-forest-soft/70 via-beige to-earth-soft/60">
                  <Icon
                    className="h-14 w-14 text-forest/50"
                    aria-hidden="true"
                  />
                </div>
              )}
              <div className="p-6 sm:p-7">
                <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-forest-deep">
                  <Icon className="h-5 w-5 text-leaf" aria-hidden="true" />
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#location"
            className="inline-flex items-center gap-2 rounded-full border border-primary bg-card px-6 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest-soft/50 focus-visible:outline-2 focus-visible:outline-ring"
          >
            See the Location
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
