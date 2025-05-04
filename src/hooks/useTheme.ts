import { useState, useEffect } from 'react';
import { ThemeMode } from '../types';

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    // Check if theme preference exists in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Check if user prefers dark mode via OS settings
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Return saved theme if it exists, otherwise use OS preference
    return (savedTheme as ThemeMode) || (prefersDark ? 'dark' : 'light');
  });

  useEffect(() => {
    // Update the document with the current theme
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};