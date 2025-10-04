// src/components/ProjectTicker.jsx
import React, { useEffect, useState } from "react";
import "./Projects.css";

export default function ProjectTicker() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const onUpdate = (ev) => {
      setUpdates(prev => [ev.detail, ...prev].slice(0,6));
    };
    window.addEventListener("project-update", onUpdate);
    return () => window.removeEventListener("project-update", onUpdate);
  }, []);

  if (updates.length === 0) return null;

  return (
    <div className="project-ticker">
      <strong>Updates:</strong>
      <div className="ticker-items">
        {updates.map(u => <div key={u.id} className="ticker-item">{u.text}</div>)}
      </div>
    </div>
  );
}
