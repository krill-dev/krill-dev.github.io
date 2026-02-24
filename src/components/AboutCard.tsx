import React from 'react';

type About = {
  name: string;
  role: string;
  intro: string;
  links: Array<{ label: string; href: string }>;
};

export default function AboutCard({ name, role, intro, links }: About) {
  return (
    <section style={styles.card}>
      <p style={styles.kicker}>About me</p>
      <h1 style={styles.name}>{name}</h1>
      <p style={styles.role}>{role}</p>
      <p style={styles.intro}>{intro}</p>

      <ul style={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    width: '100%',
    maxWidth: 700,
    background: 'var(--card)',
    border: '1px solid var(--line)',
    borderRadius: 16,
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
  },
  kicker: {
    margin: '0 0 .75rem',
    color: 'var(--muted)',
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    fontSize: '.75rem',
  },
  name: {
    margin: 0,
    fontSize: '2rem',
  },
  role: {
    margin: '.4rem 0 1rem',
    color: 'var(--muted)',
  },
  intro: {
    margin: '0 0 1.25rem',
    lineHeight: 1.7,
  },
  links: {
    margin: 0,
    paddingLeft: '1rem',
    display: 'grid',
    gap: '.4rem',
  },
};
