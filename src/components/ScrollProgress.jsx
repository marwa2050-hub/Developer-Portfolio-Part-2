// src/components/ScrollProgress.jsx
import React, { useEffect, useState } from 'react';
import './scrollProgress.css';

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      setScroll((scrollPosition / totalHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-bar-container">
      <div className="scroll-progress-bar" style={{ width: `${scroll}%` }}></div>
    </div>
  );
}
