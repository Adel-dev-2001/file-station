import { useState, useEffect } from "react";
import { passwordService } from "../services/passwordService";

export function usePasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [incUpper, setIncUpper] = useState(true);
  const [incLower, setIncLower] = useState(true);
  const [incNumbers, setIncNumbers] = useState(true);
  const [incSymbols, setIncSymbols] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const generate = () => {
    const newPass = passwordService.generatePassword(length, {
      uppercase: incUpper,
      lowercase: incLower,
      numbers: incNumbers,
      symbols: incSymbols,
    });
    setPassword(newPass);
  };

  useEffect(() => {
    generate();
  }, [length, incUpper, incLower, incNumbers, incSymbols]);

  const handleCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        })
        .catch(err => {
          console.error("Failed to copy password: ", err);
        });
    }
  };

  return {
    password,
    length,
    setLength,
    incUpper,
    setIncUpper,
    incLower,
    setIncLower,
    incNumbers,
    setIncNumbers,
    incSymbols,
    setIncSymbols,
    isCopied,
    generate,
    handleCopy,
  };
}
