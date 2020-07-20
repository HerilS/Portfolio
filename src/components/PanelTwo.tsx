import React, { useRef, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useIntersection } from 'react-use';
import { gsap } from 'gsap';

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
      paddingTop: '8rem',
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
  // Ref for Intersection Observer
  const sectionRef1 = useRef(null);

  const intersection = useIntersection(sectionRef1, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  // GSAP Animation on Intersection Observer View
  useEffect(() => {
    // Fading In animation on Scroll in
    const fadeIn = (element: any) => {
      gsap.to(element, 1, {
        opacity: 1,
        y: -80,
        ease: 'power3.out',
        stagger: {
          amount: 0,
        },
      });
    };

    // Fading In animation on Scroll out
    const fadeOut = (element: any) => {
      gsap.to(element, 1, {
        opacity: 0,
        y: -20,
        ease: 'power3.out',
      });
    };

    intersection && intersection.intersectionRatio < 0.5
      ? // Not Reached
        fadeOut('.fadeIn1')
      : fadeIn('.fadeIn1');
  }, [intersection]);

  const classes = useStyles();
  return (
    <div className={classes.body}>
      {/*Image on left*/}
      <img src="/img/Leaves/LeafCollection2.svg" alt="Leaf" className={classes.image} />

      {/*Defining Ref for intersection observer*/}
      <div ref={sectionRef1} className={classes.text}>
        <div className={classes.title}>
          {/*Title*/}
          <div className="fadeIn1">Creator of Nixode</div>
        </div>
        <div className={classes.paragraph}>
          <div className="fadeIn1">
            {/*Paragraph Underneath*/}A Website That Tracks Cryptocurrency Prices and Allows
            Advanced Comparisons Between Them
          </div>
        </div>
      </div>
      {/*Image on right*/}
      <img src="/img/Leaves/LeafCollection1.svg" alt="Leaf" className={classes.image2} />

      {/*Mobile Image*/}
      <img src="/img/Leaves/LeafCollection3.svg" alt="Leaf" className={classes.image3} />
    </div>
  );
}
