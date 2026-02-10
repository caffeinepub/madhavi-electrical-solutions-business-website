interface EmergencyRepairWorkSceneProps {
  reducedMotion: boolean;
}

export function EmergencyRepairWorkScene({
  reducedMotion,
}: EmergencyRepairWorkSceneProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-48"
      role="img"
      aria-labelledby="emergency-title emergency-desc"
    >
      <title id="emergency-title">Emergency Repair Work Animation</title>
      <desc id="emergency-desc">
        Animated illustration showing emergency electrical repair with warning beacon
      </desc>

      {/* Dark background for emergency scene */}
      <rect x="0" y="0" width="200" height="200" fill="oklch(25% 0.02 240)" />

      {/* Warning beacon */}
      <g className={reducedMotion ? '' : 'electrician-beacon-pulse'}>
        <circle cx="100" cy="50" r="15" fill="oklch(55% 0.22 25)" opacity="0.8" />
        <circle cx="100" cy="50" r="20" fill="oklch(55% 0.22 25)" opacity="0.4" />
        <circle cx="100" cy="50" r="25" fill="oklch(55% 0.22 25)" opacity="0.2" />
      </g>

      {/* Damaged wire/cable */}
      <g>
        <path
          d="M 40 100 Q 70 90, 90 100"
          stroke="oklch(40% 0.05 240)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 110 100 Q 130 110, 160 100"
          stroke="oklch(40% 0.05 240)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />

        {/* Spark at break point */}
        <g className={reducedMotion ? 'opacity-60' : 'electrician-spark-flicker'}>
          <line
            x1="95"
            y1="95"
            x2="105"
            y2="105"
            stroke="oklch(85% 0.15 60)"
            strokeWidth="2"
          />
          <line
            x1="105"
            y1="95"
            x2="95"
            y2="105"
            stroke="oklch(85% 0.15 60)"
            strokeWidth="2"
          />
          <circle cx="100" cy="100" r="8" fill="oklch(85% 0.15 60)" opacity="0.5" />
        </g>
      </g>

      {/* Tool box */}
      <rect
        x="60"
        y="130"
        width="80"
        height="40"
        fill="oklch(55% 0.22 25)"
        stroke="oklch(30% 0.05 25)"
        strokeWidth="2"
        rx="2"
      />
      <rect
        x="95"
        y="125"
        width="10"
        height="10"
        fill="oklch(50% 0.05 240)"
        rx="1"
      />

      {/* Tools inside */}
      <line
        x1="75"
        y1="145"
        x2="85"
        y2="155"
        stroke="oklch(85% 0.01 240)"
        strokeWidth="2"
      />
      <line
        x1="115"
        y1="145"
        x2="125"
        y2="155"
        stroke="oklch(85% 0.01 240)"
        strokeWidth="2"
      />

      {/* Repair in progress indicator */}
      <g className={reducedMotion ? '' : 'electrician-wobble'}>
        <path
          d="M 100 110 L 95 120 L 105 120 Z"
          fill="oklch(65% 0.18 40)"
        />
        <rect
          x="98"
          y="120"
          width="4"
          height="8"
          fill="oklch(50% 0.05 240)"
        />
      </g>
    </svg>
  );
}
