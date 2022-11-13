import React, { createContext, useContext } from 'react';
import { AuthService } from '../types/AuthTypes';

interface AuthProviderProps {
  children: React.ReactNode;
  authService: AuthService;
}

const AuthContext = createContext<AuthService | null>(null);
export const AuthProvider = ({ children, authService }: AuthProviderProps) => {
  return (
    <AuthContext.Provider value={authService}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
