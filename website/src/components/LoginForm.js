import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  TextField,
  Grid,
  Button,
  withStyles,
  makeStyles,
} from "@material-ui/core";
import { LoginAPIMethod } from "../api/generalClient";

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

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const onChange_email = (e) => {
    setEmail(e.target.value);
  };

  const onChange_password = (e) => {
    setPass(e.target.value);
  };

  const sendLoginInfo = (e) => {
    try {
      LoginAPIMethod({ email: email, password: pass }, (res) => {
        console.log(res);
      });
      localStorage.setItem("log", true);
      history.push(`/dashboard`);
    } catch (err) {
      alert(err.response);
    }
  };

  return (
    <>
      <form>
        <Grid item>
          <TextField label="Email" value={email} onChange={onChange_email} />
        </Grid>
        <Grid item>
          <TextField
            label="Password"
            value={pass}
            type="password"
            onChange={onChange_password}
          />
        </Grid>
        <StyledButton
          variant="contained"
          style={{ margin: "16px" }}
          onClick={sendLoginInfo}
        >
          Login
        </StyledButton>
      </form>
    </>
  );
}
