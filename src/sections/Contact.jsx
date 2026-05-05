import React from 'react';
import Icon from '../components/Icon';
import { meta, socials } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="contact">
      <div className="reveal" ref={ref}>
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's Work Together</h2>
        <div className="contact-inner">
          <p>
            I'm always open to new opportunities, interesting projects, and conversations
            about technology. Whether you have a question or just want to say hi — reach out!
          </p>
          <div className="contact-links">
            <a href={`mailto:${meta.email}`} className="btn btn-primary">
              <Icon name="email" /> Say Hello
            </a>
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <Icon name={s.icon} /> {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
