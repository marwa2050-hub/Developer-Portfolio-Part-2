import React from 'react';

export default function Footer() {
  const footerStyle = {
    textAlign: 'center',
    padding: '2rem 0',
    borderTop: '1px solid #ddd',
    marginTop: '2rem'
  };
  const linkStyle = {
    margin: '0 0.5rem',
    textDecoration: 'none',
    color: '#007bff'
  };

  const social = [
    { name: 'GitHub', url: 'https://github.com/marwa2050-hub', icon: '🐱' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: '🔗' },
    { name: 'Twitter', url: 'https://twitter.com/yourprofile', icon: '🐦' }
  ];

  return (
    <footer id="contact" style={footerStyle}>
      <div>
        { social.map(s => (
          <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" style={linkStyle} title={s.name}>
            {s.icon}
          </a>
        )) }
      </div>
      <div>© { new Date().getFullYear() } Marwa Noorestani</div>
    </footer>
  );
}
