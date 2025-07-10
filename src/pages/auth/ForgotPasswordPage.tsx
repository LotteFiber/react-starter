import { ForgotPasswordForm } from '@/features/auth/ForgotPasswordForm';

const SignInPage = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full max-w-xs">
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default SignInPage;
