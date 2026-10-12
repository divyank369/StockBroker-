# StockBroker

StockBroker is a full-stack stock-trading dashboard project. The repository contains a Node.js API, a React dashboard, and a separate React landing-site frontend. The API uses MongoDB-backed user and portfolio data and retrieves market information through `yahoo-finance2`.

## Repository Components

| Directory | Application |
| --- | --- |
| `backend/` | Express API, authentication, trading routes, and MongoDB models |
| `dashboard/` | React trading dashboard |
| `frontend/` | React landing site |

## Technology

- Node.js and Express
- MongoDB and Mongoose
- JWT-based authentication
- React and Create React App
- Yahoo Finance data via `yahoo-finance2`
- Render deployment configuration

## Run Locally

Install dependencies in each app directory:

```bash
cd backend
npm install
npm run dev
```

In separate terminals, start the dashboard and landing site:

```bash
cd dashboard
npm install
npm start
```

```bash
cd frontend
npm install
npm start
```

Configure the backend environment before starting it. The backend expects `MONGO_URL`, `JWT_SECRET`, and `ADMIN_EMAILS`; use your own local values and never commit secrets. The dashboard's development proxy targets the API at `http://localhost:3002`.

## Deployment

The root `render.yaml` defines three Render services for the API, dashboard, and frontend. See [`RENDER_DEPLOY.md`](./RENDER_DEPLOY.md) for the deployment settings and service URLs.

## Project Notes

This is a software project and dashboard demonstration, not a brokerage service. Market data availability depends on the upstream data provider. No real-money trading should be conducted through this application.
