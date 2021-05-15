import React from "react";
import { makeStyles, Grid, Box, IconButton } from "@material-ui/core";
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
  },
}));

export default function SideBar() {
  const classes = styles();
  return (
    <Grid item className={classes.sidebar}>
      <Box
        display="flex"
        className={`${classes.sidebar} ${classes.sidebarContent}`}
      >
        <img
          src="https://res.cloudinary.com/dtkgfy2wk/image/upload/v1620954709/logo_fuhdgl.svg"
          style={{ height: "75px", width: "75px" }}
        ></img>
      </Box>
      <Box
        display="flex"
        className={`${classes.sidebar} ${classes.sidebarContent}`}
        style={{ height: "80%" }}
      >
        <IconButton color="primary.dark">
          <HomeIcon className={classes.icons} />
        </IconButton>
        <IconButton color="primary.dark">
          <SecurityIcon className={classes.icons} />
        </IconButton>
        <IconButton color="primary.dark">
          <PaymentIcon className={classes.icons} />
        </IconButton>
        <IconButton color="primary.dark">
          <SettingsIcon className={classes.icons} />
        </IconButton>
        <IconButton color="secondary">
          <ExitToAppIcon className={classes.icons} />
        </IconButton>
      </Box>
    </Grid>
  );
}
