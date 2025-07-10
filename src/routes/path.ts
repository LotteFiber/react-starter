/**
 * Define all route paths used across the application.
 * Group routes by domain or layout where appropriate.
 */
export const PATHS = {
  // Public / Auth routes
  root: '/',
  signIn: '/signin',
  signUp: '/signup',
  forgotPassword: '/forgot-password',

  // App routes (requires auth)
  dashboard: '/dashboard',
  home: '/',

  // Fallback
  notFound: '*',
} as const;

// Optional: Route keys type (e.g., keyof typeof ROUTES)
export type RoutePath = (typeof PATHS)[keyof typeof PATHS];
