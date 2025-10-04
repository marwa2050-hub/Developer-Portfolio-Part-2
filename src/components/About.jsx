import React from "react";
import "./About.css";

export default function About({ profilePic }) {
  return (
    <div className="about">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div>
        <h2>About Me</h2>
        <p>
          Hi! I am a passionate web developer skilled in React, JavaScript and
          modern web technologies. I enjoy building interactive and dynamic
          websites.
        </p>
      </div>
    </div>
  );
}
