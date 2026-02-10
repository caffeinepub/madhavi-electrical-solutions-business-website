interface SwitchBoardInstallationSceneProps {
  reducedMotion: boolean;
}

export function SwitchBoardInstallationScene({
  reducedMotion,
}: SwitchBoardInstallationSceneProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-48"
      role="img"
      aria-labelledby="switchboard-title switchboard-desc"
    >
      <title id="switchboard-title">Switch Board Installation Animation</title>
      <desc id="switchboard-desc">
        Animated illustration showing switch board being installed with screws
      </desc>

      {/* Wall background */}
      <rect x="0" y="0" width="200" height="200" fill="oklch(92% 0.01 240)" />

      {/* Switch board plate */}
      <rect
        x="60"
        y="60"
        width="80"
        height="80"
        fill="oklch(98% 0 0)"
        stroke="oklch(40% 0.05 240)"
        strokeWidth="2"
        rx="4"
      />

      {/* Switch */}
      <rect
        x="85"
        y="85"
        width="30"
        height="30"
        fill="oklch(95% 0.01 240)"
        stroke="oklch(40% 0.05 240)"
        strokeWidth="1.5"
        rx="2"
      />
      <rect
        x="92"
        y="92"
        width="16"
        height="16"
        fill="oklch(85% 0.01 240)"
        rx="1"
      />

      {/* Screw holes and screws */}
      <g>
        {/* Top-left screw */}
        <circle cx="70" cy="70" r="4" fill="oklch(85% 0.01 240)" />
        <g className={reducedMotion ? '' : 'electrician-screw-rotate'}>
          <line
            x1="68"
            y1="70"
            x2="72"
            y2="70"
            stroke="oklch(40% 0.05 240)"
            strokeWidth="1"
          />
          <line
            x1="70"
            y1="68"
            x2="70"
            y2="72"
            stroke="oklch(40% 0.05 240)"
            strokeWidth="1"
          />
        </g>

        {/* Top-right screw */}
        <circle cx="130" cy="70" r="4" fill="oklch(85% 0.01 240)" />
        <g className={reducedMotion ? '' : 'electrician-screw-rotate electrician-delay-1'}>
          <line
            x1="128"
            y1="70"
            x2="132"
            y2="70"
            stroke="oklch(40% 0.05 240)"
            strokeWidth="1"
          />
          <line
            x1="130"
            y1="68"
            x2="130"
            y2="72"
            stroke="oklch(40% 0.05 240)"
            strokeWidth="1"
          />
        </g>

        {/* Bottom-left screw */}
        <circle cx="70" cy="130" r="4" fill="oklch(85% 0.01 240)" />
        <g className={reducedMotion ? '' : 'electrician-screw-rotate electrician-delay-2'}>
          <line
            x1="68"
            y1="130"
            x2="72"
            y2="130"
            stroke="oklch(40% 0.05 240)"
            strokeWidth="1"
          />
          <line
            x1="70"
            y1="128"
            x2="70"
            y2="132"
            stroke="oklch(40% 0.05 240)"
            strokeWidth="1"
          />
        </g>

        {/* Bottom-right screw */}
        <circle cx="130" cy="130" r="4" fill="oklch(85% 0.01 240)" />
        <g className={reducedMotion ? '' : 'electrician-screw-rotate electrician-delay-3'}>
          <line
            x1="128"
            y1="130"
            x2="132"
            y2="130"
            stroke="oklch(40% 0.05 240)"
            strokeWidth="1"
          />
          <line
            x1="130"
            y1="128"
            x2="130"
            y2="132"
            stroke="oklch(40% 0.05 240)"
            strokeWidth="1"
          />
        </g>
      </g>

      {/* Screwdriver (animated) */}
      <g className={reducedMotion ? 'opacity-70' : 'electrician-screwdriver-move'}>
        <rect
          x="145"
          y="35"
          width="8"
          height="30"
          fill="oklch(65% 0.18 40)"
          rx="2"
        />
        <rect
          x="147"
          y="65"
          width="4"
          height="15"
          fill="oklch(50% 0.05 240)"
        />
      </g>
    </svg>
  );
}
