/**
 * The blocking age confirmation. The modal with a --blocking variant —
 * every difference from a normal modal is deliberate: no dismiss, Escape
 * does nothing, nothing to return focus to.
 */
export interface AgeGateProps {
  question?: React.ReactNode;
  body?: React.ReactNode;
  /** Italic, 13px, dark-gray. Italic separates it from the question above
   *  without another colour or a rule. */
  legal?: React.ReactNode;
  yesLabel?: string;
  noLabel?: string;
  onYes?: () => void;
  onNo?: () => void;
  open?: boolean;
}
export function AgeGate(props: AgeGateProps): JSX.Element;
