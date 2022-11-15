import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const USER_NUM = 15;
const PAGENATION = 5;

const PREV = 'prev';
const NEXT = 'next';

interface PaginationProps {
  totalItems: number;
}

export default function Pagination({ totalItems }: PaginationProps) {
  const router = useRouter();
  const { filter, q, page } = router.query;
  const [index, setIndex] = useState(0);
  const pages = [1, 2, 3, 4, 5].map((item) => index * PAGENATION + item);
  const totalPage = Math.ceil(totalItems / USER_NUM);
  const isFirstIndex = index === 0;
  const isLastIndex = index === Math.floor(totalPage / PAGENATION);
  const currPage = page || '1';
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    if (name === PREV) {
      setIndex((prev) => prev - 1);
    } else if (name === NEXT) {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <nav className="flex justify-center py-2">
      <ul className="inline-flex items-center -space-x-px">
        {!isFirstIndex && (
          <button name={PREV} type="button" onClick={handleClick}>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}

        {pages.map((item) => {
          if (item <= totalPage) {
            return (
              <li key={item}>
                <Link
                  href={`?page=${item}&filter=${filter || ''}&q=${q || ''}`}
                  className={`${
                    item.toString() === currPage && 'bg-blue-200'
                  } py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  {item}
                </Link>
              </li>
            );
          }
        })}
        {!isLastIndex && (
          <button name={NEXT} type="button" onClick={handleClick}>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </ul>
    </nav>
  );
}
