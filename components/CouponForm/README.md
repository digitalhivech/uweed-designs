Use `CouponForm` on the cart page, in the cart drawer and at checkout.

```jsx
<CouponForm onApply={apply} />
<CouponForm applied={{ code: "ANGEBOT10", amount: "−16.83 CHF" }} onRemove={clear} />
```

- Collapsed by default. It costs the visitor with a code nothing and does not prompt the one without.
- The trigger is an outline **button**, not a text link: it reads as a control without claiming the buy signal for something that only reveals a field.
- The apply button is outline green — one filled green per step.
- Report success and failure with `Message` inline below the field.
