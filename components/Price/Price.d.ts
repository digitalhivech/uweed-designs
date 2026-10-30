/**
 * Every price on the site. Reduced prices are red with the original struck
 * in `<s>` (not `<del>` — a former price is no longer accurate, not removed).
 */
export interface PriceProps {
  /** `hero` PDP main · `tile` product tile · `list` cart and summary lines
   *  · `total` order summary total. */
  role?: "hero" | "tile" | "list" | "total";
  /** The formatted price string, e.g. "84.15 CHF". */
  value?: React.ReactNode;
  /** Original price, struck through in dark-gray. Set `sale` alongside it. */
  was?: React.ReactNode;
  /** Comparison aid — "8.42 CHF / ml". --dark-gray at --fs-small, never the
   *  price paid. Oils compare per mg CBD; flowers, hash and pollen per gram. */
  unit?: React.ReactNode;
  sale?: boolean;
  /** Several-sizes product: applies `fromTemplate` to the price AND the unit. */
  from?: boolean;
  /** Format string with an {x} placeholder — "ab {x}" / "dès {x}" / "from {x}"
   *  (see FROM_FORMATS). Never concatenate: a later language may not prefix. */
  fromTemplate?: string;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
}
export function Price(props: PriceProps): JSX.Element;
export const FROM_FORMATS: { de: string; fr: string; en: string };
export function formatFrom(template: string, value: React.ReactNode): [string, React.ReactNode, string];
