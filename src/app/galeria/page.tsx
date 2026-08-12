import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhotoMarquee from "@/components/PhotoMarquee";
import { LAST_EDITION } from "@/lib/festival-data";
import { FESTIVAL_HISTORY, LEGACY_EDITIONS } from "@/lib/editions";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Galeria",
  description:
    "Arquivo com fotos e vídeos de todas as edições já realizadas do Usualdance Festival e do seu antecessor, o Gravidade Festival, em Votuporanga/SP.",
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
            Fotos e vídeos de todas as edições já realizadas do Usualdance Festival — e do Gravidade
            Festival, o evento que deu origem a ele.
          </p>
        </div>
      </section>

      {/* EDIÇÃO MAIS RECENTE */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 rounded-2xl border border-lime/30 bg-surface p-6 sm:grid-cols-[minmax(0,280px)_1fr] sm:items-center sm:p-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:aspect-square">
              <Image
                src="/images/festival-foto-06.webp"
                alt="Bailarinas de ballet em pontas no palco da Usualdance Festival 2026"
                fill
                sizes="(min-width: 640px) 280px, 100vw"
                className="object-cover"
                style={{ objectPosition: "50% 25%" }}
              />
            </div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-lime">
                  Edição mais recente
                </p>
                <h2 className="mt-1 font-display text-2xl text-white sm:text-3xl">
                  Usualdance Festival {LAST_EDITION.year}
                </h2>
                <p className="mt-1 text-sm text-muted">Realizada em {LAST_EDITION.date}.</p>
              </div>
              <Link
                href="/ultima-edicao"
                className="inline-flex items-center justify-center rounded-full bg-lime px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-95"
              >
                Ver retrospectiva completa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HISTÓRIA: DO GRAVIDADE AO USUALDANCE */}
      <section className="border-y border-white/10 bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl text-white sm:text-3xl">
            Do Gravidade Festival ao Usualdance Festival
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">{FESTIVAL_HISTORY.text}</p>
        </div>
      </section>

      {/* EDIÇÕES ANTERIORES (GRAVIDADE FESTIVAL) */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-2xl text-white sm:text-3xl">
          Edições anteriores
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted sm:text-base">
          Antes de virar Usualdance Festival, o evento se chamava Gravidade Festival. Reveja as edições
          de 2018, 2019 e 2022.
        </p>

        <div className="mt-12 space-y-16">
          {LEGACY_EDITIONS.map((edition) => (
            <div key={edition.year} className="border-t border-white/10 pt-10 first:border-t-0 first:pt-0">
              <div className="flex flex-wrap items-end justify-between gap-4 px-4 sm:px-0">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                    {edition.brand}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-white sm:text-2xl">{edition.year}</h3>
                </div>
                <a
                  href={edition.playlistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
                >
                  Ver vídeos no YouTube
                </a>
              </div>
              <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2">
                <PhotoMarquee columns={edition.photos} />
              </div>
            </div>
          ))}
        </div>
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
