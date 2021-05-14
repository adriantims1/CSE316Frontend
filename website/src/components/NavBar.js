import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  makeStyles,
  withStyles,
  Box,
  Button,
  Hidden,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navBar: {},
  navbarGrid: {
    justifyContent: "space-between",
  },
  navLink: {
    fontFamily: "Comfortaa ",
    color: theme.palette.secondary.main,
    fontSize: "16px",
    margin: theme.spacing(3),
    textTransform: "capitalize",
  },
  navContainer: {
    alignItems: "center",
  },
}));

const StyledButton = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
  },
  label: {
    textTransform: "capitalize",
  },
}))(Button);

export default function Navbar() {
  const classes = useStyles();
  return (
    <>
      <AppBar
        position="static"
        className={classes.navBar}
        elevation={0}
        color="primary"
        style={{ height: "20%" }}
      >
        <Toolbar>
          <Grid container className={classes.navbarGrid}>
            <Hidden smDown={true}>
              <Grid item className={classes.navLink}>
                <Link href="/">
                  <img
                    src="https://res.cloudinary.com/dtkgfy2wk/image/upload/v1620954709/logo_fuhdgl.svg"
                    style={{ height: "50px", maxWidth: "75px" }}
                    alt=""
                    sm={0}
                  ></img>
                </Link>
              </Grid>
            </Hidden>

            <Grid item>
              <Box display="flex" className={classes.navContainer}>
                <Button
                  className={classes.navLink}
                  href="/"
                  variant="text"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Home
                </Button>
                <Button
                  className={classes.navLink}
                  variant="text"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  About
                </Button>
                <Button
                  className={classes.navLink}
                  variant="text"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Live Trades
                </Button>
                <Button
                  className={classes.navLink}
                  variant="text"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Contact
                </Button>
                <StyledButton
                  variant="contained"
                  className={classes.navLink}
                  color="secondary"
                  size="medium"
                >
                  Login
                </StyledButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
