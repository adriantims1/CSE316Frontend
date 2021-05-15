import React, { useState } from "react";
import {
  Paper,
  makeStyles,
  Button,
  withStyles,
  Box,
  Grid,
} from "@material-ui/core";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    width: "30vw",
    height: "90vh",
    position: "absolute",
    right: "0px",
    boxSizing: "border-box",
    zIndex: "2",
    borderRadius: "0px",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));
const StyledButton = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    width: "30%",
    alignSelf: "center",
  },
  label: {
    textTransform: "capitalize",
  },
}))(Button);

function Login() {
  const [login, setLogin] = useState(true);
  const classes = styles();
  return (
    <>
      <Paper elevation={3} className={classes.root}>
        <Grid></Grid>
        <Box display="flex" style={{ alignSelf: "center" }}>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setLogin(true);
            }}
          >
            Login
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setLogin(false);
            }}
          >
            SignUp
          </Button>
        </Box>
        <Grid container direction="column" justify="center" alignItems="center">
          {login ? (
            <LoginForm style={{ alignSelf: "center" }} />
          ) : (
            <SignupForm style={{ alignSelf: "center" }} />
          )}
        </Grid>

        <br />
        <StyledButton variant="contained">
          {login ? "Login" : "Signup"}
        </StyledButton>
        <br />
        <br />
        <br />
      </Paper>
    </>
  );
}

export default Login;
