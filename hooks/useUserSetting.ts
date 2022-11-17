import { useQuery } from '@tanstack/react-query';
import { InfoService } from '../models/InfoTypes';
import { useDeleteToken } from './useDeleteToken';

export const useUserSettingOnPage = (
  currPage: string | undefined,
  infoService: InfoService
) => {
  return useQuery(
    ['userSetting', currPage],
    () => {
      return infoService?.getUserSetting(currPage);
    },
    {
      onError: useDeleteToken,
    }
  );
};

export const useAllUserSetting = (infoService: InfoService) => {
  return useQuery(
    ['usersetting', 'all'],
    () => {
      return infoService?.getAllUserSetting();
    },
    {
      onError: useDeleteToken,
    }
  );
};
