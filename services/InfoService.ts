import { AxiosError, AxiosInstance } from 'axios';
import {
  AccountResponse,
  InfoService,
  UserResponse,
  UserSettingResponse,
} from '../types/InfoTypes';
import HTTPError from '../network/httpError';

export default class InfoServiceImpl implements InfoService {
  constructor(private httpClient: AxiosInstance) {}

  async getUsers(page = 1, q?: string) {
    try {
      const { data } = await this.httpClient.get<UserResponse>(
        `api/users?_page=${page}&_limit=20${q ? `_q=${q}` : ''}`
      );
      return await data;
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

  async getAccounts(page = 1, q?: string) {
    try {
      const { data } = await this.httpClient.get<AccountResponse>(
        `api/accounts?_page=${page}&_limit=20${q ? `_q=${q}` : ''}`
      );
      return await data;
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

  async getUserSetting() {
    try {
      const { data } = await this.httpClient.get<UserSettingResponse>(
        `api/userSetting`
      );
      return await data;
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
}
