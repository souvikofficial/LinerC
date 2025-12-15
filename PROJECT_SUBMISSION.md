# LinerC — x402 Payment Analytics Dashboard

## 📋 Project Submission

---

## Project Title
**LinerC** — Real-time Analytics Dashboard for x402 Stablecoin Payments

---

## Short Description
LinerC is a modern, developer-first analytics platform that enables businesses to track and analyze x402 stablecoin payments across multiple blockchains in real-time. It provides instant API integration, conversion funnels, cohort analysis, and smart chain recommendations — all through a premium dark UI.

---

## The Problem It Solves

The x402 payment protocol enables AI agents and autonomous systems to make stablecoin payments across blockchains. However, developers integrating x402 face several challenges:

**No Unified Visibility** — Payment data is scattered across multiple chain explorers (Etherscan, Basescan, Arbiscan). There's no single place to see all transactions.

**Complex Integration** — Building payment tracking infrastructure from scratch requires significant backend work, database setup, and API development.

**No User Insights** — Without proper analytics, it's impossible to understand user behavior, identify drop-off points, or measure conversion rates.

**Fee Uncertainty** — Different chains have different gas fees that fluctuate constantly. Developers don't know which chain to recommend to users at any given moment.

LinerC solves all of these by providing a plug-and-play dashboard with a 3-step integration process, real-time event tracking, and intelligent chain recommendations.

---

## Key Features

- **Real-time Payment Tracking** — See every x402 payment as it happens across Base, Ethereum, Arbitrum, Polygon, and Optimism
- **3-Step Integration** — Get API key → Copy code snippet → Start receiving events
- **Conversion Funnels** — Visualize where users drop off in the payment flow
- **Cohort Retention** — Heatmap showing user retention by signup date
- **Smart Chain Selection** — Automatic "Preferred Chain" recommendation based on live fee data
- **Multi-Facilitator Support** — Track payments through Coinbase, Uniswap, Aave, and others
- **Data Exports** — One-click CSV/JSON exports for accounting and compliance
- **Premium Dark UI** — Modern design inspired by Payy.link

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Inline CSS with design tokens |
| Backend | Next.js API Routes |
| Database | PostgreSQL + Prisma ORM |
| Auth | NextAuth.js v5 |
| Monorepo | pnpm workspaces |
| Charts | Recharts |

---

## Challenges I Ran Into

**Tailwind CSS Not Compiling** — The project was missing a `postcss.config.js` file, causing all Tailwind styles to be ignored. Fixed by creating the PostCSS configuration with the correct plugins.

**Server Component Conflicts** — Adding CSS animations with styled-jsx caused build failures because Next.js 14 defaults to Server Components. Resolved by adding the `"use client"` directive to client-side pages.

**Database Connectivity** — PostgreSQL authentication kept failing when Docker wasn't running. Implemented a "mock mode" fallback in API routes to allow frontend development without a live database.

**Missing Component Exports** — The shared UI package didn't export sub-components like `CardHeader`. Had to manually add exports to the package boundary.

**Inconsistent Theming** — Different pages used different styling approaches. Standardized on inline CSS with shared color constants for consistency.

---

## How It Works

1. **Sign Up & Get API Key** — Create an account and receive your unique API key
2. **Integrate the SDK** — Add a single API call to your payment flow
3. **Send Events** — POST payment events to `/api/ingest/x402-event`
4. **View Analytics** — See real-time data in your dashboard

```bash
# Example API Call
curl -X POST https://api.linerc.com/v2/ingest \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"requestId": "req_123", "chain": "base", "eventType": "payment_initiated", "amount": "100"}'
```

---

## Project Structure

```
linerc-dashboard/
├── apps/web/                # Next.js application
│   ├── app/
│   │   ├── page.tsx         # Landing page
│   │   └── dashboard/       # 9 dashboard pages
│   └── api/ingest/          # Payment ingestion API
├── packages/
│   ├── db/                  # Prisma schema
│   ├── types/               # Shared TypeScript types
│   └── ui/                  # Shared components
└── docker-compose.yml       # Database setup
```

---

## Screenshots

### Landing Page
Premium dark hero with "PAYMENTS ONCHAIN" headline and gradient accents

### Dashboard Overview
Real-time stats showing Total Volume ($84,320), Net Revenue ($8,120), Active Payers (843), and ARPA ($12.45)

### Integration Studio
Step-by-step guide with API key display, code snippet, and live "Simulate Event" testing

### Conversion Funnels
Visual bar chart showing user journey from landing page (10,000) to completed payment (1,200)

### Cohort Retention
Heatmap displaying Day 1, Day 7, Day 30 retention rates by signup date

---

## Setup Instructions

```bash
# Clone the repository
git clone https://github.com/yourusername/linerc-dashboard.git
cd linerc-dashboard

# Install dependencies
pnpm install

# Set up environment
cp .env.example .env

# Start development server
pnpm dev

# (Optional) Start database
docker-compose up -d
pnpm db:push
```

The app runs at `http://localhost:3001`

---

## Future Improvements

- Real-time WebSocket updates for live event streaming
- Email alerts for failed payments and anomalies
- Webhook integrations for Slack/Discord notifications
- SDK packages for JavaScript, Python, and Go
- Advanced analytics with custom date ranges
- Team collaboration with role-based access

---

## Links

- **Live Demo**: http://localhost:3001
- **GitHub Repository**: [Your repo URL]
- **x402 Protocol**: https://x402.org

---

## Team

- **Developer**: [Your Name]
- **Design Inspiration**: [Payy.link](https://payy.link)

---

## License

MIT License © 2024

---

*Built with ❤️ for the x402 ecosystem*
