import { useState, useEffect, useRef, useCallback } from 'react';

interface MontagePlayerState {
  currentIndex: number;
  isPlaying: boolean;
  secondsPerPhoto: number;
  transitionMs: number;
  play: () => void;
  pause: () => void;
  restart: () => void;
  setSecondsPerPhoto: (seconds: number) => void;
  setTransitionMs: (ms: number) => void;
}

export function useMontagePlayer(
  totalImages: number,
  initialPlaying: boolean = true,
  initialSecondsPerPhoto: number = 2,
  initialTransitionMs: number = 500
): MontagePlayerState {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(initialPlaying);
  const [secondsPerPhoto, setSecondsPerPhoto] = useState(initialSecondsPerPhoto);
  const [transitionMs, setTransitionMs] = useState(initialTransitionMs);
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

    const duration = secondsPerPhoto * 1000;
    
    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, duration);
  }, [isPlaying, secondsPerPhoto, totalImages, clearTimer]);

  // Schedule next transition when index, playing state, or duration changes
  useEffect(() => {
    scheduleNext();
    return clearTimer;
  }, [currentIndex, isPlaying, secondsPerPhoto, scheduleNext, clearTimer]);

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

  const changeSecondsPerPhoto = useCallback((seconds: number) => {
    setSecondsPerPhoto(seconds);
  }, []);

  const changeTransitionMs = useCallback((ms: number) => {
    setTransitionMs(ms);
  }, []);

  return {
    currentIndex,
    isPlaying,
    secondsPerPhoto,
    transitionMs,
    play,
    pause,
    restart,
    setSecondsPerPhoto: changeSecondsPerPhoto,
    setTransitionMs: changeTransitionMs,
  };
}
