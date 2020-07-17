import React from 'react';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: 'auto',
      backgroundColor: '#D1BCBC',
      display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          [theme.breakpoints.down(1265)]: {
            paddingTop: '5rem',
        },
          [theme.breakpoints.down(927)]: {
          paddingTop: 0,
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr, 1fr',
      },
    },
    title: {
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bolder',
      color: '#2F3676',
      fontSize: '4rem',
    },
    icon: {
      color: '#69A1AC',
      fontSize: '3rem',
      verticalAlign: 'middle',
      paddingRight: '1.5rem',
    },
    skillList: {
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'lighter',
      color: '#2F3676',
      fontSize: '2rem',
    },
    skillBody: {
      marginTop: 'auto',
      marginBottom: 'auto',
      paddingBottom: '5rem',
      paddingLeft: '5rem',
      [theme.breakpoints.down(927)]: {
        gridRowStart: '2',
        gridColumnStart: '1',
        margin: 'auto',
        paddingLeft: 0,
      },
    },
    skillItemContainer: {
      paddingBottom: '0.6rem',
      paddingTop: '0.5rem',
    },
    imageContainer: {
      float: 'right',
      [theme.breakpoints.down(927)]: {
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        margin: 'auto',
        gridRowStart: '1',
        gridColumnStart: '1',
      },
    },
      image: {
        [theme.breakpoints.down(1265)]: {
            width: '35rem',
        },
      [theme.breakpoints.down(580)]: {
        width: '20rem',
        },
    },
  }),
);
export default function PanelThree() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.skillBody}>
        <span className={classes.title}>Skills</span>
        <div className={classes.skillItemContainer}>
          <DoneOutlineRoundedIcon className={classes.icon} />
          <span className={classes.skillList}>ReactJS</span>
        </div>
        <div className={classes.skillItemContainer}>
          <DoneOutlineRoundedIcon className={classes.icon} />
          <span className={classes.skillList}>Material UI</span>
        </div>
        <div className={classes.skillItemContainer}>
          <DoneOutlineRoundedIcon className={classes.icon} />
          <span className={classes.skillList}>MongoDB</span>
        </div>
        <div className={classes.skillItemContainer}>
          <DoneOutlineRoundedIcon className={classes.icon} />
          <span className={classes.skillList}>GraphQL</span>
        </div>
        <div className={classes.skillItemContainer}>
          <DoneOutlineRoundedIcon className={classes.icon} />
          <span className={classes.skillList}>UI/UX Design</span>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <img src="img/Illustrations/skills.svg" className={classes.image} />
      </div>
    </div>
  );
}
