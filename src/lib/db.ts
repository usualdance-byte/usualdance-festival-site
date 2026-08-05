import "server-only";
import { neon } from "@neondatabase/serverless";

// Server-only: usa DATABASE_URL (ou POSTGRES_URL) injetada automaticamente
// pelo Vercel quando o addon "Postgres" (Neon) é conectado ao projeto
// (Storage > Connect Database). Em dev local, rode `vercel env pull
// .env.local` depois de conectar o banco.
function getSql() {
  const connectionString = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
  if (!connectionString) {
    throw new Error(
      "DATABASE_URL (ou POSTGRES_URL) precisa estar configurada (.env.local)."
    );
  }
  return neon(connectionString);
}

export async function insertFestivalLead(lead: {
  name: string;
  email: string;
  whatsapp: string;
}) {
  const sql = getSql();
  await sql`
    insert into festival_leads (name, email, whatsapp, consent, source)
    values (${lead.name}, ${lead.email}, ${lead.whatsapp}, true, 'festival-landing')
  `;
}
