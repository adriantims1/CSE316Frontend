import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SecurityIcon from "@material-ui/icons/Security";
import EmailIcon from "@material-ui/icons/Email";
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { NavLink } from "react-router-dom";
import { IconButton, makeStyles } from "@material-ui/core";

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
export default function adminSidebar() {
  const classes = styles();
  return (
    <>
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
      <NavLink to="/msgcenter" activeClassName={classes.active}>
        <IconButton>
          <EmailIcon className={classes.icons} />
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
