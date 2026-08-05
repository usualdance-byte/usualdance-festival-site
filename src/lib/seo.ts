import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site";

interface PageSeoInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function pageMetadata({
  title,
  description,
  path,
  ogImage = "/images/og-image.jpg",
}: PageSeoInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const imageUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: "pt_BR",
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
