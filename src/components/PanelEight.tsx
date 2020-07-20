import React, { useRef, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useIntersection } from 'react-use';
import { gsap } from 'gsap';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '2.5rem',
      paddingBottom: '2rem',
      backgroundColor: 'rgb(209, 188, 188, 0.61)',
      overflow: 'hidden',
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

  // Ref for intersection observer
  const sectionRef7 = useRef(null);

  const intersection = useIntersection(sectionRef7, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  });

  useEffect(() => {
    // Fade in animation when scroll in
    const fadeIn = (element: any) => {
      gsap.to(element, 1, {
        opacity: 1,
        y: -0,
        ease: 'power3.out',
        stagger: {
          amount: 0,
        },
      });
    };

    // Fade out animation when scroll out
    const fadeOut = (element: any) => {
      gsap.to(element, 1, {
        opacity: 0,
        y: -20,
        ease: 'power3.out',
      });
    };
    intersection && intersection.intersectionRatio < 0.3
      ? // Not Reached
        fadeOut('.fadeIn7')
      : fadeIn('.fadeIn7');
  }, [intersection]);

  return (
    // Defining Ref for intersection observer
    <div ref={sectionRef7} className={classes.root}>
      <div className={classes.iconContainer}>
        {/*Social Media Icons*/}
        <div className="fadeIn7">
          <a href="https://github.com/HerilS" target="_blank" rel="noopener noreferrer">
            <img src="img/Icons/github.svg" alt="Github" className={classes.icons} />
          </a>
        </div>
        <div className="fadeIn7">
          <a href="https://www.instagram.com/herilsaha" target="_blank" rel="noopener noreferrer">
            <img src="img/Icons/instagram.svg" alt="Instagram" className={classes.icons} />
          </a>
        </div>
        <div className="fadeIn7">
          <a href="https://ca.linkedin.com/in/herilsaha" target="_blank" rel="noopener noreferrer">
            <img src="img/Icons/linkedin.svg" alt="LinkedIn" className={classes.icons} />
          </a>
        </div>
      </div>
      <div className="fadeIn7">
        <div className={classes.copyright}>
          {/*Copy right Notice*/}
          <span>Copyright 2019-{new Date().getFullYear()} Heril Saha. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}
