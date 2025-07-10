import { Link } from 'react-router';

import { PATHS } from '@/routes/path';

const ForgotPasswordPage = () => {
  return (
    <div className="flex flex-col">
      Forgot Password Page
      <Link to={PATHS.signIn}>Back to Sign In</Link>
    </div>
  );
};

export default ForgotPasswordPage;
