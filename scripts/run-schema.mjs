import { neon } from "@neondatabase/serverless";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE_URL não definida");
  process.exit(1);
}

const sql = neon(connectionString);

await sql`create extension if not exists pgcrypto`;
await sql`
  create table if not exists festival_leads (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    email text not null,
    whatsapp text not null,
    consent boolean not null default false,
    source text not null default 'festival-landing',
    created_at timestamptz not null default now()
  )
`;

const rows = await sql`select count(*) from festival_leads`;
console.log("OK, tabela festival_leads pronta. Linhas:", rows[0].count);
