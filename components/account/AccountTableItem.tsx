import Link from 'next/link';
import React from 'react';
import { AccountTableType } from '../../models/InfoTypes';

interface AccountTableItemProps {
  item: AccountTableType;
}

export default function AccountTableItem({ item }: AccountTableItemProps) {
  const {
    user_name,
    broker_name,
    number,
    status,
    name,
    assets,
    payments,
    is_active,
    created_at,
    profit,
  } = item;
  let bgColor;
  if (profit === 'down') {
    bgColor = 'bg-blue-500';
  }
  if (profit === 'equal') {
    bgColor = 'bg-black';
  }
  if (profit === 'up') {
    bgColor = 'bg-rose-500';
  }
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <Link href={`/${item.userId}`}>
        <td className="py-1 text-center px-2">{user_name}</td>
      </Link>
      <td className="py-1 text-center px-2">{broker_name}</td>
      <Link href={`/account/${item.id}`}>
        <td className="py-1 text-center px-2">{number}</td>
      </Link>
      <td className="py-1 text-center px-2">{status}</td>
      <td className="py-1 text-center px-2">{name}</td>
      <td className={`${bgColor} text-slate-100 py-1 text-center px-2`}>
        {assets}
      </td>
      <td className="py-1 text-center px-2">{payments}</td>
      <td className="py-1 text-center px-2">{is_active.toString()}</td>
      <td className="py-1 text-center px-2">{created_at}</td>
    </tr>
  );
}
