import React from 'react';
import DefaultTemplate from '../templates/DefaultTemplate';
import Header from '../organisms/header/Header';
import Footer from '../organisms/footer/Footer';
import SearchBox from '../organisms/searchBox/SearchBox';

const HomePage = () => {
  return (
    <DefaultTemplate header={<Header />} footer={<Footer />}>
      <SearchBox />
    </DefaultTemplate>
  );
};

export default HomePage;
