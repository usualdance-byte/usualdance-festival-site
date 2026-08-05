export const SITE_URL = "https://festival.usualdance.com";
export const SITE_NAME = "Usualdance Festival";
export const SITE_SLOGAN = "Dança, mostra e competição em Votuporanga";

export const PHONE_DISPLAY = "+55 17 99789-8187";
export const PHONE_E164 = "5517997898187";
export const EMAIL = "contato@usualdance.com";

export const VENUE = {
  name: 'Concha Acústica "Prof. Geraldo Alves Machado"',
  street: "R. São Paulo, 4534",
  neighborhood: "Patrimônio Velho",
  city: "Votuporanga",
  state: "SP",
  zip: "15500-003",
};

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    `${VENUE.name}, ${VENUE.street}, ${VENUE.neighborhood}, ${VENUE.city} - ${VENUE.state}`
  );

export const SOCIAL = {
  instagram: "https://www.instagram.com/usualdance",
  tiktok: "https://tiktok.com/@usualdance",
  youtube: "https://youtube.com/@usualdance",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_GERAL = whatsappUrl(
  "Olá! Vim do site do Usualdance Festival e quero saber mais sobre a próxima edição."
);
