import React from 'react';

interface UserInfoItemProps {
  name: string;
  value: string;
}

export default function UserInfoItem({ name, value }: UserInfoItemProps) {
  return (
    <li className="lg:w-full md:w-1/2 w-full mb-3">
      <div className="h-full mr-3">
        <div className=" flex items-center bg-white rounded">
          <div className="text-sm flex-grow flex items-center">
            <h2 className="h-full w-1/2 py-2 px-3 text-center bg-slate-200 text-gray-900 title-font font-medium">
              {name}
            </h2>
            <p className=" w-1/2 text-sm text-center text-gray-500">{value}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
