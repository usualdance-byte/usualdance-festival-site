export default function YouTubeEmbed({
  videoId,
  title,
  aspectClassName = "aspect-video",
}: {
  videoId: string;
  title: string;
  aspectClassName?: string;
}) {
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
