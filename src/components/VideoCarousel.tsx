"use client";

import { useEffect, useRef, useState } from "react";
import YouTubeEmbed from "./YouTubeEmbed";

export interface VideoStory {
  videoId: string;
  title: string;
  names: string;
  type?: string;
  date?: string;
}

function VideoCard({ video, widthClassName }: { video: VideoStory; widthClassName: string }) {
  return (
    <div className={`shrink-0 snap-start px-1 ${widthClassName}`}>
      <YouTubeEmbed videoId={video.videoId} title={video.title} aspectClassName="aspect-[9/16]" />
      <p className="mt-4 font-display text-xl text-accent sm:text-2xl">{video.names}</p>
      {(video.type || video.date) && (
        <p className="mt-1 text-xs text-muted sm:text-sm">
          {[video.type, video.date].filter(Boolean).join(" · ")}
        </p>
      )}
    </div>
  );
}

export default function VideoCarousel({
  videos,
  desktopCols = 3,
}: {
  videos: VideoStory[];
  desktopCols?: 2 | 3;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(videos.length > 1);

  const desktopWidthClassName =
    desktopCols === 2 ? "sm:w-[calc(50%-1rem)]" : "sm:w-[calc(33.333%-1.334rem)]";
  const widthClassName = `w-full ${desktopWidthClassName}`;

  function scrollByOne(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const item = track.firstElementChild as HTMLElement | null;
    const step = (item?.offsetWidth ?? track.clientWidth) + 8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanGoPrev(track.scrollLeft > 4);
    setCanGoNext(track.scrollLeft < maxScroll - 4);
  }

  useEffect(() => {
    handleScroll();
  }, [videos.length]);

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {videos.map((video) => (
          <VideoCard key={video.videoId} video={video} widthClassName={widthClassName} />
        ))}
      </div>

      {videos.length > 1 && (
        <div className="mt-5 flex items-center justify-center gap-6">
          {canGoPrev && (
            <button
              type="button"
              aria-label="Vídeo anterior"
              onClick={() => scrollByOne(-1)}
              className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
          {canGoNext && (
            <button
              type="button"
              aria-label="Próximo vídeo"
              onClick={() => scrollByOne(1)}
              className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
