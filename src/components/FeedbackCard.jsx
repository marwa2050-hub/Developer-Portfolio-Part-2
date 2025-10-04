// src/components/FeedbackCard.jsx
import React from "react";
import "./FeedbackWall.css";

export default function FeedbackCard({ feedback }) {
  const { name, rating, comment, date } = feedback;
  const featured = rating === 5;
  return (
    <div className={`feedback-card ${featured ? 'featured' : ''}`}>
      <div className="feedback-top">
        <strong>{name}</strong>
        <span className="rating">{rating} ⭐ {featured ? "🌟": ""}</span>
      </div>
      <p className="feedback-comment">{comment}</p>
      <div className="feedback-date">{new Date(date).toLocaleString()}</div>
    </div>
  );
}
