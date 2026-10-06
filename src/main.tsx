import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import { preloadRoute } from './AppRoutes';
import './i18n';
import './index.css';

// The prerendered HTML stays on screen until the current page's chunk is
// loaded, so the first client render replaces it without a blank frame.
preloadRoute(window.location.pathname)
  .catch(() => {})
  .finally(() => {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </StrictMode>,
    );
  });
