import React from "react";
import NavBar from "../components/NavBar";
import {
  Container,
  makeStyles,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";

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
    width: "70%",
  },
  rightContainer: {
    height: "100%",
    width: "30%",
  },
  predictor: {
    fontFamily: "Inter",
    fontWeight: "bold",
    fontSize: "36px",
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    marginRight: "5%",
  },
}));

const Live = () => {
  const classes = styles();
  return (
    <>
      <NavBar />
      <Container className={classes.bodyContainer}>
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          direction="row"
          className={classes.leftContainer}
        >
          <Grid item>
            <Box display="flex">
              <Typography className={classes.predictor} color="secondary">
                Live Trades
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            style={{
              width: "100%",
              height: "88.5%",
            }}
            className={classes.secondary}
          ></Grid>
        </Grid>
        <Grid container direction="column" className={classes.rightContainer}>
          <Grid item>
            <Box display="flex">
              <Typography className={classes.predictor} color="secondary">
                Result
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            style={{
              width: "100%",
              height: "88.5%",
            }}
          ></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Live;
