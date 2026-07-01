import { useState } from "react";
import { useCopyToClipboard } from "./useCopyToClipboard";

export function useUrlTool() {
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [input, setInput] = useState('');
  const { isCopied, copy } = useCopyToClipboard();

  const getOutput = (errorText: string) => {
    if (!input) return { value: '', isError: false };
    try {
      if (mode === 'encode') {
        return { value: encodeURIComponent(input), isError: false };
      } else {
        return { value: decodeURIComponent(input), isError: false };
      }
    } catch (err) {
      return { value: errorText, isError: true };
    }
  };

  const toggleMode = () => {
    setMode(m => m === 'encode' ? 'decode' : 'encode');
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
