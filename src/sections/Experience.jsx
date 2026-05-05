import React from 'react';
import { experience } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="experience">
      <div className="reveal" ref={ref}>
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've Worked</h2>
        <div className="timeline">
          {experience.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-header">
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-company">
                  {exp.company}
                  {exp.type && <span> · {exp.type}</span>}
                </div>
                <div className="timeline-meta">
                  {exp.period}
                  {exp.contract && <span> · {exp.contract}</span>}
                </div>
              </div>
              <ul className="timeline-highlights">
                {exp.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
