import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

function githubPagesPlugin(): Plugin {
  return {
    name: 'github-pages-support',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        if (!ctx.server) {
          return html.replace(
            /\s*<script src="\.\/dist\/gh-pages-loader\.js" defer><\/script>/,
            ''
          );
        }
        return html;
      },
    },
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(distDir)) return;

      const loaderCode = `(function () {
  var isBuiltEntry = document.querySelector('script[src*="assets/index"]');
  if (!isBuiltEntry && window.location.hostname.endsWith('github.io')) {
    var prefix = window.location.pathname.startsWith('/file-station')
      ? '/file-station/dist/'
      : './dist/';

    var icons = document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]');
    for (var i = 0; i < icons.length; i++) {
      icons[i].setAttribute('href', prefix + 'favicon.svg');
    }

    var manifest = document.querySelector('link[rel="manifest"]');
    if (manifest) {
      manifest.setAttribute('href', prefix + 'site.webmanifest');
    }

    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = prefix + 'assets/index.css';
    document.head.appendChild(style);

    var script = document.createElement('script');
    script.type = 'module';
    script.src = prefix + 'assets/index.js';
    document.body.appendChild(script);
  }
})();
`;

      fs.writeFileSync(path.join(distDir, 'gh-pages-loader.js'), loaderCode, 'utf8');

      const distIndex = path.join(distDir, 'index.html');
      if (fs.existsSync(distIndex)) {
        fs.copyFileSync(distIndex, path.join(distDir, '404.html'));
      }
      fs.writeFileSync(path.join(distDir, '.nojekyll'), '', 'utf8');

      const rootIndex = path.resolve(__dirname, 'index.html');
      if (fs.existsSync(rootIndex)) {
        fs.copyFileSync(rootIndex, path.resolve(__dirname, '404.html'));
      }
      fs.writeFileSync(path.resolve(__dirname, '.nojekyll'), '', 'utf8');
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), githubPagesPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules/pdf-lib')) {
            return 'vendor-pdf';
          }
          if (id.includes('node_modules/qrcode.react')) {
            return 'vendor-qr';
          }
          if (id.includes('node_modules/motion')) {
            return 'vendor-motion';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
          if (
            id.includes('node_modules/react') ||
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react-router-dom')
          ) {
            return 'vendor-react';
          }
          if (
            id.includes('node_modules/i18next') ||
            id.includes('node_modules/react-i18next') ||
            id.includes('node_modules/i18next-browser-languagedetector')
          ) {
            return 'vendor-i18n';
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
