import React, { useState, useEffect } from 'react';

const quotes = [
  "Keep pushing forward!",
  "Every day is a new opportunity.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Strive for progress, not perfection.",
  "Dream big, work hard."
];

export default function Header({ name, welcomeMessage }) {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  const headerStyle = {
    textAlign: 'center',
    padding: '2rem 0',
    backgroundColor: '#fafafa'
  };
  const nameStyle = {
    fontSize: '2.5rem',
    margin: '0.5rem 0'
  };
  const welcomeStyle = {
    fontSize: '1.25rem',
    color: '#555'
  };
  const quoteStyle = {
    fontStyle: 'italic',
    marginTop: '1rem',
    color: '#777'
  };

  return (
    <header id="home" style={headerStyle}>
      <h1 style={nameStyle}>{name}</h1>
      <p style={welcomeStyle}>{welcomeMessage}</p>
      <blockquote style={quoteStyle}>{quote}</blockquote>
    </header>
  );
}
