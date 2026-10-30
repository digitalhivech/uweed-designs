/**
 * A shape-preserving placeholder. The shimmer respects
 * prefers-reduced-motion and falls back to a static tint.
 */
export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  /** Defaults to --radius-inner. Pass --radius-card for a card-sized block. */
  radius?: string;
  className?: string;
  style?: React.CSSProperties;
}
export function Skeleton(props: SkeletonProps): JSX.Element;
