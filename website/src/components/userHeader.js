import React, { useState, useEffect } from "react";
import { Container, Typography, Box, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { getprofileurlAPIMethod } from "../api/profileClient";

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

export default function UserHeader(props) {
  const [name, set_name] = useState("");
  const [accountType, set_accountType] = useState("");
  const [profile_url, setProfile_url] = useState(
    "https://res.cloudinary.com/dtkgfy2wk/image/upload/v1620202579/vippng.com-empty-circle-png-4161690_reukek.png"
  );
  const [refetch, setRefetch] = useState(true);
  useEffect(() => {
    if (refetch) {
      console.log("fetch");
      getprofileurlAPIMethod((response) => {
        const name = response.data.data.name;

        set_name(name.toUpperCase());
        set_accountType(response.data.data.accountType);
        setProfile_url(response.data.data.profile_url);
      });
      setRefetch(false);
    }
  }, []);

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
            src={profile_url}
            style={{
              height: "75px",
              width: "75px",
              margin: "8px 24px 8px 0",
              borderRadius: "50%",
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
          <Typography className={classes.profileName}>{name}</Typography>
          <Typography color="secondary">{accountType}</Typography>
        </Box>
      </Box>
    </Container>
  );
}
