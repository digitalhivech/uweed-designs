import React from "react";

/* Tabler Icons (tabler.io/icons), MIT licence. The licence text is in
   assets/Icons/README.md. 24×24 grid, 2px line, round ends and round joins:
   the same construction as the uWeed logo.
   Names are Tabler's own, so a further icon is added from the same family
   under its published name. A name ending in "-filled" is Tabler's solid
   version and is drawn as a fill, not a line.
   The same artwork is in the Icons asset group as SVG files. */
const PATHS = {
  "adjustments-horizontal": "<path d=\"M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M4 6l8 0\"></path><path d=\"M16 6l4 0\"></path><path d=\"M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M4 12l2 0\"></path><path d=\"M10 12l10 0\"></path><path d=\"M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M4 18l11 0\"></path><path d=\"M19 18l1 0\"></path>",
  "alert-circle": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\"></path><path d=\"M12 8v4\"></path><path d=\"M12 16h.01\"></path>",
  "alert-triangle": "<path d=\"M12 9v4\"></path><path d=\"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0\"></path><path d=\"M12 16h.01\"></path>",
  "arrow-back-up": "<path d=\"M9 14l-4 -4l4 -4\"></path><path d=\"M5 10h11a4 4 0 1 1 0 8h-1\"></path>",
  "arrows-sort": "<path d=\"M3 9l4 -4l4 4m-4 -4v14\"></path><path d=\"M21 15l-4 4l-4 -4m4 4v-14\"></path>",
  "cannabis": "<path d=\"M7 20s0 -2 1 -3.5c-1.5 0 -2 -.5 -4 -1.5c0 0 1.839 -1.38 5 -1c-1.789 -.97 -3.279 -2.03 -5 -6c0 0 3.98 -.3 6.5 3.5c-2.284 -4.9 1.5 -9.5 1.5 -9.5c2.734 5.47 2.389 7.5 1.5 9.5c2.531 -3.77 6.5 -3.5 6.5 -3.5c-1.721 3.97 -3.211 5.03 -5 6c3.161 -.38 5 1 5 1c-2 1 -2.5 1.5 -4 1.5c1 1.5 1 3.5 1 3.5c-2 0 -4.438 -2.22 -5 -3c-.563 .78 -3 3 -5 3\"></path><path d=\"M12 22v-5\"></path>",
  "check": "<path d=\"M5 12l5 5l10 -10\"></path>",
  "chevron-down": "<path d=\"M6 9l6 6l6 -6\"></path>",
  "chevron-left": "<path d=\"M15 6l-6 6l6 6\"></path>",
  "chevron-right": "<path d=\"M9 6l6 6l-6 6\"></path>",
  "chevron-up": "<path d=\"M6 15l6 -6l6 6\"></path>",
  "circle-check": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\"></path><path d=\"M9 12l2 2l4 -4\"></path>",
  "circle-x": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\"></path><path d=\"M10 10l4 4m0 -4l-4 4\"></path>",
  "clock": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\"></path><path d=\"M12 7v5l3 3\"></path>",
  "credit-card": "<path d=\"M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8\"></path><path d=\"M3 10l18 0\"></path><path d=\"M7 15l.01 0\"></path><path d=\"M11 15l2 0\"></path>",
  "external-link": "<path d=\"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6\"></path><path d=\"M11 13l9 -9\"></path><path d=\"M15 4h5v5\"></path>",
  "filter": "<path d=\"M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227\"></path>",
  "flask": "<path d=\"M9 3l6 0\"></path><path d=\"M10 9l4 0\"></path><path d=\"M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6\"></path>",
  "heart": "<path d=\"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572\"></path>",
  "heart-filled": "<path d=\"M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z\"></path>",
  "help-circle": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\"></path><path d=\"M12 16v.01\"></path><path d=\"M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483\"></path>",
  "info-circle": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\"></path><path d=\"M12 9h.01\"></path><path d=\"M11 12h1v4h1\"></path>",
  "leaf": "<path d=\"M5 21c.5 -4.5 2.5 -8 7 -10\"></path><path d=\"M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3l.014 0\"></path>",
  "lock": "<path d=\"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6\"></path><path d=\"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0\"></path><path d=\"M8 11v-4a4 4 0 1 1 8 0v4\"></path>",
  "mail": "<path d=\"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10\"></path><path d=\"M3 7l9 6l9 -6\"></path>",
  "map-pin": "<path d=\"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\"></path><path d=\"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0\"></path>",
  "menu-2": "<path d=\"M4 6l16 0\"></path><path d=\"M4 12l16 0\"></path><path d=\"M4 18l16 0\"></path>",
  "minus": "<path d=\"M5 12l14 0\"></path>",
  "package": "<path d=\"M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5\"></path><path d=\"M12 12l8 -4.5\"></path><path d=\"M12 12l0 9\"></path><path d=\"M12 12l-8 -4.5\"></path><path d=\"M16 5.25l-8 4.5\"></path>",
  "phone": "<path d=\"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2\"></path>",
  "plus": "<path d=\"M12 5l0 14\"></path><path d=\"M5 12l14 0\"></path>",
  "rosette-discount": "<path d=\"M9 15l6 -6\"></path><path d=\"M9 9.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0\" fill=\"currentColor\"></path><path d=\"M14 14.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0\" fill=\"currentColor\"></path><path d=\"M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1\"></path>",
  "search": "<path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\"></path><path d=\"M21 21l-6 -6\"></path>",
  "selector": "<path d=\"M8 9l4 -4l4 4\"></path><path d=\"M16 15l-4 4l-4 -4\"></path>",
  "shield-check": "<path d=\"M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06\"></path><path d=\"M15 19l2 2l4 -4\"></path>",
  "shopping-bag": "<path d=\"M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304\"></path><path d=\"M9 11v-5a3 3 0 0 1 6 0v5\"></path>",
  "shopping-cart": "<path d=\"M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M17 17h-11v-14h-2\"></path><path d=\"M6 5l14 1l-1 7h-13\"></path>",
  "star": "<path d=\"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245\"></path>",
  "star-filled": "<path d=\"M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z\"></path>",
  "tag": "<path d=\"M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"></path><path d=\"M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3\"></path>",
  "trash": "<path d=\"M4 7l16 0\"></path><path d=\"M10 11l0 6\"></path><path d=\"M14 11l0 6\"></path><path d=\"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12\"></path><path d=\"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3\"></path>",
  "truck": "<path d=\"M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5\"></path>",
  "user": "<path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\"></path><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\"></path>",
  "user-check": "<path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\"></path><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4\"></path><path d=\"M15 19l2 2l4 -4\"></path>",
  "world": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\"></path><path d=\"M3.6 9h16.8\"></path><path d=\"M3.6 15h16.8\"></path><path d=\"M11.5 3a17 17 0 0 0 0 18\"></path><path d=\"M12.5 3a17 17 0 0 1 0 18\"></path>",
  "x": "<path d=\"M18 6l-12 12\"></path><path d=\"M6 6l12 12\"></path>",
  "zoom-in": "<path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\"></path><path d=\"M7 10l6 0\"></path><path d=\"M10 7l0 6\"></path><path d=\"M21 21l-6 -6\"></path>",
};

export function Icon({ name, size = 24, strokeWidth = 2, color = "currentColor", className = "", style, title, ...rest }) {
  const d = PATHS[name];
  if (!d) return null;
  const filled = /-filled$/.test(name);
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? color : "none"}
      stroke={filled ? "none" : color}
      strokeWidth={filled ? undefined : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : "true"}
      focusable="false"
      style={{ flex: "0 0 auto", display: "block", ...style }}
      dangerouslySetInnerHTML={{ __html: (title ? "<title>" + title + "</title>" : "") + d }}
      {...rest}
    />
  );
}

export const ICON_NAMES = ["adjustments-horizontal","alert-circle","alert-triangle","arrow-back-up","arrows-sort","cannabis","check","chevron-down","chevron-left","chevron-right","chevron-up","circle-check","circle-x","clock","credit-card","external-link","filter","flask","heart","heart-filled","help-circle","info-circle","leaf","lock","mail","map-pin","menu-2","minus","package","phone","plus","rosette-discount","search","selector","shield-check","shopping-bag","shopping-cart","star","star-filled","tag","trash","truck","user","user-check","world","x","zoom-in"];
