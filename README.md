# Omomijolaoluwa | Backend & Infrastructure Engineer Portfolio

Welcome to the source repository for my personal engineering portfolio. This platform showcases my work as a **Backend & Infrastructure Engineer** specializing in high-performance API design, microservices, containerization, and developer operations.

Live Version: [s33jay.vercel.app](https://s33jay.vercel.app)

---

## 🚀 Key Features

- **Interactive Contact Modal**: Fully validated contact form integrated with a serverless FastAPI backend on Vercel, dispatching encrypted email notifications through Brevo API.
- **Infinite Projects Slider**: Highly responsive, touch-friendly project carousel with robust viewport boundary calculation.
- **Dynamic Gooey Navigation**: Custom scroll-linked navigation bar with an active-state indicator that recalculates its dimensions on window resize.
- **Premium Aesthetics**: Glassmorphic theme built on curated lavender/purple custom CSS palettes, featuring fluid hover micro-animations and typography.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 8, Vanilla CSS (Custom Design System Tokens)
- **Icons**: React Icons (`react-icons/fa`, `react-icons/si`)
- **Backend API (External)**: FastAPI, Pydantic, Brevo Transactional Mail SDK, Uvicorn (Serverless on Vercel)
- **Deployment**: Vercel

---

## 📂 Repository Structure

```text
├── src/
│   ├── assets/             # Project screenshots and assets
│   ├── components/         # Reusable React UI components
│   │   ├── GooeyNav.jsx    # Custom dynamic navigation bar
│   │   ├── ProjectsSection # Touch-slider showing featured systems
│   │   ├── ContactModal    # Contact form communicating with Vercel API
│   │   └── ShinyText       # CSS-based shiny animated texts
│   ├── data/
│   │   └── portfolio.js    # Center data store (skills, experience, socials)
│   ├── index.css           # Global typography and base setup
│   └── App.jsx             # Shell wrapper and page composition
├── index.html              # Main HTML document with preconnected fonts
├── vite.config.js          # Build tool configuration
└── eslint.config.js        # Linter rules configuration
```

---

## ⚡ Development Setup

### Prerequisites

- Node.js (v18+)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/codenamemomi/omomijola.git
   cd omomijolaoluwa
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables (optional):
   Create a `.env` or `.env.local` in the root folder to route the contact form:
   ```env
   VITE_CONTACT_API_URL=https://form-forums.vercel.app/api/v1/contact
   ```

4. Start local development server:
   ```bash
   npm run dev
   ```

5. Run linting checks:
   ```bash
   npm run lint
   ```

6. Compile production build:
   ```bash
   npm run build
   ```

---

## 🛡️ Backend Integration

The contact form interfaces with the FastAPI server located in the neighboring `form_forums` directory. When a visitor submits the contact form, it forwards a POST request to:
`POST /api/v1/contact`

### API Request Schema

```json
{
  "name": "Alex Carter",
  "email": "alex@example.com",
  "subject": "System Optimization Consult",
  "message": "Hi, I would like to schedule a system review session..."
}
```

The server processes the request asynchronously as a background task, formats it, and transmits it via the Brevo API to `akinrogundej@gmail.com`.
