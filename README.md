# StockBroker

A full-stack stock dashboard project with a Node.js API, an authenticated trading dashboard, and a separate brokerage-style landing page. The API stores user accounts, holdings, positions, and orders in MongoDB and retrieves Indian stock quotes through Yahoo Finance.

## What’s Included

- **API** — Express service for authentication, market quotes, holdings, positions, and orders
- **Dashboard** — React interface for account activity, watchlists, holdings, and trading views
- **Landing page** — Separate React marketing-style frontend
- **Deployment blueprint** — Render configuration for the API and both frontend apps

## Stack

Node.js · Express · MongoDB · Mongoose · JWT · React · Create React App · Yahoo Finance

## Local Development

Use Node.js 22 and npm. Run each application in its own terminal.

### 1. Start the API

```bash
cd backend
npm install
```

Create `backend/.env`:

```dotenv
MONGO_URL=mongodb://127.0.0.1:27017/stockbroker
JWT_SECRET=replace-with-a-long-random-secret
ADMIN_EMAILS=
```

Then run:

```bash
npm run dev
```

The API listens on port `3002` by default. Its health endpoint is `/health`.

### 2. Start the dashboard

In a second terminal:

```bash
cd dashboard
npm install
npm start
```

The dashboard development server proxies API requests to `http://localhost:3002`.

### 3. Start the landing page (optional)

In another terminal:

```bash
cd frontend
npm install
npm start
```

For deployment, the landing page and dashboard read `REACT_APP_API_URL`; the landing page also uses `REACT_APP_DASHBOARD_URL`. The root `render.yaml` defines the Render services and their production environment settings.

## API Overview

- `GET /` and `GET /health` — service status
- `/api/auth` — account routes
- `GET /api/stocks/price/:symbol` — quote lookup (symbols are normalized to the `.NS` suffix)
- Authenticated routes under `/api` — holdings, positions, and order operations

## Repository Layout

```text
.
├── backend/     # Express API, database models, routes, and controllers
├── dashboard/   # Trading and account dashboard
├── frontend/    # Brokerage-style landing pages
└── render.yaml  # Render deployment blueprint
```

## Project Scope

This is a portfolio project. Quotes depend on Yahoo Finance availability, and order records are application data; the repository does not connect to a real brokerage for trade execution.
