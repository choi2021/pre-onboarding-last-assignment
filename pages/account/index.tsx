import React from 'react';
import AccountContent from '../../components/account/AccountContent';
import MainLayout from '../../components/MainLayout';
import SEO from '../../components/SEO';

export default function index() {
  return (
    <>
      <SEO text="8팀 마지막 과제" />
      <MainLayout>
        <AccountContent />
      </MainLayout>
    </>
  );
}
