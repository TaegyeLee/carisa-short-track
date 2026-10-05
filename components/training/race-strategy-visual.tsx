export function RaceStrategyVisual() {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden border border-[#202a3a] bg-linear-to-br from-[#0d1422] via-[#0a0f1c] to-[#070b14] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[420px]"
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="200"
          cy="160"
          rx="150"
          ry="95"
          fill="none"
          stroke="#202a3a"
          strokeWidth="2"
        />
        <ellipse
          cx="200"
          cy="160"
          rx="118"
          ry="72"
          fill="none"
          stroke="#202a3a"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.6"
        />
        <path
          d="M 200 65 Q 320 120 350 160 Q 320 200 200 255 Q 80 200 50 160 Q 80 120 200 65"
          fill="none"
          stroke="#e31837"
          strokeWidth="2"
          strokeOpacity="0.35"
        />
        <path
          d="M 280 100 Q 310 160 280 220"
          fill="none"
          stroke="#e31837"
          strokeWidth="1.5"
          strokeDasharray="6 5"
          strokeOpacity="0.55"
        />
        <circle cx="200" cy="65" r="6" fill="#e31837" />
        <circle cx="350" cy="160" r="5" fill="#9aa8bc" />
        <circle cx="200" cy="255" r="5" fill="#9aa8bc" />
        <circle cx="50" cy="160" r="5" fill="#9aa8bc" />
        <circle cx="265" cy="118" r="5" fill="#ffffff" opacity="0.9" />
        <circle cx="295" cy="145" r="4" fill="#9aa8bc" />
        <circle cx="130" cy="200" r="4" fill="#9aa8bc" />
        <path
          d="M 265 118 L 310 135"
          stroke="#e31837"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        <defs>
          <marker
            id="arrow"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="#e31837" />
          </marker>
        </defs>
        <text
          x="200"
          y="28"
          textAnchor="middle"
          fill="#9aa8bc"
          fontSize="10"
          fontFamily="system-ui,sans-serif"
          letterSpacing="0.2em"
        >
          READ THE PACK
        </text>
        <text x="318" y="148" fill="#9aa8bc" fontSize="9" fontFamily="system-ui">
          LINE
        </text>
        <text x="72" y="168" fill="#9aa8bc" fontSize="9" fontFamily="system-ui">
          TIMING
        </text>
        <text x="248" y="108" fill="#e31837" fontSize="9" fontFamily="system-ui">
          MOVE
        </text>
      </svg>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#e31837]/85" />
    </div>
  );
}
