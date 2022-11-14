import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Table from './Table';
import { useInfo } from '../hooks/useInfo';

export default function MainContent() {
  const infoService = useInfo();
  const { data: usersData } = useQuery(['users'], () => {
    return infoService?.getUsers(1);
  });
  const { data: settingData } = useQuery(['userSetting'], () => {
    return infoService?.getUserSetting();
  });
  console.log(settingData);
  return (
    <section className="bg-slate-100 flex-1 ">
      <Table />
    </section>
  );
}
