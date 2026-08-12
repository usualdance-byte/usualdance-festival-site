import type { GalleryColumn, GalleryPhoto } from "@/components/PhotoMarquee";

const dims: Record<number, [number, number]> = {
  3: [1400, 933],
  17: [1400, 933],
};

// Ponto vertical (% do topo) onde o rosto fica em cada foto usada em colunas
// "pair" — calibrado a olho por foto, já que cada enquadramento é diferente.
const focusY: Record<number, number> = {
  1: 20,
  2: 38,
  5: 18,
  6: 30,
  7: 32,
  10: 22,
  11: 22,
  13: 18,
  16: 32,
  17: 35,
  20: 34,
  21: 46,
};

// Alt text descritivo por foto (accessibility + SEO de imagem) — cada uma
// descreve o que de fato aparece na cena, em vez de um texto genérico repetido.
const alts: Record<number, string> = {
  1: "Bailarinos ensaiando coreografia de dança urbana em espaço coberto na Usualdance Festival 2026",
  2: "Grupo em oficina de dança urbana com os braços erguidos na Usualdance Festival 2026",
  3: "Bailarinos em oficina de hip hop com professor de boné vermelho na Usualdance Festival 2026",
  4: "Grupo em passo sincronizado durante oficina de dança urbana na Usualdance Festival 2026",
  5: "Bailarina em movimento de chute durante oficina de dança urbana na Usualdance Festival 2026",
  6: "Bailarinas de ballet em pontas no palco da Usualdance Festival 2026",
  7: "Grupo de dança folclórica com saias floridas no palco da Usualdance Festival 2026",
  8: "Bailarina solo de dança contemporânea com sobretudo azul no palco da Usualdance Festival 2026",
  9: "Bailarino solo em efeito de fumaça no palco da Usualdance Festival 2026",
  10: "Bailarina solo de dança urbana em pose de força no palco da Usualdance Festival 2026",
  11: "Bailarina solo com figurino branco no palco da Usualdance Festival 2026",
  12: "Bailarina solo de dança urbana com moletom neon no palco da Usualdance Festival 2026",
  13: "Bailarina solo com figurino gótico e coturno no palco da Usualdance Festival 2026",
  14: "Trio de dança com lenços coloridos no palco da Usualdance Festival 2026",
  15: "Dupla de dança de salão em pose dramática no palco da Usualdance Festival 2026",
  16: "Grupo de dança contemporânea em pirâmide corporal no palco da Usualdance Festival 2026",
  17: "Equipe organizadora da Usualdance Festival 2026 posando no palco ao lado da tela de voto popular",
  18: "Grupo em coreografia de teatro musical no palco da Usualdance Festival 2026",
  19: "Grupo de bailarinas em pose coletiva no palco da Usualdance Festival 2026",
  20: "Trio de ballet clássico em cena de grupo no palco da Usualdance Festival 2026",
  21: "Dupla de dança circense com fita elástica no palco da Usualdance Festival 2026",
};

function photo(n: number): GalleryPhoto {
  const [width, height] = dims[n] ?? [933, 1400];
  return {
    file: `festival-foto-${String(n).padStart(2, "0")}`,
    alt: alts[n],
    width,
    height,
    focusY: focusY[n],
  };
}

const [
  p01, p02, p03, p04, p05, p06, p07, p08, p09, p10,
  p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21,
] = Array.from({ length: 21 }, (_, i) => photo(i + 1));

export const GALLERY_2026_COLUMNS: GalleryColumn[] = [
  { type: "single", photo: p03 },
  { type: "pair", photos: [p01, p02] },
  { type: "pair", photos: [p05, p06] },
  { type: "single", photo: p04 },
  { type: "single", photo: p14 },
  { type: "pair", photos: [p07, p10] },
  { type: "single", photo: p08 },
  { type: "pair", photos: [p11, p13] },
  { type: "single", photo: p09 },
  { type: "single", photo: p12 },
  { type: "single", photo: p15 },
  { type: "pair", photos: [p17, p16] },
  { type: "single", photo: p18 },
  { type: "single", photo: p19 },
  { type: "pair", photos: [p20, p21] },
];
