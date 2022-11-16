import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';
import { useInfo } from '../hooks/useInfo';
import AccountList from './AccountList';
import UserInfoList from './UserInfoList';

export default function UserInfo() {
  const router = useRouter();
  const { id } = router.query;
  const infoService = useInfo();
  const { data: allUsers } = useQuery(['users', 'all'], () => {
    return infoService?.getAllUsers();
  });
  const { data: allAccounts } = useQuery(['accounts', 'all'], () => {
    return infoService?.getAllAccounts();
  });
  const user = allUsers?.find((item) => item.id.toString() === id);
  const accounts = allAccounts?.filter(
    (item) => item.user_id.toString() === id
  );

  return (
    <section className="text-gray-600 p-3 bg-blue-300 overflow-y-auto">
      <h1 className=" text-lg font-medium title-font mb-4 text-gray-700">
        사용자 정보
      </h1>
      {user && <UserInfoList user={user} />}
      {accounts && <AccountList accounts={accounts} />}
    </section>
  );
}
