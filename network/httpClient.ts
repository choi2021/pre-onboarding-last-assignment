import axios, { AxiosInstance } from 'axios';

export default class HttpClient {
  httpClient: AxiosInstance;

  constructor(private baseUrl: string) {
    this.httpClient = axios.create({
      baseURL: this.baseUrl,
    });
  }
}
