import React from 'react';
import ProjectCard from './ProjectCard';

// فرض کنیم تصاویر پروژه‌ها ایمپورت شده‌اند از assets
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';

const projectsData = [
  {
    name: 'Project One',
    image: project1,
    description: 'This is project one description.',
    liveLink: 'https://example.com/project-one',
    techStack: ['React', 'CSS', 'JavaScript'],
    featured: true
  },
  {
    name: 'Project Two',
    image: project2,
    description: 'This is project two description.',
    liveLink: '',
    techStack: ['React', 'Hooks', 'HTML', 'CSS'],
    featured: false
  }
];

export default function Projects() {
  const sectionStyle = {
    padding: '2rem 0',
    maxWidth: '900px',
    margin: '0 auto'
  };
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem'
  };

  return (
    <section id="projects" style={sectionStyle}>
      <h2>Projects</h2>
      <div style={gridStyle}>
        { projectsData.map((proj, i) => (
          <ProjectCard key={i} project={proj} />
        )) }
      </div>
    </section>
  );
}
