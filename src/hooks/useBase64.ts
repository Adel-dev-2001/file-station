import { useState } from "react";
import { useCopyToClipboard } from "./useCopyToClipboard";

export function useBase64() {
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [input, setInput] = useState('');
  const { isCopied, copy } = useCopyToClipboard();

  const getOutput = (errorText: string) => {
    if (!input) return { value: '', isError: false };
    try {
      if (mode === 'encode') {
        // Modern standards-compliant UTF-8 encoding using TextEncoder
        const bytes = new TextEncoder().encode(input);
        const binary = Array.from(bytes, (b) => String.fromCharCode(b)).join('');
        return { value: btoa(binary), isError: false };
      } else {
        // Standards-compliant UTF-8 decoding using TextDecoder
        const binary = atob(input.trim());
        const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
        return { value: new TextDecoder().decode(bytes), isError: false };
      }
    } catch {
      return { value: errorText, isError: true };
    }
  };

  const toggleMode = () => {
    setMode((m) => (m === 'encode' ? 'decode' : 'encode'));
    setInput('');
  };

  return {
    mode,
    setMode,
    input,
    setInput,
    isCopied,
    copy,
    getOutput,
    toggleMode,
  };
}
