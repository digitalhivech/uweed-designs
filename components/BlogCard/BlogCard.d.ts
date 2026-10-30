/**
 * An article in a listing. Two visual identities, not just two layouts: the
 * desktop card is a browse surface, the mobile list row is a scan surface.
 * Every future change is made and verified twice.
 */
export interface BlogCardProps {
  /** `standard` archive and article rows · `featured` one per archive, 52% image
   *  · `compact` the row: picture 36% wide, label above the title, no excerpt.
   *  Below `md` every variant is rendered as that row. */
  variant?: "standard" | "featured" | "compact";
  title: React.ReactNode;
  href?: string;
  /** Two lines, clamped. Hidden by CSS below `md` — never rendered
   *  conditionally by device, which fragments the page cache. */
  excerpt?: React.ReactNode;
  /** One 16:9 source serves card, row, featured slot and article header.
   *  The picture is 16:9 in every variant and at every width. */
  image?: string;
  /** A label, not a link. On the desktop card it lies over the picture; in the
   *  row it sits above the title. Suppress it when the listing is already
   *  filtered to that category. */
  category?: React.ReactNode;
  /** Month and year — "August 2026". No "Aktualisiert" prefix. */
  date?: React.ReactNode;
  /** Machine-readable, e.g. "2026-08". */
  dateTime?: string;
  /** h3 by default — h1 is the archive title. */
  headingLevel?: 2 | 3 | 4;
  className?: string;
}
export function BlogCard(props: BlogCardProps): JSX.Element;
