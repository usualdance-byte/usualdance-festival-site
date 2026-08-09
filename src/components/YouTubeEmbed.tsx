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
      <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lime text-black shadow-lg transition group-hover:scale-105">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
    </a>
  );
}
