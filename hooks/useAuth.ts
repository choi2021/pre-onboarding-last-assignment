import { useContext } from 'react';
import { AuthContext, TokenContext } from '../context/AuthContext';

export const useAuthService = () => useContext(AuthContext);
export const useToken = () => useContext(TokenContext);
