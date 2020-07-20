import React from 'react';
import '../index.css';
import PanelOne from '../components/PanelOne';
import PanelTwo from '../components/PanelTwo';
import PanelThree from '../components/PanelThree';
import PanelFour from '../components/PanelFour';
import PanelFive from '../components/PanelFive';
import PanelSix from '../components/PanelSix';
import PanelSeven from '../components/PanelSeven';
import PanelEight from '../components/PanelEight';
import { Helmet } from 'react-helmet';
export default () => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <html lang="en" />
      <title>Heril Saha's Portfolio</title>
      <meta
        name="description"
        content="Full Stack Developer and UX/UI Designer based in Alberta."
      />
    </Helmet>
    <PanelOne />
    <PanelTwo />
    <PanelThree />
    <PanelFour />
    <PanelFive />
    <PanelSix />
    <PanelSeven />
    <PanelEight />
  </React.Fragment>
);
