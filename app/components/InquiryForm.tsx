"use client";

import { FormEvent, useState } from "react";
import { contact } from "../data/site";
import { ArrowIcon, WhatsAppIcon } from "./SiteChrome";

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = [
      "Hello Sealwell Packaging, I would like to request a quotation.",
      "",
      `Name: ${form.get("name")}`,
      `Company: ${form.get("company") || "Not provided"}`,
      `Phone / WhatsApp: ${form.get("phone")}`,
      `Email: ${form.get("email") || "Not provided"}`,
      `Product: ${form.get("product")}`,
      `Colour: ${form.get("colour") || "To be discussed"}`,
      `Quantity: ${form.get("quantity") || "To be discussed"}`,
      `Delivery location: ${form.get("delivery") || "Not provided"}`,
      `Requirement: ${form.get("message") || "Please share product and quotation details."}`,
    ];
    setSubmitted(true);
    window.open(`https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="contact-form-wrap">
      <div className="form-heading">
        <span>QUOTATION ENQUIRY</span>
        <h2>Share your requirement.</h2>
        <p>Add the details you already know. The form prepares a complete WhatsApp enquiry for you to review before sending.</p>
      </div>
      <form className="inquiry-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label><span>Your name *</span><input name="name" type="text" autoComplete="name" placeholder="Full name" required /></label>
          <label><span>Company</span><input name="company" type="text" autoComplete="organization" placeholder="Company name" /></label>
          <label><span>Phone / WhatsApp *</span><input name="phone" type="tel" autoComplete="tel" placeholder="Your contact number" required /></label>
          <label><span>Email</span><input name="email" type="email" autoComplete="email" placeholder="name@company.com" /></label>
          <label><span>Product *</span><select name="product" defaultValue="" required><option value="" disabled>Select a product</option><option>13 mm Flip-Off Seal</option><option>20 mm Flip-Off Seal</option><option>Aluminium Vial Seal</option><option>Need size guidance</option></select></label>
          <label><span>Colour reference</span><input name="colour" type="text" placeholder="Example: SW11 Red" /></label>
          <label><span>Required quantity</span><input name="quantity" type="text" inputMode="numeric" placeholder="Approximate quantity" /></label>
          <label><span>Delivery location</span><input name="delivery" type="text" autoComplete="address-level2" placeholder="City, state or country" /></label>
          <label className="field-wide"><span>Requirement details</span><textarea name="message" rows={5} placeholder="Share vial format, size, delivery location or any special requirement." /></label>
        </div>
        <button className="button button-primary form-submit" type="submit"><WhatsAppIcon /> Prepare WhatsApp enquiry <ArrowIcon /></button>
        <p className="form-note" aria-live="polite">{submitted ? "Your enquiry is ready in WhatsApp. Please review the details before sending." : "This form opens WhatsApp. Your information is not stored by this website."}</p>
      </form>
    </div>
  );
}
