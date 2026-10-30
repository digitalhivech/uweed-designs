import * as React from "react";

/** The three lockups in the approved logo kit. */
export type LogoVariant = "horizontal" | "tagline" | "mark";

/** The eight approved colourways. The mark exists in six: no dark-green, no dark-pink. */
export type LogoColor =
  | "dark-blue" | "white" | "dark-green" | "dark-pink"
  | "light-blue" | "light-green" | "light-pink" | "black";

export interface LogoProps {
  /** @default "horizontal" */
  variant?: LogoVariant;
  /** One of the approved colourways; anything else, or an unavailable mark colour, renders dark-blue. @default "dark-blue" */
  color?: LogoColor;
  /** Rendered width in px. Never goes below the kit minimum: 100 horizontal, 180 tagline, 24 mark. */
  width?: number;
  /** Accessible name. @default "uWeed" */
  label?: string;
  /** True when the logo repeats a name already given nearby, or sits inside a labelled link. @default false */
  decorative?: boolean;
  className?: string;
}

/** The uWeed logo, inlined from the approved kit. Colour is a colourway, never free. */
export function Logo(props: LogoProps): React.ReactElement;
