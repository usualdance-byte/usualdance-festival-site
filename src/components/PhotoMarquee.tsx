import Image from "next/image";
import MarqueeTrack from "@/components/MarqueeTrack";

export interface GalleryPhoto {
  file: string;
  alt: string;
  width: number;
  height: number;
}

export type GalleryColumn =
  | { type: "single"; photo: GalleryPhoto }
  | { type: "pair"; photos: [GalleryPhoto, GalleryPhoto] };

function SingleTile({ photo }: { photo: GalleryPhoto }) {
  return (
    <Image
      src={`/images/${photo.file}.webp`}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      sizes="400px"
      className="h-56 w-auto shrink-0 rounded-2xl object-cover sm:h-64"
    />
  );
}

function PairTile({ photos }: { photos: [GalleryPhoto, GalleryPhoto] }) {
  return (
    <div className="flex h-56 w-48 shrink-0 flex-col gap-2 sm:h-64 sm:w-56">
      {photos.map((photo, i) => (
        <div key={`${photo.file}-${i}`} className="relative h-1/2 w-full overflow-hidden rounded-2xl">
          <Image
            src={`/images/${photo.file}.webp`}
            alt={photo.alt}
            fill
            sizes="224px"
            className="object-cover object-top"
          />
        </div>
      ))}
    </div>
  );
}

export default function PhotoMarquee({ columns }: { columns: GalleryColumn[] }) {
  const items = [...columns, ...columns, ...columns, ...columns];

  return (
    <div className="group overflow-hidden">
      <MarqueeTrack className="flex w-max items-center gap-2">
        {items.map((col, i) =>
          col.type === "single" ? (
            <SingleTile key={`${col.photo.file}-${i}`} photo={col.photo} />
          ) : (
            <PairTile key={`${col.photos[0].file}-${col.photos[1].file}-${i}`} photos={col.photos} />
          ),
        )}
      </MarqueeTrack>
    </div>
  );
}
