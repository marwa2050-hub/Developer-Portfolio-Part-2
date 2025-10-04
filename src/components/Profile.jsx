<ScrollProgress />
import React, { useState } from 'react';
import profilePic from '../assets/profile.jpg';

export default function Profile({ title, bio }) {
  const [hovered, setHovered] = useState(false);

  return (
    <section style={{ display: 'flex', gap: 16, alignItems: 'center', marginTop: 24 }}>
      <img 
        src={profilePic} 
        alt="Profile" 
        width={120} 
        style={{ borderRadius: '50%', transform: hovered ? 'scale(1.05)' : 'scale(1)', transition: '0.3s' }} 
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} 
      />
      <div>
        <h2>{title}</h2>
        <p>{bio}</p>
      </div>
    </section>
  );
}
