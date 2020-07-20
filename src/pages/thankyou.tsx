import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: '#D1BCBC',
    },
    text: {
      marginTop: 'auto',
      textAlign: 'center',
      color: 'rgb(47, 54, 118, 1)',
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bolder',
      fontSize: '5rem',
      zIndex: 3,
    },
    sub: {
      fontSize: '2rem',
    },
    buttonContainer: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
    },
    button: {
      marginTop: '1rem',
      marginBottom: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '7rem',
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bold',
      color: 'white',
      padding: '0.7rem',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      display: 'block',
      textTransform: 'none',
      backgroundColor: 'rgb(47, 54, 118, 1)',
      '&:hover': {
        backgroundColor: 'rgb(47, 54, 118, 0.95)',
      },
    },
    link: {
      width: '7rem',
      color: 'white',
      textDecoration: 'none',
    },
    padding: {
      paddingBottom: '10rem',
    },
    img1: {
      position: 'absolute',
      transform: 'rotate(180deg)',
      opacity: '0.7',
    },
    img2: {
      position: 'absolute',
      bottom: 0,
      left: -50,
      width: '20rem',
      opacity: '0.85',
    },
    img3: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '13rem',
      opacity: '0.85',
    },
    img4: {
      right: '0.2rem',
      width: '10rem',
      position: 'absolute',
      transform: 'rotate(180deg)',
      opacity: '0.7',
    },
  }),
);

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src="/img/Leaves/WhiteLeaves.svg" className={classes.img1} />
      <img src="/img/Leaves/LeafCollection2.svg" className={classes.img2} />
      <img src="/img/Leaves/LeafCollection1.svg" className={classes.img3} />
      <img src="/img/Leaves/Leaf3.svg" className={classes.img4} />
      <div className={classes.text}>
        <div>
          <Typist
            cursor={{
              show: true,
              blink: true,
              element: '|',
              hideWhenDone: true,
              hideWhenDoneDelay: 10,
            }}
          >
            Thank you
          </Typist>
        </div>
        <div>
          <Typist
            className={classes.sub}
            cursor={{
              show: true,
              blink: true,
              element: '|',
              hideWhenDone: true,
              hideWhenDoneDelay: 10,
            }}
          >
            For Submitting an Inquiry
          </Typist>
        </div>
      </div>

      <div className={classes.buttonContainer}>
        <Link to="/" className={classes.link}>
          <Button variant="contained" className={classes.button}>
            Go Back
          </Button>
        </Link>
      </div>

      <div className={classes.padding}></div>
    </div>
  );
};
