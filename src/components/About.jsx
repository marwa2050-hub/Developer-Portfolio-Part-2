import React, { useState } from 'react';

export default function About({ intro, goals, hobbies }) {
  const [showMore, setShowMore] = useState(false);

  const sectionStyle = {
    padding: '1rem 0',
    maxWidth: '700px',
    margin: '0 auto',
    textAlign: 'center'
  };
  const btnStyle = {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '5px'
  };
  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '1.5rem',
    textAlign: 'left'
  };

  return (
    <section id="about" style={sectionStyle}>
      <h2>About Me</h2>
      <p>{intro}</p>
      <p><strong>Goals:</strong> {goals}</p>

      <div>
        <h3>Hobbies & Fun Facts:</h3>
        <ul style={listStyle}>
          { (showMore ? hobbies : hobbies.slice(0, 3)).map((hobby, i) => (
            <li key={i}>{hobby}</li>
          )) }
        </ul>
        { hobbies.length > 3 && (
          <button style={btnStyle} onClick={() => setShowMore(!showMore)}>
            { showMore ? 'Show Less' : 'Show More' }
          </button>
        )}
      </div>
    </section>
  );
}
