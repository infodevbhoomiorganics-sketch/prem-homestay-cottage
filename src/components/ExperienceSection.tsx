import { Compass, Lake, Route, TreePine } from "lucide-react";
import villageFields from "@/assets/village-fields.jpg";
import balconyView from "@/assets/balcony-view.jpg";


const THEMES = [
  {
    icon: TreeIcon,
    title: "A rural setting in Village Hawani",
    text: "Wake up in the quiet of a Himachali village, where daily life moves at the pace of the fields and hills around it.",
  },
  {
    icon: Compass,
    title: "Discovering the Mandi district",
    text: "Use the cottage as a base to explore the wider Mandi area — its towns, temples and terraced countryside.",
  },
  {
    icon: Route,
    title: "A break on a longer journey",
    text: "Traveling through Himachal Pradesh? A pause near Sundernagar can make the road to Kullu and Manali more relaxed.",
  },
  {
    icon: Lake,
    title: "Lakes, valleys and local surroundings",
    text: "The region around Sundernagar invites slow exploration — lakes, valleys and village paths within easy reach.",
  },
];

import { TreePine as TreeIcon } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-wide text-earth uppercase">
              The experience
            </p>
            <h2 className="font-display text-3xl font-semibold text-forest-deep sm:text-4xl">
              Slow Mornings and Hill Country Evenings
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Staying near Sundernagar is about the setting as much as the
              stay — the rhythm of a rural village, the scale of the Mandi
              hills, and the ease of a location on the Chandigarh–Manali
              highway corridor.
            </p>

            <ul className="mt-8 space-y-6">
              {THEMES.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-soft/60 text-forest">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-forest-deep">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              src={villageFields}
              alt="Green fields and village landscape around Village Hawani near Sundernagar"
              className="w-full rounded-4xl object-cover shadow-lg"
              width={765}
              height={1020}
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 hidden h-24 w-24 rounded-full bg-sun/40 blur-2xl md:block"
            />
          </div>
        </div>

        <figure className="mt-14">
          <img
            src={balconyView}
            alt="Hills and hazy valley scenery in the countryside around Sundernagar"
            className="w-full rounded-4xl object-cover shadow-lg"
            width={1360}
            height={612}
          />
          <figcaption className="mt-3 text-center text-xs text-muted-foreground">
            Scenery in the hills around Sundernagar, Mandi district.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
