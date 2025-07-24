import type { ReactNode } from 'react';
import { createContext, useContext, useState, useCallback } from 'react';

type UserType = {
  name: string;
  email: string;
  avatar?: string;
};

type AuthContextType = {
  user: UserType | null;
  isAuthenticated: boolean;
  signin: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(() => {
    const stored = localStorage.getItem('user');

    return stored ? JSON.parse(stored) : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const signin = useCallback((email: string, password: string) => {
    if (email && password) {
      const userObj = {
        name: email.split('@')[0],
        email,
        avatar: '',
      };

      setUser(userObj);
      localStorage.setItem('user', JSON.stringify(userObj));
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem('user');
      localStorage.setItem('isAuthenticated', 'false');
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within AuthProvider');

  return context;
};
