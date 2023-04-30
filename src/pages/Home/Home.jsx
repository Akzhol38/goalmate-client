import React from 'react';
import './Home.scss';

import Category from '../../components/Category';
import Header from '../../components/Header';
import MainContent from '../../components/MainContent';
import OtherAccount from '../../components/OtherAccount';
import Widget from '../../components/Widget';
import { Container } from '@mui/material';
const Home = () => {
  const [currentCategory, setCurrentCategory] = React.useState(0);
  return (
    <div className="app">
      <Header />
      <Container maxWidth="xl">
        <div className="app__inner">
          <div>
            <Widget />
            <Category currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
          </div>
          <div>
            <MainContent />
          </div>
          <div>
            <OtherAccount />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
