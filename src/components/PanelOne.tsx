import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { animateScroll as scroll, scroller } from 'react-scroll';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    landing: {
      height: '100vh',
      backgroundColor: '#D1BCBC',
      position: 'relative',
      [theme.breakpoints.down('xl')]: {
        minHeight: '52rem',
      },
      [theme.breakpoints.down('xs')]: {
        minHeight: '32rem',
      },
    },
    landingTopName: {
      display: 'block',
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bolder',
      color: 'white',
      padding: '1.5rem',
      fontSize: '1.5rem',
      [theme.breakpoints.down(1084)]: {
        display: 'none',
      },
    },
    homeImageContainer: {
      display: 'inline',
      float: 'right',
      [theme.breakpoints.down('sm')]: {
        float: 'none',
        height: 'auto',
        display: 'block',
      },
    },
    homeImage: {
      width: '50rem',
      display: 'inline',
      [theme.breakpoints.up(1550)]: {
        width: '63rem',
      },
      [theme.breakpoints.down(1440)]: {
        width: '45rem',
      },
      [theme.breakpoints.down(1084)]: {
        width: '36rem',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      },

      [theme.breakpoints.down('xs')]: {
        width: '19rem',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    landingTextContainer: {
      float: 'left',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down(960)]: {
        float: 'none',
        height: 'auto',
        display: 'block',
        paddingTop: '2rem',
      },
    },
    homeTextContainer: {
      margin: 'auto',
      paddingLeft: '1.5rem',
      [theme.breakpoints.down(960)]: {
        display: 'block',
        textAlign: 'center',
        padding: 0,
      },
    },
    landingTopNameContainer: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    homeText: {
      color: 'rgb(47, 54, 118, 1)',
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bolder',
      fontSize: '5rem',
      [theme.breakpoints.down('md')]: {
        fontSize: '3rem',
      },
      [theme.breakpoints.down('xs')]: {
        paddingBottom: '0.7rem',
        fontSize: '2rem',
      },
    },
    homeButton: {
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bold',
      color: 'white',
      padding: '0.7rem',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      display: 'block',
      textTransform: 'none',
      backgroundColor: 'rgb(47, 54, 118, 1)',
      [theme.breakpoints.down(960)]: {
        margin: 'auto',
        paddingRight: '1rem',
        paddingLeft: '1rem',
      },
      '&:hover': {
        backgroundColor: 'rgb(47, 54, 118, 0.95)',
      },
    },
    homeLocated: {
      padding: '1.5rem',
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bold',
      color: 'rgb(47, 54, 118, 1)',
      paddingBottom: '3rem',
      [theme.breakpoints.down(960)]: {
        padding: '0.8rem',
        textAlign: 'center',
      },
    },
    homeLogoContainer: {
      position: 'absolute',
      padding: '0.5rem',
      right: 0,
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    homeLogo: {
      width: '3rem',
      paddingLeft: '1rem',
    },
  }),
);

const App = () => {
  var Scroll = require('react-scroll');
  var scroll = Scroll.animateScroll;
  const sendMessage = () => {
    scroller.scrollTo('Contact', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };
  const classes = useStyles();
  return (
    <div className={classes.landing}>
      <div className={classes.homeLogoContainer}>
        <a href="https://github.com/HerilS" target="_blank" rel="noopener noreferrer">
          <img src="img/Icons/github.svg" alt="Github" className={classes.homeLogo} />
        </a>
        <a href="https://www.instagram.com/herilsaha" target="_blank" rel="noopener noreferrer">
          <img src="img/Icons/instagram.svg" alt="Instagram" className={classes.homeLogo} />
        </a>
        <a href="https://ca.linkedin.com/in/herilsaha" target="_blank" rel="noopener noreferrer">
          <img src="img/Icons/linkedin.svg" alt="LinkedIn" className={classes.homeLogo} />
        </a>
      </div>
      <div className={classes.homeImageContainer}>
        <img src="img/Illustrations/home.svg" className={classes.homeImage} alt="homepage" />
      </div>
      <div className={classes.landingTextContainer}>
        <div className={classes.landingTopNameContainer}>
          <span className={classes.landingTopName}>Heril Saha.</span>
        </div>
        <div className={classes.homeTextContainer}>
          <div className={classes.homeText}>
            <span>
              Hi, I'm
              <br />
              Heril Saha.
            </span>
          </div>
          <Button variant="contained" className={classes.homeButton} onClick={sendMessage}>
            Send Message
          </Button>
        </div>
        <div className={classes.homeLocated}>
          <span>
            Located in
            <br />
            Canada, <br />
            Edmonton
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
