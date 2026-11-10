<div align="center">

# 🗂️ File Station

**An Enterprise-Grade, 100% Client-Side File & Developer Utilities Platform**

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Security Audit](https://img.shields.io/badge/Security_Audit-0_Vulnerabilities-brightgreen?style=for-the-badge&logo=shield)](https://github.com/Adel-dev-2001/file-station)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

<p align="center">
  <strong>Fast · Private · Zero Server Uploads · Production-Ready · Multilingual (EN / AR / RU)</strong>
</p>

</div>

---

## 📑 Table of Contents

- [Executive Summary](#-executive-summary)
- [Academic & Research Context (Scholarship Evaluation Note)](#-academic--research-context)
- [Key Architectural Highlights](#-key-architectural-highlights)
- [Suite of Tools & Technical Specifications](#-suite-of-tools--technical-specifications)
- [Security, Privacy & Compliance](#-security-privacy--compliance)
- [SEO, Schema.org & Web Standards](#-seo-schemaorg--web-standards)
- [Project Structure](#-project-structure)
- [Installation & Local Execution](#-installation--local-execution)
- [Production Deployment](#-production-deployment)
- [Commercial White-Label Readiness](#-commercial-white-label-readiness)
- [License & Author](#-license--author)

---

## 🚀 Executive Summary

**File Station** is a high-performance web platform designed to handle everyday file processing and developer utility tasks completely within the client's browser. Unlike conventional web converters that upload sensitive user files to remote third-party servers, File Station leverages modern client-side Web APIs (such as `Web Crypto API`, `HTML5 Canvas`, `TextEncoder`/`TextDecoder`, and `pdf-lib`).

### Why File Station?
- **Zero Server Infrastructure Costs**: Because 100% of data manipulation executes locally in the user's browser runtime, hosting costs remain virtually zero regardless of traffic volume.
- **Absolute Privacy by Design**: Confidential documents, proprietary source code, and private media never transit across external networks or databases.
- **Enterprise Performance**: Sub-second execution for all document and data conversions, with code-split on-demand chunks ensuring initial page loads under 100 KB.
- **Turnkey Commercial Value**: Clean modular architecture, complete TypeScript typing, strict linting, zero known security vulnerabilities, and white-label design ready for commercial enterprise deployment or acquisition.

---

## 🎓 Academic & Research Context

> ### 📝 Academic Statement & Educational Context
> *(Prepared for the Russian Government Scholarship Evaluation Committee & Academic Peer Reviewers)*
>
> This software system was engineered by **Adel Mohamed** as an applied software engineering research endeavor and capstone project exploring:
> 1. **Client-Side Cryptography and In-Memory Binary Computation**: Investigating how high-throughput file transformations (PDF parsing, byte manipulation, rasterization) can be offloaded entirely to user devices without centralized backend infrastructure.
> 2. **AI-Assisted Software Engineering Methodologies**: Exploring modern paradigms where artificial intelligence tools and automated reasoning are paired with human software architecture, code verification, and rigorous static analysis to build resilient full-stack systems.
> 3. **Universal Access & Internationalization (i18n/L10n)**: Examining bi-directional (RTL/LTR) UI rendering mechanics across English, Arabic, and Russian linguistic models.
>
> *As an evolving academic initiative developed within a continuous learning trajectory, this project showcases foundational software engineering principles, adherence to modern web standards, and systematic problem solving. Constructive academic critique, formal peer evaluation, and collaborative dialogue are warmly invited.*

---

## 🏛️ Key Architectural Highlights

File Station adheres to a decoupled **Clean Architecture** pattern:

```
┌─────────────────────────────────────────────────────────────┐
│                 Presentation Layer (React 19)              │
│      Pages (Lazy Loaded)  <──>  UI Components & Theming     │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                    Custom React Hooks Layer                 │
│      State Management, Input Validation, UI Feedback        │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                 Domain Services Layer (Pure TS)             │
│        Zero React Dependencies · 100% Portable Logic        │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│              Browser Platform & Runtime Engines             │
│   Web Crypto API · HTML5 Canvas · TextEncoder · pdf-lib     │
└─────────────────────────────────────────────────────────────┘
```

1. **Lazy Loading & Route Code-Splitting**: Heavy vendor libraries (such as `pdf-lib` at ~430 KB) are isolated into dedicated chunks and loaded asynchronously only when the specific tool route is accessed. The initial application bundle is reduced to just ~83 KB.
2. **Domain Service Isolation**: Pure TypeScript services (`imageService`, `pdfService`, `passwordService`, `downloadService`) operate independently of React lifecycle, enabling seamless testing, reuse, or migration to Web Workers.
3. **Bi-Directional Multilingual Engine**: Dynamic RTL/LTR document synchronization driven by `i18next` with automatic browser language detection, persistent storage, and route-aware SEO metadata.
4. **Accessible Design System**: Dark/light theme state machine with OS preference detection, zero layout shift, WCAG AA accessible contrast, and non-intrusive alert banners replacing legacy browser dialogs.

---

## 🛠️ Suite of Tools & Technical Specifications

| Tool | Core Technology | Limits & Safeguards | Features |
|---|---|---|---|
| **PDF Merge** | `pdf-lib`, `Uint8Array`, `Blob` | Up to 20 files; 50 MB/file; 100 MB total | Drag-and-drop ordering, page re-indexing, memory cleanup |
| **Smart Image Converter** | `HTML5 Canvas 2D`, `toBlob()` | Up to 20 MB; 20 Megapixels max | Convert JPG, PNG, WEBP, GIF, BMP to PNG/JPG/WEBP with adjustable quality |
| **Extension Changer** | `Blob`, `application/octet-stream` | Up to 100 MB; sanitized regex | Fast client-side file extension modifier with format warning |
| **QR Code Generator** | `qrcode.react`, Canvas Export | Level H error correction (30%) | Live preview, hex color picker, custom sizes (128–512px), PNG export |
| **Base64 Tool** | `TextEncoder`, `TextDecoder`, `btoa`/`atob` | Standard UTF-8 stream | Safe multilingual encoding/decoding without deprecated escape sequences |
| **URL Encoder/Decoder** | `encodeURIComponent`, try/catch | Full URI specification | Percent-encoding and component safety with instant clipboard copying |
| **JSON Formatter & Validator** | `JSON.parse`, `JSON.stringify` | Real-time syntax validation | Pretty-print (2-space indent), minification, and structured syntax error reporting |
| **Cryptographic Password Generator** | `window.crypto.getRandomValues` | 6 to 64 characters | Rejection sampling eliminates modulo bias; Fisher–Yates shuffle guarantees character group distribution |
| **Multilingual Word Counter** | Regex tokenization, locale formatting | Large text buffers | Counts words, characters (with/without spaces), sentences, and paragraphs |

---

## 🔒 Security, Privacy & Compliance

- **Zero Server Telemetry**: No third-party analytics trackers, cookies, or remote file upload endpoints.
- **Dependency Audit**: Verified with `npm audit` yielding **0 vulnerabilities**.
- **Cryptographic Randomness**: Passwords generated via Web Crypto API CSPRNG (`getRandomValues`), avoiding insecure pseudo-random generators (`Math.random`).
- **Resource Exhaustion Defense**: Strict input limits on image dimensions (20 MP cap) and PDF buffer sizes guard against canvas memory saturation and client-side denial-of-service.
- **Production Security Headers**: Pre-configured headers file (`_headers` and `vercel.json`) enforcing:
  - `Content-Security-Policy`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## 🌐 SEO, Schema.org & Web Standards

- **Semantic Schema.org Structured Data**: Integrated JSON-LD graph describing `WebApplication` and `WebSite` entities with feature lists, licensing, and author metadata.
- **Dynamic SEO Head**: Automatic route and locale-aware synchronization of document title, meta descriptions, and OpenGraph parameters.
- **Search Engine Crawlability**: Comprehensive `robots.txt` and full `sitemap.xml` with multilingual `xhtml:link` hreflang annotations for English, Arabic, and Russian.
- **Social Media Cards**: Fully rendered OpenGraph and Twitter Summary Large Image cards (`og-image.svg`).
- **Progressive Web Readiness**: `site.webmanifest` configured for installable browser standalone presentation.

---

## 📁 Project Structure

```
file-station/
├── public/
│   ├── _headers               # Production security headers (Cloudflare/Netlify)
│   ├── favicon.svg            # Scalable brand vector favicon
│   ├── og-image.svg           # Social media preview card (1200x630)
│   ├── robots.txt             # Search crawler directives
│   ├── sitemap.xml            # Full XML sitemap with hreflang tags
│   └── site.webmanifest       # Web app manifest
├── src/
│   ├── components/            # Reusable UI & Layout Components
│   │   ├── ui/                # Core primitives (Button, Card)
│   │   ├── ThemeProvider.tsx  # Theme context state machine
│   │   └── ThemeToggle.tsx    # Accessible dark/light mode toggle
│   ├── constants/             # Centralized application constants
│   │   ├── navigation.ts      # Navigation structure and categories
│   │   └── translations.ts    # Comprehensive i18n dictionaries (EN/AR/RU)
│   ├── hooks/                 # Custom React hooks (isolated business state)
│   │   ├── useBase64.ts
│   │   ├── useCopyToClipboard.ts
│   │   ├── useExtensionTools.ts
│   │   ├── useImageConverter.ts
│   │   ├── useJsonTool.ts
│   │   ├── useLayout.ts       # Dynamic SEO, i18n & menu orchestration
│   │   ├── usePasswordGenerator.ts
│   │   ├── usePdfMerger.ts
│   │   ├── useUrlTool.ts
│   │   └── useWordCount.ts
│   ├── lib/                   # Utility helpers (cn / tailwind-merge)
│   ├── pages/                 # Code-split page views
│   ├── services/              # Pure TypeScript business & algorithm services
│   │   ├── downloadService.ts
│   │   ├── imageService.ts
│   │   ├── passwordService.ts
│   │   └── pdfService.ts
│   ├── types/                 # Strict TypeScript interface definitions
│   ├── App.tsx                # Routing, Suspense boundaries & layout shell
│   ├── i18n.ts                # i18next configuration & language detector
│   ├── index.css              # Tailwind CSS v4 styling & color theme
│   └── main.tsx               # Application entry point
├── index.html                 # Optimized HTML5 entry with Schema.org & SEO
├── package.json               # Cleaned dependencies & build scripts
├── tsconfig.json              # TypeScript compiler configuration
├── vercel.json                # Vercel SPA routing & security headers
└── vite.config.ts             # Vite 6 config with manual chunking & aliasing
```

---

## 💻 Installation & Local Execution

### Prerequisites
- **Node.js**: v20.19.0 or higher (v22 LTS recommended)
- **Package Manager**: npm, pnpm, or yarn

### Quick Start

```bash
# 1. Clone repository
git clone https://github.com/Adel-dev-2001/file-station.git

# 2. Enter project directory
cd file-station

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

The application will be live at `http://localhost:5173`. No external environment variables or proprietary API keys are needed.

### Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Starts Vite HMR development server |
| `npm run build` | Runs TypeScript type-check (`tsc --noEmit`) and compiles optimized production bundle |
| `npm run preview` | Spins up a local server to preview the production build |
| `npm run lint` | Performs strict TypeScript type validation |

---

## 🚢 Production Deployment

### Static Hosting Providers

- **Vercel**: Pre-configured with [`vercel.json`](./vercel.json) for automatic SPA rewriting and security headers. Run `vercel`.
- **Cloudflare Pages / Netlify**: Pre-configured with [`public/_headers`](./public/_headers) for automatic security headers.
- **GitHub Pages**: Build with `npm run build` and publish the `dist/` directory.
- **Docker / Nginx**: Deploy the `dist/` directory to any standard Nginx or Caddy web server with HTML5 push-state fallback.

---

## 💼 Commercial White-Label Readiness

File Station is architected to be directly salable or deployable as a branded enterprise utility portal:
1. **Configurable Branding**: Change brand colors in `src/index.css` via Tailwind `@theme` variables in seconds.
2. **Modular Extensibility**: Adding a new utility involves creating one pure TS service, one React hook, and one page component.
3. **Zero Maintenance**: With no database to manage, no user accounts to secure, and no backend APIs to scale, operational maintenance overhead is zero.

---

## 📄 License & Author

- **Author**: **Adel Mohamed** ([@Adel-dev-2001](https://github.com/Adel-dev-2001))
- **Project License**: [MIT License](./LICENSE) — Free for commercial, personal, and educational use.

<div align="center">
  <sub>Engineered with precision for performance, security, and universal utility.</sub>
</div>
