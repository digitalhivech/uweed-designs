/**
 * Single-line text entry and its multi-line sibling. Place inside a
 * `FormField` so the label, hint and error travel with it.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** `textarea` switches to the multi-line variant: 96px min, card radius
   *  (a pill on a 96px box reads as a lozenge), resize vertical. */
  as?: "input" | "textarea";
  type?: string;
  /** Icon name rendered inside the leading edge — search fields. */
  leadingIcon?: string;
  /** Sets aria-invalid. The visual error state is driven by the wrapping
   *  FormField so label and message follow. */
  invalid?: boolean;
  className?: string;
}
export function Input(props: InputProps): JSX.Element;
