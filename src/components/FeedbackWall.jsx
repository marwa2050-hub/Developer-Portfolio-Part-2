// src/components/FeedbackWall.jsx
import React, { useState } from "react";
import "./FeedbackWall.css";

export default function FeedbackWall() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const addFeedback = () => {
    if (!name || !comment) return;
    setFeedbacks([{ id: Date.now(), name, rating, comment }, ...feedbacks]);
    setName(""); setRating(5); setComment("");
  };

  return (
    <section className="feedback-wall card">
      <h3>Feedback Wall</h3>
      <div className="feedback-form">
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <select value={rating} onChange={e=>setRating(Number(e.target.value))}>
          {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} ⭐</option>)}
        </select>
        <textarea placeholder="Comment" value={comment} onChange={e=>setComment(e.target.value)} />
        <button onClick={addFeedback}>Submit</button>
      </div>
      <div className="feedback-cards">
        {feedbacks.map(f => (
          <div key={f.id} className={`feedback-card ${f.rating===5 ? "featured" : ""}`}>
            <strong>{f.name}</strong> <span>{f.rating}⭐</span>
            <p>{f.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
