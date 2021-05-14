import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
const styles = makeStyles((theme) => ({
  sidebar: {
    height: "100%",
    width: "20%",
    backgroundColor: "red",
  },
}));

export default function SideBar() {
  const classes = styles();
  return <Grid item className={classes.sidebar}></Grid>;
}
