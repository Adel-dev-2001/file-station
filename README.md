# 🗂️ File Station

A **privacy-first, browser-only** collection of file utility tools. Every operation runs 100% locally in the user's browser — no file ever leaves the device.

**Live demo:** [filestation.example.com](https://filestation.example.com)

---

## ✨ Features

| Tool | Description |
|------|-------------|
| 📄 **PDF Merge** | Combine multiple PDFs into one, with drag-and-drop reordering |
| 🖼️ **Image Converter** | Convert between JPG, PNG, and WEBP with quality control |
| 🔌 **Extension Changer** | Rename file extensions without modifying internal encoding |
| 🔲 **QR Code Generator** | Generate custom-colored QR codes for URLs and text |
| 🔐 **Base64 Encoder/Decoder** | Encode and decode UTF-8 strings to/from Base64 |
| 🔗 **URL Encoder/Decoder** | Safely encode and decode URI components |
| `{}` **JSON Formatter** | Format, minify, and validate JSON data |
| 🔑 **Password Generator** | Cryptographically secure random passwords |
| 🔢 **Word Counter** | Count words, characters, sentences, and paragraphs |

---

## 🏗️ Architecture

The project follows a layered, separation-of-concerns structure:

```
src/
├── types/               # Shared TypeScript interfaces & type aliases
│   ├── theme.ts         # Theme provider types
│   ├── pdf.ts           # UploadedPDF interface
│   ├── image.ts         # OutputFormat & UploadedFile types
│   └── navigation.ts    # Navigation category/item types
│
├── constants/           # Static configuration & data
│   ├── translations.ts  # i18n resource bundles (EN, AR, RU)
│   └── navigation.ts    # App route & nav structure
│
├── services/            # Singleton business-logic layer (no React)
│   ├── pdfService.ts    # pdf-lib wrapper for merging PDFs
│   ├── imageService.ts  # Canvas-based image format conversion
│   ├── passwordService.ts  # Web Crypto API password generator
│   └── downloadService.ts  # Browser download trigger helper
│
├── hooks/               # Custom React hooks (state + side-effects)
│   ├── useLayout.ts     # Header menu, language, direction state
│   ├── usePdfMerger.ts  # PDF upload, ordering, and merge flow
│   ├── useImageConverter.ts  # Image file state and conversion flow
│   ├── useExtensionTools.ts  # Extension editing logic
│   ├── usePasswordGenerator.ts  # Password config state
│   ├── useBase64.ts     # Base64 encode/decode logic
│   ├── useUrlTool.ts    # URL encode/decode logic
│   ├── useJsonTool.ts   # JSON parse/format/minify logic
│   ├── useWordCount.ts  # Text statistics computation
│   └── useCopyToClipboard.ts  # Clipboard copy with timed state
│
├── components/          # Reusable UI components
│   ├── ThemeProvider.tsx  # Dark/light/system theme context
│   ├── ThemeToggle.tsx    # Moon/Sun toggle button
│   └── ui/
│       ├── Button.tsx     # Polymorphic button with variants
│       └── Card.tsx       # Composable card primitives
│
├── pages/               # Route-level page components (pure UI)
│   ├── HomePage.tsx
│   ├── PdfTools.tsx
│   ├── ImageConverter.tsx
│   ├── ExtensionTools.tsx
│   ├── QrGenerator.tsx
│   ├── Base64Tool.tsx
│   ├── UrlTool.tsx
│   ├── JsonTool.tsx
│   ├── PassGen.tsx
│   ├── WordCount.tsx
│   ├── Terms.tsx
│   ├── Privacy.tsx
│   └── Support.tsx
│
├── lib/
│   └── utils.ts         # clsx + tailwind-merge helper (cn)
│
├── App.tsx              # Router + Layout shell
├── main.tsx             # React root entry point
├── i18n.ts              # i18next initialization
└── index.css            # Global Tailwind styles
```

### Data Flow

```
User Action → Page Component
                    ↓
             Custom Hook  (state, side-effects)
                    ↓
             Service Layer  (pure business logic, no React)
                    ↓
           Browser API / pdf-lib / Canvas
```

---

## 🚀 Running Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/file-station.git
cd file-station

# 2. Install dependencies
npm install

# 3. Copy environment variable template
cp .env.example .env
# Edit .env if needed (all fields are optional for local dev)

# 4. Start the dev server
npm run dev
```

The app will be available at **http://localhost:5173**.

### Other Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build production bundle → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | TypeScript type-checking (`tsc --noEmit`) |

---

## 🌐 Internationalization

The app supports three languages, switchable at runtime without page reload:

| Code | Language |
|------|----------|
| `en` | English |
| `ar` | Arabic (RTL) |
| `ru` | Russian |

All translations are centralized in [`src/constants/translations.ts`](./src/constants/translations.ts).

---

## 🔒 Privacy

File Station processes **everything locally** in the browser:

- ❌ No files are uploaded to any server
- ❌ No user tracking or analytics
- ❌ No cookies used for identification
- ✅ All tools work 100% offline after the initial page load

---

## 🛠️ Tech Stack

- **React 19** — UI library
- **TypeScript** — Type safety
- **Vite 6** — Build tool & dev server
- **Tailwind CSS v4** — Utility-first styling
- **React Router v7** — Client-side routing
- **i18next** — Internationalization
- **pdf-lib** — Client-side PDF manipulation
- **Motion** (formerly Framer Motion) — Animations
- **lucide-react** — Icon library
- **qrcode.react** — QR code generation

---

## 📄 License

MIT © Adel Mohamed
