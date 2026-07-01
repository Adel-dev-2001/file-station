import { useState } from "react";

export function useWordCount() {
  const [text, setText] = useState('');

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, '').length;
  const sentences = text.trim() ? text.split(/[.?!]+/).filter(Boolean).length : 0;
  const paragraphs = text.trim() ? text.split(/\n+/).filter(Boolean).length : 0;

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
