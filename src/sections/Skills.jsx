import React from 'react';
import { skills, languages, education } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="skills">
      <div className="reveal" ref={ref}>
        <p className="section-label">Skills</p>
        <h2 className="section-title">My Toolkit</h2>
        <div className="skills-categories">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-category" key={category}>
              <h3>{category}</h3>
              <div className="skill-chips">
                {items.map((skill) => (
                  <span className="skill-chip" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="languages-row">
          {languages.map((lang) => (
            <div className="language-badge" key={lang.name}>
              <span className="language-name">{lang.name}</span>
              <span className="language-level">{lang.level}</span>
            </div>
          ))}
        </div>
        <div>
          <h3 style={{ marginTop: 48, marginBottom: 16, fontSize: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 2 }}>Education</h3>
          <div className="education-grid">
            {education.map((edu, i) => (
              <div className="education-card" key={i}>
                <h3>{edu.degree}</h3>
                <div className="school">{edu.school}</div>
                <div className="period">{edu.period}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
