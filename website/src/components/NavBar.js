import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  makeStyles,
  withStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  navBar: {},
  navbarGrid: {
    justifyContent: "space-between",
  },
  navLink: {
    fontFamily: "Comfortaa",
    color: "#0b4870",
    fontSize: "24px",
  },
});

export default function Navbar() {
  const classes = useStyles();
  return (
    <>
      <AppBar
        position="static"
        className={classes.navBar}
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <Grid container className={classes.navbarGrid}>
            <Grid item className={classes.navLink}>
              logo
            </Grid>
            <Grid item className={classes.navLink}>
              navbar
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
