import axios, { AxiosError, AxiosInstance } from 'axios';
import HTTPError from '../network/httpError';
import { AuthResponse, AuthService, UserInfoType } from '../types/AuthTypes';

export default class AuthServiceImpl implements AuthService {
  constructor(private httpClient: AxiosInstance) {}

  signUp = async (userInfo: UserInfoType) => {
    try {
      const response = await this.httpClient.post<AuthResponse>(
        'signup',
        userInfo
      );
      const { data } = response;
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error;
        if (response) {
          throw new HTTPError(response?.status, response?.statusText);
        }
      }
    }

    throw new Error('Server Error');
  };

  signIn = async (userInfo: UserInfoType) => {
    try {
      const response = await this.httpClient.post<AuthResponse>(
        'signin',
        userInfo
      );
      const { data } = response;
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error;
        if (response) {
          throw new HTTPError(response?.status, response?.statusText);
        }
      }
    }

    throw new Error('Server Error');
  };
}
