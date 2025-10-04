<ScrollProgress />
import React from 'react';

export default function Navbar() {
  return (
    <nav style={{ padding: '12px 20px', background: 'var(--card,#fff)', boxShadow: '0 4px 8px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Marwa Portfolio</span>
      <div>
        <a href="#projects" style={{ margin: '0 8px' }}>Projects</a>
        <a href="#contact" style={{ margin: '0 8px' }}>Contact</a>
        <a href="#feedback" style={{ margin: '0 8px' }}>Feedback</a>
      </div>
    </nav>
  );
}
