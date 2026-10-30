/**
 * The trigger for one facet's filter panel. One pill per facet, always
 * visible, 8px apart. The sort control is NOT a pill — use `SortButton`.
 */
export interface FilterPillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Applied-facet count, rendered inside the label: "Marke (2)". */
  count?: number | string;
  /** Panel is open — light-blue fill, medium-blue border. */
  open?: boolean;
  /** A filter is applied — saturated dark-blue fill with white label. */
  active?: boolean;
  /** No options available. This is the ONE control the "inactive is not
   *  grey" rule exists for. */
  disabled?: boolean;
  /** Trailing icon. `arrows-sort` for sort, `filter` for filters. */
  icon?: string;
  children?: React.ReactNode;
  className?: string;
}
export function FilterPill(props: FilterPillProps): JSX.Element;
