import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import './index.css';
import { Toaster } from 'sonner';

import { AppRouter } from './routes/router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
    <Toaster />
  </StrictMode>,
);
