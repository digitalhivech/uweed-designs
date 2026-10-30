/**
 * Independent on/off. Multiple selections. The input is wrapped in its label,
 * so clicking the text toggles it and no for/id pair is needed.
 */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** Filter-facet count, right-aligned in grey. Never the link colour: a count cannot be tapped. */
  count?: number | string;
  /** There is no HTML attribute for this — it is set on the element. */
  indeterminate?: boolean;
  className?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
