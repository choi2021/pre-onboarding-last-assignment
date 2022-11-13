import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';
import HttpClient from '../network/httpClient';
import AuthServiceImpl from '../services/AuthService';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  const client = new HttpClient(process.env.NEXT_PUBLIC_BASE_URL || '');
  const authService = new AuthServiceImpl(client.httpClient);
  return (
    <AuthProvider authService={authService}>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}

export default App;
