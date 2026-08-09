import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  keywords,
  description,
  image,
  imageAlt,
  imageObjectPosition,
  imageObjectPositionSm,
  logo,
  logoAlt,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  keywords?: string;
  description?: string;
  image: string;
  imageAlt: string;
  imageObjectPosition?: string;
  imageObjectPositionSm?: string;
  logo?: string;
  logoAlt?: string;
  children?: React.ReactNode;
}) {
  const heroId = `hero-${image.replace(/[^a-z0-9]/gi, "")}`;
  return (
    <section className="relative overflow-hidden bg-black">
      {imageObjectPositionSm && (
        <style>{`#${heroId}{object-position:${imageObjectPosition ?? "50% 35%"}}@media(min-width:640px){#${heroId}{object-position:${imageObjectPositionSm}}}`}</style>
      )}
      <div className="absolute inset-0">
        <Image
          id={heroId}
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={imageObjectPositionSm ? undefined : { objectPosition: imageObjectPosition ?? "50% 35%" }}
        />
      </div>
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.2)_40%,transparent_65%)]" />
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-end px-4 pb-14 pt-28 text-center sm:px-6 sm:text-left lg:px-8">
        <div className="mx-auto max-w-xl px-5 sm:mx-0 sm:px-0">
          {logo && (
            <Image
              src={logo}
              alt={logoAlt ?? ""}
              width={300}
              height={200}
              className="mb-6 w-40 mx-auto sm:mx-0 sm:w-52"
            />
          )}
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-widest text-white/70 sm:text-sm">{eyebrow}</p>
          )}
          <h1 className="mt-2 font-display text-[2.2rem] uppercase leading-none text-white sm:mt-3 sm:text-[3.6rem]">
            {title}
          </h1>
          {keywords && (
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-white/60">{keywords}</p>
          )}
          {description && (
            <p className="mt-3 text-sm text-white/85 sm:mt-4 sm:text-base">{description}</p>
          )}
          {children && (
            <div className="mt-5 flex flex-wrap justify-center gap-4 sm:mt-6 sm:justify-start">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
