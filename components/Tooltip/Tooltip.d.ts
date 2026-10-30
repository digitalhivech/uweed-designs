/**
 * A short clarification attached to a control that is ALREADY labelled.
 * Most things that want a tooltip should not have one — if the reader needs
 * it to decide, or it explains why something is disabled, it goes inline.
 */
export interface TooltipProps {
  /** Two sentences maximum. Past that it is a popover, probably body copy. */
  text: React.ReactNode;
  /** Visually-hidden name for the icon trigger. The "i" glyph is not a name. */
  label?: string;
  /** `top` default · `start`/`end` near a viewport edge · `bottom` below. */
  placement?: "top" | "bottom" | "start" | "end";
  /** Glyph inside the 20px circle. */
  glyph?: React.ReactNode;
  /** Inline text trigger instead of the circle — dotted underline, so it is
   *  not mistaken for a link. */
  children?: React.ReactNode;
  className?: string;
}
export function Tooltip(props: TooltipProps): JSX.Element;
