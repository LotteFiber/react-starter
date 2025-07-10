import { Outlet } from 'react-router';

export function AuthLayout() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Outlet />
    </div>
  );
}
