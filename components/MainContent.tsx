import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Table from './UserTable';
import { useInfo } from '../hooks/useInfo';
import { UserTableType } from '../models/InfoTypes';
import { formatTableData } from '../utils/formatTableData';

const tableColumns = [
  '고객명',
  '보유 계좌 수',
  '이메일',
  '성별 코드',
  '생년 월일',
  '휴대폰 번호',
  '최근 로그인',
  '혜택 수신 동의 여부',
  '활성화',
  '가입일',
];

export default function MainContent() {
  const infoService = useInfo();
  const [tableData, setTableData] = useState<UserTableType[]>([]);
  const { data: userData } = useQuery(['users'], () => {
    return infoService?.getUsers(1);
  });
  const { data: settingData } = useQuery(['userSetting'], () => {
    return infoService?.getUserSetting();
  });
  const { data: accountData } = useQuery(['accounts'], () => {
    return infoService?.getAccounts(1);
  });
  console.log(tableData);
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

  return (
    <section className="bg-slate-100 flex-1 ">
      <Table />
    </section>
  );
}
