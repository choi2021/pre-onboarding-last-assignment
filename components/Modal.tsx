import React, { useRef, useState } from 'react';
import { useUserTableDispatch } from '../hooks/useUserTable';
import { UserTableType } from '../models/InfoTypes';

interface ModalProps {
  column: string[];
}

export default function Modal({ column }: ModalProps) {
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    gender_origin: 1,
    birth_date: '',
    phone_number: '',
  });
  const dispatch = useUserTableDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, gender_origin, birth_date, phone_number } = formInfo;
    const user = {
      id: Date.now(),
      name,
      account_count: 1,
      email,
      gender_origin,
      birth_date,
      phone_number,
      last_login: new Date().toString(),
      allow_marketing_push: false,
      is_active: true,
      created_at: new Date().toString(),
      is_staff: false,
    };
    dispatch({ type: 'ADD_DATA', add: user });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setFormInfo((prev) => ({ ...prev, [name]: +value }));
  };

  return (
    <form
      className="w-full max-w-lg h-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white rounded p-5 flex flex-col"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-400 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            name="name"
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="x@xxx.com"
            name="email"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="w-full flex -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            성별코드
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={handleSelectChange}
              name="gender_origin"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className=" px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            생년월일
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="date"
            placeholder="yyyy-mm-dd "
            onChange={handleInputChange}
            name="birth_date"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-city"
          >
            휴대폰번호
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="xxx-xxxx-xxx"
            name="phone_number"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button
        type="submit"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        제출
      </button>
    </form>
  );
}
