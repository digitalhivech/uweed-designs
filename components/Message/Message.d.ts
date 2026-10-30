/**
 * Inline feedback that stays on the page. Errors take role="alert" (an alert
 * interrupts a screen reader mid-sentence, right for a failure); everything
 * else takes role="status".
 */
export interface MessageProps {
  /** `neutral` context with no valence · `info` worth knowing before acting
   *  · `success` completed · `warning` caution — compliance, suitability,
   *  restrictions · `error` failed or needs fixing. */
  variant?: "neutral" | "info" | "success" | "warning" | "error";
  /** Optional heading. With a title the block top-aligns; without it centres. */
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
export function Message(props: MessageProps): JSX.Element;
