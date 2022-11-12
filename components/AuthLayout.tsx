import AuthFooter from './AuthFooter';
import AuthForm from './AuthForm';
import AuthHeader from './AuthHeader';

export default function AuthLayout() {
  return (
    <div className="w-screen flex items-center justify-center h-screen bg-slate-200 ">
      <section className="flex flex-col items-center justify-center h-screen  w-2/3">
        <AuthHeader />
        <AuthForm />
        <AuthFooter />
      </section>
    </div>
  );
}
