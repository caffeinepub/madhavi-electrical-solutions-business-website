interface PanelWiringSceneProps {
  reducedMotion: boolean;
}

export function PanelWiringScene({ reducedMotion }: PanelWiringSceneProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-48"
      role="img"
      aria-labelledby="panel-wiring-title panel-wiring-desc"
    >
      <title id="panel-wiring-title">Panel Wiring Animation</title>
      <desc id="panel-wiring-desc">
        Animated illustration showing electrical current flowing through panel wiring
      </desc>

      {/* Panel box */}
      <rect
        x="40"
        y="40"
        width="120"
        height="120"
        fill="oklch(85% 0.01 240)"
        stroke="oklch(40% 0.05 240)"
        strokeWidth="2"
        rx="4"
      />

      {/* Wire paths */}
      <g className={reducedMotion ? '' : 'electrician-wire-flow'}>
        {/* Red wire (live) */}
        <path
          d="M 60 80 L 100 80 L 100 120"
          stroke="oklch(55% 0.22 25)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          className={reducedMotion ? '' : 'wire-animate'}
          strokeDasharray="8 4"
        />

        {/* Blue wire (neutral) */}
        <path
          d="M 80 80 L 120 80 L 120 120"
          stroke="oklch(50% 0.15 240)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          className={reducedMotion ? '' : 'wire-animate wire-delay-1'}
          strokeDasharray="8 4"
        />

        {/* Green wire (earth) */}
        <path
          d="M 100 80 L 140 80 L 140 120"
          stroke="oklch(60% 0.18 150)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          className={reducedMotion ? '' : 'wire-animate wire-delay-2'}
          strokeDasharray="8 4"
        />
      </g>

      {/* Connection points */}
      <circle cx="100" cy="120" r="4" fill="oklch(55% 0.22 25)" />
      <circle cx="120" cy="120" r="4" fill="oklch(50% 0.15 240)" />
      <circle cx="140" cy="120" r="4" fill="oklch(60% 0.18 150)" />

      {/* Spark effect at connection */}
      <g className={reducedMotion ? 'opacity-50' : 'electrician-spark'}>
        <circle cx="100" cy="120" r="8" fill="oklch(85% 0.15 60)" opacity="0.6" />
        <circle cx="120" cy="120" r="8" fill="oklch(85% 0.15 60)" opacity="0.6" />
      </g>
    </svg>
  );
}
