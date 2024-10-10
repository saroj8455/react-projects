import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { PrimeReactProvider } from 'primereact/api';

import './index.css';
const value = {
  ripple: true,
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider value={value}>
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
