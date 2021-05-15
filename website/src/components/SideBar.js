import React, { useState } from "react";
import { makeStyles, Grid, Box, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import SecurityIcon from "@material-ui/icons/Security";
import PaymentIcon from "@material-ui/icons/Payment";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
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
  },
  iconActive: {
    color: "white",
  },
}));

export default function SideBar() {
  const classes = styles();
  const [activeIndex, setActiveIndex] = useState(0);
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
        style={{ height: "80%" }}
      >
        <NavLink to="/dashboard" activeClassName={classes.active}>
          <IconButton
            onClick={(e) => {
              setActiveIndex(0);
            }}
          >
            <HomeIcon
              className={`${classes.icons} ${
                activeIndex === 0 ? classes.iconActive : null
              }`}
            />
          </IconButton>
        </NavLink>

        <NavLink to="/admin" activeClassName={classes.active}>
          <IconButton
            onClick={(e) => {
              setActiveIndex(1);
            }}
          >
            <SecurityIcon
              className={`${classes.icons} ${
                activeIndex === 1 ? classes.iconActive : null
              }`}
            />
          </IconButton>
        </NavLink>
        <NavLink to="/admin" activeClassName={classes.active}>
          <IconButton
            onClick={(e) => {
              setActiveIndex(2);
            }}
          >
            <PaymentIcon
              className={`${classes.icons} ${
                activeIndex === 2 ? classes.iconActive : null
              }`}
            />
          </IconButton>
        </NavLink>
        <NavLink to="/admin" activeClassName={classes.active}>
          <IconButton
            onClick={(e) => {
              setActiveIndex(3);
            }}
          >
            <SettingsIcon
              className={`${classes.icons} ${
                activeIndex === 3 ? classes.iconActive : null
              }`}
            />
          </IconButton>
        </NavLink>
        <IconButton color="secondary">
          <ExitToAppIcon style={{ fontSize: "50px", margin: "10%" }} />
        </IconButton>
      </Box>
    </Grid>
  );
}
