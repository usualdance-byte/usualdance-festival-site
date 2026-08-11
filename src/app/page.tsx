import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import WhatsAppButton from "@/components/WhatsAppButton";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { pageMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { ABOUT_TEXT, FAQ_ITEMS, FOUNDER, LAST_EDITION } from "@/lib/festival-data";
import {
  EXTERNAL,
  GOOGLE_MAPS_EMBED_URL,
  SITE_SLOGAN,
  VENUE,
  WHATSAPP_GERAL,
} from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Usualdance Festival — Nos vemos em 2027",
  description:
    "Inscreva-se para saber em primeira mão quando abrem as inscrições da próxima edição do Usualdance Festival, em Votuporanga/SP.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow="Nos vemos em 2027"
        title={
          <>
            Usualdance
            <br />
            Festival
          </>
        }
        description={SITE_SLOGAN}
        image="/images/festival-hero-mostra-competitiva.webp"
        imageAlt="Apresentação na Usualdance Festival 2026"
      >
        <a
          href="#captacao"
          className="inline-flex items-center justify-center rounded-full bg-lime px-7 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-95"
        >
          Quero ser avisado(a)
        </a>
        <Link
          href="/ultima-edicao"
          className="inline-flex items-center justify-center rounded-full border border-white px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
        >
          Ver última edição
        </Link>
      </PageHero>

      {/* TEASER */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:px-8">
          <div className="order-2 text-center sm:order-1 sm:text-left">
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              Assista o teaser
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Um gostinho do que rolou na edição {LAST_EDITION.year} — pra você já ir se
              imaginando na próxima.
            </p>
            <a
              href={EXTERNAL.fotop}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-lime px-7 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-95"
            >
              Comprar minhas fotos da edição {LAST_EDITION.year}
            </a>
          </div>
          <div className="order-1 mx-auto w-full max-w-[260px] sm:order-2 sm:max-w-xs">
            <YouTubeEmbed
              videoId={EXTERNAL.teaserVideoId}
              title="Teaser — Usualdance Festival 2026"
              aspectClassName="aspect-[9/16]"
              mode="inline"
            />
          </div>
        </div>
      </section>

      {/* CAPTAÇÃO */}
      <section id="captacao" className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <LeadForm />
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:grid-cols-2">
          <div className="text-center sm:text-left">
            <h2 className="font-display text-3xl text-white sm:text-4xl">Sobre o festival</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{ABOUT_TEXT}</p>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl">
            <Image
              src="/images/festival-foto-14.webp"
              alt="Apresentação de dança na Usualdance Festival 2026"
              fill
              sizes="(min-width: 640px) 400px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* IDEALIZADOR */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 sm:grid-cols-2">
            <div className="relative order-1 mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl sm:order-2">
              <Image
                src={`/images/${FOUNDER.photo}.webp`}
                alt={FOUNDER.name}
                fill
                sizes="(min-width: 640px) 400px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="order-2 text-center sm:order-1 sm:text-left">
              <p className="font-display text-xl text-white sm:text-2xl">{FOUNDER.name}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-lime">
                {FOUNDER.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {FOUNDER.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL */}
      <section id="local" className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Local</h2>
          <p className="mt-4 text-base font-semibold text-white sm:text-lg">{VENUE.name}</p>
          <p className="mt-1 text-sm text-muted sm:text-base">
            {VENUE.street} - {VENUE.neighborhood}, {VENUE.city} - {VENUE.state}, {VENUE.zip}
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              title={`Mapa: ${VENUE.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full sm:h-96"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl text-white sm:text-4xl">
          Perguntas frequentes
        </h2>
        <div className="mt-8">
          <JsonLd data={faqSchema(FAQ_ITEMS)} />
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-white sm:text-3xl">
            Ficou com dúvidas sobre a próxima edição?
          </h2>
          <WhatsAppButton href={WHATSAPP_GERAL} variant="lime">
            Falar no WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </>
  );
}
