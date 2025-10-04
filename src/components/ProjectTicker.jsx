// src/components/ProjectTicker.jsx
import React, { useEffect, useState } from "react";
import "./ProjectTicker.css";

export default function ProjectTicker() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const handler = (e) => setUpdates(prev => [e.detail, ...prev].slice(0, 5));
    window.addEventListener("project-update", handler);
    return () => window.removeEventListener("project-update", handler);
  }, []);

  return (
    <div className="project-ticker">
      {updates.map(u => <div key={u.id} className="ticker-item">{u.text}</div>)}
    </div>
  );
}
