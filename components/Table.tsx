import React, { useState } from 'react';
import { UserTableType } from '../models/InfoTypes';
import Modal from './Modal';
import Pagination from './Pagination';
import TableHeader from './TableHeader';
import UserTableItem from './UserTableItem';

interface TableProps {
  column: string[];
  data: UserTableType[];
}

export default function Table({ column, data }: TableProps) {
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
              {data.map((item) => (
                <UserTableItem key={item.id} item={item} />
              ))}
            </tbody>
          </table>
          <Pagination />
        </>
      )}
      {isModalShowing && <Modal column={column} />}
    </div>
  );
}
