import React from 'react';
import { about } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="about">
      <div className="reveal" ref={ref}>
        <p className="section-label">About</p>
        <h2 className="section-title">{about.headline}</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>{about.description}</p>
            <p className="philosophy">"{about.philosophy}"</p>
          </div>
          <div className="stats-grid">
            {about.stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
