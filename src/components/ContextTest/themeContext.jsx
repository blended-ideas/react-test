import {
  useContext,
  useCallback, useState, createContext,
} from 'react';

const ThemeContext = createContext();
const ThemeContextUpdater = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdater() {
  return useContext(ThemeContextUpdater);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeContextUpdater.Provider value={toggleTheme}>
        {children}
      </ThemeContextUpdater.Provider>
    </ThemeContext.Provider>
  );
}
