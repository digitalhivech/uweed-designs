/**
 * The product tile — signed off. One component at two breakpoints: a stacked
 * card from `md` up, a horizontal row below it. Whole card navigates via one
 * stretched link named by the product; one CTA; no favourite, no size select.
 * The four states (on sale · several sizes · sold out · full price) are all
 * driven by product data.
 */
export interface ProductTileProps {
  href?: string;
  /** White-background product PNG. Rendered object-fit: contain, never cover. */
  image?: string;
  /** Brand line — Poppins bold, 13px caps, --dark-green. */
  brand: string;
  /** Product name without the size; the tile appends " — {size}". */
  name: string;
  /** Pack size, e.g. "3 g". With `sizes` it takes the "from" prefix. */
  size: string;
  /** Several sizes: CTA becomes `apply` "Grösse wählen" with
   *  aria-haspopup="dialog", price and unit take the "from" format string. */
  sizes?: boolean;
  /** e.g. "15%". Desktop chip shows CBD · THC; mobile shows CBD only. */
  cbd: string;
  thc: string;
  /** e.g. "4.8". Omit to hide the rating row. */
  rating?: string | number;
  reviewCount?: number;
  price: string;
  /** Struck original, --dark-gray. Pair with `sale`. */
  was?: string;
  /** Shown in brackets, --dark-gray, as a SEPARATE element — not Price's inline unit. */
  unitPrice: string;
  /** Flag badges removed, attribute chip kept, 60% --light-gray film over the
   *  whole card (pointer-events none), CTA becomes `unavailable` reading
   *  "Ausverkauft". No tooltip, no explanation line — the label is the
   *  statement. */
  soldOut?: boolean;
  /** Badge priority sale › bestseller › new. Max 3 desktop, 2 mobile. */
  sale?: boolean;
  bestseller?: boolean;
  isNew?: boolean;
  /** Copy set. Swiss orthography — Grösse, never Größe. */
  lang?: "de" | "fr" | "en";
  /** Force the row layout above md — phone-frame specimens, narrow sidebars.
   *  Below md the tile is compact regardless. */
  layout?: "compact";
  saleLabel?: string;
  onAdd?: () => void;
  onChooseSize?: () => void;
  onNavigate?: (e: React.MouseEvent) => void;
  className?: string;
}
export function ProductTile(props: ProductTileProps): JSX.Element;
export const PRODUCT_TILE_STRINGS: Record<"de" | "fr" | "en", Record<string, string>>;
