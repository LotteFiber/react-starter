import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import './index.css';
import { Toaster } from 'sonner';

import { AppRouter } from './routes/router.tsx';
import { ThemeProvider } from './components/theme-provider.tsx';
import { AuthProvider } from './contexts/AuthContext'; // ✅ Import this

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppRouter />
      </ThemeProvider>
      <Toaster />
    </AuthProvider>
  </StrictMode>,
);
