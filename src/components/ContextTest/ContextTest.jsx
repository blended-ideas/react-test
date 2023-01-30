import React from 'react';
import ChildAccessor from './ChildAccessor';
import ChildUpdater from './ChildUpdater';
import { ThemeProvider } from './themeContext';

function ContextTest() {
  return (
    <ThemeProvider>
      <ChildAccessor />
      <ChildUpdater />
    </ThemeProvider>
  );
}

export default ContextTest;
