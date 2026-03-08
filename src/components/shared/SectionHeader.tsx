interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      <h2 className="font-heading text-2xl md:text-4xl uppercase tracking-wide text-white">
        {title}
      </h2>
      <div
        className={`w-16 h-1 bg-brand-red mt-3 mb-2 ${
          isCenter ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className="text-text-muted text-base">{subtitle}</p>
      )}
    </div>
  );
}
