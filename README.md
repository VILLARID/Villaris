# Villaris

A modern full-stack personal portfolio focused on software engineering, digital products, and selected development projects.

Villaris is designed as a clean, minimal, and technology-driven portfolio with a strong focus on presentation, usability, and scalable architecture.

---

## Overview

The project is built as a full-stack application with a React frontend and an Express backend connected to PostgreSQL.

Projects displayed in the portfolio are loaded dynamically from the database through a REST API instead of being hardcoded in the frontend.

Current data flow:

```text
PostgreSQL
    ↓
Express API
    ↓
React
    ↓
Project Archive
```

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lenis
- Lucide React

### Backend

- Node.js
- Express
- PostgreSQL
- pg
- CORS
- dotenv

---

## Project Structure

```text
Villaris/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

## Frontend

The frontend is built with React and follows a minimal, responsive, and modern visual direction.

Main sections include:

- Home
- About
- Core System
- Project Archive
- Contact

The interface includes:

- Responsive layout
- Smooth scrolling
- Section reveal animations
- Project filtering
- Project search
- Project sorting
- Dynamic project data
- Loading states
- Error states
- Empty states
- External project and repository links

---

## Project Archive

The Project Archive is connected directly to the backend API.

Projects are loaded from:

```http
GET /api/projects
```

Each project can contain:

```text
title
slug
short_description
description
category
status
year
image_url
project_url
github_url
featured
technologies
created_at
updated_at
```

Technologies are stored separately and linked to projects through a many-to-many relationship.

---

## API

### Health Check

```http
GET /api/health
```

### Get All Projects

```http
GET /api/projects
```

Example response:

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Cutly",
      "slug": "cutly",
      "category": "Web Applications",
      "status": "in-progress",
      "year": 2026,
      "featured": true,
      "technologies": [
        {
          "id": 1,
          "name": "React",
          "slug": "react"
        }
      ]
    }
  ]
}
```

### Get Project By Slug

```http
GET /api/projects/:slug
```

Example:

```text
/api/projects/cutly
```

If the project does not exist:

```json
{
  "success": false,
  "message": "Project not found"
}
```

---

## Database

The application uses PostgreSQL.

Main tables:

```text
projects
technologies
project_technologies
contact_messages
```

### Relationships

```text
projects
    ↓
project_technologies
    ↓
technologies
```

This allows each project to have multiple technologies while keeping the database normalized.

---

## Environment Variables

### Frontend

Create:

```text
frontend/.env
```

Example:

```env
VITE_API_URL=http://localhost:3000
```

### Backend

Create:

```text
backend/.env
```

Example:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database
DB_USER=your_user
DB_PASSWORD=your_password

FRONTEND_URL=http://localhost:5173
```

Never commit real credentials to the repository.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/villaris.git
cd Villaris
```

Install and run the frontend:

```bash
cd frontend
npm install
npm run dev
```

Open another terminal and run the backend:

```bash
cd backend
npm install
npm run dev
```

---

## Development

Both applications should be running simultaneously.

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:3000
```

The frontend communicates with the backend through:

```text
VITE_API_URL
```

---

## Current Project Example

### Cutly

Cutly is a responsive barber shop landing page built with a mobile-first approach.

Technologies:

- React
- Tailwind CSS
- Vite

The project is stored in PostgreSQL and loaded dynamically into the Villaris Project Archive through the backend API.

---

## Current Status

The core full-stack architecture is operational.

Implemented:

- React portfolio interface
- Responsive design
- Smooth scrolling
- Section animations
- PostgreSQL database
- Express backend
- Database connection
- REST Projects API
- Project technologies relationship
- Dynamic frontend project loading
- Search
- Filters
- Sorting
- Loading states
- Error handling
- Project preview images

---

## Planned Improvements

Future development may include:

- Individual project detail pages
- Contact form backend integration
- Administrative dashboard
- Authentication
- Project management interface
- Image storage service
- Additional API endpoints
- Production backend deployment

---

## Design Direction

Villaris follows a minimal and technology-focused visual system.

The interface prioritizes:

- White space
- Strong typography
- Clear hierarchy
- Subtle motion
- Responsive layouts
- Functional interactions
- Consistent spacing
- Clean project presentation

---

## Author

**Farid Tabare Matos Villarroel**

Software Engineer

Villaris is a personal portfolio and development environment for showcasing software projects, technical skills, and digital products.

---

## License

This project is intended for personal portfolio and educational use.
