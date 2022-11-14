import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';
import MainHeader from './MainHeader';

export default function MainLayout() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <main className="w-5/6 bg-white ">
        <MainHeader />
        <MainContent />
        <Footer />
      </main>
    </div>
  );
}
