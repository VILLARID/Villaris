# Villaris — Digital Identity

Portfolio personal de **Farid Tabare Matos Villarroel**, Software Engineer y Full Stack Developer.

**Villaris** es mi identidad digital y el espacio donde presento mi perfil profesional, forma de trabajo, stack tecnológico, proyectos y medios de contacto.

---

## Overview

Este proyecto es una single-page portfolio construida con React y Vite.

El objetivo principal es presentar una experiencia visual limpia, moderna y tecnológica, manteniendo una navegación fluida y una estructura clara entre las diferentes secciones del sitio.

La interfaz utiliza una estética minimalista basada en fondos claros, tipografía fuerte, detalles técnicos sutiles y animaciones controladas.

---

## Sections

El portfolio está dividido en las siguientes secciones:

### Home

Presentación principal con:

- nombre completo
- rol profesional
- identidad digital `VILLARIS`
- breve descripción
- principales áreas técnicas
- accesos directos a proyectos y contacto

### About

Información sobre mi perfil como desarrollador y los principios que aplico al construir software.

Incluye conceptos como:

- arquitectura primero
- código limpio
- soluciones reales
- aprendizaje continuo

### Core System

Representación de mi ecosistema tecnológico.

Actualmente organizado en:

- Frontend
- Backend
- Databases

Además de principios relacionados con:

- arquitectura modular
- seguridad
- rendimiento
- despliegue

### Project Archive

Colección de proyectos organizados por categorías.

Incluye:

- previews visuales
- título
- descripción
- tecnologías
- estado
- filtros
- búsqueda
- acceso a cada proyecto

### Contact

Sección final para contacto, oportunidades y colaboraciones.

Incluye enlaces a:

- Email
- GitHub
- LinkedIn
- CV

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

### Smooth Scrolling

- Lenis

### Additional Technologies

El portfolio también representa tecnologías con las que trabajo, entre ellas:

- Node.js
- Python
- Java
- Spring Boot
- PostgreSQL
- Oracle
- MongoDB
- Redis

---

## Features

- Responsive design
- Single Page Application
- Smooth scrolling with Lenis
- Scroll-spy navigation
- Animated active navbar indicator
- Section reveal animations with Framer Motion
- Sticky project filters
- Project category filtering
- Project search and sorting
- Responsive mobile navigation
- Reduced motion support
- Accessible navigation
- Custom Villaris branding
- Custom favicon
- Back-to-top navigation

---

## Design

El sistema visual utiliza principalmente:

- White backgrounds
- Slate / black typography
- Blue accents
- Subtle grids
- Soft borders
- Minimal shadows
- Large editorial typography
- Lightweight technical details

El objetivo es mantener una estética tecnológica sin recurrir a estilos cyberpunk, gamer o excesivamente futuristas.

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
