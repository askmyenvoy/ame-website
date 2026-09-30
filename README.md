# Ask My Envoy — Website

Source for the [Ask My Envoy](https://askmyenvoy.com) marketing site: AI meeting coordination across calendars, participants, and organizations.

**Repository:** [github.com/askmyenvoy/ame-website](https://github.com/askmyenvoy/ame-website)

This project is the public-facing Next.js application (content, SEO, and links into the TsunAImi platform).

## What’s in this repo

- Product and explanation pages (how it works, pricing, trust, developer/MCP topics, reference articles)
- Legal pages (privacy, terms)
- French content under `/fr/…`
- JSON-LD and SEO metadata (organization, articles, sitemap/`robots`)
- Docker-based local dev and production-style container builds
- Versioned release notes in `system-manifests/` (embedded in production images)

## Tech stack

| Area | Choice |
|------|--------|
| Framework | [Next.js](https://nextjs.org/) 15 (App Router, `output: 'standalone'`) |
| UI | React 18, [Tailwind CSS](https://tailwindcss.com/) 3 |
| Language | TypeScript |
| Icons | Heroicons |
| Runtime (containers) | Node 20 Alpine |
| Tooling | ESLint, PostCSS, Autoprefixer |

## Prerequisites

**Docker workflow (recommended)**

- Docker and Docker Compose

**Optional: run on the host**

- Node.js 20+
- npm

## Configuration

Copy the example env file and adjust values for your environment:

```bash
cp env.example .env
```

For staging/production deployments, env files are typically named `.env.<TARGET_ENV>` (for example `.env.dev`), as referenced in `docker-compose.override.yml` and `docker-compose.remote.yml`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `NODE_ENV` | Node environment (`development` locally) |
| `APP_ENV` | Server-side app label (e.g. `dev`) |
| `FRONTEND_PORT_INTERNAL` | Port Next.js listens on inside the container (default `3001`) |
| `FRONTEND_PORT_EXTERNAL` | Host port mapped to the app (default `3001`) |
| `NEXT_PUBLIC_PLATFORM_URL` | TsunAImi platform base URL (sign-in, dashboard, demo, contact, etc.) |
| `MCP_REGISTRY_AUTH_PUBLIC_KEY` | Public key for `/.well-known/mcp-registry-auth` (`MCPv1; k=ed25519; p=…`) |
| `TARGET_ENV` | Deployment target suffix (e.g. `dev`, `staging`, `prod`) |
| `PROJECT_PREFIX` | Docker image/network prefix (default `ame-website`) |
| `VERSION` | App/system version; must match a manifest under `system-manifests/base/` for production builds |

Platform links (login, dashboard, demo agent, and similar) are derived at runtime from `NEXT_PUBLIC_PLATFORM_URL` via `/api/config` and `src/lib/platform-config.ts`.

## Getting started

### Clone

```bash
git clone https://github.com/askmyenvoy/ame-website.git
cd ame-website
cp env.example .env
```

### Run with Docker (development)

Compose merges `docker-compose.yml` with `docker-compose.override.yml` by default.

```bash
docker compose up
```

Open [http://localhost:3001](http://localhost:3001) (or whatever you set for `FRONTEND_PORT_EXTERNAL`).

Useful commands:

```bash
docker compose up -d          # background
docker compose logs -f        # follow logs
docker compose down           # stop
docker compose up --build     # rebuild after dependency/Dockerfile changes
```

### Run on the host (without Docker)

```bash
npm ci
npm run dev
```

The dev script serves on port **3001** (`package.json`).

### Lint

```bash
npm run lint
npm run lint:fix
```

## Production deployment

Production images use the `production` target in the `Dockerfile`, bundle the standalone Next.js server, and copy the system manifest for the build arg `SYSTEM_VERSION` (from `VERSION` in your env file). Ensure `system-manifests/base/system-base-v<VERSION>.yml` exists before building.

**On a host with an external Docker network** (typical remote server):

```bash
docker compose -f docker-compose.yml -f docker-compose.remote.yml up -d --build
```

**Local production-style run** (uses override for ports/network naming):

```bash
docker compose up -d --build
```

Set `NEXT_PUBLIC_PLATFORM_URL` to your live platform URL in the appropriate `.env.<TARGET_ENV>` file. The remote compose file also passes platform URL at build time when required by your pipeline.

Additional port and multi-environment notes live in [`docs/docker-setup.md`](docs/docker-setup.md).

## Project structure

```
ame-website/
├── src/
│   ├── app/                    # Next.js App Router (pages, layouts, API routes)
│   │   ├── api/                # e.g. /api/config, /api/web-vitals
│   │   ├── components/         # Shared UI (Header, Footer, …)
│   │   └── fr/                 # French pages
│   ├── lib/                    # Site entity, platform config, articles, system version
│   ├── messages/               # Copy (e.g. en.json)
│   └── middleware.ts           # Pathname header for server components
├── public/                     # Static assets, logos, manifest
├── docs/                       # Internal design and ops notes
├── system-manifests/base/      # Versioned release manifests (YAML)
├── Dockerfile                  # development | builder | production stages
├── docker-compose.yml          # Base service definition
├── docker-compose.override.yml # Local ports, env, production target
├── docker-compose.remote.yml   # Remote deploy (healthcheck, external network)
├── env.example                 # Template for local/deployment env
└── tailwind.config.ts          # Theme and brand colors
```

## Main routes (English)

| Path | Description |
|------|-------------|
| `/` | Homepage |
| `/how-it-works` | Product overview |
| `/pricing` | Plans and FAQs |
| `/getting-started` | Onboarding content |
| `/about` | Company / organization |
| `/trust-and-control` | Privacy and control narrative |
| `/developer` | Agents, MCP, interoperability |
| `/meeting-coordination`, `/booking-links-and-meeting-coordination`, `/cost-of-meeting-coordination` | Reference / SEO articles |
| `/milestones` | Product milestones |
| `/privacy`, `/terms` | Legal |
| `/coming-soon` | Coming-soon landing (when used) |

Permanent redirects (see `next.config.js`) include `/product` → `/how-it-works`.

## Brand colors

Defined in `tailwind.config.ts` (Royal Blue `#0A32B4`, Teal `#1496B4`, Mint `#28B496`, Green `#1EAA32`, Gold `#C8A00A`, Purple `#8C1EB4`).

## Related documentation

- [`docs/docker-setup.md`](docs/docker-setup.md) — ports and environment layout
- [`docs/CSS_Homepage.md`](docs/CSS_Homepage.md), [`docs/CSS_About.md`](docs/CSS_About.md) — page styling notes
- [`docs/askmyenvoy_legal_minimum.md`](docs/askmyenvoy_legal_minimum.md) — legal content checklist

## Platform integration

Ask My Envoy runs on the [TsunAImi](https://tsunaimi.ai) agentic AI platform. This website does not implement scheduling logic; it directs users to the platform for authentication, calendar console, demos, and contact flows using `NEXT_PUBLIC_PLATFORM_URL`.

## Contributing

Contributions are welcome from **Ask My Envoy team members and other authorized contributors**. By submitting a pull request, you confirm you have the right to contribute that work and that it may be used under the project’s proprietary terms (see [LICENSE](LICENSE)).

1. Create a feature branch from the default branch.
2. Make changes; run `npm run lint` (or rely on CI if configured).
3. Open a pull request with a short description and test notes.

## License

Proprietary — [LICENSE](LICENSE). Copyright (c) 2026 Ask My Envoy. All rights reserved.
