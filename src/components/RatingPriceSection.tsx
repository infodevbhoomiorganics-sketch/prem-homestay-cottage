import { IndianRupee, Star } from "lucide-react";
import { HOMESTAY } from "@/lib/homestay";

export default function RatingPriceSection() {
  return (
    <section id="listing" className="scroll-mt-24 bg-cream py-14 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-forest-deep sm:text-4xl">
            Listing Details at a Glance
          </h2>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl bg-card p-7 text-center shadow-sm">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sun/40 text-earth">
              <Star className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="mt-4 font-display text-4xl font-semibold text-forest-deep">
              {HOMESTAY.reportedRating}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              from {HOMESTAY.reportedReviewCount} reviews
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Reported rating as shown in a third-party listing.
            </p>
          </div>

          <div className="rounded-3xl bg-card p-7 text-center shadow-sm">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest-soft/60 text-forest">
              <IndianRupee className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="mt-4 font-display text-4xl font-semibold text-forest-deep">
              Approx. {HOMESTAY.indicativePrice}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              indicative listing price per stay
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Subject to dates, room type, availability and booking conditions.
            </p>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          These are supplied listing details, not guaranteed live information.
          Prices and availability may change — please confirm the current rate
          for your dates directly with the property.
        </p>
      </div>
    </section>
  );
}
