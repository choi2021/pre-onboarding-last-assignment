import { DiReact } from 'react-icons/di';

export default function AuthHeader() {
  return (
    <header className="w-full flex justify-center items-center h-11 mb-10">
      <div className="text-6xl text-blue-400 mr-4 ">
        <DiReact />
      </div>
      <span className="text-3xl font-bold text-blue-400 mr-4">
        8팀 Last Assignment
      </span>
    </header>
  );
}
