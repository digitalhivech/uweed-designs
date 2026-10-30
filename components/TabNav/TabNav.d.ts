/**
 * A horizontal row of category filters over a listing or carousel. Narrows
 * what is shown without leaving the page. Not for more than about eight
 * options — beyond that it is a filter panel.
 */
export interface TabNavItem {
  label: string;
  href?: string;
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}
export interface TabNavProps {
  items?: TabNavItem[];
  /** aria-label on the nav. Without it a screen reader announces
   *  "navigation" with no idea which one. Localise it. */
  label?: string;
  className?: string;
}
export function TabNav(props: TabNavProps): JSX.Element;
