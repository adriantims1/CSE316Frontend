import React from "react";
import Navbar from "../components/NavBar";
import {
  Container,
  makeStyles,
  Grid,
  withStyles,
  Typography,
  Button,
  Box,
} from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

const styles = makeStyles((theme) => ({
  bodyContainer: {
    height: "80vh",
    width: "100vw",
    backgroundColor: theme.palette.primary.main,
    alignItems: "inline",
    display: "flex",
  },
  leftContainer: {
    height: "100%",
    width: "50%",
  },
  rightContainer: {
    width: "50%",
    zIndex: "-1",
  },
  leftItem: {
    margin: "5%",
  },
  creative: {
    color: "black",
    fontFamily: "Inter",
    size: "56px",
    fontWeight: "medium",
  },
  solutions: {
    color: theme.palette.secondary.main,
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  body: {
    fontFamily: "Inter",
    fontWeight: "light",
    size: "36px",
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

const Landing = () => {
  const classes = styles();
  return (
    <>
      <Navbar />
      <Container className={classes.bodyContainer}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="baseline"
          className={classes.leftContainer}
        >
          <Grid item classname={classes.leftItem}>
            <Typography variant="h3" className={classes.creative}>
              Creative
            </Typography>
          </Grid>

          <Grid item classname={classes.leftItem}>
            <Typography variant="h2" className={classes.solutions}>
              Solutions
            </Typography>
          </Grid>
          <br />
          <Grid item classname={classes.leftItem}>
            <Typography variant="body1" className={classes.body}>
              Binary option predictor using machine learning
            </Typography>
          </Grid>
          <br />
          <Grid item classname={classes.leftItem}>
            <StyledButton>Learn More</StyledButton>
          </Grid>
          <br />
          <Grid item classname={classes.leftItem}>
            <InstagramIcon
              fontSize="large"
              color="secondary"
              style={{ margin: "20px 20px 20px 0px" }}
            />
            <TwitterIcon
              fontSize="large"
              color="secondary"
              style={{ margin: "20px" }}
            />
            <FacebookIcon
              fontSize="large"
              color="secondary"
              style={{ margin: "20px 0px 20px 20px" }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-end"
        >
          <Grid item>
            <img
              src="https://res.cloudinary.com/dtkgfy2wk/image/upload/v1620962204/picture_pqypsw.svg"
              style={{ height: "75%" }}
            ></img>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Landing;
