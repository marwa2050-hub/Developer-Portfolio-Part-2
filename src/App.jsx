import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import FeedbackWall from "./components/FeedbackWall";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ThemeToggle from "./components/ThemeToggle";
import "./index.css";

// عکس پروفایل از assets
import profilePic from "./assets/profile.jpg";

export default function App() {
  return (
    <div>
      <ScrollProgress />
      <Header />
      <main style={{ maxWidth: 980, margin: "20px auto", padding: "0 16px" }}>
        <About profilePic={profilePic} />
        <Skills />
        <Projects />
        <ContactForm />
        <FeedbackWall />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}
