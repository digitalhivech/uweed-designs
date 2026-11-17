/**
 * The site footer, one markup for every width: contact and three link
 * columns, a trust band (social, reviews, language and currency, payment
 * and memberships), then logo with legal links, disclaimer and copyright.
 * Below lg the link columns are disclosures; from lg four equal columns.
 * White text on dark blue is 18.72:1.
 *
 * @startingPoint section="Chrome" subtitle="Dark-blue footer: contact, three link columns, trust band and legal row" viewport="1280x900"
 */
export interface FooterAction {
  label: string;
  /** A link. */
  href?: string;
  /** A button instead of a link, e.g. "Live-Chat öffnen" or "Cookie-Einstellungen". */
  onClick?: () => void;
  /** aria-haspopup for a button that opens a window, e.g. "dialog". */
  haspopup?: string;
}
export interface FooterContactItem extends FooterAction {
  /** An icon name from ICON_NAMES, drawn at 20px: mail, phone, message-circle, clock, link. */
  icon?: string;
}
export interface FooterColumn {
  heading: string;
  links: Array<{ label: string; href: string }>;
}
export interface FooterProps {
  /** Always open, first at every width. Without href or onClick a row is plain text (opening hours). */
  contact?: { heading?: string; items: FooterContactItem[] };
  /** The link columns. A disclosure each below lg, a column each from lg. */
  columns?: FooterColumn[];
  /** network: instagram | facebook | telegram | linkedin; label is the accessible name. */
  social?: { heading?: string; links: Array<{ network: "instagram" | "facebook" | "telegram" | "linkedin"; label: string; href: string }> };
  /** The REVIEWS.io badge as a slot. */
  reviews?: { heading?: string; content: React.ReactNode };
  /** The header's language and currency controls, as white pills with a round flag. */
  locale?: { heading?: string; controls: Array<{ label: string; value: string; flag?: React.ReactNode; onClick?: () => void }> };
  /** Payment marks as white chips; src is the unified mark, else the label is shown. */
  payments?: { heading?: string; methods: Array<{ label: string; src?: string }> };
  /** Membership logos as white 2:1 tiles. */
  memberships?: { heading?: string; items: Array<{ label: string; href: string; src?: string }> };
  legalLinks?: FooterAction[];
  disclaimer?: React.ReactNode;
  /** "© 2026 Digital Hive GmbH" by default. */
  copyright?: React.ReactNode;
  /** Pass null to leave it out. */
  backToTop?: { label?: string; href?: string } | null;
  /** The nav landmark's name, "Fusszeile" by default. */
  navLabel?: string;
  className?: string;
}
export function Footer(props: FooterProps): JSX.Element;
