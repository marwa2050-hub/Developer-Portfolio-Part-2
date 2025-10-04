// src/components/Skills.jsx
import React from "react";
import "./Skills.css";

const SKILLS = [
  { name:"HTML", level:90, fact:"Semantic elements help SEO." },
  { name:"CSS", level:85, fact:"Use variables for theme." },
  { name:"JavaScript", level:78, fact:"Closures are powerful." },
  { name:"React", level:80, fact:"Hooks replaced many class patterns." }
];

export default function Skills() {
  return (
    <section className="skills card" style={{marginTop:12}}>
      <h3>Skills</h3>
      <div className="skills-list">
        {SKILLS.map(s => (
          <div key={s.name} className="skill">
            <div className="skill-head">
              <strong>{s.name}</strong>
              <span>{s.level}%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{width:`${s.level}%`}} title={s.fact}></div>
            </div>
            <div className="skill-fact">Hover to see a fun fact</div>
          </div>
        ))}
      </div>
    </section>
  );
}
