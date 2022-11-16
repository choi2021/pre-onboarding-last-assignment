import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import {
  AiOutlineUser,
  AiOutlineDashboard,
  AiOutlineBank,
} from 'react-icons/ai';
import { CiMoneyBill } from 'react-icons/ci';
import { FiLogOut } from 'react-icons/fi';
import { useInfo } from '../hooks/useInfo';
import { AccountType } from '../models/InfoTypes';
import Header from './Header';
import MenuItem from './MenuItem';

export default function Sidebar() {
  const router = useRouter();
  const { route } = router;
  const isUser = route === '/';
  const isAccount = route === '/account';
  const infoService = useInfo();
  const { data: allAccountData } = useQuery(['accounts', 'all'], () => {
    return infoService?.getAllAccounts();
  });
  let accounts: AccountType[] = [];
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      accounts =
        allAccountData?.filter((item) => item.user_id === +userId) || [];
    }
  }, []);

  const handleClick = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('accessToken');
  };
  return (
    <aside className="w-1/6 bg-slate-800 flex flex-col  ">
      <Header />
      <div className="h-2/3 w-full flex flex-col">
        <MenuItem text="대시보드">
          <AiOutlineDashboard className="mr-2" />
        </MenuItem>
        <ul className="w-full h-10 flex justify-between items-center text-indigo-400 cursor-pointer">
          <Link
            href="/account"
            className={`w-full ${isAccount && 'bg-blue-900 text-white'} `}
          >
            <MenuItem text="계좌목록">
              <AiOutlineBank className="mr-2" />
            </MenuItem>
          </Link>
          {accounts.map((item) => (
            <Link href={`/account/${item.id}`}>
              <MenuItem text={item.name}>
                <CiMoneyBill />
              </MenuItem>
            </Link>
          ))}
        </ul>
        <Link href="/" className={`${isUser && 'bg-blue-900 text-slate-300'}`}>
          <MenuItem text="사용자">
            <AiOutlineUser className="mr-2" />
          </MenuItem>
        </Link>
        <Link href="/login" onClick={handleClick}>
          <MenuItem text="로그아웃">
            <FiLogOut className="mr-2" />
          </MenuItem>
        </Link>
      </div>
    </aside>
  );
}
