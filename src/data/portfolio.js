export const meta = {
  name: 'Henrique Heron Magalhães',
  shortName: 'Henrique',
  title: 'AI Engineer & Full-Stack Developer',
  email: 'henriqueheron1@gmail.com',
  location: 'Brazil',
};

export const socials = [
  { label: 'GitHub', url: 'https://github.com/henriqueheron', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/henrique-mag/', icon: 'linkedin' },
  { label: 'TikTok', url: 'https://tiktok.com/@autotelico', icon: 'tiktok' },
  { label: 'YouTube', url: 'https://youtube.com/@O_Autotelico', icon: 'youtube' },
];

export const heroRoles = [
  'AI Engineer',
  'Data Engineer',
  'Full-Stack Developer',
  'Problem Solver',
];

export const about = {
  headline: 'Building systems that save people hours, not minutes.',
  description: `I'm a genuinely passionate engineer who spends 6+ hours daily either writing code, reading about it, or deepening my understanding of systems. With 2+ years of software development experience, I specialize in high-leverage system architecture and automated pipelines.`,
  philosophy: `I believe in understanding every layer of what I build. Whether it's Big O analysis to kill a performance bottleneck, or designing an AI agent pipeline, I only feel satisfied when I truly understand what's going on.`,
  stats: [
    { value: '83%', label: 'Research Time Reduced' },
    { value: '16+', label: 'Hours Saved / Week' },
    { value: '99.6%', label: 'Exec. Time Reduced' },
    { value: '3', label: 'Fluent Languages' },
  ],
};

export const experience = [
  {
    role: 'AI Engineer',
    company: 'PwC',
    contract: 'Contract via IBM / ManpowerGroup',
    period: 'Mar 2026 — Present',
    highlights: [
      'Architected an end-to-end AI agent utilizing RAG and web-search APIs to automate deep company research and email drafting.',
      'Reduced research cycle time by 83%, transforming a manual 30-minute workflow into a streamlined 5-minute automated process.',
    ],
  },
  {
    role: 'Data Engineer',
    company: 'Google',
    contract: 'Contract via IBM / ManpowerGroup',
    period: 'Nov 2024 — Mar 2026',
    highlights: [
      'Led the architecture and complete redesign of a notification system, saving 16+ hrs/week — execution time went from 22 min to 5 sec.',
      'Built a critical SQL pipeline used by thousands of Googlers in HR systems, leveraging AI to rapidly prototype complex logic.',
      'Selected for an elite engineering team to handle a critical 2-month table migration project.',
      'Cleared the backlog of overdue requests by creating a track-and-alert software using N-Tier Layered Architecture.',
      'Led the team through a major outage, coordinating international teams (US, India, Brazil).',
      'Served as a technical mentor for Java and Apache Beam pipelines.',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'Class Solutions',
    type: 'Internship',
    period: 'May 2024 — Sep 2024',
    highlights: [
      'Built production React forms and a full reimbursement system used daily by a law firm client.',
      'Developed and maintained SharePoint websites using React, AngularJS, and TypeScript.',
      'Rewrote legacy JavaScript codebase to modern ES2015+ standards.',
    ],
  },
];

export const projects = [
  {
    title: 'ReSumo — AI Resume Analyst',
    description: 'AI-powered resume evaluator that helps people upgrade their resumes and land jobs with actionable feedback.',
    impact: '4+ people thanked me — helped them catch issues and improve applications.',
    tech: ['AI', 'Vercel', 'Web App'],
    url: 'https://resumocv.vercel.app/',
    icon: '📄',
  },
  {
    title: 'Reddit Translation Blocker',
    description: 'Chrome extension for a translation-free, smooth Reddit browsing experience.',
    impact: '50+ active users',
    tech: ['JavaScript', 'Chrome Extension'],
    url: 'https://bit.ly/reddittranslationblocker',
    icon: '🔗',
  },
  {
    title: 'AI WhatsApp Chatbot',
    description: 'n8n-powered AI agent that answers questions about me and books meetings through WhatsApp.',
    impact: 'Automated client engagement',
    tech: ['n8n', 'AI Agents', 'WhatsApp API'],
    url: null,
    icon: '🤖',
  },
  {
    title: 'Daily Tech Digest',
    description: 'Automated AI workflow that curates tech and gaming news, delivering a filtered daily digest every morning.',
    impact: 'Fresh news daily at breakfast',
    tech: ['n8n', 'AI Agents', 'RSS'],
    url: null,
    icon: '📰',
  },
];

export const skills = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  Backend: ['Node.js', 'Java', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Kafka'],
  DevOps: ['Docker', 'Git', 'Linux', 'Bash', 'GCP', 'Dataflow', 'BigQuery'],
  'AI & Automation': ['RAG Pipelines', 'n8n', 'AI Agents', 'Gemini', 'Prompt Engineering'],
};

export const languages = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Spanish', level: 'Fluent' },
];

export const education = [
  { degree: 'BS in Computer Science', school: 'Anhanguera University', period: '2024 — Present' },
  { degree: 'BS in Public Policy Management', school: 'University of São Paulo (USP)', period: '2018 — 2021' },
];
