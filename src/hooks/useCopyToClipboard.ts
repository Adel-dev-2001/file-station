import { useState } from "react";

/**
 * Reusable custom hook to copy text to user clipboard and indicate copying state.
 * @param timeout Success flag duration in ms (default: 2000)
 */
export function useCopyToClipboard(timeout = 2000) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = (text: string) => {
    if (!text) return;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), timeout);
        })
        .catch((err) => {
          console.error("Failed to copy text using clipboard API: ", err);
        });
    } else {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), timeout);
      } catch (err) {
        console.error("Fallback copy failed: ", err);
      }
      document.body.removeChild(textArea);
    }
  };

  return { isCopied, copy };
}
