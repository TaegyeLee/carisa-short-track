type PhotoPlaceholderProps = {
  label: string;
  className?: string;
  aspectClassName?: string;
  imageAlt?: string;
  variant?: "default" | "cinematic" | "editorial";
};

const variantStyles: Record<
  NonNullable<PhotoPlaceholderProps["variant"]>,
  string
> = {
  default:
    "min-h-[220px] border border-[#202a3a] sm:min-h-[320px] lg:min-h-[440px] xl:min-h-[520px]",
  cinematic:
    "min-h-[220px] aspect-[16/9] border border-[#202a3a] sm:min-h-0",
  editorial:
    "min-h-[360px] aspect-[3/4] w-full max-w-md border border-[#202a3a] sm:min-h-[420px] lg:max-w-none lg:aspect-[4/5]",
};

export function PhotoPlaceholder({
  label,
  className = "",
  aspectClassName = "",
  imageAlt = "Carisa Lee short track speed skating",
  variant = "default",
}: PhotoPlaceholderProps) {
  const accessibleName = `${imageAlt}. ${label}`;

  return (
    <div
      role="img"
      aria-label={accessibleName}
      className={`relative w-full overflow-hidden bg-linear-to-br from-[#0d1422] via-[#0a0f1c] to-[#070b14] ${variantStyles[variant]} ${aspectClassName} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-50"
        aria-hidden
        style={{
          backgroundImage:
            "repeating-linear-gradient(-12deg, transparent, transparent 18px, rgba(255,255,255,0.025) 18px, rgba(255,255,255,0.025) 19px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-[#e31837]/85"
        aria-hidden
      />
      <p
        aria-hidden
        className="absolute inset-0 flex items-center justify-center px-6 text-center text-[0.625rem] font-medium uppercase tracking-[0.22em] text-[#9aa8bc] sm:text-xs"
      >
        {label}
      </p>
    </div>
  );
}
