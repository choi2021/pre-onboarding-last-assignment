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
  const query = typeof q === 'string' ? q : q?.join('');
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
  const { data: targetAccount } = useQuery(['account', query], () => {
    return infoService?.getTargetAccount(query);
  });

  const totalItems = allAccountData?.length || 0;

  useEffect(() => {
    if (!q && allUsers && accountData) {
      const formattedTableData = formatAccountTableData(allUsers, accountData);
      setAccountTableData(formattedTableData);
    }
  }, [q, allUsers, accountData]);
  useEffect(() => {
    if (q && allUsers && targetAccount) {
      const formattedTableData = formatAccountTableData(
        allUsers,
        targetAccount
      );
      setAccountTableData(formattedTableData);
    }
  }, [q, allUsers, targetAccount]);
  return { accountTableData, totalItems };
};
