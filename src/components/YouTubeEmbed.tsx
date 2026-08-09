export default function YouTubeEmbed({
  videoId,
  title,
  aspectClassName = "aspect-video",
}: {
  videoId: string;
  title: string;
  aspectClassName?: string;
}) {
  const isPlaylist = videoId.startsWith("videoseries?list=");
  const listId = isPlaylist ? videoId.replace("videoseries?list=", "") : null;
  const href = isPlaylist
    ? `https://www.youtube.com/playlist?list=${listId}`
    : `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailSrc = isPlaylist ? null : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

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
