"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
}

function AnswerText({ item }: { item: FaqItem }) {
  if (!item.linkText || !item.answer.includes(item.linkText)) {
    return <>{item.answer}</>;
  }
  const [before, after] = item.answer.split(item.linkText);
  return (
    <>
      {before}
      <a href={item.linkHref} className="font-semibold text-accent underline hover:text-white">
        {item.linkText}
      </a>
      {after}
    </>
  );
}

export default function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-base font-semibold text-white sm:text-lg">
                {item.question}
              </span>
              <span
                className={`shrink-0 text-2xl text-accent transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="pb-5 text-sm leading-relaxed text-muted sm:text-base">
                <AnswerText item={item} />
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
