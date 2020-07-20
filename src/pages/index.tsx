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
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <html lang="en" />
      <title>Heril Saha's Portfolio</title>
      <meta
        name="description"
        content="Full Stack Developer and UX/UI Designer based in Alberta."
      />
      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
      ></link>
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
