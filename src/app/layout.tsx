import type { Metadata } from "next";
import { Big_Shoulders, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import JsonLd from "@/components/JsonLd";
import { eventSeriesSchema, localBusinessSchema } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/site";

// Propriedade GA4 dedicada "Site Usualdance Festival" (stream "Web Fluxo
// Festival" em festival.usualdance.com), separada do usualdance.com.
const GA_MEASUREMENT_ID = "G-BZRLX8M8WT";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Nos vemos em 2027`,
    template: `%s | ${SITE_NAME}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bigShoulders.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <JsonLd data={eventSeriesSchema} />
        <JsonLd data={localBusinessSchema} />
        <SiteShell>{children}</SiteShell>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
