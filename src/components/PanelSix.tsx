import React from 'react';
import data from './creationProcess.json';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

interface Data {
  number: string;
  title: string;
  paragraph: string;
  img: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    creationBody: {
      backgroundColor: 'rgb(209, 188, 188, 0.61)',
      zIndex: 0,
      paddingBottom: '3rem',
    },
    leaf: {
      zIndex: 0,
      position: 'absolute',
      transform: 'rotate(180deg) scaleX(-1)',
      top: 'auto',
      right: 0,
      [theme.breakpoints.down(1047)]: {
        width: '10rem',
      },
      [theme.breakpoints.down(918)]: {
        display: 'none',
      },
    },
    title: {
      zIndex: 1,
      opacity: 1,
      textAlign: 'center',
      paddingTop: '3rem',
      paddingBottom: '2rem',
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bolder',
      color: '#2F3676',
      fontSize: '4rem',
    },
    itemNumber: {
      paddingRight: '1.5rem',
      color: '#1F28CF',
      fontSize: '3rem',
      verticalAlign: 'middle',
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bolder',
      [theme.breakpoints.down('xs')]: {
        paddingRight: '0.8rem',
      },
    },
    itemTitle: {
      position: 'relative',
      verticalAlign: 'middle',
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bolder',
      fontSize: '2rem',
    },
    itemParagraph: {
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bold',
      color: '#595A5B',
    },
    creationContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      
      paddingRight: '3rem',
      paddingLeft: '3rem',
      [theme.breakpoints.down('xs')]: {
        paddingRight: 0,
        paddingLeft: 0,
      },
      [theme.breakpoints.down(1190)]: {
        gridTemplateColumns: '1fr 1fr',
      },
      [theme.breakpoints.down(860)]: {
        gridTemplateColumns: '1fr',
      },
    },
    card: {
      backgroundColor: 'white',
      height: '20rem',
      maxWidth: '18rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '1.5rem',
      paddingTop: '4.5rem',
      paddingBottom: '4.5rem',
      marginBottom: '2rem',
      textAlign: 'center',
      marginTop: '2rem',
      borderRadius: '1rem',
      transform:
        'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)',
      '&:hover': {
        transform:
          'translate3d(0px, -30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(-1deg, 1deg)',
        transition: 'all 200ms cubic-bezier(.164, .317, .38, .767)',
        boxShadow: '10px 10px 15px -1px rgba(0, 0, 0, 0.21)',
      },
      '&:not(:hover)': {
        transform:
          'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)',
        transition: 'all 200ms cubic-bezier(.164, .317, .38, .767)',
      },
    },
    image: {
      height: '12rem',
    },
  }),
);

export default function PanelSix() {
  const classes = useStyles();
  return (
    <div className={classes.creationBody}>
      <img src="img/Leaves/LeafCollection1.svg" className={classes.leaf} />
      <div className={classes.title}>
        <span>My Creation Process</span>
      </div>

      <div className={classes.creationContainer}>
        {data.map((data: Data) => {
          return (
            <div className={classes.card}>
              <div>
                <img src={data.img} className={classes.image} />
              </div>
              <div>
                <span className={classes.itemNumber}>{data.number}</span>
                <span className={classes.itemTitle}>{data.title}</span>
              </div>
              <div className={classes.itemParagraph}>{data.paragraph}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
