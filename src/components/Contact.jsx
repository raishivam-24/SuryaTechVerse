import React, { useState } from "react";
import { contact } from "../data.js";

function inputStyle() {
  return {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid var(--border-strong)",
    borderRadius: 10,
    padding: "12px 14px",
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 15,
    color: "var(--text-primary)",
    outline: "none",
    boxSizing: "border-box",
  };
}

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: contact.serviceOptions[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  const contactItems = [
    { icon: "✉", label: "Email Us", value: contact.email },
    { icon: "💼", label: "Business Inquiries", value: contact.businessEmail },
    { icon: "📞", label: "Call Us", value: contact.phone },
    { icon: "📍", label: "Location", value: contact.location },
  ];

  return (
    <section id="contact" style={{ padding: "160px 0", background: "var(--bg)", position: "relative" }}>
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 56,
          alignItems: "center",
        }}
        className="stv-contact-grid"
      >
        <div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: "clamp(30px,4vw,40px)",
              color: "var(--text-primary)",
              marginBottom: 20,
            }}
          >
            {contact.heading}
          </h2>
          <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 16, lineHeight: 1.6, color: "var(--text-secondary)", marginBottom: 36 }}>
            {contact.description}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {contactItems.map((c) => (
              <div key={c.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(242,202,80,0.1)",
                    border: "1px solid rgba(242,202,80,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: 15,
                    color: "var(--gold)",
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>
                    {c.label}
                  </h4>
                  <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 15, color: "var(--text-secondary)", margin: "2px 0 0" }}>
                    {c.value}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "rgba(242,202,80,0.1)",
                  border: "1px solid rgba(242,202,80,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: 15,
                  color: "var(--gold)",
                }}
              >
                🔗
              </div>
              <div>
                <h4 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>
                  Connect with the Founder
                </h4>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 15, color: "var(--gold)", textDecoration: "none" }}
                >
                  LinkedIn Profile ↗
                </a>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 32 }}>
            {contact.hashtags.map((tag) => (
              <span key={tag} style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12, color: "var(--text-muted)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-panel"
          style={{
            borderRadius: 20,
            padding: "40px 32px",
            border: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--text-secondary)", marginBottom: 6 }}>
                First Name
              </label>
              <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="John" style={inputStyle()} />
            </div>
            <div>
              <label style={{ display: "block", fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--text-secondary)", marginBottom: 6 }}>
                Last Name
              </label>
              <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" style={inputStyle()} />
            </div>
          </div>
          <div>
            <label style={{ display: "block", fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--text-secondary)", marginBottom: 6 }}>
              Email Address
            </label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com" style={inputStyle()} />
          </div>
          <div>
            <label style={{ display: "block", fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--text-secondary)", marginBottom: 6 }}>
              Interested Service
            </label>
            <select name="service" value={form.service} onChange={handleChange} style={inputStyle()}>
              {contact.serviceOptions.map((s) => (
                <option key={s} style={{ background: "var(--surface-1)" }}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label style={{ display: "block", fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--text-secondary)", marginBottom: 6 }}>
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={4}
              style={{ ...inputStyle(), resize: "none" }}
            />
          </div>
          <button
            type="submit"
            className="glow-gold"
            style={{
              background: "var(--gold-container)",
              color: "var(--on-gold)",
              border: "none",
              padding: "14px 0",
              borderRadius: 999,
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "box-shadow 0.3s",
            }}
          >
            {sent ? "Message sent" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
