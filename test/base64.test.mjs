import test from 'node:test';
import assert from 'node:assert';

function encodeBase64(input) {
  const bytes = new TextEncoder().encode(input);
  const binary = Array.from(bytes, (b) => String.fromCharCode(b)).join('');
  return Buffer.from(binary, 'binary').toString('base64');
}

function decodeBase64(input) {
  const buf = Buffer.from(input.trim(), 'base64');
  return new TextDecoder().decode(buf);
}

test('Base64 - UTF-8 Multilingual and Emoji integrity', () => {
  // English
  const textEn = "Hello, World!";
  assert.strictEqual(decodeBase64(encodeBase64(textEn)), textEn);

  // Arabic
  const textAr = "محطة الملفات - أدوات مجانية وآمنة 100%";
  assert.strictEqual(decodeBase64(encodeBase64(textAr)), textAr);

  // Russian
  const textRu = "Файловая станция - быстрые и безопасные утилиты";
  assert.strictEqual(decodeBase64(encodeBase64(textRu)), textRu);

  // Emojis and symbols
  const textEmoji = "🚀 🔒 📁 🌟";
  assert.strictEqual(decodeBase64(encodeBase64(textEmoji)), textEmoji);
});

