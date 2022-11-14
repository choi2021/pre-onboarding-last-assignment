import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { SelectType, UserTableType } from '../models/InfoTypes';
import TableHeader from './TableHeader';

interface TableProps {
  column: string[];
  data: UserTableType[];
}

export default function Table({ column, data }: TableProps) {
  return (
    <div className="overflow-y-scroll  relative shadow-md sm:rounded-lg">
      <TableHeader />
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {column.map((item) => (
              <th className="py-1 text-center px-2  text-xs">{item}</th>
            ))}
            <th className="py-1  px-2 text-xs" />
            <th className="py-1  px-2 text-xs" />
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="py-1 text-center px-2">{item.name}</td>
              <td className="py-1 text-center px-2">{item.account_count}</td>
              <td className="py-1 text-center px-2">{item.email}</td>
              <td className="py-1 text-center px-2">{item.gender_origin}</td>
              <td className="py-1 text-center px-2">{item.birth_date}</td>
              <td className="py-1 text-center px-2">{item.phone_number}</td>
              <td className="py-1 text-center px-2">{item.last_login}</td>
              <td className="py-1 text-center px-2">
                {item.allow_marketing_push.toString()}
              </td>
              <td className="py-1 text-center px-2">
                {item.is_active.toString()}
              </td>
              <td className="py-1 text-center px-2">{item.created_at}</td>
              <td className="py-1 text-center px-2 cursor-pointer">Edit</td>
              <td className="py-1 text-center px-2 cursor-pointer">
                <BsTrash />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
