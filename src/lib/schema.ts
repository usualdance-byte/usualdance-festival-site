import { EMAIL, SITE_NAME, SITE_URL, SOCIAL, VENUE } from "./site";

const SOCIAL_PROFILES = [SOCIAL.instagram, SOCIAL.tiktok, SOCIAL.youtube];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#local-business`,
  name: SITE_NAME,
  url: SITE_URL,
  email: EMAIL,
  sameAs: SOCIAL_PROFILES,
  address: {
    "@type": "PostalAddress",
    streetAddress: VENUE.street,
    addressLocality: VENUE.city,
    addressRegion: VENUE.state,
    postalCode: VENUE.zip,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: VENUE.lat,
    longitude: VENUE.lng,
  },
};

export const eventSeriesSchema = {
  "@context": "https://schema.org",
  "@type": "EventSeries",
  "@id": `${SITE_URL}/#event-series`,
  name: SITE_NAME,
  url: SITE_URL,
  organizer: {
    "@type": "Organization",
    name: "Usualdance",
    url: "https://usualdance.com",
    email: EMAIL,
    sameAs: SOCIAL_PROFILES,
  },
  location: {
    "@type": "Place",
    name: VENUE.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: VENUE.street,
      addressLocality: VENUE.city,
      addressRegion: VENUE.state,
      postalCode: VENUE.zip,
      addressCountry: "BR",
    },
  },
};

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
