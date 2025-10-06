// src/components/About.jsx
import React, from "React";
import "./About.css";

export default function About({ profilePic }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="about">
      <img
        src={profilePic}
        alt="Profile"
        className="profile-pic"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ transform: hovered ? "scale(1.05)" : "scale(1)", transition: "0.3s" }}
      />
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
