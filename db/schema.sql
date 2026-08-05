-- Rodar uma vez no banco Vercel Postgres do projeto (dashboard Vercel >
-- Storage > seu banco > "Query" ou via `psql "$POSTGRES_URL"`).

create table if not exists festival_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  whatsapp text not null,
  consent boolean not null default false,
  source text not null default 'festival-landing',
  created_at timestamptz not null default now()
);
