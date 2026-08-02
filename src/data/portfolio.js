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
import fuds from '../assets/fuds1.png'
import fuds2 from '../assets/fuds2.png'
import fuds3 from '../assets/fuds3.png'
import reefond from '../assets/reefond.png'
import reefond1 from '../assets/reefond1.png'
import reefond2 from '../assets/reefond2.png'
import reefond3 from '../assets/reefond3.png'
import reefond4 from '../assets/reefond4.png'
import reefond5 from '../assets/reefond5.png'
import reefond6 from '../assets/reefond6.png'
import reefond7 from '../assets/reefond7.png'
import kanec from '../assets/kanec.png'
import kanec1 from '../assets/kanec1.png'
import kanec2 from '../assets/kanec2.png'
import kanec3 from '../assets/kanec3.png'
import kanec4 from '../assets/kanec4.png'
import kanec5 from '../assets/kanec5.png'
import kanec6 from '../assets/kanec6.png'
import kanec7 from '../assets/kanec7.png'
import kanec8 from '../assets/kanec8.png'
import backendb from '../assets/backendb.png'
import backendb1 from '../assets/backendb1.png'
import backendb2 from '../assets/backendb2.png'
import backendb3 from '../assets/backendb3.png'
import backendb4 from '../assets/backendb4.png'

import outbound from '../assets/outbound.png'
import certificationPython from '../assets/certification_python.JPG'
import hngFinalist from '../assets/hng-finalist.jpeg'
import jobhunter from '../assets/jobhunter.png'
import jobhunter1 from '../assets/jobhunter1.png'
import jobhunter2 from '../assets/jobhunter2.png'
import jobhunter3 from '../assets/jobhunter3.png'
import jobhunter4 from '../assets/jobhunter4.png'
import konasal from '../assets/konasal.png'
import konasal1 from '../assets/konasal1.png'
import konasal2 from '../assets/konasal2.png'
import konasal3 from '../assets/konasal3.png'
import konasal4 from '../assets/konasal4.png'
import konasal5 from '../assets/konasal5.png'
import konasal6 from '../assets/konasal6.png'

export const navItems = [
  { id: 'hero', label: 'Lobby' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Record' },
  { id: 'projects', label: 'Collection' },
  { id: 'skills', label: 'Materials' },
]

export const siteConfig = {
  canonicalUrl: 'https://omomi.vercel.app',
  availability: 'Open for commission · freelance, contract & full-time',
  resumeUrl: '/resume.pdf',
  // Set to your Cal.com / Calendly URL to enable direct booking (e.g. 'https://cal.com/you/intro')
  // When null, "Book a call" opens the contact form instead.
  bookingUrl: null,
  mission:
    'I design backend systems for products that need reliable APIs, honest data, and deployable infrastructure, especially commerce logistics, compliance, and AI-assisted workflows.',
}

/** Lobby proof strip — swap values as you get stronger numbers */
export const heroMetrics = [
  { value: '6+', label: 'Systems shipped' },
  { value: '6s → 1.4s', label: 'Load-time win' },
  { value: '100+', label: 'Users served' },
]

export const services = [
  {
    title: 'Backend API development',
    description:
      'Design and ship FastAPI/Django APIs with auth, validation, and clear domain boundaries, ready for real clients, not demos.',
    bestFor: 'Startups and products that need a solid API layer',
    tags: ['FastAPI', 'Django', 'JWT', 'REST'],
  },
  {
    title: 'Data & performance',
    description:
      'PostgreSQL modeling, query tuning, Redis caching, and async workers so latency stays honest under load.',
    bestFor: 'Apps feeling slow, inconsistent, or hard to scale',
    tags: ['PostgreSQL', 'Redis', 'Celery', 'Profiling'],
  },
  {
    title: 'Deployable infrastructure',
    description:
      'Docker, NGINX, CI/CD, and cloud wiring so releases are repeatable and production stops being manual.',
    bestFor: 'Teams shipping by hand or fighting fragile deploys',
    tags: ['Docker', 'NGINX', 'GitHub Actions', 'AWS'],
  },
  {
    title: 'AI & realtime backends',
    description:
      'Session orchestration, webhooks, streaming, and billing-safe state machines for AI agents and call flows.',
    bestFor: 'AI products with concurrency, sessions, or payments risk',
    tags: ['Webhooks', 'Streaming', 'State machines', 'Stripe'],
  },
]

export const contactDetails = {
  location: 'Nigeria',
  phone: '+234 901 112 3434',
  email: 'akinrogundej@gmail.com',
}

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/codenamemomi', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/omomijolaoluwa123', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:akinrogundej@gmail.com', icon: FaEnvelope },
]

