import { useQuery } from '@tanstack/react-query';
import { useDeleteToken } from './useDeleteToken';
import { InfoService } from '../models/InfoTypes';

export const useAccountsOnPage = (
  currPage: string | undefined,
  infoService: InfoService
) => {
  return useQuery(['account', currPage], () => {
    return infoService?.getAccounts(currPage);
  });
};

export const useAllAccounts = (infoService: InfoService) => {
  return useQuery(
    ['accounts', 'all'],
    () => {
      return infoService?.getAllAccounts();
    },
    {
      onError: useDeleteToken,
    }
  );
};

export const useTargetAccount = (
  query: string | undefined,
  infoService: InfoService
) => {
  return useQuery(['account', query], () => {
    return infoService?.getTargetAccount(query);
  });
};
