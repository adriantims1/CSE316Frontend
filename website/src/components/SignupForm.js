import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <>
      <form>
        <TextField label="Name" />
        <TextField label="Email" />
        <TextField label="Password" />
      </form>
    </>
  );
}
