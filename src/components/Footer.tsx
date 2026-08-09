import Image from "next/image";
import Link from "next/link";
import { EMAIL, SITE_SLOGAN, SOCIAL, WHATSAPP_GERAL } from "@/lib/site";
import { InstagramIcon, TikTokIcon, YouTubeIcon } from "./SocialIcons";

const SOCIAL_LINKS = [
  { label: "Instagram", href: SOCIAL.instagram, Icon: InstagramIcon },
  { label: "TikTok", href: SOCIAL.tiktok, Icon: TikTokIcon },
  { label: "YouTube", href: SOCIAL.youtube, Icon: YouTubeIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/images/logo-branca.webp"
              alt="Usualdance Festival"
              width={800}
              height={267}
              className="h-8 w-auto"
            />
            <p className="mt-3 text-sm text-muted">{SITE_SLOGAN}</p>
            <ul className="mt-4 flex gap-4">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-white transition hover:text-accent"
                  >
                    <s.Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contato
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a href={`mailto:${EMAIL}`} className="transition hover:text-accent">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_GERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <Link href="/ultima-edicao" className="transition hover:text-accent">
                  Última edição
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="transition hover:text-accent">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/#captacao" className="transition hover:text-accent">
                  Cadastre-se pra próxima edição
                </Link>
              </li>
              <li>
                <a
                  href="https://usualdance.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-accent"
                >
                  usualdance.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-muted">
          <p>
            © {new Date().getFullYear()} Usualdance Festival. Todos os Direitos Reservados |{" "}
            <Link href="/politica-de-privacidade" className="underline hover:text-white">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
