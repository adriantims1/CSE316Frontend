import React from "react";
import { Container, Typography, Box, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const styles = makeStyles((theme) => ({
  profileName: {
    fontFamily: "Comfortaa",
    fontSize: "16px",
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    boxSizing: "border-box",
  },
  title: {
    fontFamily: "Comfortaa",
    fontWeight: "bold",
    fontSize: "48px",
    color: theme.palette.secondary.main,
    alignSelf: "center",
  },
}));

export default function userHeader(props) {
  const classes = styles();
  return (
    <Container className={classes.header}>
      <Typography className={classes.title}>{`${props.page}`}</Typography>
      <Box
        display="flex"
        style={{
          justifyContent: "space-between",

          alignItems: "center",
        }}
      >
        <NavLink to="/profile">
          <img
            src="https://res.cloudinary.com/dtkgfy2wk/image/upload/v1620202579/vippng.com-empty-circle-png-4161690_reukek.png"
            style={{
              height: "75px",
              width: "75px",
              paddingRight: "16px",
              margin: "5px 0",
            }}
          ></img>
        </NavLink>

        <Box
          display="flex"
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography className={classes.profileName}>
            William Alfonzo
          </Typography>
          <Typography color="secondary">Free Tier</Typography>
        </Box>
      </Box>
    </Container>
  );
}
