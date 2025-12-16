# ⚡ LinerC Dashboard

> **Stablecoin-native payment analytics for the autonomous web**

LinerC is a modern, real-time analytics dashboard for x402 payment protocol integration. Built with Next.js 14, featuring a premium dark UI inspired.


---

## ✨ Features

### 🎯 Core Functionality
- **Real-time Payment Analytics** — Track x402 payments across multiple chains
- **Integration Studio** — Step-by-step API integration guide with live testing
- **Multi-chain Support** — Base, Ethereum, Arbitrum, Polygon, Optimism
- **Cohort Analysis** — User retention heatmaps and conversion funnels
- **Facilitator Management** — Monitor payment processors and fees

### 🎨 Design
- Premium dark theme with neon lime (`#CDFF00`) accents
- Fully responsive layout
- Glassmorphism effects and modern typography

### 📊 Dashboard Pages
| Page | Description |
|------|-------------|
| **Overview** | Key metrics, volume trends, preferred chain |
| **Integration** | 3-step guide to connect your app |
| **Payments** | Real-time event table with status |
| **Funnels** | Conversion rate visualization |
| **Cohorts** | Retention heatmap by signup date |
| **Chains** | Multi-chain performance comparison |
| **Facilitators** | Payment processor analytics |
| **Exports** | Data export and API tokens |
| **Settings** | Account, API keys, notifications, billing |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm 8+
- Docker (for database)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/linerc-dashboard.git
cd linerc-dashboard

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env

# Start the development server
pnpm dev
```

The app will be available at `http://localhost:3001`

### With Database (Optional)

```bash
# Start PostgreSQL container
docker-compose up -d

# Run database migrations
pnpm db:push

# Seed sample data
pnpm seed
```

---

## 📁 Project Structure

```
linerc-dashboard/
├── apps/
│   └── web/                    # Next.js 14 application
│       ├── app/
│       │   ├── page.tsx        # Landing page
│       │   ├── dashboard/      # Dashboard pages
│       │   │   ├── page.tsx    # Overview
│       │   │   ├── integration/
│       │   │   ├── events/
│       │   │   ├── funnels/
│       │   │   ├── cohorts/
│       │   │   ├── chains/
│       │   │   ├── facilitators/
│       │   │   ├── exports/
│       │   │   └── settings/
│       │   └── api/            # API routes
│       │       └── ingest/     # Payment ingestion endpoints
│       └── components/
│           └── sidebar.tsx
├── packages/
│   ├── db/                     # Prisma database schema
│   ├── types/                  # Shared TypeScript types
│   └── ui/                     # Shared UI components
└── docker-compose.yml
```

---

## 🔌 API Reference

### Ingest Payment Event

```bash
POST /api/ingest/x402-event
```

**Headers:**
```
x-api-key: your_api_key
Content-Type: application/json
```

**Request Body:**
```json
{
  "requestId": "req_abc123",
  "endpointId": "ep_xyz789",
  "facilitatorId": "fac_coinbase",
  "chain": "base",
  "eventType": "payment_initiated",
  "amount": "100.00",
  "currency": "USDC",
  "txHash": "0x..."
}
```

**Response:**
```json
{
  "success": true,
  "requestId": "req_abc123"
}
```

### Supported Event Types
- `402_issued` — Payment request created
- `payment_initiated` — User started payment
- `verified` — Payment verified on-chain
- `settled` — Funds settled
- `delivered` — Content/service delivered
- `failed` — Payment failed

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Inline CSS with design tokens |
| **Database** | PostgreSQL + Prisma |
| **Auth** | NextAuth.js v5 |
| **Monorepo** | pnpm workspaces |
| **Charts** | Recharts |

---

## 🎨 Design System

### Colors
```css
--lime: #CDFF00        /* Primary accent */
--dark: #0A0A0A        /* Background */
--dark-gray: #141414   /* Card background */
--text: #FFFFFF        /* Primary text */
--muted: #666666       /* Secondary text */
```

### Typography
- **Headers**: Bold 900, uppercase, tight letter-spacing
- **Body**: Regular 400-600, readable line-height
- **Mono**: For API keys and code snippets

---

## 📸 Screenshots

### Landing Page
Premium dark hero with gradient text and CTA buttons

### Dashboard Overview
Real-time stats, preferred chain, recent events

### Integration Studio
Step-by-step API integration with live testing

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open a Pull Request

---

## 📄 License

MIT © 2024 LinerC

---

## 🔗 Links

- [x402 Protocol](https://x402.org) — Payment protocol specification
- [Next.js](https://nextjs.org) — React framework
- [Prisma](https://prisma.io) — Database ORM

---

<p align="center">
  <strong>⚡ LinerC</strong> — Payments for the Autonomous Web
</p>
