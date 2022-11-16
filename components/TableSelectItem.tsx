import React from 'react';
import { useRouter } from 'next/router';
import { SelectType } from '../models/InfoTypes';

interface TableSelectItemProps {
  item: SelectType;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function TableSelectItem({
  item,
  onChange,
}: TableSelectItemProps) {
  const router = useRouter();
  const { query } = router;
  const { name } = item[0];
  return (
    <select
      onChange={onChange}
      name={name}
      value={query[name]}
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
