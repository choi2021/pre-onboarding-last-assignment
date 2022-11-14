import { useRouter } from 'next/router';
import React from 'react';
import {
  AiOutlineUser,
  AiOutlineDashboard,
  AiOutlineBank,
} from 'react-icons/ai';
import { BsArrowUpShort } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import Header from './Header';
import MenuItem from './MenuItem';

export default function Sidebar() {
  const router = useRouter();
  const isHome = router.pathname === '/';
  return (
    <aside className="w-1/6 bg-slate-800 flex flex-col items-center ">
      <Header isHome={isHome} />
      <div className="h-2/3 w-full ">
        <MenuItem text="대시보드">
          <AiOutlineDashboard className="mr-2" />
        </MenuItem>
        <ul className="h-10 flex justify-between items-center text-indigo-400 cursor-pointer">
          <MenuItem text="계좌목록">
            <AiOutlineBank className="mr-2" />
          </MenuItem>
          <BsArrowUpShort />
        </ul>
        <MenuItem text="사용자">
          <AiOutlineUser className="mr-2" />
        </MenuItem>
        <MenuItem text="로그아웃">
          <FiLogOut className="mr-2" />
        </MenuItem>
      </div>
    </aside>
  );
}
