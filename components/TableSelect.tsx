import { useRouter } from 'next/router';
import React from 'react';

type SelectType = {
  name: string;
  value: string;
};

interface TableSelectProps {
  select: SelectType[];
}

export default function TableSelect({ select }: TableSelectProps) {
  const router = useRouter();
  const { q, page } = router.query;
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    let url = `?page=${page}`;
    if (value === 'active' || value === 'inactive') {
      url += `&active=${value}`;
    }
    if (value === 'staff' || value === 'client') {
      url += `&staff=${value}`;
    }
    if (q) {
      url += `&q=${q}`;
    }
    router.push(url);
  };
  return (
    <select
      onChange={handleChange}
      className="border-1 border-solid border-slate-300 outline-none select select-error w-1/6 rounded-md border  text-center"
    >
      {select.map((item) => (
        <option key={item.name} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
