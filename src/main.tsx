import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import './index.css';
import { Toaster } from 'sonner';

import { Provider } from 'react-redux';

import { AppRouter } from './routes/router.tsx';
import { ThemeProvider } from './components/theme-provider.tsx';
import { AuthProvider } from './contexts/AuthContext';
import { store } from './app/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AppRouter />
        </ThemeProvider>
        <Toaster />
      </AuthProvider>
    </Provider>
  </StrictMode>,
);
