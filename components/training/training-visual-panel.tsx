type TrainingVisualPanelProps = {
  variant: "dryland" | "on-ice" | "specialized";
  className?: string;
};

const labels: Record<TrainingVisualPanelProps["variant"], string> = {
  dryland: "Off-ice preparation",
  "on-ice": "On-ice technique",
  specialized: "Targeted drills",
};

export function TrainingVisualPanel({
  variant,
  className = "",
}: TrainingVisualPanelProps) {
  return (
    <div
      className={`relative min-h-[200px] overflow-hidden border border-[#202a3a] bg-linear-to-br from-[#0d1422] via-[#0a0f1c] to-[#070b14] sm:min-h-[260px] lg:min-h-0 lg:h-full ${className}`}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-12deg, transparent, transparent 18px, rgba(255,255,255,0.02) 18px, rgba(255,255,255,0.02) 19px)",
        }}
      />
      {variant === "dryland" ? (
        <svg
          className="absolute inset-0 h-full w-full p-8 opacity-90"
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="20"
            y="100"
            width="160"
            height="8"
            rx="2"
            fill="#202a3a"
          />
          <path
            d="M60 100V50M100 100V35M140 100V55"
            stroke="#e31837"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />
          <circle cx="60" cy="45" r="8" stroke="#9aa8bc" strokeWidth="1.5" />
          <circle cx="100" cy="30" r="8" stroke="#9aa8bc" strokeWidth="1.5" />
          <circle cx="140" cy="50" r="8" stroke="#9aa8bc" strokeWidth="1.5" />
        </svg>
      ) : null}
      {variant === "on-ice" ? (
        <svg
          className="absolute inset-0 h-full w-full p-6 opacity-90"
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="100"
            cy="80"
            rx="85"
            ry="55"
            stroke="#202a3a"
            strokeWidth="2"
          />
          <path
            d="M100 25 Q 165 55 175 80 Q 165 105 100 135 Q 35 105 25 80 Q 35 55 100 25"
            stroke="#e31837"
            strokeWidth="1.5"
            strokeOpacity="0.45"
          />
          <circle cx="100" cy="25" r="5" fill="#e31837" />
        </svg>
      ) : null}
      {variant === "specialized" ? (
        <svg
          className="absolute inset-0 h-full w-full p-8 opacity-90"
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="30"
            y="70"
            width="140"
            height="20"
            rx="4"
            stroke="#202a3a"
            strokeWidth="2"
          />
          <path
            d="M50 80 H150"
            stroke="#e31837"
            strokeWidth="2"
            strokeDasharray="8 6"
            opacity="0.6"
          />
          <path
            d="M70 50 L70 110 M130 50 L130 110"
            stroke="#9aa8bc"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
        </svg>
      ) : null}
      <p className="absolute bottom-6 left-6 font-display text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-[#9aa8bc] sm:text-xs">
        {labels[variant]}
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#e31837]/85" />
    </div>
  );
}
