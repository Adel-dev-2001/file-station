# File Station

A client-side web application providing everyday file and developer utilities directly in the browser. All file processing and text transformations run locally on the user's device using standard Web APIs and client-side libraries, with zero file uploads to external servers.

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](./LICENSE)

---

## Table of Contents

- [Overview](#overview)
- [Academic & Educational Note](#academic--educational-note)
- [Implemented Tools & Specifications](#implemented-tools--specifications)
- [Architecture & Code Organization](#architecture--code-organization)
- [Performance & Code Splitting](#performance--code-splitting)
- [Security & Privacy](#security--privacy)
- [Internationalization & Accessibility](#internationalization--accessibility)
- [SEO & Structured Data](#seo--structured-data)
- [Getting Started](#getting-started)
- [Testing & Quality Assurance](#testing--quality-assurance)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

**File Station** consolidates common document, image, and developer utilities into a single, fast interface without relying on a backend processing server. Traditional online file utilities require uploading documents to remote servers, introducing latency, bandwidth costs, and privacy concerns. By contrast, File Station executes all file operations in memory within the browser using `pdf-lib`, `HTML5 Canvas`, `Web Crypto API`, and standard UTF-8 binary streams.

Key characteristics of the platform:
- **Local Execution**: Files selected by the user never leave the browser.
- **Multilingual Interface**: Full support for English, Arabic (with automatic RTL layout switching), and Russian.
- **Responsive Theme System**: Light and dark modes with system preference detection and persistent state in `localStorage`.
- **Zero Backend Overhead**: Can be hosted on any static file server or CDN with no database or server runtime required.

---

## Academic & Educational Note

> **Note for Academic Reviewers & Evaluation Committees**
>
> This project was developed by **Adel Mohamed** as part of an ongoing self-directed learning journey in software engineering, modern frontend architecture, and the practical integration of AI-assisted development tools. The primary objective of this work is to study how client-side web technologies can handle binary file manipulation, cryptographic operations, and multilingual user interfaces efficiently in the browser.
>
> While careful attention has been given to code structure, input validation, web security standards, and performance optimization, this repository represents an evolving educational project. As part of a continuous learning process, certain implementations may still have room for further architectural refinement or optimization. Constructive feedback, academic critique, and technical suggestions are sincerely welcomed.

---

## Implemented Tools & Specifications

The application includes nine utilities grouped into three categories (Documents & Files, Developer Tools, and Utilities), along with dedicated Terms of Service, Privacy Policy, and Support pages.

| Tool | Route | Core Implementation | Limits & Safeguards | Description |
|---|---|---|---|---|
| **PDF Merger** | `/pdf-tools` | `pdf-lib` (`PDFDocument`) | Min 2 files; max 20 files; 50 MB per file; 100 MB total | Combines multiple PDF documents in a user-defined order and exports a single merged PDF file. Encrypted or corrupted files are caught and reported via inline alerts. |
| **Image Converter** | `/image-converter` | HTML5 `Canvas` 2D & `canvas.toBlob()` | Max 20 MB file size; max 20 megapixels (`width * height <= 20,000,000`) | Converts JPEG, PNG, WEBP, GIF, and BMP images to PNG, JPG, or WEBP. Includes a quality slider (10% to 100%) for lossy formats (JPG and WEBP). Animated GIFs are converted using their first frame. |
| **Extension Changer** | `/extension-tools` | `Blob` (`application/octet-stream`) | Max 100 MB file size; alphanumeric extensions (1 to 12 chars) | Outputs a copy of the selected file with a modified file extension. Includes a clear technical notice explaining that renaming an extension does not transcode internal file bytes. |
| **QR Code Generator** | `/qr-generator` | `qrcode.react` (`QRCodeCanvas`) | High error correction (`Level H`, 30% recovery); 4-module quiet zone | Generates customizable QR codes for URLs and text strings with configurable foreground/background hex colors and canvas resolutions from 128px to 512px. Exports directly to PNG. |
| **Base64 Encoder / Decoder** | `/base64-tool` | `TextEncoder`, `TextDecoder`, `btoa`, `atob` | Full UTF-8 byte stream compatibility | Encodes and decodes text to and from Base64 format safely across Latin, Arabic, Cyrillic, and emoji character sets without using deprecated `escape`/`unescape` functions. |
| **URL Encoder / Decoder** | `/url-tool` | `encodeURIComponent`, `decodeURIComponent` | Safe `URIError` exception handling | Encodes and decodes URLs and query parameters with one-click mode switching and clipboard copying. |
| **JSON Formatter & Validator** | `/json-tool` | `JSON.parse`, `JSON.stringify` | Syntax validation with parser error reporting | Formats JSON with 2-space indentation or minifies it into a compact payload, displaying real-time validity status and syntax error messages. |
| **Password Generator** | `/pass-gen` | `window.crypto.getRandomValues` (`Uint32Array`) | Length from 6 to 64 characters; at least one character group required | Generates cryptographically strong random passwords. Uses rejection sampling to eliminate modulo bias and a secure Fisher-Yates shuffle to guarantee at least one character from each enabled character set (uppercase, lowercase, numbers, symbols). |
| **Word & Character Counter** | `/word-count` | Regular expression tokenization & `toLocaleString` | Supports Latin and Arabic sentence punctuation (`.`, `?`, `!`, and Arabic question mark) | Calculates real-time counts for words, total characters, characters excluding spaces, sentences, and paragraphs. |

---

## Architecture & Code Organization

The project follows a layered separation of concerns to keep UI rendering separate from business logic and browser API interactions:

1. **Pages Layer (`src/pages/`)**: Route-level React components responsible solely for layout, user interaction bindings, and rendering state provided by custom hooks.
2. **Hooks Layer (`src/hooks/`)**: Custom React hooks that manage state, input validation, object URL lifecycle cleanup, and error states for each tool.
3. **Services Layer (`src/services/`)**: Framework-agnostic TypeScript classes (`PdfService`, `ImageService`, `PasswordService`, `DownloadService`) that encapsulate binary processing, canvas drawing, cryptographic sampling, and DOM file downloads.
4. **Components & UI Primitives (`src/components/`)**: Shared layout controllers (`ErrorBoundary`, `ThemeProvider`, `ThemeToggle`) and reusable UI primitives (`Button`, `Card`).

### Directory Layout

```text
file-station/
  .github/
    workflows/
      ci.yml                   # GitHub Actions workflow for type-checking and build verification
  public/
    _headers                   # HTTP security headers for Cloudflare Pages and Netlify
    favicon.svg                # Vector application icon
    og-image.svg               # OpenGraph social preview image (1200x630)
    robots.txt                 # Search engine crawler directives
    site.webmanifest           # Web application manifest
    sitemap.xml                # Multilingual XML sitemap with hreflang annotations
  src/
    components/
      ui/
        Button.tsx             # Reusable button component with variant and size styles
        Card.tsx               # Card container primitives
      ErrorBoundary.tsx        # React error boundary for graceful runtime recovery
      ThemeProvider.tsx        # Light/dark theme context and localStorage persistence
      ThemeToggle.tsx          # Accessible theme switcher button
    constants/
      navigation.ts            # Navigation menu categories and route definitions
      translations.ts          # Localization dictionaries for English, Arabic, and Russian
    hooks/
      useBase64.ts             # UTF-8 Base64 encoding and decoding state hook
      useCopyToClipboard.ts    # Clipboard API wrapper with timeout feedback
      useExtensionTools.ts     # File extension modification and validation hook
      useImageConverter.ts     # Image file validation, preview URL cleanup, and conversion hook
      useJsonTool.ts           # JSON parsing, formatting, and minification hook
      useLayout.ts             # Header navigation, language switching, RTL/LTR sync, and dynamic SEO
      usePasswordGenerator.ts  # Password configuration and generation state hook
      usePdfMerger.ts          # Multi-PDF ordering, size validation, and merge hook
      useUrlTool.ts            # URL encoding and decoding state hook
      useWordCount.ts          # Text metrics calculation hook
    lib/
      utils.ts                 # Class name merging utility (clsx + tailwind-merge)
    pages/                     # Lazy-loaded route views (Home, 9 Tools, Terms, Privacy, Support)
    services/
      downloadService.ts       # Blob and Canvas download helper with URL revocation
      imageService.ts          # HTML5 Canvas image format and quality conversion service
      passwordService.ts       # Web Crypto CSPRNG password generator with rejection sampling
      pdfService.ts            # pdf-lib wrapper for merging PDF documents
    types/                     # TypeScript interfaces for image, PDF, navigation, and theme
    App.tsx                    # Router configuration, lazy route definitions, and main layout shell
    i18n.ts                    # i18next initialization and browser language detector setup
    index.css                  # Tailwind CSS v4 configuration and custom theme tokens
    main.tsx                   # React DOM root mount
  test/
    base64.test.mjs            # Unit tests for UTF-8 Base64 encoding and decoding
    password.test.mjs          # Unit tests for password generator bounds and character sets
    wordcount.test.mjs         # Unit tests for multilingual word and sentence counting
  .env.example                 # Example environment configuration
  index.html                   # HTML5 entry point with meta tags and JSON-LD structured data
  LICENSE                      # MIT License
  package.json                 # Project metadata, scripts, and dependencies
  tsconfig.json                # TypeScript compiler configuration
  vercel.json                  # Vercel SPA routing rules and HTTP security headers
  vite.config.ts               # Vite bundler configuration and Rollup manual chunking
```

---

## Performance & Code Splitting

To prevent large third-party libraries (such as `pdf-lib` and `qrcode.react`) from slowing down the initial page load, the application implements both route-level lazy loading and manual vendor chunking:

- **Route Lazy Loading**: All page components in `src/App.tsx` are loaded on demand via `React.lazy()` and wrapped in a `Suspense` boundary.
- **Vendor Chunk Isolation**: `vite.config.ts` separates major dependencies into dedicated cacheable chunks (`vendor-react`, `vendor-pdf`, `vendor-qr`, `vendor-motion`, `vendor-i18n`, `vendor-icons`).
- **Bundle Footprint**: The initial entry JavaScript chunk is kept under 86 KB (approx. 27 KB gzipped), while the 430 KB PDF engine is downloaded only when a user navigates to `/pdf-tools`.

---

## Security & Privacy

- **Zero Server File Transfers**: File tools operate strictly on local `File`, `ArrayBuffer`, and `Blob` objects in browser memory.
- **Memory Management**: Object URLs created via `URL.createObjectURL()` for image previews and file downloads are systematically revoked using `URL.revokeObjectURL()` to prevent memory leaks.
- **Cryptographic Quality**: Password generation relies on `window.crypto.getRandomValues()` rather than `Math.random()`, using rejection sampling over a 32-bit unsigned integer space so every character in the selected pool has an equal probability of selection.
- **Resource Exhaustion Safeguards**:
  - Image Converter enforces a 20 MB file limit and a 20-megapixel dimension limit before allocating canvas memory.
  - PDF Merger enforces a 20-file limit, 50 MB per-file cap, and 100 MB combined size cap.
  - Extension Changer enforces a 100 MB file limit and strict alphanumeric regex validation on file extensions.
- **HTTP Security Headers**: Both `public/_headers` and `vercel.json` configure strict production headers:
  - `Content-Security-Policy` restricting script, style, font, image, and connection origins.
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- **Dependency Hygiene**: Audited via `npm audit` with zero known vulnerabilities across the dependency tree.

---

## Internationalization & Accessibility

- **Supported Languages**: English (`en`), Arabic (`ar`), and Russian (`ru`).
- **Automatic Direction Switching**: Selecting Arabic automatically sets `dir="rtl"` and `lang="ar"` on the root `<html>` element; English and Russian set `dir="ltr"`.
- **Complete Localization Parity**: All 193 translation keys in `src/constants/translations.ts` are maintained in parallel across all three languages.
- **Accessible Feedback**: Validation warnings and processing errors are rendered using inline alert banners (`role="alert"`) rather than blocking native browser `alert()` dialogs. Interactive controls include screen-reader labels and keyboard focus rings.

---

## SEO & Structured Data

- **Dynamic Metadata**: `useLayout.ts` updates `document.title`, `<meta name="description">`, OpenGraph title/description tags, and `<link rel="canonical">` on every route change and language switch.
- **Schema.org JSON-LD**: `index.html` embeds a structured data graph defining both `WebApplication` and `WebSite` schemas, including supported languages, feature lists, pricing (`0 USD`), and author metadata.
- **Crawler & Sitemap Support**: `public/robots.txt` and `public/sitemap.xml` provide search engines with complete route indexing and multilingual `xhtml:link` `hreflang` alternates (`en`, `ar`, `ru`, `x-default`).

---

## Getting Started

### Prerequisites

- **Node.js**: Version 20.19+ or 22.12+ LTS
- **npm**: Included with Node.js

### Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/Adel-dev-2001/file-station.git

# Navigate into the project directory
cd file-station

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser. No `.env` file or external API keys are required.

---

## Testing & Quality Assurance

The repository includes static type checking, production build verification, and unit tests using the native Node.js test runner (`node:test`).

| Script | Command | Description |
|---|---|---|
| `npm run dev` | `vite` | Starts the local development server with Hot Module Replacement (HMR) |
| `npm run lint` | `tsc --noEmit` | Runs the TypeScript compiler to verify type safety across all files |
| `npm test` | `node --test test/*.test.mjs` | Executes automated unit tests for Base64 UTF-8 integrity, password bounds, and word counting |
| `npm run build` | `tsc --noEmit && vite build` | Type-checks the project and builds optimized production assets into `dist/` |
| `npm run preview` | `vite preview` | Serves the compiled `dist/` directory locally for production testing |

Continuous Integration is configured in [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) to run `npm ci`, `npm run lint`, `npm test`, and `npm run build` automatically on Node.js 20.x and 22.x on every push and pull request.

---

## Deployment

After running `npm run build`, the static output in the `dist/` folder can be deployed to any static hosting provider:

- **Vercel**: Import the GitHub repository directly. [`vercel.json`](./vercel.json) automatically configures SPA route rewrites, asset caching, and security headers.
- **Netlify / Cloudflare Pages**: Set the build command to `npm run build` and the publish directory to `dist`. [`public/_headers`](./public/_headers) is automatically copied into `dist/_headers` during the build.
- **Nginx / Apache / Docker**: Serve the `dist/` directory and configure a fallback to `/index.html` for client-side routing.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for full details.

**Author**: Adel Mohamed ([@Adel-dev-2001](https://github.com/Adel-dev-2001))
