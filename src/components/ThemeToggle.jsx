// src/components/ThemeToggle.jsx
import React, { useState, useEffect } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev==="light" ? "dark" : "light");
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme==="light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
