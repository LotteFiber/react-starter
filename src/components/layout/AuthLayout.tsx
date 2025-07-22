import { useEffect } from 'react';

import { GalleryVerticalEnd } from 'lucide-react';
import { Outlet } from 'react-router';

import { usePageMeta } from '@/routes/router';
import ErrorBoundary from '../common/ErrorBoundary';

export function AuthLayout() {
  const { title } = usePageMeta();

  useEffect(() => {
    if (title) {
      document.title = `${title} | HelmetGuard`;
    }
  }, [title]);

  return (
    <ErrorBoundary fallback={<div>Auth Layout failed to load.</div>}>
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="bg-muted relative hidden lg:block">
          <img
            src="/placeholder.svg"
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-end">
            <a href="#" className="flex items-center gap-2 font-medium">
              <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-4" />
              </div>
              Acme Inc.
            </a>
          </div>
          <Outlet />
        </div>
      </div>
    </ErrorBoundary>
  );
}
