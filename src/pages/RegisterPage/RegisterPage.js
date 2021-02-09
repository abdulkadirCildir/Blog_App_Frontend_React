import React from 'react';
import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container} from '@material-ui/core/';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles'
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { username, email, password } from "../../utils/validation"
import { AppContext } from "../../context/AppContext";
import { postData } from "../../services/postData";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const validationSchema = Yup.object({
  username,
  email,
  password,
  password2: password,
});

export default function RegisterPage() {
  const classes = useStyles();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      password2: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const result = await postData(
          "https://clrswyblog.herokuapp.com/api/user/register/",
          values
        );
        console.log("values", values);
        console.log(result);
        alert("Register Completed! Login Page")
      } catch ({response}) {
        if (response) {
          console.log(response.data.non_field_errors[0]);
        } else {
          console.log("Something went wrong!");
        }
      }
      history.push("/login");
    },
  });

  return (
    <Container className={classes.root}>
      <Typography variant="h6">
        <a href={"/"} className={classes.headerLeft}>
          <img src="icon.png" alt="icon" className={classes.icon} />
          <p className={classes.title}>
            Clarus<span className={classes.span}>Blog</span>
          </p>
        </a>
      </Typography>
      <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                autoFocus
                id="username"
                name="username"
                label="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password2"
                name="password2"
                label="Password Again"
                type="password"
                value={formik.values.password2}
                onChange={formik.handleChange}
                error={formik.touched.password2 && Boolean(formik.errors.password2)}
                helperText={formik.touched.password2 && formik.errors.password2}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </Container>
    
  );
}