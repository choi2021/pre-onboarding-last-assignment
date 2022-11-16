import React from 'react';
import { SelectType } from '../models/InfoTypes';

interface TableSelectItemProps {
  item: SelectType;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function TableSelectItem({
  item,
  onChange,
}: TableSelectItemProps) {
  return (
    <select
      onChange={onChange}
      name={item[0].name}
      className="w-full text-xs border-1 border-solid border-slate-300 outline-none select select-error rounded-md border  text-center"
    >
      {item.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}
