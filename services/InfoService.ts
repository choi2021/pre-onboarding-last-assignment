import { AxiosError, AxiosInstance } from 'axios';
import {
  AccountResponse,
  InfoService,
  UserResponse,
  UserSettingResponse,
} from '../models/InfoTypes';
import HTTPError from '../network/httpError';

export default class InfoServiceImpl implements InfoService {
  constructor(private httpClient: AxiosInstance) {}

  async getUsers(page?: number) {
    try {
      const { data } = await this.httpClient.get<UserResponse>(
        `api/users?_page=${page}&_limit=15`
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

  async getUserSetting(page?: number) {
    try {
      const { data } = await this.httpClient.get<UserSettingResponse>(
        `api/userSetting?_page=${page}&_limit=15`
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

  async getAllAccounts() {
    try {
      const { data } = await this.httpClient.get<AccountResponse>(
        `api/accounts`
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

  async getAllUserSetting() {
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

  async getTargetUser(q?: string) {
    try {
      const { data } = await this.httpClient.get<UserResponse>(
        `api/users?q=${q}`
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

  async getTargetUserSetting(q?: string) {
    try {
      const { data } = await this.httpClient.get<UserSettingResponse>(
        `api/userSetting?q=${q}`
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
