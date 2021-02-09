import React, { useContext } from "react";
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Grid, Box, Typography } from "@material-ui/core/";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { email, password } from "../../utils/validation"
import { AppContext } from "../../context/AppContext";
import { postData } from "../../services/postData";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const validationSchema = Yup.object({
  email,
  password
});

export default function LoginPage() {
  const classes = useStyles();
  const history = useHistory();
  const { token, setToken } = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: async(values) => {
      try {
        const result = await postData(
          "https://clrswyblog.herokuapp.com/auth/login/",
          values
        )
        console.log(result);
        console.log("values", values);
        setToken(result?.data?.key);
        localStorage.setItem("token", result?.data?.key);
        history.push("/home");
      } catch ({ response }) {
        if (response) {
          console.log(response.data.non_field_errors[0]);
        } else {
          console.log("Something went wrong!");
        }
      }
    },
  });

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Typography variant="h6">
        <a href={"/"} className={classes.headerLeft}>
          <img src="icon.png" alt="icon" className={classes.icon} />
          <p className={classes.title}>
            Clarus<span className={classes.span}>Blog</span>
          </p>
        </a>
      </Typography>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        className={classes.mainGrid}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              autoFocus
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
            <TextField
              variant="outlined"
              margin="normal"
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
