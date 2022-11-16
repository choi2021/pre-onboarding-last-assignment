import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import Table from './Table';
import { useInfo } from '../hooks/useInfo';
import { AccountTableType, AccountType } from '../models/InfoTypes';
import { formatAccountTableData } from '../utils/formatAccountTableData';

const tableColumns = [
  '고객명',
  '브로커 명',
  '계좌번호',
  '계좌상태',
  '계좌명',
  '평가금액',
  '입금금액',
  '계좌활성화여부',
  '계좌개설일',
];

export default function AccountContent() {
  const [accountTableData, setAccountTableData] = useState<AccountTableType[]>(
    []
  );
  const router = useRouter();
  const { query } = router;
  const { q, page } = query;
  const infoService = useInfo();
  const currPage = typeof page === 'string' ? page : page?.join('');

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

  return (
    <section className="bg-slate-100 flex-1 ">
      <Table
        column={tableColumns}
        data={accountTableData}
        totalItems={totalItems}
      />
    </section>
  );
}
