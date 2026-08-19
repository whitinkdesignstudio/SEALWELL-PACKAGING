"use client";

import { FormEvent, useState } from "react";
import { ArrowIcon } from "./SiteChrome";
import { contact } from "../data/site";

export default function InquiryForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const name = (formData.get("name") as string) || "";
    const company = (formData.get("company") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const email = (formData.get("email") as string) || "";
    const product = (formData.get("product") as string) || "";
    const colour = (formData.get("colour") as string) || "";
    const quantity = (formData.get("quantity") as string) || "";
    const delivery = (formData.get("delivery") as string) || "";
    const message = (formData.get("message") as string) || "";

    // Construct email draft content
    const subject = `Enquiry: ${product || "Flip-Off Seals"} - ${name}${company ? ` (${company})` : ""}`;
    const body = `Dear Sealwell Packaging Team,

I would like to submit the following enquiry regarding your flip-off seals and packaging solutions:

--- CONTACT INFORMATION ---
• Name: ${name}
• Company: ${company ? company : "N/A"}
• Phone / WhatsApp: ${phone}
• Email: ${email}

--- PRODUCT REQUIREMENTS ---
• Product: ${product}
• Colour Reference: ${colour ? colour : "N/A"}
• Required Quantity: ${quantity ? quantity : "N/A"}
• Delivery Location: ${delivery ? delivery : "N/A"}

--- REQUIREMENT DETAILS ---
${message}

Thank you,
${name}`;

    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client with pre-filled draft
    try {
      window.location.href = mailtoUrl;
    } catch (e) {
      console.error("Error opening mailto link:", e);
    }

    // Also send via Web3Forms in background for backup record
    formData.append("access_key", "678151bf-5772-43a8-9d9b-137e0a5921a7");
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
    } catch {
      // ignore
    } finally {
      // Auto-reset form inputs after submission
      formElement.reset();
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-wrap">
      <div className="form-heading">
        <h2>Share your requirement.</h2>
        <p>Send your enquiry directly to our manufacturing team. We will get back to you shortly with complete details.</p>
      </div>
      <form className="inquiry-form" onSubmit={onSubmit}>
        <div className="form-grid">
          <label><span>Your name *</span><input name="name" type="text" autoComplete="name" placeholder="Full name" required /></label>
          <label><span>Company</span><input name="company" type="text" autoComplete="organization" placeholder="Company name" /></label>
          <label><span>Phone / WhatsApp *</span><input name="phone" type="tel" autoComplete="tel" placeholder="Your contact number" required /></label>
          <label><span>Email *</span><input name="email" type="email" autoComplete="email" placeholder="name@company.com" required /></label>
          <label><span>Product *</span><select name="product" defaultValue="" required><option value="" disabled>Select a product</option><option>13 mm Flip-Off Seal</option><option>20 mm Flip-Off Seal</option><option>Aluminium Vial Seal</option><option>Need size guidance</option></select></label>
          <label><span>Colour reference</span><input name="colour" type="text" placeholder="Example: SW11 Red" /></label>
          <label><span>Required quantity</span><input name="quantity" type="text" inputMode="numeric" placeholder="Approximate quantity" /></label>
          <label><span>Delivery location</span><input name="delivery" type="text" autoComplete="address-level2" placeholder="City, state or country" /></label>
          <label className="field-wide"><span>Requirement details *</span><textarea name="message" rows={5} placeholder="Share vial format, size, delivery location or any special requirement." required /></label>
        </div>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", marginTop: "8px" }}>
          <button className="button button-primary form-submit" type="submit" disabled={loading}>
            {loading ? "Preparing Draft..." : "Submit Enquiry"} <ArrowIcon />
          </button>
        </div>

        <p className="form-note">Your enquiry will be sent directly to Sealwell Packaging.</p>
      </form>
    </div>
  );
}
