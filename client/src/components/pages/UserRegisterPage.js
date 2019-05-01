import React from 'react';
import DefaultTemplate from '../templates/DefaultTemplate';
import Header from '../organisms/header/Header';
import Footer from '../organisms/footer/Footer';
import UserRegistration from '../organisms/registration/UserRegistration';

const UserRegisterPage = () => {
  return (
    <DefaultTemplate header={<Header />} footer={<Footer />}>
      <UserRegistration />
    </DefaultTemplate>
  );
};

export default UserRegisterPage;
