/**
 * The primary action control. Every clickable thing that performs an action
 * rather than navigating is a button. Colour is chosen by purpose:
 * `buy` advances a purchase, `nav` takes the user somewhere.
 */
export interface ButtonProps {
  /** Purpose, not prominence. `apply` is the coupon form's outline green and
   *  the tile's "choose size". `unavailable` means "not at all" — sold out,
   *  withdrawn — as opposed to `disabled`'s "not right now": transparent
   *  fill, --dark-gray border and label (10.86:1 on white), rendered with
   *  disabled + aria-disabled. Gets neither a tooltip nor an explanation
   *  line — the label is the statement. Icon-only form: aria-label + title. */
  variant?: "buy" | "nav" | "outline" | "text" | "apply" | "unavailable";
  /** Override the rendered element. Defaults to `a` when href is set. */
  as?: keyof JSX.IntrinsicElements;
  /** Renders an anchor. Use for navigation; the `nav` variant is usually a link. */
  href?: string;
  /** Leading icon name from the Icon set, rendered at 20×20. */
  icon?: string;
  /** Square 44×44 button. Requires aria-label — the icon is not a name. */
  iconOnly?: boolean;
  /** Full width. Use where the button is the sole action in a block. */
  block?: boolean;
  /** Label replaced by a spinner, width preserved, aria-busy set. */
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}
export function Button(props: ButtonProps): JSX.Element;
