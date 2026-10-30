/**
 * Assembles a label, a control, help text, a required marker and an error.
 * Not a new control — the wrapper the form primitives live in.
 */
export interface FormFieldProps {
  label?: React.ReactNode;
  /** Must match the control's id. Also derives the shared hint/error id. */
  htmlFor?: string;
  /** Help text. Shares its slot with `error`, which replaces it. */
  hint?: React.ReactNode;
  /** Sets the invalid state on the whole field. Errors appear on blur, never
   *  on keystroke. */
  error?: React.ReactNode;
  /** Decorative asterisk. `required` on the control is what gets announced. */
  required?: boolean;
  /** Mark optional fields where most are required — on checkout, ten
   *  asterisks say less than one "optional". */
  optional?: boolean;
  children?: React.ReactNode;
  className?: string;
}
export function FormField(props: FormFieldProps): JSX.Element;
