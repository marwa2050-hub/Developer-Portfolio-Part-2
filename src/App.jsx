import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

// ایمپورت عکس‌ها
import profilePic from './assets/profile.jpg';

function App() {
  const name = "Marwa Noorestani";
  const welcomeMessage = "Welcome to my developer portfolio!";
  const profileTitle = "Frontend Developer";
  const profileBio = "I build interactive and responsive web applications using React.";

  const aboutIntro = "Hello! I'm learning React, JavaScript, and modern frontend tools to build cool things.";
  const aboutGoals = "My goal is to become a versatile frontend developer and build real-world apps.";
  const myHobbies = ["Reading", "Music", "Coding Side-Projects", "Traveling", "Photography"];

  return (
    <div>
      <Navbar />
      <main style={{ padding: '0 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <Header name={name} welcomeMessage={welcomeMessage} />
        <Profile photo={profilePic} title={profileTitle} bio={profileBio} />
        <About intro={aboutIntro} goals={aboutGoals} hobbies={myHobbies} />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
