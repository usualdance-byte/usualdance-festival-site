"use client";

import { useEffect, useRef } from "react";

export const MARQUEE_SPEED_PX_PER_SEC = 20;

export default function MarqueeTrack({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const setDuration = () => {
      el.style.animationDuration = `${el.scrollWidth / 2 / MARQUEE_SPEED_PX_PER_SEC}s`;
    };

    setDuration();
    const ro = new ResizeObserver(setDuration);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`marquee-track group-hover:[animation-play-state:paused] ${className}`}
    >
      {children}
    </div>
  );
}
