/**
 * Product imagery on a PDP. Thumbnails sit BELOW the main image, 76px,
 * scroll-snapped — and are hidden below `md`, where a row of them under a
 * square image eats a third of the screen to duplicate a gesture people
 * already use.
 *
 * @startingPoint section="Commerce" subtitle="Square main image, tag stack, favourites heart, 76px thumbnail strip" viewport="700x480"
 */
export interface PdpGalleryImage { src: string; full?: string }
export interface PdpGalleryProps {
  images?: PdpGalleryImage[];
  /** Tag stack, top right. Non-interactive. Two badges maximum. */
  tags?: Array<{ label: React.ReactNode; variant?: string }>;
  /** Favourites state. One button with aria-pressed, not two swapped
   *  controls. Saved is red: red is the attention colour, and a saved favourite is one of
   *  the few things it marks. */
  saved?: boolean;
  onToggleSave?: () => void;
  /** Opens the lightbox. Assign `src` from `data-full` only at this point. */
  onZoom?: () => void;
  className?: string;
}
export function PdpGallery(props: PdpGalleryProps): JSX.Element;
