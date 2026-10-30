/**
 * Where the current page sits, with one-click access to each level above.
 * The last item is rendered as a span, never a link.
 */
export interface BreadcrumbItem { label: string; href?: string }
export interface BreadcrumbProps {
  /** In order, root first. The last entry becomes the current page. */
  items?: BreadcrumbItem[];
  /** Localise: Brotkrumen / Fil d'Ariane / Breadcrumb. */
  label?: string;
  className?: string;
}
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
