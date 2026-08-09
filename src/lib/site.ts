export const SITE_URL = "https://festival.usualdance.com";
export const SITE_NAME = "Usualdance Festival";
export const SITE_SLOGAN = "Dança, mostra e competição em Votuporanga";

export const PHONE_DISPLAY = "+55 17 99789-8187";
export const PHONE_E164 = "5517997898187";
export const EMAIL = "festival@usualdance.com";

export const VENUE = {
  name: 'Concha Acústica "Prof. Geraldo Alves Machado"',
  street: "R. São Paulo, 4534",
  neighborhood: "Patrimônio Velho",
  city: "Votuporanga",
  state: "SP",
  zip: "15500-003",
  lat: -20.421205,
  lng: -49.9748894,
};

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    `${VENUE.name}, ${VENUE.street}, ${VENUE.neighborhood}, ${VENUE.city} - ${VENUE.state}`
  );

export const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${VENUE.lat},${VENUE.lng}&z=16&output=embed`;

export const SOCIAL = {
  instagram: "https://www.instagram.com/usualdance.festival",
  tiktok: "https://tiktok.com/@usualdance.festival",
  youtube: "https://youtube.com/@usualdance",
};

export const EXTERNAL = {
  fotop: "https://fotop.com/fotos/eventos?evento=296701",
  edition2026PlaylistId: "PLHGBatdxB7xI",
  edition2026PlaylistUrl: "https://www.youtube.com/playlist?list=PLHGBatdxB7xI",
  // Capa oficial da playlist no YouTube (via oEmbed) — atualizar aqui se o
  // Ticko trocar a capa/primeiro vídeo da playlist lá no YouTube.
  edition2026PlaylistThumbnailId: "5yDznj_6fhE",
  teaserVideoId: "R72z2cvYEXU",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_GERAL = whatsappUrl(
  "Olá! Vim do site do Usualdance Festival e quero saber mais sobre a próxima edição."
);
