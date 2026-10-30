/**
 * The listing sort control — a text button in the action-link treatment that
 * shows its current value ("Sortieren: Beliebtheit") and opens a listbox
 * Popover aligned right. Replaces the former sort pill.
 */
export interface SortButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Prefix, localised — Sortieren / Trier / Sort. */
  label?: string;
  /** Current sort value. */
  value?: string;
  open?: boolean;
  /** Overrides the "label: value" text. */
  children?: React.ReactNode;
  className?: string;
}
export function SortButton(props: SortButtonProps): JSX.Element;
