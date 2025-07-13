import { Link } from 'react-router';

import { PATHS } from '@/routes/path';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-1 flex-col h-screen justify-center items-center gap-y-2">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn't exist.</p>

      {isAuthenticated ? (
        <Button>
          <Link to={PATHS.dashboard}>Back to Dashboard</Link>
        </Button>
      ) : (
        <Button>
          <Link to={PATHS.signIn}>Back to Sign In</Link>
        </Button>
      )}
    </div>
  );
};

export default NotFoundPage;
