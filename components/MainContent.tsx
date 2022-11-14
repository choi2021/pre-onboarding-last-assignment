import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserTableType } from '../models/InfoTypes';
import UserTable from './Table';
import { useUserTableData } from '../hooks/useUserTableData';

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

const FILTER = {
  all: 'all',
  staff: 'staff',
  active: 'active',
} as const;

export default function MainContent() {
  const router = useRouter();
  const { query } = router;
  const { filter } = query;
  const tableData = useUserTableData();
  const [filteredData, setFilteredData] = useState<UserTableType[]>(tableData);

  useEffect(() => {
    setFilteredData((prev) => {
      if (!filter || filter === FILTER.all) {
        return tableData;
      }
      if (filter === FILTER.active) {
        return tableData.filter((item) => item.is_active);
      }
      return tableData.filter((item) => item.is_staff);
    });
  }, [filter]);

  return (
    <section className="bg-slate-100 flex-1 ">
      <UserTable column={tableColumns} data={filteredData} />
    </section>
  );
}
