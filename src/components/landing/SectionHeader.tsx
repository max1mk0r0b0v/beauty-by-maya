type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "right";
  tone?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "center",
  tone = "light",
}: SectionHeaderProps) {
  const titleClass =
    tone === "light" ? "text-rose-50" : "text-stone-950";
  const textClass =
    tone === "light" ? "text-rose-100/62" : "text-stone-600";

  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-right"
      }`}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold tracking-[0.32em] text-[#ff8da7]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${titleClass}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 sm:text-lg ${textClass}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
