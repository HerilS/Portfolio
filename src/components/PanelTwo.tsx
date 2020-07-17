import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'rgb(209, 188, 188, 0.61)',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      height: '20rem',
      [theme.breakpoints.down(1285)]: {
        height: '24rem',
        textAlign: 'left',
      },
      [theme.breakpoints.down(928)]: {
        height: 'auto',
      },
    },
    text: {
      textAlign: 'center',
      paddingTop: '3rem',
      paddingBottom: '3rem',
      [theme.breakpoints.down(1285)]: {
        textAlign: 'left',
      },
    },
    title: {
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bolder',
      color: '#2F3676',
      fontSize: '4rem',
      [theme.breakpoints.down(1285)]: {
        paddingLeft: '2rem',
      },
      [theme.breakpoints.down(600)]: {
        fontSize: '3rem',
      },
    },
    paragraph: {
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'normal',
      color: '#2F3676',
      fontSize: '2rem',
      paddingRight: '2rem',
      paddingLeft: '2rem',
      [theme.breakpoints.down(1285)]: {
        paddingRight: '10rem',
      },
      [theme.breakpoints.down(928)]: {
        paddingRight: '2rem',
      },
      [theme.breakpoints.down(600)]: {
        fontSize: '1.5rem',
        paddingBottom: '1.2rem',
      },
    },
    image: {
      paddingLeft: '2rem',
      width: '40rem',
      [theme.breakpoints.down(1285)]: {
        display: 'none',
      },
    },
    image2: {
      paddingRight: '2rem',
      width: '40rem',
      [theme.breakpoints.down(928)]: {
        display: 'none',
      },
    },
    image3: {
      display: 'none',
      [theme.breakpoints.down(928)]: {
        display: 'block',
        position: 'absolute',
        right: 0,
        bottom: 0,
      },
    },
  }),
);
export default function PanelTwo() {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <img src="/img/Leaves/LeafCollection2.svg" className={classes.image} />
      <div className={classes.text}>
        <div className={classes.title}>Creator of Nixode</div>
        <div className={classes.paragraph}>
          A Website That Tracks Cryptocurrency Prices and Allows Advanced Comparisons Between Them.
        </div>
      </div>
      <img src="/img/Leaves/LeafCollection1.svg" className={classes.image2} />
      <img src="/img/Leaves/LeafCollection3.svg" className={classes.image3} />
    </div>
  );
}
