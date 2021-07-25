import React from "react";
import {
  makeStyles,
  withStyles,
  Typography,
  Button,
  Box,
  IconButton,
  TextField,
} from "@material-ui/core";

import Phonesvg from "../assets/phonesvg";
import AppleIcon from "../assets/appleIcon";
import GoogleIcon from "../assets/googleIcon";
import WindowsIcon from "../assets/windowsIcon";

const styles = makeStyles((theme) => ({
  fontSeparator: {
    fontFamily: "Comfortaa",
    fontWeight: "bold",
    fontSize: "18px",
    color: theme.palette.secondary.main,
    justifySelf: "left",
  },
  formLabel: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "85%",
  },
  boxContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "flex-start",
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
export default function SettingsElement() {
  const classes = styles();

  return (
    <>
      <Typography variant="h4">Download The App Now! </Typography>
      <Typography variant="h6">Mobile</Typography>
      <Box>
        <IconButton>
          <AppleIcon />
        </IconButton>
        <IconButton>
          <GoogleIcon />
        </IconButton>
      </Box>
      <Typography variant="h6">Desktop</Typography>
      <Box>
        <IconButton>
          <WindowsIcon />
        </IconButton>
        <IconButton>
          <AppleIcon />
        </IconButton>
      </Box>
      <Typography variant="h6">Authorization-Token</Typography>
      <TextField
        value={localStorage.getItem("authtoken")}
        variant="outlined"
        style={{ width: "50%" }}
      />
      <Typography variant="h6">Device-Id</Typography>
      <TextField
        value={localStorage.getItem("deviceid")}
        variant="outlined"
        style={{ width: "50%" }}
      />
      <Phonesvg />
    </>
  );
}
