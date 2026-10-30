/**
 * Increment, decrement and direct entry. Three densities, one component.
 * It writes a value and fires change — it never talks to the server itself.
 */
export interface QuantitySelectorProps {
  /** `lg` 56px PDP · `md` 40px cart and drawer · `sm` 32px read-only. */
  size?: "lg" | "md" | "sm";
  /** Controlled value. Omit for internal state. */
  value?: number;
  min?: number;
  /** Stock limit. Plus disables here rather than silently refusing. */
  max?: number;
  /** In a cart, minus becomes a bin at the minimum — a disabled minus at 1
   *  is a dead end. Opt in per instance; a PDP does not (nothing to remove). */
  removeAtOne?: boolean;
  onChange?: (value: number) => void;
  onRemove?: () => void;
  className?: string;
}
export function QuantitySelector(props: QuantitySelectorProps): JSX.Element;
