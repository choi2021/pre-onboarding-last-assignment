import React, { useState } from 'react';
import { BsArrowUp, BsTrash } from 'react-icons/bs';
import { UserTableType } from '../models/InfoTypes';
import { useUserTableDispatch, useUserTableState } from '../hooks/useUserTable';

interface UserTableItemProps {
  item: UserTableType;
}

export default function UserTableItem({ item }: UserTableItemProps) {
  const [isModifying, setIsModifying] = useState(false);
  const [name, setName] = useState(item.name);
  const dispatch = useUserTableDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setName(value);
  };
  const toggleIsModifying = () => {
    setIsModifying((prev) => !prev);
  };

  const handleEdit = () => {
    dispatch({ type: 'EDIT_NAME', edit: { ...item, name } });
    toggleIsModifying();
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE', id: item.id });
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="py-1 text-center px-2">
        {isModifying ? (
          <div className="flex text-xs">
            <input
              type="text"
              className="border w-24 mr-1 text-center"
              value={name}
              onChange={handleChange}
            />
            <button
              type="button"
              className="bg-blue-100 px-1"
              onClick={handleEdit}
            >
              <BsArrowUp />
            </button>
          </div>
        ) : (
          <span>{item.name}</span>
        )}
      </td>
      <td className="py-1 text-center px-2">{item.account_count}</td>
      <td className="py-1 text-center px-2">{item.email}</td>
      <td className="py-1 text-center px-2">{item.gender_origin}</td>
      <td className="py-1 text-center px-2">{item.birth_date}</td>
      <td className="py-1 text-center px-2">{item.phone_number}</td>
      <td className="py-1 text-center px-2">{item.last_login}</td>
      <td className="py-1 text-center px-2">
        {item.allow_marketing_push.toString()}
      </td>
      <td className="py-1 text-center px-2">{item.is_active.toString()}</td>
      <td className="py-1 text-center px-2">{item.created_at}</td>
      <td className="py-1 text-center px-2 cursor-pointer">
        <button type="button" onClick={toggleIsModifying}>
          Edit
        </button>
      </td>
      <td className="py-1 text-center px-2 cursor-pointer">
        <button type="button" onClick={handleDelete}>
          <BsTrash />
        </button>
      </td>
    </tr>
  );
}
