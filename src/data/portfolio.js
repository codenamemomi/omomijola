import {
  SiFastapi,
  SiDjango,
  SiPostgresql,
  SiSwagger,
  SiDocker,
  SiNginx,
  SiGithubactions,
  SiRabbitmq,
  SiRedis,
  SiCloudflare,
  SiReact,
  SiNextdotjs,
} from 'react-icons/si'
import { FaAws, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import reefond from '../assets/reefond.png'
import kanec from '../assets/kanec.png'
import backendb from '../assets/backendb.png'
import outbound from '../assets/outbound.png'

export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
]

export const contactDetails = {
  location: 'Nigeria',
  phone: '+234 901 112 3434',
  email: 'akinrogundej@gmail.com',
}

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/codenamemomi', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:akinrogundej@gmail.com', icon: FaEnvelope },
]

export const experienceItems = [
  {
    role: 'Backend Engineer',
    company: 'FUDS',
    date: 'January 2026 — Present',
    location: 'Remote',
    bullets: [
      'Architecting and building a high-performance FastAPI backend for a multi-vendor food delivery and e-commerce platform, serving tailorable meal subscriptions (weekly/monthly plans).',
      'Implemented recommendation intelligence to suggest customized balanced/low-carb options matching user diet profiles (e.g., weight loss).',
      'Developed a consolidated cart system allowing users to place single orders from multiple vendors with single-rider delivery and advanced scheduling.',
      'Built a subscription-based grocery engine supporting automated same-day deliveries at weekly, bi-weekly, or monthly intervals.',
      'Designed the "111 Feature" enabling users to pre-schedule breakfast, lunch, and dinner slots dynamically aligned with vendor closing hours and rider availability.',
    ],
    tags: ['FastAPI', 'Python', 'Pydantic', 'Logistics Scheduling', 'Multi-vendor Cart'],
  },
  {
    role: 'Full-Stack Developer & DevOps',
    company: 'Konasalti Tech School',
    date: 'August — October 2025',
    location: 'Remote',
    bullets: [
      'Architected and deployed a FastAPI backend serving 100+ active users with JWT authentication.',
      'Cut application load time from 6s to 1.4s through query optimization and architecture tuning.',
      'Built GitHub Actions CI/CD for deployments to Vercel and Render, eliminating manual release steps.',
      'Containerized services with Docker and configured NGINX reverse proxy for secure, scalable deployment.',
      'Implemented Celery and Redis for asynchronous background processing and notifications.',
    ],
    tags: ['FastAPI', 'JWT', 'Docker', 'NGINX', 'Celery', 'Redis', 'CI/CD'],
  },
  {
    role: 'Backend & Infrastructure Engineer (Contract)',
    company: 'Cloudtalk Networks Limited',
    date: 'June 2024 — January 2026',
    location: 'Lagos, Nigeria',
    bullets: [
      'Resolved critical database inconsistencies and improved website response time for active users.',
      'Built IP banning scripts and hardened application security against suspicious traffic.',
      'Reduced data breach risk through system updates, vulnerability mitigation, and access control.',
      'Supported platform stability and infrastructure troubleshooting alongside technical support teams.',
    ],
    tags: ['PostgreSQL', 'Database Tuning', 'System Hardening', 'Shell Scripting', 'Security Audit'],
  },
]

export const projectItems = [
  {
    title: 'Ree-fond',
    subtitle: 'Regulatory Compliance Workflow System',
    tech: 'FastAPI, PostgreSQL, Docker, JWT, REST APIs',
    image: reefond,
    demoUrl: 'https://ree-fonddemo.vercel.app',
    repoUrl: 'https://github.com/codenamemomi/ree-fond',
    description:
      'A regulatory compliance workflow platform with secure APIs, containerized deployment, and audit-ready access control for multi-entity operations.',
    details: [
      'Designed workflow execution pipelines in FastAPI ensuring audit-logged transaction states.',
      'Containerized applications using Docker and orchestrated development-to-production staging environments.',
      'Optimized SQL queries in PostgreSQL and defined strict relational model schemas.',
      'Secured user endpoints with robust JWT authorization and role-based access control (RBAC).'
    ]
  },
  {
    title: 'Backend Battle',
    subtitle: 'API Performance Benchmarking Platform',
    tech: 'FastAPI, httpx, React Native (Expo), Async Processing',
    image: backendb,
    demoUrl: 'https://backend-battle.vercel.app',
    repoUrl: 'https://github.com/codenamemomi/Backend_Battle',
    description:
      'An async benchmarking engine that simulates concurrent API load, scores endpoint latency, and exposes performance insights through REST APIs.',
    details: [
      'Architected concurrent load generators utilizing HTTPX async calls to benchmark target endpoints.',
      'Exposed real-time latency profiles and transaction scores via REST APIs.',
      'Built async queue routines for processing batch benchmarks without blocking the event loop.',
      'Designed lightweight telemetry dashboards showing p50, p90, and p99 response distribution.'
    ]
  },
  {
    title: 'Outbound AI Calling Agent',
    subtitle: 'AI Call Automation Platform',
    tech: 'FastAPI, PostgreSQL, Node.js',
    image: outbound,
    demoUrl: 'https://outbound.ai/',
    repoUrl: 'https://github.com/codenamemomi/Outbound-AI-Backend',
    description:
      'An outbound call automation platform with session orchestration, managed workflows, and subscription-based billing support.',
    details: [
      'Created media stream socket handlers in FastAPI for real-time bidirectional audio streaming.',
      'Engineered call state machines and transactional locks to prevent double-billing during calls.',
      'Structured system event webhooks notifying users of successful/failed call outcomes.',
      'Implemented stripe-based subscription billing flow and secure API keys authorization.'
    ]
  },
  {
    title: 'KANEC Impact',
    subtitle: 'Blockchain Compliance Platform',
    tech: 'FastAPI, PostgreSQL, Docker, Hedera SDK',
    image: kanec,
    demoUrl: 'https://kanec.vercel.app/',
    repoUrl: 'https://github.com/codenamemomi/KANEC_IMPACT',
    description:
      'A blockchain compliance system using Hedera for immutable transaction records, analytics, and secure audit trails.',
    details: [
      'Built transactions logging engine writing compliance metadata to Hedera blockchain ledger.',
      'Formulated API data structures ensuring immutable hashing of audited records.',
      'Configured Dockerized multi-node environments for reliable transaction polling.',
      'Rendered metrics visualization highlighting blockchain throughput and compliance metrics.'
    ]
  },
]

export const skills = [
  { label: 'FastAPI', icon: SiFastapi, color: '#00c18d' },
  { label: 'Django', icon: SiDjango, color: '#0c7b4c' },
  { label: 'PostgreSQL', icon: SiPostgresql, color: '#316192' },
  { label: 'API Design', icon: SiSwagger, color: '#61dafb' },
  { label: 'Docker', icon: SiDocker, color: '#2496ed' },
  { label: 'NGINX', icon: SiNginx, color: '#2f855a' },
  { label: 'GitHub Actions', icon: SiGithubactions, color: '#f05032' },
  { label: 'Celery', icon: SiRabbitmq, color: '#f26f33' },
  { label: 'Redis', icon: SiRedis, color: '#d82c20' },
  { label: 'AWS', icon: FaAws, color: '#ff9900' },
  { label: 'Cloudflare', icon: SiCloudflare, color: '#f38020' },
  { label: 'React', icon: SiReact, color: '#61dafb' },
  { label: 'Next.js', icon: SiNextdotjs, color: '#000000' },
]
