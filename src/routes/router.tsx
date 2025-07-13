import { lazy, Suspense } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router';

import { useMatches } from 'react-router';

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

// Route Guards
import { PrivateRoute } from '@/components/router/PrivateRoute';
import { PublicRoute } from '@/components/router/PublicRoute';
import type { RouteHandle, RouteMeta } from '@/types/router';

const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: PATHS.root,
            element: <SignInPage />,
            handle: {
              meta: { title: 'Sign In', breadcrumb: 'Sign In' } satisfies RouteMeta,
            },
          },
          {
            path: PATHS.signIn,
            element: <SignInPage />,
            handle: {
              meta: { title: 'Sign In', breadcrumb: 'Sign In' } satisfies RouteMeta,
            },
          },
          {
            path: PATHS.signUp,
            element: <SignUpPage />,
            handle: {
              meta: { title: 'Sign Up', breadcrumb: 'Sign Up' } satisfies RouteMeta,
            },
          },
          {
            path: PATHS.forgotPassword,
            element: <ForgotPasswordPage />,
            handle: {
              meta: { title: 'Forgot Password', breadcrumb: 'Forgot' } satisfies RouteMeta,
            },
          },
        ],
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: PATHS.dashboard,
            element: <DashboardPage />,
            handle: {
              meta: {
                title: 'Dashboard',
                breadcrumb: 'Home',
                requiresAuth: true,
              } satisfies RouteMeta,
            },
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
    handle: {
      meta: { title: '404 Page NotFound', breadcrumb: '404 Page NotFound' } satisfies RouteMeta,
    },
  },
]);

export const usePageMeta = () => {
  const matches = useMatches();

  console.log(matches);
  const current = matches[matches.length - 1];
  const handle = current?.handle as RouteHandle | undefined;

  return handle?.meta ?? {};
};

export function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
