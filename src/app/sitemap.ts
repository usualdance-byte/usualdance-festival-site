import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/ultima-edicao", changeFrequency: "monthly", priority: 0.8 },
  { path: "/galeria", changeFrequency: "monthly", priority: 0.6 },
  { path: "/politica-de-privacidade", changeFrequency: "yearly", priority: 0.1 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
