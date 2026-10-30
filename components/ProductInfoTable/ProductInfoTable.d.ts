/**
 * Product attributes on a PDP. Column widths are 34% / 66% — the live copy
 * runs 20% / 65%, totalling 85% with the remainder unassigned.
 */
export interface ProductInfoRow { label: React.ReactNode; value: React.ReactNode }
export interface ProductInfoTableProps {
  rows?: ProductInfoRow[];
  /** Visually-hidden caption. */
  caption?: string;
  className?: string;
}
export function ProductInfoTable(props: ProductInfoTableProps): JSX.Element;
