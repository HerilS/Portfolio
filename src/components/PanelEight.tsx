import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '2.5rem',
      paddingBottom: '2rem',
      backgroundColor: 'rgb(209, 188, 188, 0.61)',
    },
    iconContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    icons: {
        width: '5rem',
        paddingLeft: '3rem',
        paddingRight: '3rem',
        [theme.breakpoints.down(520)]: {
            paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
          },
    },
    copyright: {
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bolder',
        color: 'rgb(47, 54, 118, 1)',
        textAlign: 'center',
        paddingTop: '2rem',
        paddingRight: '1.2rem',
        paddingLeft: '1.2rem',
    },
  }),
);
export default function PanelEight() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.iconContainer}>
      <a href="https://github.com/HerilS" target="_blank" rel="noopener noreferrer">
          <img src="img/Icons/github.svg" alt="Github" className={classes.icons} />
        </a>
        <a href="https://www.instagram.com/herilsaha" target="_blank" rel="noopener noreferrer">
          <img src="img/Icons/instagram.svg" alt="Instagram" className={classes.icons} />
        </a>
        <a href="https://ca.linkedin.com/in/herilsaha" target="_blank" rel="noopener noreferrer">
          <img src="img/Icons/linkedin.svg" alt="LinkedIn" className={classes.icons} />
        </a>
      </div>
      <div className={classes.copyright}>
        <span>Copyright 2019-{new Date().getFullYear()} Heril Saha. All rights reserved.</span>
      </div>
    </div>
  );
}
