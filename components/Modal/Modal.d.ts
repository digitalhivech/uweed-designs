/**
 * A focus-trapping overlay for a decision that must be made before
 * continuing. The page behind must be inert, not merely covered.
 */
export interface ModalProps {
  title?: React.ReactNode;
  open?: boolean;
  /** No close button, Escape does nothing, no backdrop dismiss. This is the
   *  age gate's variant — "a modal you cannot dismiss". */
  blocking?: boolean;
  onClose?: () => void;
  /** Actions, right-aligned. Give the safe one `data-autofocus`. */
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
export function Modal(props: ModalProps): JSX.Element | null;
