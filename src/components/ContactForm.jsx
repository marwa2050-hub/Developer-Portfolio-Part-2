// src/components/ContactForm.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import "./ContactForm.css";

export default function ContactForm() {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [message, setMessage] = useState(localStorage.getItem("message") || "");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Auto-save to localStorage
  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);
  }, [name, email, message]);

  // Debounced email validation
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setErrors(prev => ({ ...prev, email: "Invalid email format" }));
      } else {
        setErrors(prev => ({ ...prev, email: "" }));
      }
    }, 400);
    return () => clearTimeout(timeout);
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    setShowConfetti(true);

    // Clear form
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => setShowConfetti(false), 5000);
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("message");
  };

  return (
    <section className="contact-form-section card">
      <h3>Contact Me</h3>
      {localStorage.getItem("name") && localStorage.getItem("message") && (
        <p className="unsent-hint">You have unsent message data saved!</p>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>
        <button type="submit">Send Message</button>
      </form>

      <AnimatePresence>
        {submitted && (
          <motion.div
            className="toast-modal"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            Thank you, {name || "User"}! Your message was sent.
          </motion.div>
        )}
      </AnimatePresence>

      {showConfetti && <Confetti />}
    </section>
  );
}
