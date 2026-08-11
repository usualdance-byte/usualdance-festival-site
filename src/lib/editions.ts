import type { GalleryColumn } from "@/components/PhotoMarquee";

export interface LegacyEdition {
  year: string;
  brand: string;
  playlistUrl: string;
  photos: GalleryColumn[];
}

// Fotos selecionadas do acervo (apresentações, workshops e atividades) de
// cada edição do Gravidade Festival, nome anterior do Usualdance Festival.
export const LEGACY_EDITIONS: LegacyEdition[] = [
  {
    year: "2022",
    brand: "Gravidade Festival",
    playlistUrl: "https://youtube.com/playlist?list=PLHn86WhA7iE4",
    photos: [
      { type: "single", photo: { file: "editions/gravidade-2022-01", alt: "Premiação da mostra competitiva no Gravidade Festival 2022", width: 1400, height: 933 } },
      {
        type: "pair",
        photos: [
          { file: "editions/gravidade-2022-02", alt: "Apresentação solo de dança contemporânea no Gravidade Festival 2022", width: 1400, height: 933, focusY: 25 },
          { file: "editions/gravidade-2022-04", alt: "Apresentação solo de dança contemporânea no Gravidade Festival 2022", width: 1400, height: 933, focusY: 45 },
        ],
      },
      { type: "single", photo: { file: "editions/gravidade-2022-06", alt: "Workshop de ballet do Gravidade Festival 2022", width: 1400, height: 933 } },
      {
        type: "pair",
        photos: [
          { file: "editions/gravidade-2022-03", alt: "Plateia do Gravidade Festival 2022", width: 1400, height: 933, focusY: 30 },
          { file: "editions/gravidade-2022-05", alt: "Bastidores da premiação do Gravidade Festival 2022", width: 1400, height: 933, focusY: 25 },
        ],
      },
    ],
  },
  {
    year: "2019",
    brand: "Gravidade Festival",
    playlistUrl: "https://youtube.com/playlist?list=PLFAN-y2a-24E",
    photos: [
      { type: "single", photo: { file: "editions/gravidade-2019-01", alt: "Apresentação de dança no Gravidade Festival 2019", width: 1400, height: 933 } },
      {
        type: "pair",
        photos: [
          { file: "editions/gravidade-2019-02", alt: "Apresentação de dança contemporânea no Gravidade Festival 2019", width: 1400, height: 933, focusY: 55 },
          { file: "editions/gravidade-2019-03", alt: "Workshop de danças urbanas no Gravidade Festival 2019", width: 1400, height: 933, focusY: 30 },
        ],
      },
      { type: "single", photo: { file: "editions/gravidade-2019-04", alt: "Equipe e participantes do Gravidade Festival 2019", width: 1400, height: 933 } },
    ],
  },
  {
    year: "2018",
    brand: "Gravidade Festival",
    playlistUrl: "https://youtube.com/playlist?list=PLeIYtwnmLaHo",
    photos: [
      { type: "single", photo: { file: "editions/gravidade-2018-01", alt: "Apresentação de dança contemporânea no Gravidade Festival 2018", width: 1400, height: 933 } },
      { type: "single", photo: { file: "editions/gravidade-2018-03", alt: "Apresentação de ballet clássico no Gravidade Festival 2018", width: 933, height: 1400 } },
      {
        type: "pair",
        photos: [
          { file: "editions/gravidade-2018-02", alt: "Apresentação de danças urbanas no Gravidade Festival 2018", width: 1400, height: 933, focusY: 35 },
          { file: "editions/gravidade-2018-04", alt: "Apresentação de jazz no Gravidade Festival 2018", width: 1400, height: 933, focusY: 60 },
        ],
      },
      {
        type: "pair",
        photos: [
          { file: "editions/gravidade-2018-05", alt: "Bailarino do Gravidade Festival 2018 em Votuporanga", width: 1400, height: 933, focusY: 20 },
          { file: "editions/gravidade-2018-06", alt: "Bailarinas na arquibancada do Gravidade Festival 2018", width: 1400, height: 933, focusY: 35 },
        ],
      },
    ],
  },
];

export const FESTIVAL_HISTORY = {
  founded: "2018",
  previousName: "Gravidade Festival",
  previousEditionsYears: ["2018", "2019", "2022"],
  text:
    "O Usualdance Festival é a evolução natural de um movimento que começou a transformar a cena da " +
    "dança no interior paulista em 2018. Nascemos sob o nome de Gravidade Festival, onde realizamos " +
    "três edições (2018, 2019 e 2022) que marcaram a memória de centenas de bailarinos e coreógrafos. " +
    "Em 2026, chegamos à nossa 4ª edição com uma nova identidade: o Usualdance Festival herda a energia " +
    "e a seriedade do Gravidade, elevando o nível de produção e experiência para o público.",
};
