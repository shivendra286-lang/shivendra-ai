"use client";

import { useState } from "react";

const purposes = ["Speaking", "Consulting", "Collaboration"];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    purpose: purposes[0],
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      event.currentTarget.reportValidity();
      return;
    }

    try {
      setSubmitting(true);
      setStatus({ type: "", message: "" });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setForm({
        name: "",
        email: "",
        purpose: purposes[0],
        message: ""
      });
      setStatus({
        type: "success",
        message: "Thank you. Your inquiry has been sent."
      });
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or email directly."
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          required
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={updateField}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={updateField}
        />
      </label>
      <label>
        <span>Purpose</span>
        <select name="purpose" value={form.purpose} onChange={updateField}>
          {purposes.map((purpose) => (
            <option key={purpose}>{purpose}</option>
          ))}
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea
          required
          name="message"
          rows="5"
          value={form.message}
          onChange={updateField}
        />
      </label>
      <button className="button button-primary" type="submit" disabled={submitting}>
        {submitting ? "Sending..." : "Send Inquiry"}
        <span aria-hidden="true">→</span>
      </button>
      {status.message ? (
        <p className={`form-status ${status.type}`} role="status" aria-live="polite">
          {status.message}
        </p>
      ) : null}
      <p className="form-helper">
        For speaking, podcasts, university sessions, AI-in-HR discussions, or
        collaboration inquiries.
      </p>
    </form>
  );
}
