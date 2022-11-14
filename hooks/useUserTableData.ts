import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useInfo } from './useInfo';
import { UserTableType } from '../models/InfoTypes';
import { formatTableData } from '../utils/formatTableData';

const useUserTableData = () => {
  const infoService = useInfo();
  const [tableData, setTableData] = useState<UserTableType[]>([]);
  const { data: userData } = useQuery(['users'], () => {
    return infoService?.getUsers(1);
  });
  const { data: settingData } = useQuery(['userSetting'], () => {
    return infoService?.getUserSetting();
  });
  const { data: accountData } = useQuery(['accounts', 'all'], () => {
    return infoService?.getAccounts(1);
  });

  useEffect(() => {
    if (userData && settingData && accountData) {
      const formattedTableData = formatTableData(
        userData,
        settingData,
        accountData
      );
      setTableData(formattedTableData);
    }
  }, [userData, settingData, accountData]);
  return tableData;
};

export { useUserTableData };
