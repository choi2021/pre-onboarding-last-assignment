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
  } = item;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="py-1 text-center px-2">{user_name}</td>
      <td className="py-1 text-center px-2">{broker_name}</td>
      <td className="py-1 text-center px-2">{number}</td>
      <td className="py-1 text-center px-2">{status}</td>
      <td className="py-1 text-center px-2">{name}</td>
      <td className="py-1 text-center px-2">{assets}</td>
      <td className="py-1 text-center px-2">{payments}</td>
      <td className="py-1 text-center px-2">{is_active.toString()}</td>
      <td className="py-1 text-center px-2">{created_at}</td>
    </tr>
  );
}
