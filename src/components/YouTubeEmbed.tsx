export default function YouTubeEmbed({
  videoId,
  title,
  aspectClassName = "aspect-video",
  mode = "link",
  thumbnailVideoId,
}: {
  videoId: string;
  title: string;
  aspectClassName?: string;
  /** "inline" plays the video in the page using YouTube's own player/controls.
   *  "link" (default) shows a thumbnail that opens the video on YouTube — on
   *  mobile this opens the installed app instead of an in-page iframe. */
  mode?: "inline" | "link";
  /** For playlists (no single-video thumbnail available), the video id whose
   *  thumbnail should represent the playlist link. */
  thumbnailVideoId?: string;
}) {
  if (mode === "inline") {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${aspectClassName}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  const isPlaylist = videoId.startsWith("videoseries?list=");
  const listId = isPlaylist ? videoId.replace("videoseries?list=", "") : null;
  const href = isPlaylist
    ? `https://www.youtube.com/playlist?list=${listId}`
    : `https://www.youtube.com/watch?v=${videoId}`;
  const posterId = thumbnailVideoId ?? (isPlaylist ? null : videoId);
  const thumbnailSrc = posterId ? `https://img.youtube.com/vi/${posterId}/hqdefault.jpg` : null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      className={`group relative block overflow-hidden rounded-2xl bg-surface ${aspectClassName}`}
    >
      {thumbnailSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbnailSrc}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black/15 transition group-hover:bg-black/5">
        <svg
          viewBox="0 0 68 48"
          className="h-12 w-auto drop-shadow-lg transition group-hover:scale-105 sm:h-14"
        >
          <path
            d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.64 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
            fill="#FF0000"
          />
          <path d="M45 24 27 14v20" fill="#fff" />
        </svg>
      </div>
    </a>
  );
}
