import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing(2),
  },
  text: {
    margin: theme.spacing(2),
  },
}));

function Logged() {
  const classes = useStyles();
  const email = useSelector((state) => state.email);
  return (
    <>
      <div className={classes.text}>Hi, your email is {email}</div>
      <div>
        <Link href="/">
          <Button variant="contained" color="primary" className={classes.button}>
            Back
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Logged;
