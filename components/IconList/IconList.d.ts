/**
 * A short heading and up to four facts, each with an icon on a pink disc.
 * An informing block: never used in the buying steps, never on a pink
 * background.
 */
export interface IconListItem {
  /** An icon name from ICON_NAMES. Drawn at 24px, dark pink on a light-pink disc. */
  icon: string;
  /** The fact in two or three words. Also the item's key, so it must be unique. */
  label: string;
  /** One supporting sentence. */
  text?: React.ReactNode;
}
export interface IconListProps {
  /** Small dark-pink label above the heading, e.g. "Warum uWeed". */
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Up to four; a fifth is not rendered. */
  items: IconListItem[];
  /** `plain` directly on the page · `tint` a light-grey block. */
  surface?: "plain" | "tint";
  /** h2 by default: the band is a section of the page. */
  headingLevel?: 2 | 3 | 4;
  className?: string;
  style?: React.CSSProperties;
}
export function IconList(props: IconListProps): JSX.Element;
