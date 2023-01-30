import React from 'react';
import { useTheme } from './themeContext';

function ChildAccessor() {
  const theme = useTheme();
  return (
    <h1>
      Current Theme :
      {' '}
      {theme}
    </h1>
  );
}

export default ChildAccessor;
