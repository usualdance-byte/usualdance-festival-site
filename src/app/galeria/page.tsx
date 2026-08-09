import type { Metadata } from "next";
import Link from "next/link";
import PhotoMarquee from "@/components/PhotoMarquee";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { GALLERY_2026_COLUMNS } from "@/lib/gallery-2026";
import { LAST_EDITION } from "@/lib/festival-data";
import { pageMetadata } from "@/lib/seo";
import { EXTERNAL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Galeria",
  description:
    "Fotos e vídeos de todas as edições já realizadas do Usualdance Festival, em Votuporanga/SP.",
  path: "/galeria",
  ogImage: "/images/og-galeria.jpg",
});

export default function GaleriaPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-white/70 sm:text-sm">
            Arquivo do festival
          </p>
          <h1 className="mt-3 font-display text-3xl text-white sm:text-5xl">Galeria</h1>
          <p className="mt-3 text-sm text-muted sm:text-base">
            Fotos e vídeos de todas as edições já realizadas do Usualdance Festival.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-lime">
                  Edição {LAST_EDITION.year}
                </p>
                <h2 className="mt-1 font-display text-2xl text-white sm:text-3xl">
                  {LAST_EDITION.date}
                </h2>
              </div>
              <Link
                href="/ultima-edicao"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                Ver retrospectiva completa
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <PhotoMarquee columns={GALLERY_2026_COLUMNS} />
        </div>

        <div className="mt-8 flex justify-center px-4">
          <a
            href={EXTERNAL.fotop}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-lime px-7 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-95"
          >
            Comprar minhas fotos da edição {LAST_EDITION.year}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl text-white sm:text-3xl">Vídeos</h2>
        <p className="mt-3 text-sm text-muted sm:text-base">
          As apresentações da edição {LAST_EDITION.year} em vídeo.
        </p>
        <div className="mt-10">
          <YouTubeEmbed
            videoId={`videoseries?list=${EXTERNAL.edition2026PlaylistId}`}
            title={`Apresentações — Usualdance Festival ${LAST_EDITION.year}`}
            thumbnailVideoId={EXTERNAL.teaserVideoId}
          />
        </div>
        <a
          href={EXTERNAL.edition2026PlaylistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
        >
          Ver playlist completa no YouTube
        </a>
      </section>

      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-white sm:text-3xl">
            Quer estar na próxima edição?
          </h2>
          <Link
            href="/#captacao"
            className="inline-flex items-center justify-center rounded-full bg-lime px-7 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-95"
          >
            Quero ser avisado(a)
          </Link>
        </div>
      </section>
    </>
  );
}
