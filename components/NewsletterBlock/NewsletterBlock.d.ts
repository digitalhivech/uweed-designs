/**
 * The newsletter invitation: a light-gray informing block with one pink disc.
 * Pink is a mark here, never the background. Never used in the buying steps.
 * Invitation left, action right; stacked where the block is narrow.
 */
export interface NewsletterBlockProps {
  /** Small dark-pink label above the heading. Pass "" to leave it out. */
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  /** Icon on the pink disc beside the heading, a name from ICON_NAMES.
   *  "mail" by default; pass "" to leave the disc out. */
  icon?: string;
  /** One or two sentences: what arrives and how often. No claims that are not true of the offer. */
  text?: React.ReactNode;
  /** Accessible name of the field; it has no visible label. */
  fieldLabel?: string;
  placeholder?: string;
  /** Button label; rendered in capitals by the stylesheet. */
  buttonLabel?: React.ReactNode;
  /** Consent line under the form, with the privacy-policy link. Always pass it. */
  legal?: React.ReactNode;
  /** `sending` shows the button spinner · `error` marks the field and shows
   *  `message` · `success` replaces the form with `message`. */
  status?: "idle" | "sending" | "error" | "success";
  /** The error or success sentence. */
  message?: React.ReactNode;
  /** Called with the entered address. Validation is the caller's. */
  onSubmit?: (email: string) => void;
  /** h2 by default: the block is a section of the page. */
  headingLevel?: 2 | 3 | 4;
  className?: string;
}
export function NewsletterBlock(props: NewsletterBlockProps): JSX.Element;
