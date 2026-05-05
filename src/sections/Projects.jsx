import React from 'react';
import Icon from '../components/Icon';
import { projects } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="projects">
      <div className="reveal" ref={ref}>
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I've Built</h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="glass-card project-card" key={i}>
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p className="description">{project.description}</p>
              <p className="impact">✦ {project.impact}</p>
              <div className="project-tags">
                {project.tech.map((t) => (
                  <span className="project-tag" key={t}>{t}</span>
                ))}
              </div>
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project <Icon name="arrow" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
