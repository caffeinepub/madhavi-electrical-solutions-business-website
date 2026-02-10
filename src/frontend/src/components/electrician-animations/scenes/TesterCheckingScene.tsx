interface TesterCheckingSceneProps {
  reducedMotion: boolean;
}

export function TesterCheckingScene({ reducedMotion }: TesterCheckingSceneProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-48"
      role="img"
      aria-labelledby="tester-checking-title tester-checking-desc"
    >
      <title id="tester-checking-title">Tester Checking Animation</title>
      <desc id="tester-checking-desc">
        Animated illustration showing voltage tester checking electrical connections
      </desc>

      {/* Socket outlet */}
      <rect
        x="70"
        y="80"
        width="60"
        height="60"
        fill="oklch(95% 0.01 240)"
        stroke="oklch(40% 0.05 240)"
        strokeWidth="2"
        rx="4"
      />

      {/* Socket holes */}
      <circle cx="90" cy="110" r="6" fill="oklch(20% 0.02 240)" />
      <circle cx="110" cy="110" r="6" fill="oklch(20% 0.02 240)" />

      {/* Tester device */}
      <g className={reducedMotion ? '' : 'electrician-tester-move'}>
        <rect
          x="85"
          y="40"
          width="30"
          height="20"
          fill="oklch(65% 0.18 40)"
          stroke="oklch(30% 0.05 40)"
          strokeWidth="1.5"
          rx="2"
        />

        {/* LED indicator */}
        <circle
          cx="100"
          cy="50"
          r="3"
          className={reducedMotion ? 'fill-[oklch(60%_0.18_150)]' : 'electrician-led-blink'}
        />

        {/* Probe */}
        <line
          x1="100"
          y1="60"
          x2="100"
          y2="105"
          stroke="oklch(30% 0.02 240)"
          strokeWidth="2"
        />
        <circle cx="100" cy="105" r="2" fill="oklch(30% 0.02 240)" />
      </g>

      {/* Voltage reading display */}
      <text
        x="100"
        y="160"
        textAnchor="middle"
        className={reducedMotion ? 'fill-[oklch(40%_0.05_240)]' : 'electrician-voltage-display'}
        fontSize="14"
        fontWeight="bold"
        fontFamily="monospace"
      >
        240V
      </text>
    </svg>
  );
}
