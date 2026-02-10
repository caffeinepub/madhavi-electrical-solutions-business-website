import { useState, useEffect, useRef, useCallback } from 'react';

interface MontagePlayerState {
  currentIndex: number;
  isPlaying: boolean;
  speed: number;
  play: () => void;
  pause: () => void;
  restart: () => void;
  setSpeed: (speed: number) => void;
}

const BASE_DURATION = 2000; // 2 seconds per image

export function useMontagePlayer(totalImages: number): MontagePlayerState {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const scheduleNext = useCallback(() => {
    clearTimer();
    
    if (!isPlaying) return;

    const duration = BASE_DURATION / speed;
    
    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, duration);
  }, [isPlaying, speed, totalImages, clearTimer]);

  // Schedule next transition when index, playing state, or speed changes
  useEffect(() => {
    scheduleNext();
    return clearTimer;
  }, [currentIndex, isPlaying, speed, scheduleNext, clearTimer]);

  const play = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    setIsPlaying(false);
    clearTimer();
  }, [clearTimer]);

  const restart = useCallback(() => {
    setCurrentIndex(0);
    setIsPlaying(true);
  }, []);

  const changeSpeed = useCallback((newSpeed: number) => {
    setSpeed(newSpeed);
  }, []);

  return {
    currentIndex,
    isPlaying,
    speed,
    play,
    pause,
    restart,
    setSpeed: changeSpeed,
  };
}
