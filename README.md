# File Station

File Station is a collection of file and text utilities that run in the browser. Files you select are processed on your device with browser APIs and client-side libraries. There is no backend, so nothing is uploaded.

---

## Tools

| Tool | What it does |
|---|---|
| **PDF Merge** | Add PDFs by choosing them or dragging them into the drop zone, put them in order with the move up / move down buttons, and merge them into one PDF (at least two files are required). Encrypted or damaged PDFs may fail to merge. |
| **Image Converter** | Convert one image at a time to PNG, JPG or WEBP using the browser canvas. Most browser-readable images can be used as input. The quality slider (10-100) applies to JPG and WEBP, not PNG. |
| **Extension Changer** | Download a copy of one file with a different extension. This only renames the file; it does **not** convert its contents. |
| **QR Code Generator** | Create a QR code from text or a URL with custom foreground and background colors and an adjustable size. The preview and the downloaded PNG are limited to 300 px. |
| **Base64 Encoder / Decoder** | Encode and decode UTF-8 text. |
| **URL Encoder / Decoder** | Encode and decode text with `encodeURIComponent` / `decodeURIComponent`. |
| **JSON Formatter** | Format (2-space indentation), minify and validate JSON, with the parser's error message when it is invalid. |
| **Password Generator** | Random passwords of 6 to 64 characters using the Web Crypto API, with options for uppercase, lowercase, numbers and symbols. |
| **Word Counter** | Counts words, characters (with and without spaces), sentences and paragraphs. |

The app also includes Terms, Privacy and Support pages.

### Languages and theme

- The interface is available in **English, Arabic (right-to-left) and Russian**, and can be switched without reloading. The first language is detected from the browser, and your choice is remembered in `localStorage`.
- **Dark and light themes** can be toggled, and the choice is remembered in `localStorage`.

All translations are in [`src/constants/translations.ts`](./src/constants/translations.ts).

---

## Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/) 20.19 or newer (22.12+ also works)
- npm

### Setup

```bash
git clone https://github.com/Adel-dev-2001/file-station.git
cd file-station
npm install
npm run dev
```

The app will be available at **http://localhost:5173**. No environment variables or API keys are needed.

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the production bundle into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Type-check with `tsc --noEmit` |

---

## Privacy

- Selected files are processed in your browser and are not sent to any server.
- The app contains no analytics or tracking scripts and sets no cookies. Only your language and theme choices are stored, in `localStorage`.
- The page loads its fonts (Cairo and Inter) from Google Fonts, so your browser makes that one external request when the site opens.
- File Station is a normal website, not an installable offline app. Once the page has loaded, the tools keep working without a connection, but you need to be online to open it.

---

## Project Structure

```
src/
├── types/               # Shared TypeScript types
│   ├── theme.ts
│   ├── pdf.ts
│   ├── image.ts
│   └── navigation.ts
├── constants/
│   ├── translations.ts  # i18n resources (EN, AR, RU)
│   └── navigation.ts    # Navigation structure
├── services/            # Plain TypeScript logic, no React
│   ├── pdfService.ts        # pdf-lib wrapper for merging
│   ├── imageService.ts      # Canvas-based image conversion
│   ├── passwordService.ts   # Web Crypto password generator
│   └── downloadService.ts   # Download helper
├── hooks/               # State and logic for each tool
│   ├── usePdfMerger.ts
│   ├── useImageConverter.ts
│   ├── useExtensionTools.ts
│   ├── usePasswordGenerator.ts
│   ├── useBase64.ts
│   ├── useUrlTool.ts
│   ├── useJsonTool.ts
│   ├── useWordCount.ts
│   ├── useCopyToClipboard.ts
│   └── useLayout.ts         # Header menus, language, text direction
├── components/
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Card.tsx
├── pages/               # One page per tool, plus Home, Terms, Privacy, Support
├── lib/
│   └── utils.ts         # clsx + tailwind-merge helper (cn)
├── App.tsx              # Router and layout
├── main.tsx             # Entry point
├── i18n.ts              # i18next setup
└── index.css            # Tailwind styles
```

Each tool follows the same flow: **page component -> custom hook -> service (where needed) -> browser API / pdf-lib / canvas**.

---

## Tech Stack

- **React 19** and **TypeScript**
- **Vite 6**
- **Tailwind CSS v4**
- **React Router v7**
- **i18next**, **react-i18next** and **i18next-browser-languagedetector**
- **pdf-lib**: PDF merging
- **qrcode.react**: QR codes
- **Motion** and **lucide-react**: animation and icons

---

## License

MIT © Adel Mohamed
