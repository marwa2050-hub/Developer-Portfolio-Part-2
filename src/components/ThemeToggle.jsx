// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";

const KEY = "site-theme-v1"; // values: light | dark | ocean

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem(KEY) || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(KEY, theme);
  }, [theme]);

  return (
    <div className="theme-toggle-group">
      <button className={`theme-btn ${theme==="light" ? "active":""}`} onClick={()=>setTheme("light")}>Light</button>
      <button className={`theme-btn ${theme==="dark" ? "active":""}`} onClick={()=>setTheme("dark")}>Dark</button>
      <button className={`theme-btn ${theme==="ocean" ? "active":""}`} onClick={()=>setTheme("ocean")}>Ocean</button>
    </div>
  );
}
