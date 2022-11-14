import type { NextPage } from 'next';
import MainLayout from '../components/MainLayout';
import SEO from '../components/SEO';

const Home: NextPage = () => {
  return (
    <>
      <SEO text="8팀 마지막 과제" />
      <MainLayout />
    </>
  );
};

export default Home;
