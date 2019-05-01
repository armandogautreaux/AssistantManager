import React from 'react';
import DefaultTemplate from '../templates/DefaultTemplate';
import Header from '../organisms/header/Header';
import Footer from '../organisms/footer/Footer';
import UserLogin from '../organisms/login/UserLogin';

const UserLoginPage = () => {
  return (
    <DefaultTemplate header={<Header />} footer={<Footer />}>
      <UserLogin />
    </DefaultTemplate>
  );
};

export default UserLoginPage;
