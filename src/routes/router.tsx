import React, { lazy, Suspense } from 'react';

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router';

import { PATHS } from './path';

// Layouts
import { AuthLayout } from '@/components/layout/AuthLayout';
import MainLayout from '@/components/layout/MainLayout';

// Pages - Auth
const SignInPage = lazy(() => import('@/pages/auth/SignInPage'));
const SignUpPage = lazy(() => import('@/pages/auth/SignUpPage'));
const ForgotPasswordPage = lazy(() => import('@/pages/auth/ForgotPasswordPage'));

// Pages - App
const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

import { PrivateRoute } from '@/components/router/PrivateRoute';

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
      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          <Route path={PATHS.dashboard} element={<DashboardPage />} />
        </Route>
      </Route>
      {/* Fallback Route */}
      <Route path="*" element={<NotFoundPage />} />,
    </>,
  ),
);

export function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
