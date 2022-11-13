import React, { useReducer } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import AuthInput from './AuthInput';
import { ActionType, UserInfoType } from '../types/AuthTypes';

const SIGN_IN_URL = '/signin';
const SIGN_UP_URL = 'signup';

const ACTION_CONST = {
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD',
} as const;

const authReducer = (state: UserInfoType, action: ActionType) => {
  switch (action.type) {
    case ACTION_CONST.SET_EMAIL:
      return { ...state, email: action.data };
    case ACTION_CONST.SET_PASSWORD:
      return { ...state, password: action.data };
    default:
      throw new Error('Unknown Action');
  }
};

const EMAIL_INPUT = {
  name: 'EMAIL',
  placeholder: '이메일을 입력해주세요',
} as const;

const PASSWORD_INPUT = {
  name: 'PASSWORD',
  placeholder: '비밀번호를 입력해주세요',
} as const;

const initialState: UserInfoType = { email: '', password: '' };

export default function AuthForm() {
  const { pathname } = useRouter();
  const isLogin = pathname === SIGN_IN_URL;
  const [userInfo, dispatch] = useReducer(authReducer, initialState);
  const authService = useAuth();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      authService?.signIn(userInfo).then((data) => console.log(data));
    } else {
      authService?.signUp(userInfo).then((data) => console.log(data));
    }
  };
  return (
    <form
      action="submit"
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
          className="w-full text-xl bg-indigo-300 px-10 py-2 text-white rounded-xl"
          type="submit"
        >
          Login
        </button>
      </section>
      <Link
        href={isLogin ? SIGN_UP_URL : SIGN_IN_URL}
        className="text-sm text-indigo-500 self-center mt-5"
      >
        <span>{isLogin ? '회원가입' : '로그인'}하러 가기</span>
      </Link>
    </form>
  );
}
