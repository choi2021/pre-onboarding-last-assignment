import axios, { AxiosError, AxiosInstance } from 'axios';
import HTTPError from './httpError';

const ACCESS_TOKEN = 'accessToken';

export default class HttpClient {
  httpClient: AxiosInstance;

  constructor(private baseUrl: string) {
    this.httpClient = axios.create({
      baseURL: this.baseUrl,
    });
    this.httpClient.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error instanceof AxiosError) {
          const { response } = error;
          if (response) {
            throw new HTTPError(
              response?.status,
              response?.statusText,
              response.data
            );
          }
        }
        throw new Error('Server Error');
      }
    );
  }

  withToken() {
    this.httpClient.interceptors.request.use((config) => {
      const token = localStorage.getItem(ACCESS_TOKEN);
      if (config.headers && token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return this.httpClient;
  }
}
