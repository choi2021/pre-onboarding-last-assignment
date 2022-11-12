import React from 'react';
import { AiOutlineUser, AiFillLock, AiOutlineMail } from 'react-icons/ai';

export default function AuthForm() {
  return (
    <form className="h-1/2 flex flex-col w-2/3 bg-white rounded-xl overflow-hidden ">
      <header className="flex justify-start bg-slate-100 items-center mb-8 w-full p-3">
        <div className="text-xl mr-2">
          <AiOutlineUser />
        </div>
        <span className="text-xl">Login</span>
      </header>
      <section className="px-5">
        <div className="flex items-center mb-8  border-indigo-100 border-2 border-solid py-1 px-4">
          <div className="text-2xl text-indigo-300 mr-3">
            <AiOutlineMail />
          </div>
          <input
            placeholder="email을 입력해주세요"
            className="w-full outline-none"
            id="login-email"
            type="text"
          />
        </div>
        <div className="flex items-center mb-8  border-indigo-100 border-2 border-solid py-1 px-4">
          <div className="text-2xl text-indigo-300 mr-3">
            <AiFillLock />
          </div>
          <input
            placeholder="비밀번호를 입력해주세요"
            className="w-full outline-none"
            id="login-password"
            type="text"
          />
        </div>
        <button
          className="w-full text-xl bg-indigo-300 px-10 py-2 text-white rounded-xl"
          type="button"
        >
          Login
        </button>
      </section>
    </form>
  );
}
