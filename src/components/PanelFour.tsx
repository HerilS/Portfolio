import React, { useRef, useEffect } from 'react';
import { createStyles, makeStyles, Theme, createGenerateClassName } from '@material-ui/core/styles';
import { useIntersection } from 'react-use';
import { gsap } from 'gsap';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      position: 'relative',
      overflow: 'auto',
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
        fontSize: '2.5rem',
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
      paddingLeft: '1rem',
      width: '20rem',
      marginBottom: 'auto',
      [theme.breakpoints.down(1285)]: {
        display: 'none',
      },
    },
    image2: {
      paddingRight: '2rem',
      width: '10rem',
      marginTop: 'auto',
      [theme.breakpoints.down(1285)]: {
        marginTop: 'auto',
        width: '16rem',
      },
      [theme.breakpoints.down(928)]: {
        display: 'none',
      },
    },
    image3: {
      display: 'none',
      [theme.breakpoints.down(928)]: {
        width: '5.5rem',
        display: 'block',
        position: 'absolute',
        right: 0,
        bottom: 0,
      },
    },
    underline: {
      color: '#2F3676',
      display: 'inline-block',
      lineHeight: '0rem',
      paddingBottom: '1.9rem',
      backgroundColor: '#89C5CC',
      transition: 'all 0.2s ease',
      '&:hover': {
        backgroundColor: '#6DB1B9',
        transition: 'all 0.2s ease',
      },
      [theme.breakpoints.down(600)]: {
        paddingBottom: '1.4rem',
      },
    },
    link: {
      textDecoration: 'none',
      color: '#2F3676',
    },
  }),
);
export default function PanelFour() {
  const classes = useStyles();

  // Ref for intersection observer
  const sectionRef3 = useRef(null);

  const intersection = useIntersection(sectionRef3, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  });

  useEffect(() => {
    // Fade in when scroll in
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

    // Fade out when scroll out
    const fadeOut = (element: any) => {
      gsap.to(element, 1, {
        opacity: 0,
        y: -20,
        ease: 'power3.out',
      });
    };
    intersection && intersection.intersectionRatio < 0.8
      ? // Not Reached
        fadeOut('.fadeIn3')
      : fadeIn('.fadeIn3');
  }, [intersection]);

  return (
    //Defined Section Ref
    <div ref={sectionRef3} className={classes.body}>
      <img src="/img/Extra/lamps.svg" alt="Lamp" className={classes.image} />
      <div className={classes.text}>
        <div className={classes.title}>
          {/*Title*/}
          <div className="fadeIn3">
            Developed For{' '}
            <mark className={classes.underline}>
              <a className={classes.link} href="https://www.taxmechanic.ca">Tax Mechanic</a>
            </mark>
          </div>
        </div>
        <div className={classes.paragraph}>
          <div className="fadeIn3">
            {/*Paragraph*/}
            Managed, Designed, Planned, and Fully Developed a Website For a Tax Consultation Company
          </div>
        </div>
      </div>
      <img src="/img/Leaves/Plant.svg" alt="Plant" className={classes.image2} />
      <img src="/img/Leaves/PlantRight.svg" alt="Plant" className={classes.image3} />
    </div>
  );
}
