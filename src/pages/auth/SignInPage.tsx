import { SignInForm } from '@/features/auth/SignInForm';

const SignInPage = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full max-w-xs">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
