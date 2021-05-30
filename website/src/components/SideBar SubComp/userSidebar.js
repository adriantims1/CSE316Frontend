import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SecurityIcon from "@material-ui/icons/Security";
import PaymentIcon from "@material-ui/icons/Payment";
import SettingsIcon from "@material-ui/icons/Settings";
import { NavLink } from "react-router-dom";
import { IconButton, makeStyles } from "@material-ui/core";
import ContactMailIcon from '@material-ui/icons/ContactMail';


const styles = makeStyles((theme) => ({
  active: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "8px",
    boxSizing: "border-box",
    "& $icons": {
      color: "white",
    },
  },
  icons: {
    fontSize: "50px",
    margin: "10%",
    color: "grey",
  },
}));
export default function userSidebar() {
  const classes = styles();
  return (
    <>
      <NavLink to="/dashboard" activeClassName={classes.active}>
        <IconButton>
          <HomeIcon className={classes.icons} />
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
      <NavLink to="/contactUserVAdmin" activeClassName={classes.active}>
        <IconButton>
          <ContactMailIcon className={classes.icons} />
        </IconButton>
      </NavLink>
    </>
  );
}
