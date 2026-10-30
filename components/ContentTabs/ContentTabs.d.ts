/**
 * The PDP's desktop tab set: a vertical rail with the panel to its right.
 * Swap to `Accordion` below `lg` — do not reuse the accordion's markup with
 * tab roles bolted on, the keyboard models differ.
 */
export interface ContentTab { label: React.ReactNode; content: React.ReactNode }
export interface ContentTabsProps {
  tabs?: ContentTab[];
  defaultIndex?: number;
  className?: string;
}
export function ContentTabs(props: ContentTabsProps): JSX.Element;
