import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import {
  AccountResponse,
  InfoService,
  UserResponse,
  UserSettingResponse,
  UserSettingType,
  UserType,
} from '../models/InfoTypes';
import HTTPError from '../network/httpError';

export default class InfoServiceImpl implements InfoService {
  constructor(private httpClient: AxiosInstance) {}

  async getUsers(page?: string) {
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

  async getUserSetting(page?: string) {
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

  async patchUserName({ name, id }: { name: string; id: string }) {
    try {
      return await this.httpClient.patch(`api/users/${id}`, {
        name,
      });
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

  async deleteUser(id: string) {
    try {
      return await this.httpClient.delete(`api/users/${id}`);
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

  async deleteUserSetting(id: string) {
    try {
      return await this.httpClient.delete(`api/userSetting/${id}`);
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

  async postUser(user: UserType) {
    try {
      return await this.httpClient.post(`api/users`, user);
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

  async postSetting(setting: UserSettingType) {
    try {
      return await this.httpClient.post(`api/userSetting`, setting);
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
