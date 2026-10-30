/**
 * The site footer: four link columns and a bottom row with copyright and the
 * currency and language switchers. White text on dark blue is 18.72:1.
 *
 * @startingPoint section="Chrome" subtitle="Four-column dark-blue footer with currency and language switchers" viewport="700x400"
 */
export interface FooterColumn {
  heading: React.ReactNode;
  links: Array<{ label: React.ReactNode; href: string }>;
}
export interface FooterProps {
  columns?: FooterColumn[];
  copyright?: React.ReactNode;
  /** Currency and language. Rendered as aria-pressed pill groups in a
   *  translucent white well. */
  switches?: Array<{ label: string; options: string[]; value: string }>;
  className?: string;
}
export function Footer(props: FooterProps): JSX.Element;
