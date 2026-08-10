# Usualdance Festival — site + captação de leads

Site standalone (Next.js 16 + Tailwind v4) para `festival.usualdance.com`, focado em captar
interessados (nome, e-mail, WhatsApp) para a próxima edição do festival. Tokens de design e
componentes reaproveitados de `usualdance-site-work` (site institucional `usualdance.com`).

## Rodar localmente

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Abre em `http://localhost:3020`.

Sem `DATABASE_URL` configurada, o site abre normalmente — só o envio do formulário falha (o resto da página não depende de banco).

## Estrutura

- `/` — home: hero, formulário de captação, sobre, local, FAQ.
- `/ultima-edicao` — retrospectiva da edição 2026: estilos, categorias, jurados (com foto), premiação, galeria de fotos/vídeos.
- `src/app/api/leads/route.ts` — recebe o POST do formulário, grava na tabela `festival_leads` (Postgres/Neon via addon da Vercel) e, em seguida, sincroniza (best-effort) com o Google Sheets via `GOOGLE_SHEETS_WEBHOOK_URL`.

## Checklist de setup (fora do código — precisa ser feito manualmente)

1. **Postgres na Vercel**: no projeto na Vercel, ir em Storage > Create Database > Postgres (hoje é a integração nativa com Neon) e conectar ao projeto — fica tudo dentro da mesma conta Vercel, sem cadastro externo. Rodar o SQL de `db/schema.sql` na aba "Query" do dashboard (ou via `psql "$DATABASE_URL"`). Depois, `vercel env pull .env.local` puxa `DATABASE_URL` automaticamente pro ambiente local.
2. **Google Sheets**: criar a planilha "Leads Festival Usualdance" com uma aba "Leads" (colunas: Nome, E-mail, WhatsApp, Data). Abrir Extensões > Apps Script, colar o conteúdo de `apps-script/Code.gs`, publicar como Web App (acesso "Qualquer pessoa") e copiar a URL de implantação em `GOOGLE_SHEETS_WEBHOOK_URL` (local e na Vercel).
3. **Repositório + deploy**: criar repositório GitHub (sugestão: `usualdance-byte/usualdance-festival-site`) e projeto Vercel na conta `vercel.com/usualdance`. Apontar o domínio `festival.usualdance.com` pro novo projeto (e remover o domínio customizado da CoreoHub, se ainda estiver configurado lá).

## Pendências de conteúdo

- **Logo do festival** — hoje o header/footer usam só texto ("USUALDANCE FESTIVAL"); trocar por `<Image>` se houver um logo próprio.
- **Telefone/WhatsApp e redes sociais** — assumi os mesmos do `usualdance.com` institucional (`src/lib/site.ts`); confirmar se o festival tem contato/redes próprios.

Resolvido: GA4 já usa propriedade própria (`G-BZRLX8M8WT`); `www.festival.usualdance.com` já redireciona pro domínio sem `www`; fotos da galeria e dos jurados já estão no ar.
