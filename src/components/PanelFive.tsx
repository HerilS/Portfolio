import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paddingContainer: {
      paddingTop: '3rem',
      paddingBottom: '3rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      backgroundColor: '#D1BCBC',
      overflow: 'auto',
      [theme.breakpoints.down(1138)]: {
        gridTemplateColumns: '1fr',
        gridTemplateRows: '2rem, 1fr 1fr',
      },
    },
    title: {
      zIndex: 3,
      gridColumnStart: '1',
      gridColumnEnd: '3',
      textAlign: 'center',
      color: '#2F3676',
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bolder',
      fontSize: '4rem',
      paddingBottom: '3rem',
    },
    planningStrategist: {
      gridColumnStart: '1',
      margin: 'auto',
      marginTop: 0,
    },
    planningStrategistList: {
      paddingLeft: '9rem',
      paddingTop: '0.8rem',
      paddingRight: '5rem',
      [theme.breakpoints.down(1138)]: {
        paddingLeft: '2.5rem',
        paddingRight: '4rem',
      },
    },
    planningStrategistTitle: {
      textAlign: 'center',
      color: '#2F3676',
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bolder',
      fontSize: '3rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
        textAlign: 'center',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '2rem',
        textAlign: 'left',
        paddingLeft: '2.5rem',
      },
    },
    planningStrategistItem: {
      color: '#2F3676',
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'normal',
      fontSize: '1.7rem',
      paddingBottom: '1.35rem',
      [theme.breakpoints.down(1138)]: {
        fontSize: '1.2rem',
      },
    },
    YAL: {
      gridColumnStart: '2',
      margin: 'auto',
      marginTop: 0,
      [theme.breakpoints.down(1138)]: {
        gridColumnStart: '1',
        gridRowStart: '2',
      },
    },
    YALList: {
      paddingTop: '0.8rem',
      paddingRight: '6rem',
      paddingLeft: '6rem',
      [theme.breakpoints.down(1138)]: {
        paddingLeft: '2.5rem',
        paddingRight: '4rem',
      },
    },
    YALTitle: {
      textAlign: 'center',
      color: '#2F3676',
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bolder',
      fontSize: '3rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
        textAlign: 'center',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '2rem',
        textAlign: 'left',
        paddingLeft: '2.5rem',
      },
    },
    YALItem: {
      color: '#2F3676',
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'normal',
      fontSize: '1.7rem',
      paddingBottom: '1.35rem',
      [theme.breakpoints.down(1138)]: {
        fontSize: '1.2rem',
      },
    },
    bigImage: {
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    imageContainer: {
      gridColumnStart: '1',
      gridColumnEnd: '3',
    },
    smallImage1Container: {
      display: 'none',
      [theme.breakpoints.down('xs')]: {
        paddingTop: '1.2rem',
        paddingBottom: '2rem',
        display: 'block',
        gridColumnStart: '1',
        gridRowStart: '3',
      },
    },
    smallImage2Container: {
      overflow: 'auto',
      display: 'none',
      [theme.breakpoints.down('xs')]: {
        paddingTop: '1.2rem',
        paddingBottom: '2rem',
        display: 'block',
        gridColumnStart: '1',
        textAlign: 'center',
      },
    },
    smallImage1: {
      width: '100%',
    },
    smallImage2: {
      width: '85%',
    },
    leaf: {
      position: 'absolute',
      width: '6.5rem',
      paddingLeft: '5rem',
      left: 0,
      top: 'auto',
      transform: 'rotate(180deg) scaleX(-1)',
      [theme.breakpoints.down(996)]: {
        width: '8rem',
        paddingLeft: '2rem',
      },
      [theme.breakpoints.down(667)]: {
        width: '6rem',
        paddingLeft: '2rem',
        opacity: '0.7',
      },
    },
  }),
);
export default function PanelFive() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src="img/Leaves/Leaf3.svg" className={classes.leaf} />
      <div className={classes.paddingContainer}>
        <div className={classes.title}>
          <span>City Youth Council</span>
        </div>
        <div className={classes.planningStrategist}>
          <div className={classes.planningStrategistTitle}>
            <span>Planning Strategist</span>
          </div>
          <ul className={classes.planningStrategistList}>
            <li className={classes.planningStrategistItem}>
              Showed design flaws in the past City Youth Council website
            </li>
            <li className={classes.planningStrategistItem}>
              Found the lack of accessibility on mobile devices and problems with search engine
              optimization, and soon pushed for a redesign of City Youth Council's website
            </li>
            <li className={classes.planningStrategistItem}>
              Created concept designs for the new website using Figma
            </li>
            <li className={classes.planningStrategistItem}>
              City Youth Council website gets complete revision using a website builder, Wix,
              instead of traditional methods because of complexity reasons
            </li>
          </ul>
        </div>

        <div className={classes.smallImage1Container}>
          <img src="img/Illustrations/smallVar1.svg" className={classes.smallImage1} />
        </div>

        <div className={classes.YAL}>
          <div className={classes.YALTitle}>
            <span>Youth-at-Large Member</span>
          </div>
          <ul className={classes.YALList}>
            <li className={classes.YALItem}>
              Sat on Health and Wellness subcommittee to plan city wide events to tackle the mental
              and physical issues in youth
            </li>
            <li className={classes.YALItem}>
              Designed various posters for the Video Campaign Group to spread awareness to the
              dangers of vaping products
            </li>
            <li className={classes.YALItem}>
              Led social media for the Vaping Info Report Group to spread awareness to the dangers
              of vaping products
            </li>
            <li className={classes.YALItem}>
              Member of Content Creation Group which specializes in designing and planning info and
              images to be released on social media
            </li>
          </ul>
        </div>
        <div className={classes.smallImage2Container}>
          <img src="img/Illustrations/smallVar2.svg" className={classes.smallImage2} />
        </div>

        <div className={classes.imageContainer}>
          <img src="img/Illustrations/Variations.svg" className={classes.bigImage} />
        </div>
      </div>
    </div>
  );
}
