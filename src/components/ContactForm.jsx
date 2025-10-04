// src/components/ContactForm.jsx
import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import useDebounce from "../utils/useDebounce";
import Confetti from "react-confetti";
import "./ContactForm.css";

const STORAGE_KEY = "contact-draft-v1";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [savedHint, setSavedHint] = useState(false);

  // debounced email validator
  const debouncedEmail = useDebounce(email, 400);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        setName(s.name || "");
        setEmail(s.email || "");
        setMsg(s.msg || "");
        setSavedHint(true);
      }
    } catch (e) {}
  }, []);

  // autosave on changes
  useEffect(() => {
    const payload = { name, email, msg, savedAt: Date.now() };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      if (name || email || msg) setSavedHint(true);
      else setSavedHint(false);
    } catch (e) {}
  }, [name, email, msg]);

  // email validation debounced
  useEffect(() => {
    setErrors((prev) => {
      const copy = { ...prev };
      if (debouncedEmail && !EMAIL_REGEX.test(debouncedEmail)) copy.email = "Invalid email format";
      else delete copy.email;
      return copy;
    });
  }, [debouncedEmail]);

  const validateAll = () => {
    const e = {};
    if (!name.trim()) e.name = "Name is required";
    if (!msg.trim()) e.msg = "Message is required";
    if (email && !EMAIL_REGEX.test(email)) e.email = "Invalid email address";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validateAll()) return;
    // simulate send
    setOpen(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3500);
    localStorage.removeItem(STORAGE_KEY);
    setSavedHint(false);
    setName(""); setEmail(""); setMsg("");
  };

  return (
    <section className="card contact-card">
      {showConfetti && <Confetti recycle={false} numberOfPieces={250} />}
      <h3>Contact Me</h3>

      {savedHint && <div className="saved-hint">You have unsent message data saved!</div>}

      <form onSubmit={handleSubmit} noValidate>
        <label>Name*</label>
        <input
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!errors.name}
        />
        {errors.name && <div className="field-error">{errors.name}</div>}

        <label>Email</label>
        <input
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!errors.email}
        />
        {errors.email ? <div className="field-error">{errors.email}</div> :
          (email ? <div className="field-hint">Looks good — we will only contact if needed.</div> : null)
        }

        <label>Message*</label>
        <textarea
          className="form-textarea"
          rows={5}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        {errors.msg && <div className="field-error">{errors.msg}</div>}

        <div className="form-actions">
          <button className="btn-primary" type="submit">Send</button>
          <button
            type="button"
            className="btn-ghost"
            onClick={() => { localStorage.removeItem(STORAGE_KEY); setName(""); setEmail(""); setMsg(""); setSavedHint(false); }}
          >
            Clear Draft
          </button>
        </div>
      </form>

      <h4 className="preview-title">Live Preview</h4>
      <div className="live-preview">
        <strong>{name || "Your name"}</strong>
        <p style={{ whiteSpace: "pre-wrap" }}>{msg || "Your message preview..."}</p>
        <small>{email ? `Reply to: ${email}` : "No email provided"}</small>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h3>Thank you, {name || "friend"}!</h3>
        <p>Your message was sent.</p>
      </Modal>
    </section>
  );
}
