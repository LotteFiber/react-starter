export const UserRole = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
} as const;
export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export const StatusCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
} as const;
export type StatusCode = (typeof StatusCode)[keyof typeof StatusCode];
