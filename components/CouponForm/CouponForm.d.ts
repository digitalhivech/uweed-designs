/**
 * The collapsed coupon field on the cart page, in the drawer and at checkout.
 * Success and failure use `Message` inline below the field — never a toast,
 * because a coupon failure has to persist while the visitor retypes.
 */
export interface CouponFormProps {
  triggerLabel?: string;
  placeholder?: string;
  applyLabel?: string;
  /** When set, renders the applied state as a removable green chip. */
  applied?: { code: string; amount: string };
  onApply?: (code: string) => void;
  onRemove?: () => void;
  /** Leave false. An open field prompts the visitor who has no code. */
  defaultOpen?: boolean;
  className?: string;
}
export function CouponForm(props: CouponFormProps): JSX.Element;
