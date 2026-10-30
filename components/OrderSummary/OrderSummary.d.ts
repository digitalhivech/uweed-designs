/**
 * The line-item breakdown on the cart page and in checkout. The total is the
 * only line at --fs-h5; everything above is body, the tax note below is meta.
 */
export interface OrderSummaryRow {
  label: React.ReactNode;
  /** "Gratis", never "0.00 CHF" — a word reads as a benefit, a zero reads as
   *  an unfilled field. (FR uses *offert*.) */
  value: React.ReactNode;
  /** Red, with an explicit minus in the value. */
  discount?: boolean;
}
export interface OrderSummaryProps {
  rows?: OrderSummaryRow[];
  total?: React.ReactNode;
  tax?: React.ReactNode;
  className?: string;
}
export function OrderSummary(props: OrderSummaryProps): JSX.Element;
