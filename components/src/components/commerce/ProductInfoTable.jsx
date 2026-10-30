import React from "react";

/* 24 · Product attributes on a PDP. <th scope="row">, not two <td>s: the
   label is a header for its row, and that is what pairs it with its value
   for a screen reader — same reasoning as the order summary being a <dl>. */
export function ProductInfoTable({ rows = [], caption, className = "", ...rest }) {
  return (
    <table className={["uw-pit", className].filter(Boolean).join(" ")} {...rest}>
      {caption ? <caption className="visually-hidden">{caption}</caption> : null}
      <tbody>
        {rows.map((r) => (
          <tr key={r.label}>
            <th scope="row">{r.label}</th>
            <td>{r.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
