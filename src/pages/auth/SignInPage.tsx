import { Link } from 'react-router';

import { PATHS } from '@/routes/path';
import { Button } from '@/components/ui/button';

const SignInPage = () => {
  return (
    <div className="flex flex-col">
      Sign In Page
      <Link to={PATHS.forgotPassword}>Forgot Password?</Link>
      <Link to={PATHS.signUp}>Sign Up</Link>
      <Button>
        <Link to={PATHS.dashboard}>Sign In</Link>
      </Button>
    </div>
  );
};

export default SignInPage;
