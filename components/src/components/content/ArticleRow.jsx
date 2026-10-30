import React from "react";
import { Button } from "../core/Button.jsx";
import { BlogCard } from "./BlogCard.jsx";

/* 37 · Article row. The one way articles are teased outside the magazine:
   a heading, article cards three across, and one blue button to the
   magazine. It replaces the three formats the site used (a grid with wide
   pictures, a large picture with a list, a swipe row with grey cards).
   Nothing here swipes. Below `md` each card becomes a row, picture left and
   label and title right, so all articles are visible without a gesture and
   nothing is cut off. The cards are plain BlogCards; this component only
   places them. */
export function ArticleRow({
  title,
  articles = [],
  moreLabel,
  moreHref,
  headingLevel = 2,
  className = "",
  ...rest
}) {
  const H = "h" + headingLevel;
  return (
    <section className={["uw-arow", className].filter(Boolean).join(" ")} {...rest}>
      {title ? <H className="uw-arow__title">{title}</H> : null}
      <div className="uw-arow__list">
        {articles.map((a) => (
          <BlogCard key={a.href || a.title} headingLevel={Math.min(headingLevel + 1, 6)} {...a} />
        ))}
      </div>
      {moreLabel && moreHref ? (
        <p className="uw-arow__more"><Button variant="nav" href={moreHref}>{moreLabel}</Button></p>
      ) : null}
    </section>
  );
}
