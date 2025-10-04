// src/components/ProjectCard.jsx
import React, { useState } from "react";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const { name, desc, img, tech, featured, status } = project;
  return (
    <div className={`project-card ${featured ? "featured" : ""}`}>
      <div className="thumb" style={{backgroundImage:`url(${img})`}} />
      <div className="pc-body">
        <h4>{name}</h4>
        <p>{desc}</p>
        <div className="badges">
          {featured && <span className="badge">🌟 Featured</span>}
          {status && <span className="tag">{status}</span>}
        </div>
        <div className="pc-actions">
          <button onClick={()=>setOpen(!open)} className="btn-ghost small">{open ? "Hide" : "View Details"}</button>
          <a className="btn-primary small" href="#" target="_blank" rel="noreferrer">Live</a>
        </div>

        {open && (
          <div className="pc-details">
            <strong>Tech:</strong> {tech.join(", ")}
            <p className="pc-extra">More details and description can go here — show features, links, API, challenges, etc.</p>
          </div>
        )}
      </div>
    </div>
  );
}
