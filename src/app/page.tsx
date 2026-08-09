import Link from "next/link";
import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";
import WhatsAppButton from "@/components/WhatsAppButton";
import { pageMetadata } from "@/lib/seo";
import { ABOUT_TEXT, FAQ_ITEMS } from "@/lib/festival-data";
import { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_URL, VENUE, WHATSAPP_GERAL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Usualdance Festival — Próxima edição em breve",
  description:
    "Cadastre-se para saber em primeira mão quando abrem as inscrições da próxima edição do Usualdance Festival, em Votuporanga/SP.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-surface to-black">
        <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-white/70 sm:text-sm">
            Próxima edição em breve
          </p>
          <h1 className="mt-3 font-display text-[2.4rem] uppercase leading-none text-white sm:text-[4.5rem]">
            Usualdance
            <br />
            Festival
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/85 sm:text-base">
            {ABOUT_TEXT}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
          </div>
        </div>
      </section>

      {/* CAPTAÇÃO */}
      <section id="captacao" className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <LeadForm />
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-white sm:text-4xl">Sobre o festival</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{ABOUT_TEXT}</p>
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
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-accent transition hover:text-white"
          >
            Abrir no Google Maps →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl text-white sm:text-4xl">
          Perguntas frequentes
        </h2>
        <div className="mt-8">
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
