import axios, { AxiosInstance } from 'axios';

const ACCESS_TOKEN = 'accessToken';

export default class HttpClient {
  httpClient: AxiosInstance;

  constructor(private baseUrl: string) {
    this.httpClient = axios.create({
      baseURL: this.baseUrl,
    });
  }

  withToken() {
    this.httpClient.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (config.headers && token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        throw new Error(error);
      }
    );
    return this.httpClient;
  }
}
