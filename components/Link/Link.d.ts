/**
 * Inline navigation within text, and standalone. Inside `.on-dark` all three
 * variants take white — that is a context, not a fourth variant.
 */
export interface LinkProps {
  /** `inline` in prose (underlined at rest) · `action` announces itself
   *  ("Alle Ergebnisse anzeigen") · `nav` where context implies linkness
   *  (menu rows, card titles, footer, breadcrumbs). */
  variant?: "inline" | "action" | "nav";
  href?: string;
  /** Sets aria-current="page" — bold, no underline. */
  current?: boolean;
  children?: React.ReactNode;
  className?: string;
}
export function Link(props: LinkProps): JSX.Element;
