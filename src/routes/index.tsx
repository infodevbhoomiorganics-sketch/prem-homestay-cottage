import { createFileRoute } from "@tanstack/react-router";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingEnquiry from "@/components/BookingEnquiry";
import AboutSection from "@/components/AboutSection";
import StaySection from "@/components/StaySection";
import ExperienceSection from "@/components/ExperienceSection";
import AttractionsSection from "@/components/AttractionsSection";
import WhyContactSection from "@/components/WhyContactSection";
import LocationSection from "@/components/LocationSection";
import RatingPriceSection from "@/components/RatingPriceSection";
import FAQSection from "@/components/FAQSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { HOMESTAY } from "@/lib/homestay";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: HOMESTAY.name,
  description:
    "A peaceful homestay in Village Hawani, near Sundernagar, in the Mandi district of Himachal Pradesh — a welcoming base for travelers exploring the region or traveling toward Kullu and Manali.",
  telephone: HOMESTAY.phoneDial,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Prem Home Stays Cottage, Village Hawani, Post Office Sundernagar-1",
    addressLocality: "Sundernagar",
    addressRegion: "Himachal Pradesh",
    postalCode: "175018",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "3.9",
    reviewCount: "137",
  },
  hasMap: HOMESTAY.mapEmbedUrl,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prem Homestay Cottage | Homestay near Sundernagar, Mandi, Himachal Pradesh" },
      {
        name: "description",
        content:
          "Prem Homestay Cottage in Village Hawani, near Sundernagar, Mandi district. A peaceful rural base for exploring Himachal Pradesh or travelling toward Kullu and Manali. Enquire on WhatsApp or call +91 98177 00026.",
      },
      { property: "og:title", content: "Prem Homestay Cottage — Homestay near Sundernagar, Mandi" },
      {
        property: "og:description",
        content:
          "A peaceful homestay in Village Hawani, near Sundernagar, Mandi district, Himachal Pradesh. Enquire about your stay on WhatsApp or call +91 98177 00026.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Prem Homestay Cottage — Homestay near Sundernagar, Mandi",
      },
      {
        name: "twitter:description",
        content:
          "A peaceful homestay in Village Hawani, near Sundernagar, Mandi district, Himachal Pradesh.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Work+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BookingEnquiry />
        <AboutSection />
        <StaySection />
        <ExperienceSection />
        <AttractionsSection />
        <WhyContactSection />
        <LocationSection />
        <RatingPriceSection />
        <FAQSection />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
