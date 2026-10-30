/**
 * The four reassurance items below add-to-cart on a PDP — delivery, returns,
 * payment, lab testing. Four across on desktop, two by two at md, stacked
 * below.
 */
export interface OrderInfoBarItem { icon: string; label: string; sub: string }
export interface OrderInfoBarProps {
  /** Four items maximum. A fifth turns a scannable strip into a list nobody
   *  reads. Defaults to the standard uWeed four. */
  items?: OrderInfoBarItem[];
  className?: string;
}
export function OrderInfoBar(props: OrderInfoBarProps): JSX.Element;
