import { SignUpForm } from '@/features/auth/SignUpForm';

const SignUpPage = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full max-w-xs">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
