import React, { useReducer } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { ActionType } from '../models/authtypes';
import AuthInput from './AuthInput';

const EMAIL_INPUT = {
  name: 'EMAIL',
  placeholder: '이메일을 입력해주세요',
} as const;

const PASSWORD_INPUT = {
  name: 'PASSWORD',
  placeholder: '비밀번호를 입력해주세요',
} as const;

type UserInfoType = {
  email: string;
  password: string;
};

const ACTION_CONST = {
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD',
} as const;

const initialState: UserInfoType = { email: '', password: '' };

const reducer = (state: UserInfoType, action: ActionType) => {
  switch (action.type) {
    case ACTION_CONST.SET_EMAIL:
      return { ...state, email: action.data };
    case ACTION_CONST.SET_PASSWORD:
      return { ...state, password: action.data };
    default:
      throw new Error('Unknown Action');
  }
};

export default function AuthForm() {
  const [userInfo, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="h-1/2 flex flex-col w-2/3 bg-white rounded-xl overflow-hidden "
    >
      <header className="flex justify-start bg-slate-100 text-indigo-300 items-center mb-8 w-full p-3">
        <div className="text-xl mr-2">
          <AiOutlineUser />
        </div>
        <span className="text-xl">Login</span>
      </header>
      <section className="px-5">
        <AuthInput
          name={EMAIL_INPUT.name}
          text={userInfo.email}
          placeholder={EMAIL_INPUT.placeholder}
          dispatch={dispatch}
        />
        <AuthInput
          name={PASSWORD_INPUT.name}
          text={userInfo.password}
          placeholder={PASSWORD_INPUT.placeholder}
          dispatch={dispatch}
        />
        <button
          onClick={handleSubmit}
          className="w-full text-xl bg-indigo-300 px-10 py-2 text-white rounded-xl"
          type="button"
        >
          Login
        </button>
      </section>
    </form>
  );
}
