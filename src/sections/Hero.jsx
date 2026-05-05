import React, { useState, useEffect } from 'react';
import Icon from '../components/Icon';
import { meta, socials, heroRoles } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 50, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

export default function Hero() {
  const typedRole = useTypingEffect(heroRoles);
  const ref = useScrollReveal(0.1);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-content reveal" ref={ref}>
        <p className="hero-greeting">
          <span>👋</span> Hey, I'm
        </p>
        <h1>
          <span className="gradient-text">{meta.name}</span>
        </h1>
        <div className="hero-role">
          {typedRole}<span className="cursor" />
        </div>
        <p className="hero-desc">
          AI Engineer specializing in high-leverage system architecture and automated pipelines. Turning hours of work into seconds.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
          <a href="#experience" className="btn btn-outline">View My Work</a>
        </div>
        <div className="hero-socials">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <Icon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
