/**
 * A scroll-snapped rail. Product rails, brand rows, city tiles. Not for
 * articles: those use ArticleRow.
 * Arrows are desktop-only progressive enhancement — the track must scroll by
 * touch and keyboard without them.
 */
export interface CarouselProps {
  /** Each child becomes one snap item. */
  children?: React.ReactNode;
  /** aria-label on the scrollable region. */
  label?: string;
  /** Fixed item width, e.g. "262px" or "60vw". Omit to let content size. */
  itemWidth?: string;
  className?: string;
}
export function Carousel(props: CarouselProps): JSX.Element;
