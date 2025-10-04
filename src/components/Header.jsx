import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#feedback">Feedback</a>
      </nav>
    </header>
  );
}
