import { AxiosError, AxiosInstance } from 'axios';
import HTTPError from '../network/httpError';
import { AuthResponse, AuthService, UserInfoType } from '../types/AuthTypes';

export default class AuthServiceImpl implements AuthService {
  constructor(private httpClient: AxiosInstance) {}

  async signUp({ email, password }: UserInfoType) {
    try {
      const response = await this.httpClient.post<AuthResponse>(
        'api/users/signup',
        { email, password }
      );
      const { data } = response;
      return data;
    } catch (error) {
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
    }

    throw new Error('Server Error');
  }

  async signIn(userInfo: UserInfoType) {
    try {
      const response = await this.httpClient.post<AuthResponse>(
        'api/login',
        userInfo
      );
      const { data } = response;
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error;
        if (response) {
          throw new HTTPError(
            response?.status,
            response.statusText,
            response.data
          );
        }
      }
    }

    throw new Error('Server Error');
  }
}
