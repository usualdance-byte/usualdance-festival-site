import type { Metadata } from "next";
import Link from "next/link";
import PhotoMarquee from "@/components/PhotoMarquee";
import StatsGrid from "@/components/StatsGrid";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { GALLERY_2026_COLUMNS } from "@/lib/gallery-2026";
import { pageMetadata } from "@/lib/seo";
import {
  AGE_CATEGORIES,
  AWARD_HIGHLIGHTS,
  EDITION_STATS,
  JUDGES,
  JUDGING_CRITERIA,
  LAST_EDITION,
  STYLES,
} from "@/lib/festival-data";
import { EXTERNAL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Confira a última edição",
  description:
    "Retrospectiva da edição 2026 do Usualdance Festival: modalidades, jurados e premiação.",
  path: "/ultima-edicao",
  ogImage: "/images/og-ultima-edicao.jpg",
});

export default function UltimaEdicaoPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-white/70 sm:text-sm">
            Retrospectiva {LAST_EDITION.year}
          </p>
          <h1 className="mt-3 font-display text-3xl text-white sm:text-5xl">
            Confira a última edição
          </h1>
          <p className="mt-3 text-sm text-muted sm:text-base">
            Realizada em {LAST_EDITION.date}.
          </p>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <StatsGrid stats={EDITION_STATS} />
      </section>

      {/* GALERIA */}
      <section className="border-y border-white/10 bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-white sm:text-3xl">Galeria</h2>
          <p className="mt-3 text-sm text-muted sm:text-base">
            Cenas da edição {LAST_EDITION.year} do Usualdance Festival.
          </p>
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

      {/* VÍDEOS */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl text-white sm:text-3xl">Vídeos</h2>
        <p className="mt-3 text-sm text-muted sm:text-base">
          As apresentações da edição {LAST_EDITION.year} em vídeo.
        </p>
        <div className="mt-10">
          <YouTubeEmbed
            videoId={`videoseries?list=${EXTERNAL.edition2026PlaylistId}`}
            title={`Apresentações — Usualdance Festival ${LAST_EDITION.year}`}
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

      {/* ESTILOS & CATEGORIAS */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl text-white sm:text-4xl">
          Estilos & modalidades
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {STYLES.map((style) => (
            <span
              key={style}
              className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white"
            >
              {style}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
          {AGE_CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="rounded-xl border border-white/10 bg-surface px-4 py-6 text-center"
            >
              <p className="font-display text-xl text-accent">{cat.label}</p>
              <p className="mt-1 text-sm text-muted">{cat.range}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
          Critérios de julgamento: {JUDGING_CRITERIA.join(", ")}.
        </p>
      </section>

      {/* JURADOS */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl text-white sm:text-4xl">Jurados</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {JUDGES.map((judge) => (
              <div key={judge.name} className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <p className="font-display text-xl text-white">{judge.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  {judge.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{judge.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {judge.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIAÇÃO */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl text-white sm:text-4xl">Premiação</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {AWARD_HIGHLIGHTS.map((award) => (
            <div
              key={award.title}
              className="rounded-2xl border border-lime/20 bg-surface p-6 text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-lime">
                {award.title}
              </p>
              <p className="mt-2 font-display text-xl text-white">{award.winner}</p>
              <p className="mt-1 text-sm text-muted">{award.group}</p>
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
