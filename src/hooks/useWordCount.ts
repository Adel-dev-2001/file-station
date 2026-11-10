import { useState } from "react";

export function useWordCount() {
  const [text, setText] = useState('');

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, '').length;
  // Multilingual sentence boundary detection (Latin . ? ! and Arabic ؟)
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

  const clear = () => {
    setText('');
  };

  return {
    text,
    setText,
    words,
    chars,
    charsNoSpaces,
    sentences,
    paragraphs,
    clear,
  };
}
