import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// `lastModified` é fixo por rota — atualizar a data manualmente quando o
// conteúdo daquela página mudar de verdade. Gerar com `new Date()` a cada
// build faz o Google achar que a página mudou toda vez, mesmo sem alteração
// real de conteúdo, o que dilui o sinal de "atualizado".
const ROUTES: {
  path: string;
  lastModified: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", lastModified: "2026-08-12", changeFrequency: "weekly", priority: 1.0 },
  { path: "/ultima-edicao", lastModified: "2026-08-12", changeFrequency: "monthly", priority: 0.8 },
  { path: "/galeria", lastModified: "2026-08-12", changeFrequency: "monthly", priority: 0.6 },
  { path: "/politica-de-privacidade", lastModified: "2026-08-05", changeFrequency: "yearly", priority: 0.1 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
