// src/components/Projects.jsx
import React, { useEffect, useMemo, useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import ProjectTicker from "./ProjectTicker";

const ALL = [
  { id:1, name:"Portfolio Website", tech:["React","CSS"], desc:"Personal portfolio", img:"/src/assets/project1.jpg", featured:true, status:"Completed" },
  { id:2, name:"E-commerce Demo", tech:["React","Node.js","CSS"], desc:"Shop demo", img:"/src/assets/project2.jpg", featured:false, status:"High Priority" },
  { id:3, name:"Landing Page", tech:["HTML","CSS","JS"], desc:"Marketing page", img:"/src/assets/project3.jpg", featured:false, status:"Completed" }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState(ALL);

  useEffect(() => {
    const interval = setInterval(() => {
      const update = { id: Date.now(), text: `Project updates at ${new Date().toLocaleTimeString()}` };
      const ev = new CustomEvent("project-update", { detail: update });
      window.dispatchEvent(ev);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const techs = useMemo(() => {
    const s = new Set();
    ALL.forEach(p => p.tech.forEach(t=>s.add(t)));
    return ["All", ...Array.from(s)];
  }, []);

  const shown = projects.filter(p => filter==="All" ? true : p.tech.includes(filter));

  return (
    <section className="projects-section card" style={{marginTop:12}}>
      <h3>Projects</h3>
      <ProjectTicker />
      <div className="project-controls">
        <label>Filter:</label>
        <select value={filter} onChange={e=>setFilter(e.target.value)}>
          {techs.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="projects-grid">
        {shown.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}
