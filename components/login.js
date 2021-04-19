import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { signIn } from '../actions';
import styles from './layout.module.css';
import { Checkbox } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    marginTop: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
}));

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
    rememberMe: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignIn = () => {
    dispatch(signIn(values.email, values.password));
  };

  return (
    <>
      <Head>
        <title>Sign In Workshop</title>
      </Head>
      <Grid container className={styles.left_grid}>
        <Grid item xs={5} className={styles.login_img}>
          <Image
            src="/images/login.png" // Route of the image file
            height={120} // Desired size with correct aspect ratio
            width={100} // Desired size with correct aspect ratio
            layout={'responsive'}
            alt="Log In"
          />
        </Grid>
        <Grid item xs={7} className={styles.right_grid}>
          <div className={styles.login_section}>
            <Typography variant="h4" className={styles.title}>
              Sign In to Linc Portal
            </Typography>
            <div>
              <TextField
                label="Email Address"
                id="filled-margin-none"
                variant="outlined"
                className={styles.tf}
                onChange={handleChange('email')}
              />
            </div>
            <div>
              <FormControl className={clsx(classes.margin, styles.tf)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment>
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div>
              <grid container className={styles.text_grid}>
                <div className={styles.cb_rm}>
                  <Checkbox></Checkbox>
                  <Typography variant="body" className={styles.remember_me}>
                    Remember Me
                  </Typography>
                </div>
                <Typography variant="body" className={styles.forgot_pwd}>
                  Forgot Password?
                </Typography>
              </grid>
            </div>
            <div>
              <Link href="/logged_in">
                <Button
                  variant="contained"
                  color="Secondary"
                  disabled={!(values.email && values.password)}
                  onClick={handleSignIn}
                  className={styles.sign_in_button}
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
