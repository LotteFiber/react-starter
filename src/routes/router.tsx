// src/routes/router.tsx

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router';

import { PATHS } from './path';

// Layouts
import { AuthLayout } from '@/components/layout/AuthLayout';
import MainLayout from '@/components/layout/MainLayout';

// Pages - Auth
import SignInPage from '@/pages/auth/SignInPage';
import SignUpPage from '@/pages/auth/SignUpPage';
import ForgotPasswordPage from '@/pages/auth/ForgotPasswordPage';

// Pages - App
import DashboardPage from '@/pages/DashboardPage';
import NotFoundPage from '@/pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path={PATHS.root} element={<SignInPage />} />
        <Route path={PATHS.signIn} element={<SignInPage />} />
        <Route path={PATHS.signUp} element={<SignUpPage />} />
        <Route path={PATHS.forgotPassword} element={<ForgotPasswordPage />} />
      </Route>
      {/* App Routes */}
      <Route element={<MainLayout />}>
        <Route path={PATHS.dashboard} element={<DashboardPage />} />
      </Route>
      {/* Fallback Route */}
      <Route path="*" element={<NotFoundPage />} />,
    </>,
  ),
);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
