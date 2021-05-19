import React, { useState } from "react";
import {
  makeStyles,
  withStyles,
  FormControlLabel,
  TextField,
  Box,
  Typography,
  Button,
} from "@material-ui/core";

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
  inputText: {
    width: "50%",
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
export default function PaymentElement() {
  const classes = styles();
  const [picture, setPicture] = useState(
    "https://res.cloudinary.com/dtkgfy2wk/image/upload/v1620202579/vippng.com-empty-circle-png-4161690_reukek.png"
  );
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handlePicture = (e) => {
    setPicture((prev) => !prev);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const handleOldPassword = (e) => {
    setOldPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  return (
    <>
      <FormControlLabel
        className={classes.formLabel}
        control={
          <Box display="flex" className={classes.boxContainer}>
            <img
              src={picture}
              style={{ height: "75px", width: "75px", paddingRight: "16px" }}
            ></img>
            <input
              type="file"
              name="image"
              accept="image/*"
              style={{ display: "none" }}
            ></input>
            <StyledButton>Upload photo</StyledButton>
          </Box>
        }
        label={
          <Typography className={classes.fontSeparator}>
            Change Picture
          </Typography>
        }
        labelPlacement="start"
      />
      <FormControlLabel
        className={classes.formLabel}
        control={
          <Box display="flex" className={classes.boxContainer}>
            <TextField
              className={classes.inputText}
              value={email}
              onChange={handleEmail}
              label="Enter your Email: "
            />
          </Box>
        }
        label={
          <Typography className={classes.fontSeparator}>
            Email Address
          </Typography>
        }
        labelPlacement="start"
      />
      <FormControlLabel
        className={classes.formLabel}
        control={
          <Box display="flex" className={classes.boxContainer}>
            <TextField
              className={classes.inputText}
              value={oldPassword}
              onChange={handleOldPassword}
              label="Enter Old Password: "
            />
          </Box>
        }
        label={
          <Typography className={classes.fontSeparator}>
            Old Password
          </Typography>
        }
        labelPlacement="start"
      />
      <FormControlLabel
        className={classes.formLabel}
        control={
          <Box display="flex" className={classes.boxContainer}>
            <TextField
              className={classes.inputText}
              value={newPassword}
              onChange={handleNewPassword}
              label="Enter New Password: "
            />
          </Box>
        }
        label={
          <Typography className={classes.fontSeparator}>
            New Password
          </Typography>
        }
        labelPlacement="start"
      />
      <FormControlLabel
        className={classes.formLabel}
        control={
          <Box display="flex" className={classes.boxContainer}>
            <TextField
              className={classes.inputText}
              value={confirmPassword}
              onChange={handleConfirmPassword}
              label="Confirm password "
            />
          </Box>
        }
        label={
          <Typography className={classes.fontSeparator}>
            Confirm Password
          </Typography>
        }
        labelPlacement="start"
      />
      <FormControlLabel
        control={<StyledButton variant="contained">Save</StyledButton>}
        label={<Typography className={classes.fontSeparator}></Typography>}
        style={{ marginBottom: "16px" }}
      ></FormControlLabel>
    </>
  );
}
