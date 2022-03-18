import React, { useEffect, useContext } from 'react';
import UseDarkMode from '../hooks/useDarkMode';
import DarkModeContext from '../contexts/darkModeContext';

const DarkModeProvider = ({ children }) => {
  const [mode, toggleMode] = UseDarkMode();

  // default mode when refreshed
  let defaultMode = 'light';

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    defaultMode = 'dark';
  }

  // set default mode
  useEffect(() => {
    toggleMode(defaultMode);
  }, []);

  // when mode is changed
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        toggleMode('dark');
      } else {
        toggleMode('light');
      }
    });

  return (
    <DarkModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

export const useDarkModeContext = () => useContext(DarkModeContext);
