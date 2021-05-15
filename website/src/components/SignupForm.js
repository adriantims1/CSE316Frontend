import React, { useState } from "react";
import { TextField, Grid } from "@material-ui/core";

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
      </form>
    </>
  );
}
