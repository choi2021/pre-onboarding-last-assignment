import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useInfo } from './useInfo';
import { AccountTableType } from '../models/InfoTypes';
import { formatAccountTableData } from '../utils/formatAccountTableData';

export const useAccountTable = () => {
  const infoService = useInfo();
  const router = useRouter();
  const { q, page } = router.query;
  const currPage = typeof page === 'string' ? page : page?.join('');
  const [accountTableData, setAccountTableData] = useState<AccountTableType[]>(
    []
  );
  const { data: allUsers } = useQuery(['users', 'all'], () => {
    return infoService?.getAllUsers();
  });
  const { data: allAccountData } = useQuery(['accounts', 'all'], () => {
    return infoService?.getAllAccounts();
  });
  const { data: accountData } = useQuery(['account', currPage], () => {
    return infoService?.getAccounts(currPage);
  });
  const totalItems = allAccountData?.length || 0;

  useEffect(() => {
    if (allUsers && accountData) {
      const formattedTableData = formatAccountTableData(allUsers, accountData);
      setAccountTableData(formattedTableData);
    }
  }, [allUsers, accountData]);

  return { accountTableData, totalItems };
};
