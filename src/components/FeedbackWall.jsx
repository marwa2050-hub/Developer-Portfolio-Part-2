// src/components/FeedbackWall.jsx
import React, { useEffect, useState } from "react";
import "./FeedbackWall.css";
import FeedbackCard from "./FeedbackCard";

const STORAGE = "feedback-list-v1";

export default function FeedbackWall() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [sortBy, setSortBy] = useState("newest"); // newest | top

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE);
    if (raw) setList(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(list));
  }, [list]);

  const add = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;
    const item = { id: Date.now(), name, rating: Number(rating), comment, date: new Date().toISOString() };
    setList(prev => [item, ...prev]);
    setName(""); setRating(5); setComment("");
  };

  const sorted = [...list].sort((a,b) => {
    if (sortBy === "top") return b.rating - a.rating || new Date(b.date) - new Date(a.date);
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <section className="card feedback-wall">
      <h3>Feedback Wall</h3>
      <form onSubmit={add} className="feedback-form">
        <input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} className="form-input" />
        <div className="rating-row">
          <label>Rating:</label>
          <select value={rating} onChange={e=>setRating(e.target.value)}>
            {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} ⭐</option>)}
          </select>
        </div>
        <textarea rows={3} placeholder="Your comment" value={comment} onChange={e=>setComment(e.target.value)} className="form-textarea" />
        <div style={{display:'flex', gap:8, marginTop:8}}>
          <button className="btn-primary" type="submit">Submit</button>
          <button type="button" className="btn-ghost" onClick={()=>{setName("");setRating(5);setComment("")}}>Clear</button>
          <div style={{marginLeft:'auto'}}>
            <label>Sort:</label>
            <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="top">Highest Rating</option>
            </select>
          </div>
        </div>
      </form>

      <div className="feedback-list">
        {sorted.length === 0 ? <p>No feedback yet. Be the first!</p> :
          sorted.map(f => <FeedbackCard key={f.id} feedback={f} />)
        }
      </div>
    </section>
  );
}
