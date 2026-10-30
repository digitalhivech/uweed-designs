/**
 * The one way articles are teased outside the magazine: a heading, article
 * cards three across, and one blue button to the magazine. Below `md` each
 * card becomes a row and nothing swipes.
 */
export interface ArticleRowItem {
  title: React.ReactNode;
  /** The article's address. Also the card's key, so it must be unique in the row. */
  href: string;
  /** The article's 16:9 featured image. */
  image?: string;
  /** Category label. On the desktop card over the picture, in the phone row above the title. */
  category?: React.ReactNode;
  /** Optional teaser sentence, two lines at most; hidden in the phone row.
   *  Give it to every card in the row or to none. */
  excerpt?: React.ReactNode;
  /** Month and year, e.g. "August 2026". */
  date?: React.ReactNode;
  dateTime?: string;
}
export interface ArticleRowProps {
  /** Section heading, e.g. "CBD Grundlagen". Leave out inside a section that has its own. */
  title?: React.ReactNode;
  /** The articles; each becomes a BlogCard. Three on a shop page; more wrap
   *  into further rows of three. */
  articles: ArticleRowItem[];
  /** Label of the button to the magazine; rendered in capitals by the stylesheet. */
  moreLabel?: React.ReactNode;
  /** Target of that button. The button appears only when both are given. */
  moreHref?: string;
  /** h2 by default. The cards take the next level down. */
  headingLevel?: 2 | 3 | 4;
  className?: string;
}
export function ArticleRow(props: ArticleRowProps): JSX.Element;
