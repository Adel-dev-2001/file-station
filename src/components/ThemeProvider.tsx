import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme, ThemeProviderProps, ThemeProviderState } from '../types/theme';

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

function readThemePreference(key: string, fallback: Theme): Theme {
  try {
    const saved = localStorage.getItem(key);
    return saved === 'light' || saved === 'dark' || saved === 'system' ? saved : fallback;
  } catch (error) {
    console.warn('File Station could not read the saved theme preference.', error);
    return fallback;
  }
}

function saveThemePreference(key: string, value: Theme): void {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn('File Station could not save the theme preference.', error);
  }
}

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => readThemePreference(storageKey, defaultTheme)
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      saveThemePreference(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
