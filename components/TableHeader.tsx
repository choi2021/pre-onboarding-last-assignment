import React, { useState } from 'react';
import { useRouter } from 'next/router';
import TableSelect from './TableSelect';

interface TableHeaderProps {
  toggleModal: () => void;
}

export default function TableHeader({ toggleModal }: TableHeaderProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const { filter } = router.query;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (filter) {
      router.push(`/?filter=${filter}&q=${query}`);
    } else {
      router.push(`/?q=${query}`);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const handleClick = () => {
    toggleModal();
  };

  return (
    <header className="flex justify-between items-center p-2">
      <TableSelect />
      <form className="relative" onSubmit={handleSubmit}>
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          className="outline-none block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search User"
          value={query}
          onChange={handleChange}
        />
      </form>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        data-modal-toggle="authentication-modal"
        onClick={handleClick}
      >
        Toggle modal
      </button>
    </header>
  );
}
