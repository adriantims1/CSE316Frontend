import React, { useState } from "react";
import { makeStyles, Grid, Box, IconButton, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import SecurityIcon from "@material-ui/icons/Security";
import PaymentIcon from "@material-ui/icons/Payment";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import { LogoutAPIMethod } from "../api/generalClient";
const styles = makeStyles((theme) => ({
  sidebar: {
    height: "100%",
    width: "20%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sidebarContent: {
    flexDirection: "column",
    width: "100%",
    height: "auto",
    marginTop: "3%",
    justifyContent: "center",
  },
  icons: {
    fontSize: "50px",
    margin: "10%",
    color: "grey",
  },
  active: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "8px",
    boxSizing: "border-box",
    "& $icons": {
      color: "white",
    },
  },
  iconActive: {
    color: "white",
  },
}));

export default function SideBar() {
  const classes = styles();
  const history = useHistory();
  const onClick_logout = () => {
    LogoutAPIMethod();

    history.push("/");
  };
  return (
    <Grid item className={classes.sidebar}>
      <Box
        display="flex"
        className={`${classes.sidebar} ${classes.sidebarContent}`}
      >
        <img
          src="https://res.cloudinary.com/dtkgfy2wk/image/upload/v1620954709/logo_fuhdgl.svg"
          style={{ height: "75px", width: "100px" }}
        ></img>
      </Box>
      <Box
        display="flex"
        className={`${classes.sidebar} ${classes.sidebarContent}`}
        style={{ height: "70%" }}
      >
        <NavLink to="/dashboard" activeClassName={classes.active}>
          <IconButton>
            <HomeIcon className={classes.icons} />
          </IconButton>
        </NavLink>

        <NavLink to="/admin" activeClassName={classes.active}>
          <IconButton>
            <SecurityIcon className={classes.icons} />
          </IconButton>
        </NavLink>
        <NavLink to="/payment" activeClassName={classes.active}>
          <IconButton>
            <PaymentIcon className={classes.icons} />
          </IconButton>
        </NavLink>
        <NavLink to="/settings" activeClassName={classes.active}>
          <IconButton>
            <SettingsIcon className={classes.icons} />
          </IconButton>
        </NavLink>
      </Box>
      <Box>
        <IconButton color="secondary" onClick={onClick_logout}>
          <ExitToAppIcon style={{ fontSize: "50px" }} />
        </IconButton>
      </Box>
    </Grid>
  );
}
