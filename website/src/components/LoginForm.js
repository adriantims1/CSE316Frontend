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
import { getprofileurlAPIMethod } from "../api/profileClient";

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
        localStorage.setItem("balance", res.data.balance);
        getprofileurlAPIMethod((res) => {
          console.log(res.data.data);
          localStorage.setItem("accountType", res.data.data.accountType);
          localStorage.setItem("name", res.data.data.name);
          localStorage.setItem("profile_url", res.data.data.profile_url);
          localStorage.setItem(
            "setting",
            JSON.stringify(res.data.data.setting)
          );
          localStorage.setItem("isAdmin", res.data.data.isAdmin);
          localStorage.setItem("email", res.data.data.email);
          history.push(`/dashboard`);
        });
      });
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
