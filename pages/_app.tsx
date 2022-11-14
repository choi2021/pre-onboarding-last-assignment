import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';
import { InfoProvider } from '../context/InfoContext';
import HttpClient from '../network/httpClient';
import AuthServiceImpl from '../services/AuthService';
import InfoServiceImpl from '../services/InfoService';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  const client = new HttpClient(process.env.NEXT_PUBLIC_BASE_URL || '');
  const authService = new AuthServiceImpl(client.httpClient);
  const infoService = new InfoServiceImpl(client.withToken());
  const queryClient = new QueryClient();
  return (
    <AuthProvider authService={authService}>
      <InfoProvider infoService={infoService}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </InfoProvider>
    </AuthProvider>
  );
}

export default App;
