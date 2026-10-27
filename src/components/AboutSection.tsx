import { MapPin, Mountain, TreePine, Users } from "lucide-react";
import cottageSignboard from "@/assets/cottage-signboard.jpg";
import cottageExterior from "@/assets/cottage-exterior.jpg";

const POINTS = [
  {
    icon: MapPin,
    title: "Village Hawani, near Sundernagar",
    text: "A rural address in the Mandi district of Himachal Pradesh, close to Sundernagar town.",
  },
  {
    icon: TreePine,
    title: "Peaceful countryside",
    text: "The cottage sits amid the quiet rural surroundings that define this part of the district.",
  },
  {
    icon: Mountain,
    title: "A base for the region",
    text: "Well placed for exploring the Mandi area and for journeys along the Chandigarh–Manali highway corridor.",
  },
  {
    icon: Users,
    title: "Talk to the property",
    text: "Ask directly about available rooms, current rates and what suits your travel dates.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <img
            src={cottageSignboard}
            alt="Prem Homestay Cottage with its signboard in Village Hawani, Sundernagar"
            className="w-full rounded-4xl object-cover shadow-lg"
            width={611}
            height={220}
          />
          <img
            src={cottageExterior}
            alt="Balconies of the cottage building overlooking the valley near Sundernagar"
            className="absolute -bottom-8 -right-2 hidden w-52 rounded-3xl border-4 border-cream object-cover shadow-xl md:block md:w-64"
            width={669}
            height={458}
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-4 text-xs font-semibold tracking-wide text-earth uppercase">
            About the homestay
          </p>
          <h2 className="font-display text-3xl font-semibold text-forest-deep sm:text-4xl">
            A Relaxed Stay in the Heart of Mandi District
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Prem Homestay Cottage is located in Village Hawani, near
            Sundernagar, in the Mandi district of Himachal Pradesh. Set in
            peaceful rural surroundings, the cottage offers a simple,
            welcoming place to pause — whether you are exploring the Mandi
            area or breaking up the journey toward the Kullu and Manali
            valleys.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The homestay's position near the Sundernagar region makes it a
            convenient base for discovering nearby lakes, valleys and village
            landscapes, with easy access along the Chandigarh–Manali highway
            corridor.
          </p>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {POINTS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-2xl bg-card p-4 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-soft/60 text-forest">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-forest-deep">
                  {title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
