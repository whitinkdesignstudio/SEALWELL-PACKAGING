"use client";

import { FormEvent, useState } from "react";
import { ArrowIcon } from "./SiteChrome";

export default function InquiryForm() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending enquiry...");

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    formData.append("access_key", "678151bf-5772-43a8-9d9b-137e0a5921a7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = (await response.json()) as { success?: boolean; message?: string };
      if (data.success) {
        setResult("Success! Your enquiry has been sent successfully.");
        formElement.reset();
      } else {
        setResult(data.message || "Error submitting form. Please try again.");
      }
    } catch {
      setResult("Something went wrong. Please try again.");
    } finally {
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
        <button className="button button-primary form-submit" type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Enquiry"} <ArrowIcon />
        </button>
        {result ? (
          <p className="form-note" style={{ color: result.includes("Success") ? "#82C9E8" : "#ff8888", fontWeight: 600, marginTop: "16px" }} aria-live="polite">
            {result}
          </p>
        ) : (
          <p className="form-note">Your enquiry will be sent directly to Sealwell Packaging.</p>
        )}
      </form>
    </div>
  );
}
