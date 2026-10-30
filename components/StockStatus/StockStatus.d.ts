/**
 * A one-line statement of availability. The dot is decorative; the text
 * carries the meaning, so the state survives greyscale and colour blindness.
 */
export interface StockStatusProps {
  /** `in` green · `low` orange dot · `last` orange dot with the number
   *  shown · `out` grey. */
  state?: "in" | "low" | "last" | "out";
  /** On a PDP the out-of-stock label goes dark-blue at bold weight, so
   *  weight carries the legibility colour otherwise would. */
  pdp?: boolean;
  children?: React.ReactNode;
  className?: string;
}
export function StockStatus(props: StockStatusProps): JSX.Element;
