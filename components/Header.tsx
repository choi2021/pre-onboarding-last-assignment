import { DiReact } from 'react-icons/di';

export default function Header({ isHome }: { isHome: boolean }) {
  return (
    <header className="w-full h-20 flex justify-center items-center mb-2 px-2">
      <div className=" h-full text-blue-400 mr-2 flex justify-center items-center">
        <DiReact className="w-full h-2/3" />
      </div>
      <h1
        className={`${
          isHome ? 'text-2xl' : 'text-4xl'
        } font-bold text-blue-400 `}
      >
        Preface
      </h1>
    </header>
  );
}
