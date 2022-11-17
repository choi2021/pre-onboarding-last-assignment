import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthProvider } from '../context/AuthContext';
import { InfoProvider } from '../context/InfoContext';
import HttpClient from '../network/httpClient';
import AuthServiceImpl from '../services/AuthService';
import InfoServiceImpl from '../services/InfoService';
import '../styles/globals.css';

const ACCESS_TOKEN = 'accessToken';

function App({ Component, pageProps }: AppProps) {
  const client = new HttpClient(process.env.NEXT_PUBLIC_BASE_URL || '');
  const authService = new AuthServiceImpl(client.httpClient);
  const infoService = new InfoServiceImpl(client.withToken());
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5000,
        cacheTime: 3600,
      },
    },
  });

  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      router.push('/login');
    }
  }, []);
  return (
    <AuthProvider authService={authService}>
      <InfoProvider infoService={infoService}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </InfoProvider>
    </AuthProvider>
  );
}

export default App;
