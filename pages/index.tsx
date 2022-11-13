import type { NextPage } from 'next';
import MainLayout from '../components/MainLayout';
import SEO from '../components/SEO';

const Home: NextPage = () => {
  return (
    <div>
      <SEO text="8팀 마지막 과제" />
      <MainLayout />
    </div>
  );
};

export default Home;
