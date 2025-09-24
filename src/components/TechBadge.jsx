import React from 'react';

export default function TechBadge({ tech }) {
  const badgeStyle = {
    display: 'inline-block',
    backgroundColor: '#e0e0e0',
    color: '#333',
    padding: '0.3rem 0.6rem',
    margin: '0.3rem',
    borderRadius: '12px',
    fontSize: '0.85rem'
  };
  return <span style={badgeStyle}>{tech}</span>;
}
