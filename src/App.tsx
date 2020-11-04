import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { MainPanel } from './components/MainPanel/MainPanel';

export default (): JSX.Element => {
  return (
    <Router>
      <MainPanel />
    </Router>
  );
}