export const experienceItems = [
  {
    role: 'Backend Engineer',
    company: 'FUDS',
    date: 'January 2026 — Present',
    location: 'Remote',
    bullets: [
      'Architecting and building a high performance FastAPI backend for a multi-vendor food delivery and e-commerce platform, serving tailorable meal subscriptions (weekly/monthly plans).',
      'Implemented recommendation intelligence to suggest customized balanced/low-carb options matching user diet profiles (e.g., weight loss).',
      'Developed a consolidated cart system allowing users to place single orders from multiple vendors with single-rider delivery and advanced scheduling.',
      'Built a subscription-based grocery engine supporting automated same day deliveries at weekly, bi-weekly, or monthly intervals.',
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

/**
 * Projects support multi-image galleries via `images: [img1, img2, ...]`.
 * Keep `image` as the primary/cover (optional if `images` is set).
 * Add screenshots under src/assets/ and import them above.
 */
export const projectItems = [
  {
    title: 'Ree-fond',
    subtitle: 'Regulatory Compliance Workflow System',
    tech: 'FastAPI, PostgreSQL, Docker, JWT, REST APIs',
    image: reefond,
    images: [reefond, reefond1, reefond2, reefond3, reefond4, reefond5, reefond6, reefond7],
    mediaLayout: 'landscape',
    demoUrl: 'https://ree-fonddemo.vercel.app',
    repoUrl: 'https://github.com/codenamemomi/ree-fond',
    role: 'Backend Engineer',
    year: '2025',
    wing: 'Compliance & trust',
    problem:
      'Multi-entity teams needed audit-ready compliance workflows without fragile access control or untracked state changes.',
    impact:
      'Delivered a containerized API platform with RBAC, audit-logged workflows, and production-ready staging paths.',
    metrics: [
      { label: 'Focus', value: 'Audit trails' },
      { label: 'Auth', value: 'JWT + RBAC' },
      { label: 'Deploy', value: 'Dockerized' },
    ],
    description:
      'A regulatory compliance workflow platform with secure APIs, containerized deployment, and audit-ready access control for multi-entity operations.',
    details: [
      'Designed workflow execution pipelines in FastAPI ensuring audit-logged transaction states.',
      'Containerized applications using Docker and orchestrated development-to-production staging environments.',
      'Optimized SQL queries in PostgreSQL and defined strict relational model schemas.',
      'Secured user endpoints with robust JWT authorization and role-based access control (RBAC).',
    ],
  },
  {
    title: 'FUDS',
    subtitle: 'Multi-Vendor Food Delivery & Grocery Subscription Platform',
    tech: 'FastAPI, PostgreSQL, SQLAlchemy, Redis, Celery, Docker, Paystack',
    image: fuds,
    images: [fuds, fuds2, fuds3],
    // Portrait app screenshots — render in phone frame instead of landscape crop
    mediaLayout: 'mobile',
    demoUrl: '',
    repoUrl: 'https://github.com/codenamemomi/fuds_backend',
    role: 'Backend Engineer',
    year: '2025',
    wing: 'Commerce & payments',
    problem:
      'Lagos vendors and shoppers needed a single ordering platform that could handle multi-vendor checkout, split sub-orders, and real bank-grade payment confirmation without manual reconciliation.',
    impact:
      'Shipped an async FastAPI platform with Redis-backed cart logic, Celery-driven notifications, and a Paystack integration covering card, hosted checkout, and bank transfer with signed webhook verification.',
    metrics: [
      { label: 'Payments', value: 'Paystack + webhooks' },
      { label: 'Cart', value: 'Redis-backed' },
      { label: 'Jobs', value: 'Celery + OTP flow' },
    ],
    description:
      'A multi-vendor food delivery and grocery subscription backend with modular service layers, Redis-backed cart operations, and a full Paystack payment lifecycle — paired with an Expo/React Native mobile client.',
    details: [
      'Architected a layered FastAPI backend (routes → services → schema → models) separating parent orders from vendor sub-orders for multi-vendor checkout.',
      'Built a Redis-backed cart service and OTP-based registration flow, with Celery workers handling async email dispatch and background jobs.',
      'Integrated Paystack end-to-end: card/hosted checkout, bank transfer initialization, and signature-verified webhook handling to auto-confirm order payment status.',
      'Designed the PostgreSQL schema and Alembic migrations for vendors, products, orders, and grocery roster subscriptions, with an analytics service powering a dashboard and CSV export.',
      'Paired the backend with an Expo Router/TypeScript mobile client (React Native 0.81) covering auth, browsing, cart, checkout, and order tracking.',
    ],
  },
  {
    title: 'Konasal Training Institute',
    subtitle: 'Full-Stack Online Learning Platform',
    tech: 'FastAPI, PostgreSQL, Redis, JavaScript, Bootstrap 5, PayPal API',
    image: konasal,
    images: [konasal,konasal1, konasal2, konasal3, konasal4, konasal5, konasal6],
    demoUrl: 'https://www.konasalti.com',
    repoUrl: 'https://github.com/codenamemomi/konasal_frontend',
    role: 'Full-Stack Engineer',
    year: '2024',
    wing: 'EdTech & payments',
    problem:
      'The institute needed an end-to-end platform — from a responsive student-facing site to a secure, payment-capable backend — to sell and manage career courses at scale.',
    impact:
      'Delivered a complete learning platform: an async FastAPI backend handling auth, PayPal payments, and enrollments, paired with a responsive frontend used by real students to browse, enroll, and pay for courses.',
    metrics: [
      { label: 'Stack', value: 'Full-stack' },
      { label: 'Payments', value: 'PayPal + manual' },
      { label: 'Auth', value: 'JWT + email verify' },
    ],
    description:
      'A complete online learning platform: an async FastAPI backend with PostgreSQL, Redis, and PayPal integration, powering a responsive frontend for course discovery, enrollment, payments, and profile management.',
    details: [
      'Designed an async FastAPI backend with SQLAlchemy and Alembic migrations, using PostgreSQL for persistence and Redis for token storage, blacklisting, and caching.',
      'Implemented JWT-based authentication with email verification and password reset, plus role-based access separating user and admin flows.',
      'Integrated PayPal REST API for order creation/capture, alongside manual payment confirmation (Zelle, bank transfer) with admin-side verification.',
      'Built promo-code-aware enrollment logic supporting full and flexible (50% down) payment options, with progress and status tracking per enrollment.',
      'Built a responsive multi-page frontend (HTML5, CSS3, Bootstrap 5, jQuery) for course discovery, registration, payment, and profile management, plus a separate admin panel.',
      'Wired email notifications (Brevo/Sendinblue) for verification, password resets, and enrollment confirmations, with console-log fallback for local dev.',
    ],
  },
  {
    title: 'Backend Battle',
    subtitle: 'API Performance Benchmarking Platform',
    tech: 'FastAPI, httpx, React Native (Expo), Async Processing',
    image: backendb,
    images: [backendb, backendb1, backendb2, backendb3, backendb4],
    demoUrl: 'https://backend-battle.vercel.app',
    repoUrl: 'https://github.com/codenamemomi/Backend_Battle',
    role: 'Backend / API Engineer',
    year: '2025',
    wing: 'Performance & tooling',
    problem:
      'Teams lacked a simple way to stress-test endpoints and see latency distributions under concurrent load.',
    impact:
      'Built an async load engine that scores API latency and surfaces p50/p90/p99 insights through REST APIs.',
    metrics: [
      { label: 'Load model', value: 'Concurrent async' },
      { label: 'Telemetry', value: 'p50 · p90 · p99' },
      { label: 'Runtime', value: 'Non-blocking' },
    ],
    description:
      'An async benchmarking engine that simulates concurrent API load, scores endpoint latency, and exposes performance insights through REST APIs.',
    details: [
      'Architected concurrent load generators utilizing HTTPX async calls to benchmark target endpoints.',
      'Exposed real-time latency profiles and transaction scores via REST APIs.',
      'Built async queue routines for processing batch benchmarks without blocking the event loop.',
      'Designed lightweight telemetry dashboards showing p50, p90, and p99 response distribution.',
    ],
  },
  {
    title: 'JobHunter',
    subtitle: 'Personal Job-Hunting & Auto-Apply Platform',
    tech: 'FastAPI, SQLAlchemy, React 18 + Vite, Celery, PostgreSQL/Supabase',
    image: jobhunter,
    images: [jobhunter, jobhunter1, jobhunter2, jobhunter3, jobhunter4],
    demoUrl: 'https://jobhunter-seven-mu.vercel.app',
    repoUrl: 'https://github.com/codenamemomi/jobhunter',
    role: 'Full-Stack Engineer',
    year: '2025',
    wing: 'Product systems',
    problem:
      'Job seekers waste hours manually checking multiple job boards, re-reading listings against their CV, and tracking application status across scattered emails and spreadsheets.',
    impact:
      'Built a unified platform that aggregates listings from six job boards, ranks them against an uploaded CV, and can draft or auto-send email applications — cutting the job search workflow down to a single dashboard.',
    metrics: [
      { label: 'Job sources', value: '6 boards' },
      { label: 'Pipeline', value: 'Wishlist → Applied' },
      { label: 'Auto-apply', value: 'Daily-capped' },
    ],
    description:
      'A personal job-hunting platform that scrapes listings from RemoteOK, Remotive, ArbeitNow, Jobicy, Himalayas, and The Muse, parses and matches them against your CV, and lets you track or auto-apply to roles by email.',
    details: [
      'Built a FastAPI backend with SQLAlchemy models and Alembic migrations, deployed against SQLite locally and Supabase Postgres in production.',
      'Implemented rule-based CV parsing (PDF/DOCX/TXT) and a scoring engine that ranks scraped jobs against the parsed profile without requiring an AI model.',
      'Designed a multi-source scraper layer that normalizes listings into a single schema and detects apply_method (email, url, or unknown) per job.',
      'Built an email-apply pipeline (Gmail SMTP / Brevo) with draft-then-send flow, race-safe upsert on applications, and an optional auto-apply mode with daily send limits.',
      'Added background auto-scrape scheduling, with an optional Celery + Redis worker/beat setup for multi-worker production deployments.',
      'Shipped a React 18 + Vite frontend (Search, Matches, Queue, Tracker, CV pages) with JWT auth, deployed on Vercel with CORS-aware config against a Render-hosted API.',
    ],
  },
  {
    title: 'Outbound AI Calling Agent',
    subtitle: 'AI Call Automation Platform',
    tech: 'FastAPI, PostgreSQL, Node.js',
    image: outbound,
    images: [outbound],
    demoUrl: 'https://outbound.ai/',
    repoUrl: 'https://github.com/codenamemomi/Outbound-AI-Backend',
    role: 'Backend Engineer',
    year: '2025',
    wing: 'Realtime & AI',
    problem:
      'Outbound AI calling needed reliable session orchestration, realtime media handling, and billing that never double-charged mid-call.',
    impact:
      'Shipped call state machines, media stream handlers, webhooks, and Stripe subscriptions for production call automation.',
    metrics: [
      { label: 'Realtime', value: 'Audio streams' },
      { label: 'Billing', value: 'Stripe + locks' },
      { label: 'Events', value: 'Webhooks' },
    ],
    description:
      'An outbound call automation platform with session orchestration, managed workflows, and subscription-based billing support.',
    details: [
      'Created media stream socket handlers in FastAPI for real-time bidirectional audio streaming.',
      'Engineered call state machines and transactional locks to prevent double-billing during calls.',
      'Structured system event webhooks notifying users of successful/failed call outcomes.',
      'Implemented stripe-based subscription billing flow and secure API keys authorization.',
    ],
  },
  {
    title: 'KANEC Impact',
    subtitle: 'Blockchain Compliance Platform',
    tech: 'FastAPI, PostgreSQL, Docker, Hedera SDK',
    image: kanec,
    images: [kanec, kanec1, kanec2, kanec3, kanec4, kanec5, kanec6, kanec7, kanec8],
    mediaLayout: 'landscape',
    demoUrl: 'https://kanec.vercel.app/',
    repoUrl: 'https://github.com/codenamemomi/KANEC_IMPACT',
    role: 'Backend & Blockchain Engineer',
    year: '2024',
    wing: 'Compliance & trust',
    problem:
      'Compliance teams needed immutable transaction records and analytics they could trust for audit reviews.',
    impact:
      'Connected FastAPI workflows to Hedera for immutable compliance logs, hashing, and throughput-aware metrics.',
    metrics: [
      { label: 'Ledger', value: 'Hedera' },
      { label: 'Records', value: 'Immutable' },
      { label: 'Ops', value: 'Docker multi-node' },
    ],
    description:
      'A blockchain compliance system using Hedera for immutable transaction records, analytics, and secure audit trails.',
    details: [
      'Built transactions logging engine writing compliance metadata to Hedera blockchain ledger.',
      'Formulated API data structures ensuring immutable hashing of audited records.',
      'Configured Dockerized multi-node environments for reliable transaction polling.',
      'Rendered metrics visualization highlighting blockchain throughput and compliance metrics.',
    ],
  },
]

export const certificates = [
  {
    title: 'Python Certification',
    issuer: 'Python Programming',
    image: certificationPython,
    description: 'Certificate validating my Python programming fundamentals and practical development workflow.',
  },
  {
    title: 'HNG Finalist',
    issuer: 'HNG Internship',
    image: hngFinalist,
    description: 'Recognition as a finalist in the HNG program, reflecting my contributions in a collaborative engineering environment.',
  },
]

/** Flat list kept for any simple consumers */
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

/** Museum materials wall — grouped craft mediums */
export const skillGroups = [
  {
    name: 'Backend',
    caption: 'Core mediums',
    items: [
      { label: 'FastAPI', icon: SiFastapi, color: '#00c18d' },
      { label: 'Django', icon: SiDjango, color: '#0c7b4c' },
      { label: 'API Design', icon: SiSwagger, color: '#61dafb' },
    ],
  },
  {
    name: 'Data',
    caption: 'Storage & async',
    items: [
      { label: 'PostgreSQL', icon: SiPostgresql, color: '#316192' },
      { label: 'Redis', icon: SiRedis, color: '#d82c20' },
      { label: 'Celery', icon: SiRabbitmq, color: '#f26f33' },
    ],
  },
  {
    name: 'Infrastructure',
    caption: 'Deploy & runtime',
    items: [
      { label: 'Docker', icon: SiDocker, color: '#2496ed' },
      { label: 'NGINX', icon: SiNginx, color: '#2f855a' },
      { label: 'GitHub Actions', icon: SiGithubactions, color: '#f05032' },
    ],
  },
  {
    name: 'Cloud & interface',
    caption: 'Environment & clients',
    items: [
      { label: 'AWS', icon: FaAws, color: '#ff9900' },
      { label: 'Cloudflare', icon: SiCloudflare, color: '#f38020' },
      { label: 'React', icon: SiReact, color: '#61dafb' },
      { label: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    ],
  },
]
