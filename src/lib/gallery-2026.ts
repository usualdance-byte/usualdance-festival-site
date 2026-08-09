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

function photo(n: number): GalleryPhoto {
  const [width, height] = dims[n] ?? [933, 1400];
  return {
    file: `festival-foto-${String(n).padStart(2, "0")}`,
    alt: "Apresentação na edição 2026 do Usualdance Festival",
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
