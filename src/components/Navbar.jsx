import React from 'react';

export default function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    padding: '1rem 0',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#f8f8f8'
  };
  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500'
  };

  return (
    <nav style={navStyle}>
      <a href="#home" style={linkStyle}>Home</a>
      <a href="#about" style={linkStyle}>About</a>
      <a href="#projects" style={linkStyle}>Projects</a>
      <a href="#contact" style={linkStyle}>Contact</a>
    </nav>
  );
}
