import React, { useState } from "react";
import { TextField, Grid, Button, withStyles } from "@material-ui/core";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <>
      <form>
        <Grid item>
          <TextField label="Name" />
        </Grid>
        <Grid item>
          <TextField label="Email" />
        </Grid>
        <Grid item>
          <TextField label="Password" />
        </Grid>
        <StyledButton variant="contained" style={{ margin: "16px" }}>
          SignUp
        </StyledButton>
      </form>
    </>
  );
}
