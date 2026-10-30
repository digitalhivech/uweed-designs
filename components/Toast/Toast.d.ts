/**
 * Transient confirmation. Bottom-right on desktop, bottom-centre on mobile
 * above any sticky bar. It must not steal focus — a keyboard user reaches it
 * by tabbing, in DOM order.
 */
export interface ToastProps {
  /** `light` for every standard confirmation · `dark` only over imagery or
   *  a light-heavy surface where a white card has no contrast. */
  variant?: "light" | "dark";
  title?: React.ReactNode;
  /** Action link text — "Warenkorb ansehen". A toast with a link never
   *  auto-dismisses. */
  action?: React.ReactNode;
  actionHref?: string;
  onClose?: () => void;
  children?: React.ReactNode;
  className?: string;
}
export function Toast(props: ToastProps): JSX.Element;
