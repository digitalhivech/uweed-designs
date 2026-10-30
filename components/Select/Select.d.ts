/**
 * Choosing one option from a known list. Prefer the native control — the
 * dropdown panel is drawn by the OS and cannot be styled, which is why a
 * brand-matching panel means implementing the full combobox pattern.
 */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Convenience shorthand; pass `children` for option groups. */
  options?: Array<string | { value: string; label: string }>;
  children?: React.ReactNode;
  className?: string;
}
export function Select(props: SelectProps): JSX.Element;
