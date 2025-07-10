import { useState } from 'react';

import { Link } from 'react-router';
import { toast } from 'sonner';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PATHS } from '@/routes/path';

export function ForgotPasswordForm({ className, ...props }: React.ComponentProps<'form'>) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email');

      return;
    }

    // ✅ Simulate reset link sent
    toast.success('Reset link sent to your email!');

    // Optionally: simulate API call or loading state
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('flex flex-col gap-6', className)}
      noValidate
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Forgot your password?</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email and we'll send you instructions to reset your password
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full">
          Send reset link
        </Button>
      </div>
      <div className="text-center text-sm">
        Remembered your password?{' '}
        <Link to={PATHS.signIn} className="underline underline-offset-4">
          Back to login
        </Link>
      </div>
    </form>
  );
}
