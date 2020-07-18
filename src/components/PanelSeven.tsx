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
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        {' '}
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows={6} />
        </div>
        <div>
          <input type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  );
}
