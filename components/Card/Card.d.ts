/**
 * The shared card surface. Never nest cards more than one deep, and the
 * inner one drops its frame.
 */
export interface CardProps {
  /** `default` border + 16px radius + shadow-xs · `link` adds the 2px lift
   *  and shadow-md on hover (whole card navigates) · `flat` drops the shadow
   *  for a card inside a container · `tint` light-gray fill, no border. */
  variant?: "default" | "link" | "flat" | "tint";
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
