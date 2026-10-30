/**
 * A disclosure control. Hides content behind a label the reader chooses to
 * open. Several panels open at once is the default and intended.
 */
export interface AccordionProps {
  /** `flush` inside a page (hairline dividers, no fill) · `boxed` standing
   *  apart — FAQ blocks, brand sections (light-blue fill, gapped).
   *  Footer columns are `flush` inside `.on-dark`, not a third variant. */
  variant?: "flush" | "boxed";
  children?: React.ReactNode;
  className?: string;
}
export function Accordion(props: AccordionProps): JSX.Element;

export interface AccordionItemProps {
  heading: React.ReactNode;
  /** The heading LEVEL moves for document structure; the SIZE never does.
   *  Pass 0 for a plain span — footer column labels are not headings. */
  headingLevel?: 0 | 2 | 3 | 4 | 5 | 6;
  /** PDP tabs open the first item (the description is the reason the page
   *  exists). FAQ blocks stay closed — an open first answer implies it is
   *  the important one. */
  open?: boolean;
  children?: React.ReactNode;
  className?: string;
}
export function AccordionItem(props: AccordionItemProps): JSX.Element;
