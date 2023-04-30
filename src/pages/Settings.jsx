import React from 'react';

import Category from '../components/Category';
import Header from '../components/Header';
import Widget from '../components/Widget';
import { Container } from '@mui/material';
import SettingsContent from '../components/SettingsContent';
import SettingsOptions from '../components/SettingsOptions';

const Settings = () => {
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
            <SettingsContent />
          </div>
          <div>
            <SettingsOptions />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Settings;
