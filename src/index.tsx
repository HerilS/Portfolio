import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import PanelOne from './components/PanelOne';
import PanelTwo from './components/PanelTwo';
import PanelThree from './components/PanelThree';
import PanelFour from './components/PanelFour';
import PanelFive from './components/PanelFive';
import PanelSix from './components/PanelSix';
import PanelSeven from './components/PanelSeven';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <PanelOne />
    <PanelTwo />
    <PanelThree />
    <PanelFour />
    <PanelFive />
    <PanelSix />
    <PanelSeven />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
