/**
 * An indeterminate loading indicator. Keeps turning under reduced motion,
 * but slower — it conveys state, so removing it removes information.
 */
export interface SpinnerProps {
  /** Visually-hidden accessible label. */
  label?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}
export function Spinner(props: SpinnerProps): JSX.Element;
