#!/usr/bin/env node
'use strict';
// Applies only targeted UI-localization fixes to the File Station working tree.
// Run from the repository root (the folder containing package.json and src/).
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

const root = process.cwd();
if (!fs.existsSync(path.join(root, 'package.json')) || !fs.existsSync(path.join(root, 'src', 'constants', 'translations.ts'))) {
  console.error('ERROR: Run this script from the File Station project root (the folder containing package.json and src/).');
  process.exit(1);
}
const files = new Map();
const changed = new Set();
function get(rel) {
  if (!files.has(rel)) files.set(rel, fs.readFileSync(path.join(root, rel), 'utf8'));
  return files.get(rel);
}
function put(rel, text) { files.set(rel, text); changed.add(rel); }
function replaceOne(rel, oldText, newText, label = oldText) {
  const text = get(rel);
  const count = text.split(oldText).length - 1;
  if (count === 0) {
    if (text.includes(newText)) return; // already fixed
    throw new Error(`Could not find the expected text in ${rel}: ${label}. No files were written.`);
  }
  if (count !== 1) throw new Error(`Expected one match in ${rel}, found ${count}: ${label}. No files were written.`);
  put(rel, text.replace(oldText, newText));
}
function insertObjectKeysInLocale(source, locale, objectName, nextObjectName, entries) {
  const localeStart = source.indexOf(`  ${locale}: {`);
  if (localeStart < 0) throw new Error(`Locale ${locale} was not found in translations.ts.`);
  let localeEnd = source.length;
  for (const other of ['en', 'ar', 'ru']) {
    if (other === locale) continue;
    const pos = source.indexOf(`  ${other}: {`, localeStart + 1);
    if (pos >= 0 && pos < localeEnd) localeEnd = pos;
  }
  const before = source.slice(0, localeStart);
  let section = source.slice(localeStart, localeEnd);
  const pattern = new RegExp(`("${objectName}"\\s*:\\s*\\{[\\s\\S]*?)\\n(\\s*\\},\\s*\\n\\s*"${nextObjectName}"\\s*:)`);
  const match = section.match(pattern);
  if (!match) throw new Error(`Could not locate ${locale}.${objectName} in translations.ts. No files were written.`);
  const body = match[1];
  const missing = entries.filter(([key]) => !new RegExp(`"${key}"\\s*:`).test(body));
  if (missing.length === 0) return source;
  const trimmed = body.trimEnd();
  const comma = trimmed.endsWith(',') ? '' : ',';
  const addition = missing.map(([key, value]) => `        "${key}": ${JSON.stringify(value)}`).join(',\n');
  section = section.replace(match[0], `${trimmed}${comma}\n${addition}\n${match[2]}`);
  return before + section + source.slice(localeEnd);
}

try {
  const home = 'src/pages/HomePage.tsx';
  replaceOne(home, 'name: "Documents & Files",', 'name: t("nav.cat.documents"),', 'homepage Documents category');
  replaceOne(home, 'name: "Developer Tools",', 'name: t("nav.cat.developer"),', 'homepage Developer category');
  replaceOne(home, 'name: "Utilities",', 'name: t("nav.cat.utilities"),', 'homepage Utilities category');

  const theme = 'src/components/ThemeToggle.tsx';
  replaceOne(theme, "title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}", 'title={theme === "dark" ? t("common.switchToLightMode") : t("common.switchToDarkMode")}', 'theme tooltip');
  replaceOne(theme, '<span className="sr-only">Toggle theme</span>', '<span className="sr-only">{t("common.toggleTheme")}</span>', 'theme screen-reader label');

  const pass = 'src/pages/PassGen.tsx';
  replaceOne(pass, 'title="Regenerate"', 'title={t("passGen.generateBtn")}', 'password regenerate tooltip');
  replaceOne(pass, 'title="Copy"', 'title={t("passGen.copyBtn")}', 'password copy tooltip');

  const image = 'src/pages/ImageConverter.tsx';
  replaceOne(image, 'alt="Preview"', 'alt={t("imageConverter.previewAlt")}', 'image preview alt text');

  let dict = get('src/constants/translations.ts');
  const commonEntries = {
    en: [['switchToLightMode', 'Switch to light mode'], ['switchToDarkMode', 'Switch to dark mode'], ['toggleTheme', 'Toggle theme']],
    ar: [['switchToLightMode', 'التبديل إلى الوضع الفاتح'], ['switchToDarkMode', 'التبديل إلى الوضع الداكن'], ['toggleTheme', 'تغيير المظهر']],
    ru: [['switchToLightMode', 'Переключить на светлую тему'], ['switchToDarkMode', 'Переключить на тёмную тему'], ['toggleTheme', 'Переключить тему']],
  };
  for (const locale of ['en', 'ar', 'ru']) dict = insertObjectKeysInLocale(dict, locale, 'common', 'home', commonEntries[locale]);

  const previewEntries = {
    en: [['previewAlt', 'Image preview']],
    ar: [['previewAlt', 'معاينة الصورة']],
    ru: [['previewAlt', 'Предпросмотр изображения']],
  };
  for (const locale of ['en', 'ar', 'ru']) dict = insertObjectKeysInLocale(dict, locale, 'imageConverter', 'wordToPdf', previewEntries[locale]);

  dict = dict.replace('"modeEncode": "تشفير (Encode)"', '"modeEncode": "تشفير"');
  dict = dict.replace('"modeDecode": "فك التشفير (Decode)"', '"modeDecode": "فك التشفير"');
  put('src/constants/translations.ts', dict);

  // Validate that all new keys exist in all languages before writing anything.
  for (const key of ['switchToLightMode', 'switchToDarkMode', 'toggleTheme', 'previewAlt']) {
    const occurrences = (dict.match(new RegExp(`"${key}"\\s*:`, 'g')) || []).length;
    if (occurrences !== 3) throw new Error(`Expected translation key ${key} in EN/AR/RU; found ${occurrences}. No files were written.`);
  }
  for (const oldText of ['تشفير (Encode)', 'فك التشفير (Decode)']) {
    if (dict.includes(oldText)) throw new Error(`Arabic Base64 label remains mixed-language: ${oldText}. No files were written.`);
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupRoot = path.join(os.tmpdir(), `file-station-translation-backup-${stamp}`);
  for (const rel of changed) {
    const full = path.join(root, rel);
    const backup = path.join(backupRoot, rel);
    fs.mkdirSync(path.dirname(backup), { recursive: true });
    fs.writeFileSync(backup, fs.readFileSync(full, 'utf8'), 'utf8');
  }
  for (const rel of changed) fs.writeFileSync(path.join(root, rel), files.get(rel), 'utf8');
  console.log('Translation fixes applied successfully.');
  console.log('Changed files:');
  for (const rel of changed) console.log(`  - ${rel}`);
  console.log(`Backups saved outside the project at: ${backupRoot}`);
  console.log('Next: run npm.cmd run lint and npm.cmd run build.');
} catch (error) {
  console.error(`ERROR: ${error.message}`);
  console.error('No project files were written. Check that this is the current File Station repository root.');
  process.exit(1);
}
