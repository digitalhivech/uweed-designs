/**
 * Page navigation for listings and the blog archive. Always wrapped in a
 * labelled nav, or a screen reader announces a row of numbers with no context.
 */
export interface PaginationProps {
  current?: number;
  total?: number;
  /** Result count line — "284 Produkte". It tells a visitor whether to keep
   *  going, and is the only thing that helps on a phone. */
  count?: string;
  hrefFor?: (page: number) => string;
  label?: string;
  className?: string;
}
export function Pagination(props: PaginationProps): JSX.Element;
