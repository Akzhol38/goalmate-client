import React from 'react';

import Category from '../components/Category';
import Header from '../components/Header';
import Widget from '../components/Widget';
import { Container } from '@mui/material';
import ContractContent from '../components/ContractContent';

const Contracts = () => {
  return (
    <div className="app">
      <Header />
      <Container maxWidth="xl">
        <div className="app__inner">
          <div>
            <Widget />
            <Category />
          </div>
          <div>
            <ContractContent />
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default Contracts;
