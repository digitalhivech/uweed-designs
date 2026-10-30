/**
 * Header search and its suggestion panel.
 *
 * KNOWN CONSTRAINT: on the live site FiboSearch (dgwt-wcas) renders the
 * suggestion DOM, and one wrapper is appended to <body> and reused for every
 * search on the page. So skeleton rows, an error state, the full ARIA
 * combobox pattern, no-results chips and per-instance behaviour are all
 * unavailable without plugin JS. This component is the specified target.
 */
export interface SearchSuggestion {
  label: React.ReactNode;
  /** Second line. Dark-gray, never medium-gray. */
  sub?: React.ReactNode;
  /** Right-hand slot. Product rows: the price, as <Price role="list" /> (sale:
   *  red with the original struck). Category and brand rows: the product count. */
  meta?: React.ReactNode;
  thumb?: string;
  href?: string;
}
export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  /** Products, categories, brands — 4 / 3 / 3 as mocked. */
  groups?: Array<{ label: React.ReactNode; items: SearchSuggestion[] }>;
  seeAll?: { label: React.ReactNode; href: string };
  open?: boolean;
  label?: string;
  className?: string;
}
export function SearchBar(props: SearchBarProps): JSX.Element;
