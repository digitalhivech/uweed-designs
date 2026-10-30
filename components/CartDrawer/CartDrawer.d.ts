/**
 * The slide-in cart. A drawer with modal behaviour — focus moves in on open,
 * returns to the trigger on close, and is trapped while open.
 *
 * @startingPoint section="Commerce" subtitle="Slide-in cart with line items, coupon slot and sticky footer" viewport="700x520"
 */
export interface CartDrawerItem {
  id: string;
  name: string;
  /** Size only — "10 ml". Never a price per unit. */
  size?: string;
  image?: string;
  qty?: number;
  price?: string;
  was?: string;
  sale?: boolean;
}
export interface CartDrawerProps {
  open?: boolean;
  items?: CartDrawerItem[];
  subtotal?: string;
  onClose?: () => void;
  onQuantityChange?: (id: string, qty: number) => void;
  onRemove?: (id: string) => void;
  footerNote?: React.ReactNode;
  checkoutLabel?: string;
  emptyCopy?: React.ReactNode;
  /** Slot above the subtotal — this is where `CouponForm` goes. */
  children?: React.ReactNode;
  className?: string;
}
export function CartDrawer(props: CartDrawerProps): JSX.Element | null;
