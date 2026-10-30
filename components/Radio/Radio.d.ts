/**
 * One from a set. Always inside a `RadioGroup` — without a fieldset and
 * legend a screen reader announces each option with no idea what is being
 * chosen, which is a live WCAG 1.3.1 failure across the whole checkout.
 */
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** Second line — price, delivery estimate, or the reason it is disabled. */
  sub?: React.ReactNode;
  /** Card radio: the whole card is the control. Shipping and payment methods.
   *  Selection is shown by border + radio, never by a fill. */
  card?: boolean;
  disabled?: boolean;
  className?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}
export function Radio(props: RadioProps): JSX.Element;

export interface RadioGroupProps {
  /** Rendered as a real `<legend>`. Never omit it. */
  legend: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
export function RadioGroup(props: RadioGroupProps): JSX.Element;
