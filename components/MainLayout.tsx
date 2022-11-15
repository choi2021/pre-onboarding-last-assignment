import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';
import MainHeader from './MainHeader';
import { UserTableProvider } from '../context/UserTableContext';

export default function MainLayout() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <main className="flex flex-col w-5/6 bg-white h-full">
        <MainHeader />
        <UserTableProvider>
          <MainContent />
        </UserTableProvider>
        <Footer />
      </main>
    </div>
  );
}
