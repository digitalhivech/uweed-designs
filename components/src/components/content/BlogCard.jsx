import React from "react";

/* 11 · Blog card. ONE link per card, on the title, stretched over the whole
   card. The image is not a link and there is no "Weiterlesen": a nine-card
   archive went from 27 links to 9, each named by its headline.
   The image is decorative — alt="" with explicit width and height. The
   headline beside it carries the meaning.
   Date is month and year. Day-level precision implies news, and nothing on
   this blog is news. Reading time is deliberately dropped.
   The category label is the first thing in the body. On the desktop card it
   is laid over the top-left corner of the picture; in the row (the compact
   variant, and every card on a phone) it sits above the title, because on a
   small picture it would cover most of it.
   The picture is 16:9 in every variant and at every width. */
export function BlogCard({
  variant = "standard",
  title,
  href = "#",
  excerpt,
  image,
  category,
  date,
  dateTime,
  headingLevel = 3,
  className = "",
  ...rest
}) {
  const H = "h" + headingLevel;
  const cls = ["uw-post", variant !== "standard" && "uw-post--" + variant, className]
    .filter(Boolean).join(" ");
  return (
    <article className={cls} {...rest}>
      <div className="uw-post__media">
        <img src={image} alt="" width="1600" height="900" loading="lazy" />
      </div>
      <div className="uw-post__body">
        {category ? <span className="uw-post__badge">{category}</span> : null}
        <H className="uw-post__title"><a href={href}>{title}</a></H>
        {excerpt ? <p className="uw-post__excerpt">{excerpt}</p> : null}
        {date ? <p className="uw-post__meta"><time dateTime={dateTime}>{date}</time></p> : null}
      </div>
    </article>
  );
}
