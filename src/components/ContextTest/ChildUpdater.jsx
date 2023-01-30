import React from 'react';
import { useThemeUpdater } from './themeContext';

function ChildUpdater() {
  const toggleTheme = useThemeUpdater();
  return (
    <button onClick={toggleTheme} type="button">
      Toggle Theme
    </button>
  );
}

export default ChildUpdater;
