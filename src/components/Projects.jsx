import React, { useEffect, useMemo, useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import ProjectTicker from "./ProjectTicker";

// عکس‌ها را از src/assets وارد می‌کنیم 👇
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const ALL = [
  {
    id: 1,
    name: "Portfolio Website",
    tech: ["React", "CSS"],
    desc: "Personal portfolio built with React.",
    img: project1,
    featured: true,
    status: "Completed",
  },
  {
    id: 2,
    name: "E-commerce Demo",
    tech: ["React", "Node.js", "CSS"],
    desc: "Demo online shop built with React & Node.js.",
    img: project2,
    featured: false,
    status: "In Progress",
  },
  {
    id: 3,
    name: "Landing Page",
    tech: ["HTML", "CSS", "JS"],
    desc: "Simple marketing page with responsive design.",
    img: project3,
    featured: false,
    status: "Completed",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const techs = useMemo(() => {
    const s = new Set();
    ALL.forEach((p) => p.tech.forEach((t) => s.add(t)));
    return ["All", ...Array.from(s)];
  }, []);

  const shown = ALL.filter((p) =>
    filter === "All" ? true : p.tech.includes(filter)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const update = {
        id: Date.now(),
        text: `Project update at ${new Date().toLocaleTimeString()}`,
      };
      const ev = new CustomEvent("project-update", { detail: update });
      window.dispatchEvent(ev);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="projects-section card" style={{ marginTop: 12 }}>
      <h3>Projects</h3>
      <ProjectTicker />
      <div className="project-controls">
        <label>Filter:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {techs.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="projects-grid">
        {shown.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
