import React, { createContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthService } from '../types/AuthTypes';

interface AuthProviderProps {
  children: React.ReactNode;
  authService: AuthService;
}

interface TokenContextType {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

export const TokenContext = createContext<TokenContextType | null>(null);
export const AuthContext = createContext<AuthService | null>(null);
export const AuthProvider = ({ children, authService }: AuthProviderProps) => {
  const router = useRouter();
  const [token, setToken] = useState('');
  const value = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  useEffect(() => {
    const prevToken = localStorage.getItem('accessToken');
    setToken(prevToken || '');
  }, []);

  useEffect(() => {
    if (token) {
      router.push('/');
    } else {
      router.push('/signin');
    }
  }, [token]);
  return (
    <AuthContext.Provider value={authService}>
      <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
    </AuthContext.Provider>
  );
};
