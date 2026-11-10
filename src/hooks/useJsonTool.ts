import { useState } from "react";
import { useCopyToClipboard } from "./useCopyToClipboard";

export function useJsonTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const { isCopied, copy } = useCopyToClipboard();

  const processJson = (minify: boolean) => {
    if (!input) {
      setIsValid(null);
      setOutput('');
      return;
    }
    
    try {
      const parsed = JSON.parse(input);
      setIsValid(true);
      setOutput(JSON.stringify(parsed, null, minify ? 0 : 2));
    } catch (err) {
      setIsValid(false);
      setOutput((err as Error).message);
    }
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    if (!value) {
      setIsValid(null);
      setOutput('');
    }
  };

  return {
    input,
    handleInputChange,
    output,
    isValid,
    isCopied,
    copy,
    processJson,
  };
}
