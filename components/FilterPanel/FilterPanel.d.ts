/**
 * Filtering and sorting a product listing below `lg`. Full screen on a phone,
 * a right-hand panel from 480px. Sorting is its own block at the top; each
 * filter opens in place and says what is chosen in it while closed. Opened by
 * one filled blue Button with the filter icon and the number of options in use.
 */
export interface FilterPanelOption {
  label: string;
  /** Defaults to the label. */
  value?: string;
  /** Products this option gives. 0 greys the option out unless it is ticked. */
  count?: number;
}
export interface FilterPanelFacet {
  id: string;
  /** The filter's name, e.g. "Marke". */
  label: string;
  options: Array<string | FilterPanelOption>;
}
export interface FilterPanelProps {
  /** The panel renders nothing while closed. */
  open?: boolean;
  /** "Filter & Sortierung". */
  title?: React.ReactNode;
  /** Small label above the sorting field: "Sortieren nach". */
  sortLabel?: React.ReactNode;
  /** Sort options. Leave empty to show filters only. */
  sorts?: Array<string | { value: string; label: string }>;
  /** Value of the current sort option. Defaults to the first. */
  sort?: string;
  onSortChange?: (value: string) => void;
  /** Small label above the filters: "Filtern nach". */
  filterLabel?: React.ReactNode;
  facets?: FilterPanelFacet[];
  /** Chosen option values per filter id, e.g. { brand: ["Harlequin"] }. */
  applied?: Record<string, string[]>;
  /** Called when an option is ticked or unticked. */
  onToggle?: (facetId: string, value: string) => void;
  /** Id, or ids, of the filters that start open. */
  defaultOpen?: string | string[];
  /** The whole label of the blue button, with the live number: "13 Produkte zeigen". */
  resultLabel: React.ReactNode;
  /** "Zurücksetzen". Shown only when `onReset` is given. */
  resetLabel?: React.ReactNode;
  /** Clears every filter and returns the sorting to its default. */
  onReset?: () => void;
  /** Accessible name of the close button: "Schliessen". */
  closeLabel?: string;
  /** Called by the close button, the blue button, Escape and a tap on the dimmed page. */
  onClose?: () => void;
  className?: string;
}
export function FilterPanel(props: FilterPanelProps): JSX.Element | null;
