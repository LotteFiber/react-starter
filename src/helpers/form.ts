import { REGEX } from '@/constants/regex';

export function validateEmail(email: string): boolean {
  const emailRegex = REGEX.EMAIL;

  return emailRegex.test(email.toLowerCase());
}
