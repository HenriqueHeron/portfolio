import React from 'react';
import Icon from './Icon';
import { socials } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <span>&copy; {new Date().getFullYear()} Henrique Magalhães. Built with React.</span>
        <div className="footer-socials">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <Icon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
