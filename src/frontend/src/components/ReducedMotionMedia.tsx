import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface ReducedMotionMediaProps {
  animatedSrc: string;
  staticSrc: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export function ReducedMotionMedia({
  animatedSrc,
  staticSrc,
  alt,
  className = '',
  loading = 'lazy'
}: ReducedMotionMediaProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <img
      src={prefersReducedMotion ? staticSrc : animatedSrc}
      alt={alt}
      className={className}
      loading={loading}
    />
  );
}
