# StockBroker

A full-stack stock market dashboard and brokerage-style landing site. The project combines a Node.js/Express API, two React applications, MongoDB-backed user and portfolio data, and Yahoo Finance quote lookups for Indian market symbols.

> **Project scope:** This is a portfolio/demo application. It records order requests in MongoDB but does not connect to a broker or execute trades. New accounts receive sample holdings and positions. Market data depends on Yahoo Finance availability and should not be treated as investment advice.

## Contents

- [Features](#features)
- [Architecture and tech stack](#architecture-and-tech-stack)
- [Repository structure](#repository-structure)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Available commands](#available-commands)
- [API reference](#api-reference)
- [Using the application](#using-the-application)
- [Deployment](#deployment)
- [Known limitations](#known-limitations)
- [Author](#author)

## Features

- **Account access:** Sign up and log in with email and password; protected API routes use JWT bearer tokens.
- **Role-aware API access:** Emails configured in `ADMIN_EMAILS` receive the admin role; the admin-only user listing is available at `GET /api/auth/users`.
- **Portfolio dashboard:** View holdings, positions, orders, portfolio totals, and charts in a separate React application.
- **Sample portfolio data:** The API seeds example holdings and positions for new users (and repopulates them when a non-admin user's corresponding collection is empty).
- **Market quote lookup:** The dashboard and API request Yahoo Finance quotes, defaulting symbols to the NSE `.NS` suffix.
- **Brokerage-style landing site:** Includes home, product, pricing, about, support, registration, and login routes.
- **Render blueprint:** `render.yaml` describes the backend and both static frontends as separate services.

## Architecture and tech stack

| Area | Technologies | Location |
| --- | --- | --- |
| API | Node.js 22 (Render configuration), Express 5, MongoDB, Mongoose, JWT, bcryptjs | `backend/` |
| Dashboard | React 18, Create React App, React Router 6, Axios, Material UI, Chart.js | `dashboard/` |
| Landing site | React 19, Create React App, React Router 7, Axios | `frontend/` |
| Market data | `yahoo-finance2` | Backend quote endpoints |
| Deployment | Render Blueprint | `render.yaml`, `RENDER_DEPLOY.md` |

The backend mounts authentication routes under `/api/auth`, stock quote routes under `/api/stocks`, and portfolio/order routes under `/api`. Both React apps call the API using `REACT_APP_API_URL`.

## Repository structure

```text
.
├── backend/
│   ├── config/          # MongoDB connection
│   ├── controllers/     # Authentication, quote, and portfolio handlers
│   ├── middleware/     # Authentication, role checks, and async error handling
│   ├── model/          # Mongoose models
│   ├── routes/         # Auth, stock, and trading API routes
│   ├── schemas/        # Mongoose schemas
│   ├── utils/          # JWT and sample portfolio helpers
│   ├── app.js           # Express middleware and route mounting
│   ├── index.js         # Environment loading, database connection, server startup
│   └── package.json
├── dashboard/
│   ├── public/
│   ├── src/
│   │   ├── api/         # Axios API client
│   │   ├── auth/        # Auth state, storage, and route guards
│   │   ├── components/  # Dashboard, tables, charts, watchlist, and order UI
│   │   ├── data/        # Initial watchlist/demo display data
│   │   ├── pages/       # Authentication screens
│   │   └── config.js    # API base URL
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── LandingPage/ # Home, about, products, pricing, support, and auth pages
│   │   ├── api/         # Authentication API helpers
│   │   ├── auth/        # Browser auth storage
│   │   └── config.js    # API and dashboard URLs
│   └── package.json
├── render.yaml          # Three-service Render deployment blueprint
└── RENDER_DEPLOY.md     # Render setup notes
```

Each application has its own `package.json` and lockfile. Install and run commands from that application's directory; there is no root-level npm workspace.

## Getting started

### Prerequisites

- Node.js 22 and npm (the deployment blueprint specifies Node 22).
- A MongoDB instance and a connection URI.
- Network access to Yahoo Finance for quote lookups.

### 1. Configure and start the API

From the repository root:

```bash
cd backend
npm ci
```

Create `backend/.env` (the root `.gitignore` excludes environment files):

```dotenv
MONGO_URL=mongodb://127.0.0.1:27017/stockbroker
JWT_SECRET=replace-with-a-long-random-secret
ADMIN_EMAILS=
PORT=3002
```

Start the API in development mode:

```bash
npm run dev
```

The server defaults to `http://localhost:3002`. Check it at `http://localhost:3002/health`.

### 2. Start the dashboard

In a second terminal, from the repository root:

```bash
cd dashboard
npm ci
```

The landing site expects the dashboard at port `3001` by default during local development. Start the dashboard on that port:

**macOS/Linux**
```bash
PORT=3001 npm start
```

**PowerShell**
```powershell
$env:PORT = "3001"
npm start
```

Open `http://localhost:3001`. The dashboard defaults to the API at `http://localhost:3002/api`.

### 3. Start the landing site (optional)

In a third terminal:

```bash
cd frontend
npm ci
npm start
```

Open `http://localhost:3000`. The landing app can be configured with the environment variables below if your API or dashboard uses a different URL.

Create an account from the landing page or dashboard. The backend creates a user and seeds example portfolio records. After registration, sign in to explore the dashboard. Any saved orders are records for demonstration only.

## Environment variables

| Variable | Used by | Required | Description |
| --- | --- | --- | --- |
| `MONGO_URL` | Backend | Yes | MongoDB connection URI. |
| `JWT_SECRET` | Backend | Yes for a secure deployment | Secret used to sign JWTs. The source contains a development fallback; set a strong private value outside local experiments. |
| `ADMIN_EMAILS` | Backend | No | Comma-separated email addresses to assign the admin role. |
| `PORT` | Backend | No | Server port; defaults to `3002` locally and is supplied by Render in deployment. |
| `REACT_APP_API_URL` | Dashboard and landing site | No | API base URL including `/api`; defaults to `http://localhost:3002/api`. Set it at frontend build time for deployment. |
| `REACT_APP_DASHBOARD_URL` | Landing site | No | Dashboard link target; defaults to the current host on port `3001`. |

There is no committed `.env.example`; the variable names and safe local placeholders above are taken from the application configuration. Never commit actual credentials or secrets.

## Available commands

Run each command from the named application directory.

| Directory | Command | Purpose |
| --- | --- | --- |
| `backend/` | `npm run dev` | Start the API with Nodemon. |
| `backend/` | `npm start` | Start the API with Node.js. |
| `dashboard/` | `npm start` | Run the dashboard development server. |
| `dashboard/` | `npm run build` | Create a production build in `dashboard/build/`. |
| `dashboard/` | `npm test -- --watchAll=false` | Run the Create React App test runner once. |
| `frontend/` | `npm start` | Run the landing-site development server. |
| `frontend/` | `npm run build` | Create a production build in `frontend/build/`. |
| `frontend/` | `npm test -- --watchAll=false` | Run the Create React App test runner once. |

The backend package does not define build or test scripts. The frontend packages define the standard CRA test command; no test files are present in the repository tree.

## API reference

Base URL for local development: `http://localhost:3002`.

| Method | Path | Auth | Purpose |
| --- | --- | --- | --- |
| `GET` | `/` | No | API service information. |
| `GET` | `/health` | No | Health check. |
| `POST` | `/api/auth/signup` | No | Create an account; body: `name`, `email`, `password`. Password must be at least six characters. |
| `POST` | `/api/auth/login` | No | Authenticate; body: `email`, `password`. |
| `GET` | `/api/auth/me` | Bearer token | Return the current user. |
| `GET` | `/api/auth/users` | Admin bearer token | List user name, email, role, and creation date. |
| `GET` | `/api/stocks/price/:symbol` | No | Look up a quote; the backend appends `.NS` unless the symbol already includes it. |
| `GET` | `/api/holdings` | Bearer token | Return the caller's holdings enriched with quotes when available. |
| `GET` | `/api/positions` | Bearer token | Return the caller's positions enriched with quotes when available. |
| `GET` | `/api/orders` | Bearer token | List the caller's saved order records, newest first. |
| `POST` | `/api/orders` | Bearer token | Save an order record; body: `name`, `qty`, `price`, `mode`. |

Protected endpoints expect `Authorization: Bearer <JWT>`. The trading router also exposes compatibility aliases `/api/allHoldings`, `/api/allPositions`, `/api/allOrders`, and `POST /api/newOrder`. Quote responses contain `symbol`, `price`, `change`, and `percent`; quote lookup errors are returned as JSON.

Example:

```bash
curl http://localhost:3002/health
curl -H "Authorization: Bearer <JWT>" http://localhost:3002/api/holdings
```

## Using the application

1. Start MongoDB and the API.
2. Start the dashboard and optionally the landing site.
3. Register with a name, email, and password of at least six characters, or log in with an existing account.
4. Review the seeded holdings and positions, watchlist, portfolio summary, and saved orders.
5. Use the dashboard order form to create a record and view it in the Orders section. This does not submit a trade to a brokerage.

## Deployment

The root `render.yaml` configures three Render services: the API, the static landing site, and the static dashboard. It sets SPA rewrites for both React sites and references backend secrets as unsynchronized environment variables. Configure `MONGO_URL`, `JWT_SECRET`, and `ADMIN_EMAILS` in Render before deploying. See [RENDER_DEPLOY.md](RENDER_DEPLOY.md) for the repository's deployment flow and service URLs.

## Known limitations

- Order creation stores an application record; there is no broker integration, trade settlement, or real funds management.
- Holdings and positions are example data seeded for users, not a verified brokerage account balance.
- Quote lookups use Yahoo Finance's unofficial data interface; symbols, availability, and returned prices can vary or fail.
- The dashboard watchlist is a fixed set of symbols in source data. Its search field and some action controls are presentation elements rather than complete watchlist-management features.
- CRA test scripts are configured, but no test files are currently included.
- The repository has no root `LICENSE` or `CONTRIBUTING.md` file.

## Author

**Divyank Singh** · [GitHub profile](https://github.com/divyank369)
