// src/components/ScrollProgress.jsx
import React, { useEffect, useState } from "react";
import "./ScrollProgress.css";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScroll(scrolled);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${scroll*100}%` }} />;
}
