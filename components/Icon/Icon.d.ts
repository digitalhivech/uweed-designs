/**
 * One icon from the uWeed set: Tabler Icons (tabler.io/icons, MIT licence),
 * drawn on a 24×24 grid with a 2px line and round ends. Icons are aria-hidden
 * by default — the label beside them carries the meaning. Pass `title` only
 * when the icon is the sole carrier of information.
 *
 * The same artwork is in the Icons asset group (assets/Icons/) as SVG files.
 */
export interface IconProps {
  /** Tabler's own icon name, e.g. "shopping-cart". See ICON_NAMES for the set in use. A name ending in "-filled" is drawn solid. */
  name: string;
  /** Rendered box, px. One of four: 16 in small controls, 20 in buttons, fields and messages, 24 on its own, 32 for an empty state. */
  size?: number;
  /** Line weight on the 24px grid. The system uses 2 everywhere; leave it alone. Ignored by filled icons. */
  strokeWidth?: number;
  color?: string;
  /** Accessible name. Omit for decorative icons (the default). */
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element | null;
/** The icon names in use, in alphabetical order. */
export const ICON_NAMES: string[];
