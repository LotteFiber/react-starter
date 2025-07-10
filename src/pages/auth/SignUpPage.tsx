import { Link } from 'react-router';

import { PATHS } from '@/routes/path';

const SignUpPage = () => {
  return (
    <div className="flex flex-col">
      Sign Up Page
      <Link to={PATHS.signIn}>Sign In</Link>
    </div>
  );
};

export default SignUpPage;
