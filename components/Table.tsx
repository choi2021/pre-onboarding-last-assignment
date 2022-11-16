import React, { useState } from 'react';
import { AccountTableType, UserTableType } from '../models/InfoTypes';
import AccountTableItem from './account/AccountTableItem';
import Modal from './user/Modal';
import Pagination from './Pagination';
import TableHeader from './TableHeader';
import UserTableItem from './user/UserTableItem';

interface TableProps {
  column: string[];
  data: UserTableType[] | AccountTableType[];
  totalItems: number;
}

export default function Table({ column, data, totalItems }: TableProps) {
  const [isModalShowing, setIsModalShowing] = useState(false);
  const toggleModal = () => {
    setIsModalShowing((prev) => !prev);
  };
  return (
    <div className=" overflow-y-scroll h-full relative shadow-md sm:rounded-lg  ">
      <TableHeader toggleModal={toggleModal} isModalShowing={isModalShowing} />
      {!isModalShowing && (
        <>
          <table
            className={`w-full text-sm text-gray-500 dark:text-gray-400 ' `}
          >
            <thead className="text-xstext-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {column.map((item) => (
                  <th key={item} className="py-1 text-center px-2  text-xs">
                    {item}
                  </th>
                ))}
                <th className="py-1  px-2 text-xs" />
                <th className="py-1  px-2 text-xs" />
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                if (item.kind === 'user') {
                  return <UserTableItem key={item.id} item={item} />;
                }
                return <AccountTableItem key={item.id} item={item} />;
              })}
            </tbody>
          </table>
          <Pagination totalItems={totalItems} />
        </>
      )}
      {isModalShowing && <Modal column={column} />}
    </div>
  );
}
