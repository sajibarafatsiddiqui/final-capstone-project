import React from 'react';
import { MantineProvider } from '@mantine/core';
import CarBooking from './components/CarBooking';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <CarBooking />
    </MantineProvider>
  );
}

export default App;
