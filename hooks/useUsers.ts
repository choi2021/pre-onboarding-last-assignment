import { useQuery } from '@tanstack/react-query';
import { useDeleteToken } from './useDeleteToken';
import { InfoService } from '../models/InfoTypes';

export const useUsersOnPage = (
  currPage: string | undefined,
  infoService: InfoService
) => {
  return useQuery(
    ['users', currPage],
    () => {
      return infoService?.getUsers(currPage);
    },
    {
      onError: useDeleteToken,
    }
  );
};

export const useAllUser = (infoService: InfoService) => {
  return useQuery(
    ['users', 'all'],
    () => {
      return infoService?.getAllUsers();
    },
    {
      onError: useDeleteToken,
    }
  );
};

export const useTargetUser = (
  query: string | undefined,
  infoService: InfoService
) => {
  return useQuery(
    ['user', query],
    () => {
      return infoService?.getTargetUser(query);
    },
    {
      onError: useDeleteToken,
    }
  );
};
