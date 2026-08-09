import { NextResponse } from "next/server";
import { insertFestivalLead } from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LEAD_SOURCE = "festival-landing";

async function syncToSheet(lead: { name: string; email: string; whatsapp: string }) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lead,
        source: LEAD_SOURCE,
        created_at: new Date().toISOString(),
      }),
    });
  } catch (err) {
    // Best-effort: se o Sheets falhar, o lead já está salvo no banco.
    console.error("Erro ao sincronizar lead com o Google Sheets:", err);
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo inválido." }, { status: 400 });
  }

  const { name, email, whatsapp, consent } = (body ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Nome inválido." }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }
  if (typeof whatsapp !== "string" || whatsapp.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ error: "WhatsApp inválido." }, { status: 400 });
  }
  if (consent !== true) {
    return NextResponse.json(
      { error: "É necessário aceitar o uso dos dados." },
      { status: 400 }
    );
  }

  const lead = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    whatsapp: whatsapp.trim(),
  };

  try {
    await insertFestivalLead(lead);
  } catch (err) {
    console.error("Erro ao gravar lead no banco:", err);
    return NextResponse.json(
      { error: "Não foi possível salvar sua inscrição. Tente novamente." },
      { status: 500 }
    );
  }

  await syncToSheet(lead);

  return NextResponse.json({ ok: true }, { status: 201 });
}
