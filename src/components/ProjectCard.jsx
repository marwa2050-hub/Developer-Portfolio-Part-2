import React from 'react';
import TechBadge from './TechBadge';

export default function ProjectCard({ project }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '2rem',
    boxShadow: project.featured ? '0 0 10px rgba(255,215,0,0.7)' : 'none',
    position: 'relative'
  };
  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  };
  const contentStyle = {
    padding: '1rem'
  };
  const featuredBadgeStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'gold',
    color: '#333',
    padding: '0.3rem 0.6rem',
    borderRadius: '4px',
    fontWeight: 'bold'
  };
  const linkStyle = {
    marginTop: '1rem',
    display: 'inline-block',
    textDecoration: 'none',
    color: '#007bff'
  };

  return (
    <div style={cardStyle}>
      { project.featured && <div style={featuredBadgeStyle}>🌟 Featured</div> }
      { project.image && <img src={project.image} alt={project.name} style={imageStyle} /> }
      <div style={contentStyle}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div>
          { project.techStack.map((tech, idx) => (
            <TechBadge key={idx} tech={tech} />
          )) }
        </div>
        { project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            View Live
          </a>
        ) }
      </div>
    </div>
  );
}
