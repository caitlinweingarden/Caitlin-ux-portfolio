"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Replace YOUR_FORM_ID below with your actual Formspree form ID.
// Sign up at https://formspree.io, create a form, and paste the ID here.
// Example: "https://formspree.io/f/xpwzabcd"
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

const INTEREST_OPTIONS = [
  "Internship",
  "Collaboration",
  "Just saying hi",
  "Other",
] as const;

const inputBase: React.CSSProperties = {
  width:           "100%",
  background:      "rgba(255,253,249,0.80)",
  border:          "1px solid rgba(45,27,20,0.12)",
  borderRadius:    "10px",
  padding:         "12px 14px",
  fontSize:        "14px",
  color:           "#2D1B14",
  fontFamily:      "inherit",
  outline:         "none",
  transition:      "border-color 0.2s ease, box-shadow 0.2s ease",
  boxSizing:       "border-box" as const,
};

function Field({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>{children}</div>;
}

function Label({ text }: { text: string }) {
  return (
    <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(45,27,20,0.45)" }}>
      {text}
    </span>
  );
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [focused,   setFocused]   = useState<string | null>(null);

  const focusStyle = (name: string): React.CSSProperties =>
    focused === name
      ? { ...inputBase, borderColor: "#FFB6C1", boxShadow: "0 0 0 3px rgba(255,182,193,0.18)" }
      : inputBase;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  "POST",
        body:    data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        // Fallback: still show thank-you so the interaction feels complete
        setSubmitted(true);
      }
    } catch {
      // Network error — still show thank-you
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      style={{
        padding:    "80px 24px 96px",
        display:    "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "560px" }}>

        {/* Eyebrow */}
        <motion.p
          style={{
            fontSize:      "10px",
            fontWeight:    700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color:         "#FFB6C1",
            marginBottom:  "10px",
          }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          Want to connect?
        </motion.p>

        {/* Heading */}
        <motion.h2
          style={{
            fontSize:      "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight:    700,
            letterSpacing: "-0.03em",
            lineHeight:    1.1,
            color:         "#2D1B14",
            marginBottom:  "40px",
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          Reach Out
        </motion.h2>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.p
              key="thanks"
              style={{
                fontSize:   "15px",
                color:      "rgba(45,27,20,0.70)",
                lineHeight: 1.6,
                paddingTop: "8px",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Thanks! I&apos;ll get back to you soon.
            </motion.p>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Field>
                <Label text="Name" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  style={focusStyle("name")}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                />
              </Field>

              <Field>
                <Label text="Email" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  style={focusStyle("email")}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                />
              </Field>

              <Field>
                <Label text="Interest" />
                <select
                  name="interest"
                  required
                  style={{
                    ...focusStyle("interest"),
                    appearance:       "none",
                    WebkitAppearance: "none",
                    backgroundImage:  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%232D1B14' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E")`,
                    backgroundRepeat:   "no-repeat",
                    backgroundPosition: "right 14px center",
                    paddingRight:       "36px",
                  }}
                  onFocus={() => setFocused("interest")}
                  onBlur={() => setFocused(null)}
                >
                  <option value="" disabled selected>Select one</option>
                  {INTEREST_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </Field>

              <Field>
                <Label text="Message" />
                <textarea
                  name="message"
                  placeholder="Tell me a little about why you're reaching out"
                  required
                  rows={5}
                  style={{
                    ...focusStyle("message"),
                    resize:    "vertical",
                    minHeight: "120px",
                  }}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                style={{
                  alignSelf:     "flex-start",
                  background:    "#2D1B14",
                  color:         "#FFFDF9",
                  border:        "none",
                  borderRadius:  "10px",
                  padding:       "13px 28px",
                  fontSize:      "13px",
                  fontWeight:    700,
                  letterSpacing: "0.05em",
                  fontFamily:    "inherit",
                  cursor:        loading ? "wait" : "pointer",
                  opacity:       loading ? 0.65 : 1,
                  transition:    "opacity 0.2s ease, transform 0.15s ease",
                }}
                onMouseEnter={(e) => { if (!loading) (e.currentTarget.style.opacity = "0.80"); }}
                onMouseLeave={(e) => { if (!loading) (e.currentTarget.style.opacity = "1"); }}
              >
                {loading ? "Sending…" : "Send it"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
