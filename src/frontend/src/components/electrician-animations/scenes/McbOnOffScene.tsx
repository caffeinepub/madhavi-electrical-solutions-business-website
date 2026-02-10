import { useEffect, useState } from 'react';

interface McbOnOffSceneProps {
  reducedMotion: boolean;
}

export function McbOnOffScene({ reducedMotion }: McbOnOffSceneProps) {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setIsOn(true);
      return;
    }

    const interval = setInterval(() => {
      setIsOn((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-48"
      role="img"
      aria-labelledby="mcb-title mcb-desc"
    >
      <title id="mcb-title">MCB ON–OFF Animation</title>
      <desc id="mcb-desc">
        Animated illustration showing miniature circuit breaker switching on and off
      </desc>

      {/* MCB housing */}
      <rect
        x="70"
        y="50"
        width="60"
        height="100"
        fill="oklch(95% 0.01 240)"
        stroke="oklch(40% 0.05 240)"
        strokeWidth="2"
        rx="4"
      />

      {/* MCB label */}
      <text
        x="100"
        y="70"
        textAnchor="middle"
        fontSize="10"
        fill="oklch(40% 0.05 240)"
        fontWeight="bold"
      >
        16A
      </text>

      {/* Switch lever */}
      <g
        className={reducedMotion ? '' : 'transition-transform duration-500'}
        style={{
          transformOrigin: '100px 110px',
          transform: isOn ? 'rotate(0deg)' : 'rotate(-30deg)',
        }}
      >
        <rect
          x="95"
          y="85"
          width="10"
          height="30"
          fill="oklch(30% 0.02 240)"
          rx="2"
        />
      </g>

      {/* ON/OFF labels */}
      <text
        x="85"
        y="95"
        fontSize="8"
        fill={isOn ? 'oklch(60% 0.18 150)' : 'oklch(60% 0.02 240)'}
        fontWeight="bold"
      >
        ON
      </text>
      <text
        x="110"
        y="95"
        fontSize="8"
        fill={!isOn ? 'oklch(55% 0.22 25)' : 'oklch(60% 0.02 240)'}
        fontWeight="bold"
      >
        OFF
      </text>

      {/* Status indicator */}
      <circle
        cx="100"
        cy="130"
        r="5"
        fill={isOn ? 'oklch(60% 0.18 150)' : 'oklch(55% 0.22 25)'}
        className={reducedMotion || !isOn ? '' : 'electrician-status-pulse'}
      />

      {/* Terminal connections */}
      <rect x="85" y="45" width="8" height="8" fill="oklch(50% 0.10 40)" rx="1" />
      <rect x="107" y="45" width="8" height="8" fill="oklch(50% 0.10 40)" rx="1" />
      <rect x="85" y="147" width="8" height="8" fill="oklch(50% 0.10 40)" rx="1" />
      <rect x="107" y="147" width="8" height="8" fill="oklch(50% 0.10 40)" rx="1" />
    </svg>
  );
}
