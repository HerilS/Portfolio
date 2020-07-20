import React, { useState, useRef, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Element } from 'react-scroll';
import { useIntersection } from 'react-use';
import { gsap } from 'gsap';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: 'auto',
      backgroundColor: '#D1BCBC',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    },
    button: {
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
    textField: {
      paddingBottom: '1.5rem',
      display: 'block',
      '& label.Mui-focused': {
        color: '#2F3676',
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 'bold',
      },
      '& label': {
        color: '#2F3676',
        fontFamily: 'Gilroy, sans-serif',
        fontWeight: 'bold',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#2F3676',
      },
      '& .MuiOutlinedInput-root': {
        width: '29rem',
        [theme.breakpoints.down(600)]: {
          width: '20rem',
        },
        '& fieldset': {
          borderColor: '#2F3676',
          borderWidth: '0.2rem',
        },
        '&:hover fieldset': {
          borderColor: '#2F3676',
          borderWidth: '0.2rem',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#2F3676',
          borderWidth: '0.2rem',
        },
      },
    },
    helperText: {
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bold',
    },
    formContainer: {
      margin: 'auto',
      padding: '3rem',
      [theme.breakpoints.down(1100)]: {
        padding: 0,
        margin: 'auto',
        gridColumnStart: '1',
        gridColumnEnd: '3',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
      },
    },
    title: {
      gridColumnStart: '1',
      gridColumnEnd: '3',
      textAlign: 'center',
      paddingTop: '3rem',
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bold',
      color: '#2F3676',
      fontSize: '4rem',
      zIndex: 3,
    },
    image: {
      width: '90%',
      [theme.breakpoints.down(1100)]: {
        display: 'none',
      },
    },
    imageContainer: {
      margin: 'auto',
    },
    whiteLeaf: {
      position: 'absolute',
      transform: 'rotate(180deg)',
      width: '9rem',
      left: '1.5rem',
      [theme.breakpoints.down(600)]: {
        opacity: '0.8',
      },
    },
  }),
);
export default function PanelSeven() {
  const classes = useStyles();

  // States for form fields and error handling
  const [name, setName] = useState('');
  const [isNameError, setIsNameError] = useState(false);
  const [nameError, setNameError] = useState('');

  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [emailError, setEmailError] = useState('');

  const [paragraph, setParagraph] = useState('');
  const [isParagraphError, setIsParagraphError] = useState(false);
  const [paragraphError, setParagraphError] = useState('');

  // Setting the form field to state
  const onNameChange = (event: any) => {
    setName(event.target.value);
  };

  const onEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const onParagraphChange = (event: any) => {
    setParagraph(event.target.value);
  };

  // On submit function function for error handling
  const onSubmit = (e: any) => {
    setIsEmailError(false);
    setIsNameError(false);
    setIsParagraphError(false);
    if (name === '') {
      e.preventDefault();
      setIsNameError(true);
      setNameError('Required Field');
    }
    // Regex expression to know if email is invalid
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
      ) !== true
    ) {
      e.preventDefault();
      setIsEmailError(true);
      setEmailError('Invalid Email');
    }
    if (paragraph === '') {
      e.preventDefault();
      setIsParagraphError(true);
      setParagraphError('Required Field');
    }
  };

  // Defining ref for intersection observer
  const sectionRef6 = useRef(null);

  const intersection = useIntersection(sectionRef6, {
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
        fadeOut('.fadeIn6')
      : fadeIn('.fadeIn6');
  }, [intersection]);

  return (
    // Element that is scrolled to on button press in panel one
    <Element name="Contact">
      {/*Defining Ref for intersection observer*/}
      <div ref={sectionRef6} className={classes.root}>
        <img src="img/Leaves/WhiteLeaves.svg" alt="Leaves" className={classes.whiteLeaf} />
        <div className={classes.title}>
          <span>
            {/*Title*/}
            <div className="fadeIn6">Contact</div>
          </span>
        </div>
        <div className={classes.formContainer}>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thankyou"
          >
            <input type="hidden" name="bot-field" /> {/*Hidden Input for bot detection*/}
            <div className="fadeIn6">
              {/*Text field for Name*/}
              <TextField
                InputProps={{
                  style: { fontFamily: 'Gilroy, sans-serif', fontWeight: 'bold', color: 'black' },
                }}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
                className={classes.textField}
                name="Name"
                label="Name"
                value={name}
                onChange={onNameChange}
                helperText={nameError}
                error={isNameError}
                variant="outlined"
                color="secondary"
              />
            </div>
            <div className="fadeIn6">
              {/*Text field for Email*/}
              <TextField
                InputProps={{
                  style: { fontFamily: 'Gilroy, sans-serif', fontWeight: 'bold', color: 'black' },
                }}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
                className={classes.textField}
                name="Email"
                label="Email"
                value={email}
                onChange={onEmailChange}
                helperText={emailError}
                error={isEmailError}
                variant="outlined"
              />
            </div>
            <div className="fadeIn6">
              {/*Text field for Message*/}
              <TextField
                InputProps={{
                  style: { fontFamily: 'Gilroy, sans-serif', fontWeight: 'bold', color: 'black' },
                }}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
                multiline
                rows={10}
                className={classes.textField}
                name="Message"
                label="Message"
                value={paragraph}
                onChange={onParagraphChange}
                helperText={paragraphError}
                error={isParagraphError}
                variant="outlined"
              />
            </div>
            <div>
              <div className="fadeIn6">
                {/*Submit Button*/}
                <Button type="submit" className={classes.button} onClick={onSubmit}>
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className={classes.imageContainer}>
          <div className="fadeIn6">
            <img src="img/Illustrations/contact.svg" alt="Illustration" className={classes.image} />
          </div>
        </div>
      </div>
    </Element>
  );
}
