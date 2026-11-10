import test from 'node:test';
import assert from 'node:assert';

function countMetrics(text) {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, '').length;
  const sentences = text.trim()
    ? text
        .split(/[.?!؟\n]+/)
        .map((s) => s.trim())
        .filter(Boolean).length
    : 0;
  const paragraphs = text.trim()
    ? text
        .split(/\n+/)
        .map((p) => p.trim())
        .filter(Boolean).length
    : 0;

  return { words, chars, charsNoSpaces, sentences, paragraphs };
}

test('Word Counter - English, Arabic and Cyrillic sentence parsing', () => {
  // English sentence
  const enText = "Hello world! This is File Station. How are you?";
  const enRes = countMetrics(enText);
  assert.strictEqual(enRes.words, 9);
  assert.strictEqual(enRes.sentences, 3);
  assert.strictEqual(enRes.paragraphs, 1);

  // Arabic text with Arabic question mark (؟)
  const arText = "مرحبا بك في محطة الملفات. هل الأدوات سريعة؟ نعم بالتأكيد!";
  const arRes = countMetrics(arText);
  assert.strictEqual(arRes.words, 10);
  assert.strictEqual(arRes.sentences, 3);

  // Russian text
  const ruText = "Добро пожаловать в File Station. Все инструменты работают быстро!";
  const ruRes = countMetrics(ruText);
  assert.strictEqual(ruRes.words, 9);
  assert.strictEqual(ruRes.sentences, 2);

  // Multi-paragraph text
  const multi = "Paragraph 1\n\nParagraph 2\n\nParagraph 3";
  const multiRes = countMetrics(multi);
  assert.strictEqual(multiRes.paragraphs, 3);
});
