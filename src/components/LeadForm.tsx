"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export default function LeadForm({ id }: { id?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      whatsapp: String(formData.get("whatsapp") ?? "").trim(),
      consent: formData.get("consent") === "on",
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Não foi possível enviar seu cadastro.");
      }

      setStatus("success");
      form.reset();
      window.dataLayer?.push({ event: "festival_lead_submit" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Erro inesperado.");
    }
  }

  if (status === "success") {
    return (
      <div
        id={id}
        className="rounded-2xl border border-lime/30 bg-surface px-6 py-10 text-center"
      >
        <p className="font-display text-2xl text-lime">Cadastro recebido!</p>
        <p className="mt-2 text-sm text-muted sm:text-base">
          Você vai ser avisado(a) em primeira mão assim que a próxima edição do
          Usualdance Festival for anunciada.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-surface px-6 py-8 sm:px-8 sm:py-10"
    >
      <p className="font-display text-2xl text-white sm:text-3xl">
        Quero saber da próxima edição
      </p>
      <p className="mt-2 text-sm text-muted sm:text-base">
        Deixe seus dados e avisamos você assim que as inscrições abrirem.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          required
          placeholder="Seu nome"
          className="rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none sm:col-span-2"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Seu e-mail"
          className="rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
        />
        <input
          type="tel"
          name="whatsapp"
          required
          placeholder="Seu WhatsApp (com DDD)"
          className="rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
        />
      </div>

      <label className="mt-4 flex items-start gap-3 text-xs text-muted sm:text-sm">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/30 bg-black/40"
        />
        Autorizo o uso dos meus dados para contato sobre a próxima edição do
        Usualdance Festival, conforme a política de privacidade.
      </label>

      {status === "error" && (
        <p className="mt-3 text-sm text-accent">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-lime px-7 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-95 disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando..." : "Quero ser avisado(a)"}
      </button>
    </form>
  );
}
