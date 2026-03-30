# FinTrack Pro (V2 React)

A Full-Stack Expense Analytics Platform built with a modern React (Vite) frontend and a Java Spring Boot backend.

## Tech Stack
- **Backend:** Java 17, Spring Boot 3.2.x, Spring Web, Spring Data JPA, Spring Security, PostgreSQL, JWT, Maven.
- **Frontend:** React 18 (Vite), React Router v6, Tailwind CSS, Axios, Chart.js (react-chartjs-2).

## Prerequisites
- **Java 17+** and **Maven**
- **Node.js (v18+)** and **npm**
- **PostgreSQL Database** running locally. Ensure `fintrackdb` is created. Adjust credentials in `backend/src/main/resources/application.properties` to map your local settings (e.g., port 5434, password 1234).

## Quick Setup

### 1. Start the Backend API
Navigate to the `backend/` directory and run:
   ```bash
   mvn clean spring-boot:run
   ```
   The backend API will run on `http://localhost:8080`.

### 2. Start the React Frontend
Navigate to the `frontend/` directory and run:
   ```bash
   npm install
   npm run dev
   ```
   The React Vite app will run locally typically on `http://localhost:5173`.

## Architecture Highlights
- **Axios Interceptors:** Global JWT token injection and auto-handling of `401 Unauthorized` logouts.
- **Tailwind CSS Utility Contexts:** Advanced styling leveraging reusable `@layer components` mapping `glass-container` aesthetics.
- **Dynamic Routing:** `ProtectedRoute` contexts surrounding the Dashboard module rejecting unauthorized visitors securely.
- **Backend Independence**: React operates exclusively mapped via REST to the separate Spring Boot instance.
