/**
 * The floating panel surface shared by the mega menu, the sort and filter
 * panels, search suggestions and enhanced selects. The behaviour is chosen
 * per use; the surface is the same.
 */
export interface PopoverProps {
  /** `menu` plain links (never role="menu" — that implies arrow-key
   *  navigation and a roving tabindex, wrong for navigation) · `panel`
   *  disclosure, Escape closes and returns focus to the trigger ·
   *  `listbox` full combobox, focus stays in the input. */
  behaviour?: "menu" | "panel" | "listbox";
  label?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export function Popover(props: PopoverProps): JSX.Element;

export interface PopoverItemProps {
  as?: keyof JSX.IntrinsicElements;
  href?: string;
  /** Sets role="option" + aria-selected. Selected rows get a check mark,
   *  never a fill — hover is the only fill in this component. */
  selected?: boolean;
  /** Current page in a menu. Weight only: a check mark would imply a choice
   *  that was not made. */
  current?: boolean;
  /** Keyboard highlight. Same light-blue fill as hover. */
  active?: boolean;
  /** Row metadata — a facet count. Medium blue, tabular. */
  meta?: React.ReactNode;
  /** Second line in a rich row. Dark-gray, never medium-gray: the second line is content, not a hint. */
  sub?: React.ReactNode;
  /** 36px thumbnail for search suggestion rows. */
  thumb?: string;
  children?: React.ReactNode;
  className?: string;
}
export function PopoverItem(props: PopoverItemProps): JSX.Element;
export function PopoverGroup(props: { children?: React.ReactNode }): JSX.Element;
export function PopoverSeparator(): JSX.Element;
export function PopoverFooter(props: { children?: React.ReactNode }): JSX.Element;
