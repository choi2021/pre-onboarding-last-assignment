import { useRouter } from 'next/router';
import AuthFooter from './AuthFooter';
import AuthForm from './AuthForm';
import AuthHeader from './AuthHeader';

const SIGN_IN_URL = '/signin';
const SIGN_UP_URL = '/signup';

export default function AuthLayout() {
  const { pathname } = useRouter();
  const isLogin = pathname === SIGN_IN_URL;
  return (
    <div className="w-screen flex items-center justify-center h-screen bg-slate-200 ">
      <section className="flex flex-col items-center justify-center h-screen  w-2/3">
        <AuthHeader />
        <AuthForm
          name={isLogin ? 'Login' : 'Register'}
          isLogin={isLogin}
          url={isLogin ? SIGN_UP_URL : SIGN_IN_URL}
        />
        <AuthFooter />
      </section>
    </div>
  );
}
