import { Link } from 'react-router';

import { PATHS } from '@/routes/path';

const NotFoundPage = () => {
  return (
    <div className="flex flex-1 flex-col h-screen justify-center items-center ">
      404 - Page Not Found
      <Link to={PATHS.signIn}>Back to Sign In</Link>
    </div>
  );
};

export default NotFoundPage;
