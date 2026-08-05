import Image from "next/image";
import MarqueeTrack from "@/components/MarqueeTrack";

export interface GalleryPhoto {
  file: string;
  alt: string;
  width: number;
  height: number;
}

export default function PhotoMarquee({ photos }: { photos: GalleryPhoto[] }) {
  const items = [...photos, ...photos, ...photos];

  return (
    <div className="group overflow-hidden">
      <MarqueeTrack className="flex w-max items-center gap-2">
        {items.map((photo, i) => (
          <Image
            key={`${photo.file}-${i}`}
            src={`/images/${photo.file}.webp`}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="400px"
            className="h-56 w-auto shrink-0 rounded-2xl object-cover sm:h-64"
          />
        ))}
      </MarqueeTrack>
    </div>
  );
}
