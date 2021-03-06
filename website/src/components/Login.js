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
const LoginButton = withStyles((theme) => ({
  label: {
    textTransform: "capitalize",
    fontSize: "24px",
  },
}))(Button);

const StyledButton = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    width: "30%",
    alignSelf: "center",
    zIndex: theme.zIndex.drawer + 2,
  },
  label: {
    textTransform: "capitalize",
  },
}))(Button);

function Login() {
  const [login, setLogin] = useState(true);
  const classes = styles();
  return (
    <Paper elevation={3} className={classes.root}>
      <Grid></Grid>
      <Box display="flex" style={{ alignSelf: "center" }}>
        <LoginButton
          onClick={(e) => {
            e.preventDefault();
            setLogin(true);
          }}
        >
          Login
        </LoginButton>
        <LoginButton
          onClick={(e) => {
            e.preventDefault();
            setLogin(false);
          }}
        >
          SignUp
        </LoginButton>
      </Box>
      <Grid container direction="column" justify="center" alignItems="center">
        {login ? (
          <LoginForm style={{ alignSelf: "center" }} />
        ) : (
          <SignupForm style={{ alignSelf: "center" }} />
        )}
      </Grid>

      <br />
    </Paper>
  );
}

export default Login;
