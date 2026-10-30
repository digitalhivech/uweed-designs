import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Button } from "../core/Button.jsx";
import { Input } from "../forms/Input.jsx";

/* 35 · Newsletter block. An informing block: uWeed inviting, not selling.
   It is a light-gray block. Pink appears as a mark only: the disc with the
   envelope and the small label above the heading. Heading and text are dark
   blue and dark gray, and the button is the blue nav button: subscribing is
   not buying. The field is white because the block already carries the
   field's usual light-gray.
   Invitation left, action right; where the block is narrow they stack and
   the button takes the full width.
   The block never promises anything by default. Incentives, frequency and
   the double opt-in wording belong to the copy that is passed in. */
export function NewsletterBlock({
  eyebrow = "Newsletter",
  title,
  text,
  icon = "mail",
  fieldLabel = "E-Mail-Adresse",
  placeholder = "name@beispiel.ch",
  buttonLabel = "Abonnieren",
  legal,
  status = "idle",
  message,
  onSubmit,
  headingLevel = 2,
  className = "",
  ...rest
}) {
  const H = "h" + headingLevel;
  const [email, setEmail] = React.useState("");
  const id = React.useId();
  const error = status === "error";
  const cls = ["uw-inform", "uw-inform--tint", "uw-news", error && "is-error", className].filter(Boolean).join(" ");
  return (
    <section className={cls} {...rest}>
      <div className="uw-news__intro">
        {icon ? <span className="uw-inform__disc" aria-hidden="true"><Icon name={icon} size={24} /></span> : null}
        <div>
          {eyebrow ? <p className="uw-inform__eyebrow">{eyebrow}</p> : null}
          <H className="uw-inform__title">{title}</H>
          {text ? <p className="uw-inform__text">{text}</p> : null}
        </div>
      </div>
      <div className="uw-news__action">
        {status === "success" ? (
          <p className="uw-news__done" role="status">
            <Icon name="circle-check" size={20} />
            <span>{message}</span>
          </p>
        ) : (
          <>
            <form
              className="uw-news__form"
              noValidate
              onSubmit={(e) => { e.preventDefault(); onSubmit?.(email); }}
            >
              <Input
                type="email"
                autoComplete="email"
                aria-label={fieldLabel}
                aria-describedby={error && message ? id : undefined}
                placeholder={placeholder}
                invalid={error}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button variant="nav" type="submit" loading={status === "sending"}>{buttonLabel}</Button>
            </form>
            {error && message ? (
              <p className="uw-news__error" id={id} role="alert">
                <Icon name="alert-circle" size={16} />
                <span>{message}</span>
              </p>
            ) : null}
            {legal ? <p className="uw-news__legal">{legal}</p> : null}
          </>
        )}
      </div>
    </section>
  );
}
