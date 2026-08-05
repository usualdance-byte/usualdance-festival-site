import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Política de Privacidade",
  description: "Como o Usualdance Festival trata os dados cadastrados no site.",
  path: "/politica-de-privacidade",
});

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl text-white sm:text-4xl">
        Política de Privacidade
      </h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted sm:text-base">
        <p>
          Este site coleta nome, e-mail e WhatsApp de pessoas interessadas em
          receber informações sobre a próxima edição do Usualdance Festival,
          mediante consentimento explícito no momento do cadastro.
        </p>
        <p>
          Os dados são armazenados em banco de dados próprio e utilizados
          exclusivamente para contato sobre novidades e abertura de
          inscrições do festival. Não compartilhamos esses dados com
          terceiros para fins de marketing.
        </p>
        <p>
          Você pode solicitar a exclusão dos seus dados a qualquer momento
          entrando em contato pelo e-mail{" "}
          <a href={`mailto:${EMAIL}`} className="text-accent underline">
            {EMAIL}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
