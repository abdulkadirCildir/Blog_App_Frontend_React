import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: "8rem",
    paddingTop: "2rem",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evently",
    background: "rgba(0, 0, 0, 0)",
    boxShadow: "none",
    color: theme.palette.common.white,
  },
  mainGridContent: {
    padding: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(10),
    },
  },
  title: {
    fontFamily: "Pacifico, cursive",
    marginBottom: "2rem",
  },
  desc: {
    letterSpacing: "0.32rem",
    marginBottom: "3rem",
  },
  letShare: {
    color: "#262626",
    border: " 1px solid white",
    borderRadius: "20px",
    padding: "20px",
    marginTop: "2rem",
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.mainGrid}>
      <Grid item md={6} className={classes.mainGridContent}>
        <Typography
          className={classes.title}
          component="h1"
          variant="h3"
          color="inherit"
          gutterBottom
        >
          {post.title}
        </Typography>
        <Typography
          variant="h5"
          color="inherit"
          className={classes.desc}
          paragraph
        >
          {post.description}
        </Typography>
        <Link variant="subtitle1" href="#" className={classes.letShare}>
          {post.linkText}
        </Link>
      </Grid>
      <Grid className={classes.blogImg}>
        <img src="world2.png"></img>
      </Grid>
    </Paper>
  );
}

Main.propTypes = {
  post: PropTypes.object,
};
