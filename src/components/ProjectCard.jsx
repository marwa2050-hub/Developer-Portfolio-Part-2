// src/components/ProjectCard.jsx
import React, { useState } from "react";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="project-card" style={{ cursor: "pointer" }} onClick={() => setShowDetails(!showDetails)}>
      <img src={project.img} alt={project.name} className="project-img" />
      <h4>{project.name}</h4>
      <p>{project.desc}</p>
      {showDetails && (
        <div className="project-details">
          <p>Tech Stack: {project.tech.join(", ")}</p>
          <p>Status: {project.status}</p>
        </div>
      )}
      {project.featured && <span className="badge">🌟 Featured</span>}
    </div>
  );
}
