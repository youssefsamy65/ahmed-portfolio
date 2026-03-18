import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import { CONTACT_INFO, AVAILABILITY, COLORS } from "../../data/constants";
import emailjs from "@emailjs/browser";

// ─────────────────────────────────────────────────────────────
//  👇 SCHRITT 4: Trage hier deine drei EmailJS-Schlüssel ein
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_f541xhp";   // z.B. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_owyoyxi";  // z.B. "template_xyz456"
const EMAILJS_PUBLIC_KEY = "QwjhBMcsWtwefMJYQ";   // z.B. "aBcDeFgHiJkL"
// ─────────────────────────────────────────────────────────────

function ContactInfoCard({ icon, label, value, href }) {
  const content = (
    <div
      className="glass"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "14px 16px",
        borderRadius: 10,
        textDecoration: "none",
        transition: "border-color 0.3s",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 16 }}>{icon}</span>
        <p
          style={{
            fontSize: 10,
            color: COLORS.gray,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </p>
      </div>
      <p
        style={{
          fontSize: 13,
          color: COLORS.pearl,
          marginTop: 2,
          lineHeight: 1.4,
          wordBreak: "break-word",
        }}
      >
        {value}
      </p>
    </div>
  );

  return href ? (
    <a href={href} style={{ textDecoration: "none" }}>
      {content}
    </a>
  ) : (
    content
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // These keys must match the variable names in your EmailJS template:
    // {{from_name}}, {{from_email}}, {{message}}
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      })
      .catch((err) => {
        setLoading(false);
        setError("Fehler beim Senden. Bitte versuchen Sie es erneut.");
        console.error("EmailJS error:", err);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 20 }}
    >
      <div>
        <label style={{ fontSize: 12, color: COLORS.gray, letterSpacing: "0.1em", display: "block", marginBottom: 8, textTransform: "uppercase" }}>
          Ihr Name
        </label>
        <input
          type="text" name="name" placeholder="Max Mustermann" required
          value={form.name} onChange={handleChange} className="form-input"
        />
      </div>

      <div>
        <label style={{ fontSize: 12, color: COLORS.gray, letterSpacing: "0.1em", display: "block", marginBottom: 8, textTransform: "uppercase" }}>
          E-Mail-Adresse
        </label>
        <input
          type="email" name="email" placeholder="ihre@email.de" required
          value={form.email} onChange={handleChange} className="form-input"
        />
      </div>

      <div>
        <label style={{ fontSize: 12, color: COLORS.gray, letterSpacing: "0.1em", display: "block", marginBottom: 8, textTransform: "uppercase" }}>
          Nachricht
        </label>
        <textarea
          name="message" rows={5} placeholder="Beschreiben Sie Ihr Projekt..." required
          value={form.message} onChange={handleChange} className="form-textarea"
        />
      </div>

      {error && (
        <p style={{ fontSize: 13, color: "#f44336", background: "rgba(244,67,54,0.08)", border: "1px solid rgba(244,67,54,0.25)", borderRadius: 8, padding: "10px 14px" }}>
          ⚠ {error}
        </p>
      )}

      <button
        type="submit"
        className="btn-gold"
        disabled={loading || sent}
        style={{
          padding: "15px 36px", borderRadius: 10, fontSize: 14,
          letterSpacing: "0.08em", border: "none",
          background: sent
            ? "linear-gradient(135deg, #2e7d32, #4caf50)"
            : loading ? "rgba(201,168,76,0.5)"
              : "linear-gradient(135deg, #c9a84c, #e8c96a)",
          transition: "all 0.3s",
          color: sent || loading ? "#fff" : "#0a1628",
          cursor: loading ? "wait" : sent ? "default" : "pointer",
        }}
      >
        {sent ? "✓ Nachricht gesendet!" : loading ? "Sende..." : "Nachricht senden →"}
      </button>
    </form>
  );
}

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" ref={ref} style={{ padding: "120px 2rem", background: COLORS.navyMid }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p style={{ color: COLORS.gold, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
            Kontakt
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 300 }}>
            Lassen Sie uns{" "}
            <span style={{ color: COLORS.gold }}>zusammenarbeiten</span>
          </h2>
          <div className="section-divider section-divider--center" />
        </div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56 }}>
          {/* Left */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-30px)", transition: "all 0.8s ease" }}>
            <p className="font-display" style={{ fontSize: 26, color: COLORS.pearl, marginBottom: 10, lineHeight: 1.3 }}>
              Bereit für Ihr nächstes Projekt?
            </p>
            <p style={{ color: COLORS.gray, fontSize: 13, lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>
              Nehmen Sie Kontakt auf — ich freue mich auf Ihre Anfrage.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
              {CONTACT_INFO.map((info) => (
                <ContactInfoCard key={info.label} {...info} />
              ))}
            </div>

            <div style={{ padding: "20px 24px", background: "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))", borderRadius: 14, border: "1px solid rgba(201,168,76,0.2)" }}>
              <p className="font-display" style={{ fontSize: 16, color: COLORS.gold, marginBottom: 12 }}>
                Verfügbar für
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {AVAILABILITY.map((item) => (
                  <p key={item} style={{ fontSize: 13, color: COLORS.pearl, lineHeight: 1.5, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: COLORS.gold, fontSize: 10 }}>✦</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease 0.2s" }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}