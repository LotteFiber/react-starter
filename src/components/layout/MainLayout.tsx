import { Link, Outlet } from 'react-router';

import { PATHS } from '@/routes/path';

export default function MainLayout() {
  return (
    <main className="py-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div>
          {<Outlet />}
          <Link to={PATHS.signIn}>Back to Sign In</Link>
        </div>
      </div>
    </main>
  );
}
