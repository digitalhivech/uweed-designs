/**
 * Small labels that classify, count or flag. Never more than two on one item.
 * Mid-tone fills (orange, green, pink) take dark-blue text, never white.
 */
export interface BadgeProps {
  /** `category` pink editorial/product category · `attribute` grey product
   *  fact · `sale` red · `new` dark green · `bestseller` orange with dark
   *  text · `oos` grey (out of stock is a fact, not an error) ·
   *  `count` cart count · `count-fav` favourites count: the one count style,
   *  dark blue with a white bold number and a 2px white ring (both names
   *  kept so existing markup keeps working). */
  variant?: "category" | "attribute" | "sale" | "new" | "bestseller" | "oos" | "count" | "count-fav";
  /** Renders a real remove button. Applied filters and coupons only. */
  onRemove?: () => void;
  /** Accessible name for the remove button — must name what is removed. */
  removeLabel?: string;
  children?: React.ReactNode;
  className?: string;
}
export function Badge(props: BadgeProps): JSX.Element;
