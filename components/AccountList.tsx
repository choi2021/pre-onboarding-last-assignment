import React from 'react';
import { AccountType } from '../models/InfoTypes';
import AccountItem from './AccountItem';

export default function AccountList({ accounts }: { accounts: AccountType[] }) {
  return (
    <div>
      {accounts.map((item) => (
        <AccountItem key={item.id} account={item} />
      ))}
    </div>
  );
}
