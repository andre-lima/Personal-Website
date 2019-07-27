import React from 'react';
import { Header } from './components/Header/Header';
import { MainTitle } from './components/MainTitle/MainTitle';
import './App.scss';

const App: React.FC = () => {
  return (
  <main>
    <Header />
    <MainTitle />
  </main>
  );
}

export default App;
