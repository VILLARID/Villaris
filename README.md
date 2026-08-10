# Villaris — Digital Identity

Personal portfolio of **Farid Tabare Matos Villarroel**, Software Engineer and Full Stack Developer.

**Villaris** is my digital identity — a space where I present my work, technical approach, projects, and professional profile.

---

## ✦ Overview

This project is a single-page portfolio built with React and Vite.

The goal is to create a clean, modern, and technology-focused experience with strong typography, subtle technical details, smooth navigation, and a consistent visual system across every section.

The interface follows a minimalist direction with:

- light backgrounds
- dark typography
- controlled blue accents
- subtle grid patterns
- soft borders and shadows
- smooth motion and transitions

---

## Sections

### Home

The main introduction of the portfolio.

It includes:

- full name
- professional role
- `VILLARIS` digital identity
- short introduction
- main technical areas
- direct access to projects and contact

### About

A closer look at how I approach software development.

Main principles:

- Architecture First
- Clean Code
- Real Solutions
- Continuous Learning

### Core System

A visual representation of my technology ecosystem and the tools I use to build software.

Main areas:

- Frontend
- Backend
- Databases

It also highlights engineering principles such as:

- modular architecture
- security
- performance
- continuous deployment

### Project Archive

A collection of selected projects presented through visual cards.

Each project can include:

- preview image
- title
- short description
- technologies
- status
- category
- project link

The section also includes filtering, search, and sorting.

### Contact

The final section of the portfolio, focused on communication and opportunities.

It includes access to:

- Email
- GitHub
- LinkedIn
- CV

---

## ⚙️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

### Smooth Scrolling

- Lenis

### Technologies Represented in the Portfolio

- Node.js
- Python
- Java
- Spring Boot
- PostgreSQL
- Oracle
- MongoDB
- Redis

---

## ✨ Features

- Responsive design
- Single-page architecture
- Smooth scrolling with Lenis
- Scroll-spy navigation
- Animated active navbar indicator
- Section reveal animations
- Project filtering
- Project search and sorting
- Sticky project toolbar
- Responsive mobile navigation
- Reduced motion support
- Accessible navigation
- Custom Villaris branding
- Custom favicon
- Back-to-top navigation

---

## Design System

The visual system is based on a restrained palette and clean interface language.

### Main Colors

- Background: `#FFFFFF`
- Primary text: `#0F172A`
- Secondary text: `#64748B`
- Muted text: `#94A3B8`
- Borders: `#E2E8F0`
- Accent blue: `#2563EB`

The goal is to maintain a technological identity without relying on excessive futuristic, cyberpunk, or neon elements.

---

## Project Structure

```text
frontend/
├── public/
│   └── Logo.png
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── About/
│   │   ├── Project/
│   │   ├── SmoothScroll/
│   │   └── ui/
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AboutUs.jsx
│   │   ├── CoreSystem.jsx
│   │   ├── ProjectArchive.jsx
│   │   └── SystemReady.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
