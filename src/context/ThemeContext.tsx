import React, { createContext, useContext, useState, useMemo, useCallback, ReactNode } from 'react';

interface ThemeContextProps {
  darkMode: boolean;
  toggleTheme: () => void;
  theme: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
  };
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  
  const toggleTheme = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);
  
  const theme = useMemo(() => ({
    background: darkMode ? '#22252D' : '#F9F9F9',
    text: darkMode ? '#FFFFFF' : '#000000',
    primary: darkMode ? '#292D36' : '#F5F5F5',
    secondary: darkMode ? '#272B33' : '#E9E9E9',
    accent: '#FF9500',
  }), [darkMode]);
  
  const value = useMemo(() => ({
    darkMode,
    toggleTheme,
    theme,
  }), [darkMode, toggleTheme, theme]);
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};