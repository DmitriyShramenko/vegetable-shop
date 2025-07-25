import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App.jsx';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </StrictMode>,
);
