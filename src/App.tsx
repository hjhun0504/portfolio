import React from 'react';

import Header from '@components/Header/Header';
import Hello from '@components/Hello/Hello';
import Profile from '@components/Profile/Profile';
import Works from '@components/Works/Works';

import { devProjects, gameDesignProjects } from '@data/index';

import './App.scss';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hello />
        <Profile />
        <Works title="Dev Projects" projects={devProjects} />
        <Works title="Game Design Projects" projects={gameDesignProjects} />
      </main>
    </div>
  );
};

export default App;
