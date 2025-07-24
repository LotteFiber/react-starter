import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import './index.css';
import { Toaster } from 'sonner';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AppRouter } from './routes/router.tsx';
import { ThemeProvider } from './components/theme-provider.tsx';
import { AuthProvider } from './contexts/AuthContext';
import { store } from './app/store.ts';

const queryClient = new QueryClient();

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            {children}
          </ThemeProvider>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <AppRouter />
      <Toaster />
    </AppProviders>
  </StrictMode>,
);
