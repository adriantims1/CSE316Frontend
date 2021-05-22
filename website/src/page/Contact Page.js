import React, { useState } from "react";
import Navbar from "../components/NavBar";
import {
  Grid,
  Container,
  makeStyles,
  Typography,
  Button,
  withStyles,
  TextField,
  Snackbar,
} from "@material-ui/core";

import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const styles = makeStyles((theme) => ({
  bodyContainer: {
    height: "80vh",
    width: "100vw",
    backgroundColor: theme.palette.primary.main,
    alignItems: "inline",
    display: "flex",
  },
  contact: {
    fontFamily: "Inter",
    fontWeight: "bold",
    fontSize: "64px",
    color: theme.palette.secondary.main,
  },
  input: {
    margin: "2%",
  },
}));
const StyledButton = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    width: "300px",
  },
  label: {
    textTransform: "capitalize",
    fontSize: "24px",
  },
}))(Button);

const Contact = () => {
  const classes = styles();
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const onClick_send = (e) => {
    setOpen(true);
  };
  return (
    <>
      <Navbar />
      <Container className={classes.bodyContainer}>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h2" className={classes.contact}>
              Contact Us
            </Typography>
          </Grid>
          <Grid item style={{ width: "50%" }} direction="column">
            <TextField
              placeholder="John Doe"
              label="Name"
              fullWidth
              className={classes.input}
            />

            <TextField
              placeholder="johndoe@email.com"
              label="Email"
              fullWidth
              className={classes.input}
            />

            <TextField
              placeholder="Enter your message"
              label="Message"
              fullWidth
              multiline
              rows={5}
              className={classes.input}
            />
          </Grid>
          <Grid item>
            <StyledButton onClick={onClick_send}>Send</StyledButton>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success">
          Message send!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;
