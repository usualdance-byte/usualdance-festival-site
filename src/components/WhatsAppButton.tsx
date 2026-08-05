interface WhatsAppButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "glass" | "lime";
  className?: string;
}

export default function WhatsAppButton({
  href,
  children,
  variant = "solid",
  className = "",
}: WhatsAppButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wide transition";
  const styles =
    variant === "solid" || variant === "lime"
      ? "bg-lime text-black hover:brightness-95"
      : variant === "glass"
        ? "bg-white/[0.18] text-white backdrop-blur hover:bg-white/30"
        : "border border-white text-white hover:bg-white hover:text-black";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
