import React from 'react';

export default function Profile({ photo, title, bio }) {
  const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    padding: '2rem 0',
    justifyContent: 'center',
    flexWrap: 'wrap'
  };
  const imgStyle = {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #ccc'
  };
  const infoStyle = {
    maxWidth: '500px',
    textAlign: 'center'
  };
  const titleStyle = {
    fontSize: '1.75rem',
    margin: '0.5rem 0'
  };
  const bioStyle = {
    fontSize: '1rem',
    color: '#555'
  };

  return (
    <section style={sectionStyle}>
      <img src={photo} alt="Profile" style={imgStyle} />
      <div style={infoStyle}>
        <h2 style={titleStyle}>{title}</h2>
        <p style={bioStyle}>{bio}</p>
      </div>
    </section>
  );
}
