import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import theme from './utils/theme';
import Dasboard from './pages/dasboard';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dasboard />
    </ThemeProvider>
  );
};

export default App;
