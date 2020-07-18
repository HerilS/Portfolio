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
    },
  }),
);
export default function PanelSeven() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
    </div>
  );
}
