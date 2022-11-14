import { useRouter } from 'next/router';
import React from 'react';

export default function TableSelect() {
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    router.push(`?filter=${value}`);
  };
  return (
    <select
      onChange={handleChange}
      className="border-1 border-solid border-slate-300 outline-none select select-error w-1/6 rounded-md border  text-center"
    >
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="staff">Staff</option>
    </select>
  );
}
