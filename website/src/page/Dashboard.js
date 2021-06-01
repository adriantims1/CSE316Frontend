import React, { useState, useEffect } from "react";
import Sidebar from "../components/SideBar";

import { Grid, Paper, makeStyles } from "@material-ui/core";

import UserHeader from "../components/userHeader";
import UserDashboard from "../components/Dashboard SubComp/UserDashboard";
import AdminDashboard from "../components/Dashboard SubComp/adminDashboard";
import { getBinomoDealsAPIMethod } from "../api/profileClient";

const styles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
  },
  rightbar: {
    display: "flex",
    height: "100%",
    width: "80%",
    backgroundColor: theme.palette.primary.main,
    alignItems: "center",
    justifyContent: "center",
  },
  rightContainer: {
    height: "95%",
    width: "95%",
    backgroundColor: theme.palette.primary.dark,
  },
}));


export default function Dashboard() {
  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(localStorage.getItem("isAdmin"))
  );
  const classes = styles();

  useEffect(async () => {
    try {
      await getBinomoDealsAPIMethod(10, (res) => {
        let won = 0;
        let loss = 0;
        let tie = 0;
        (res.data.data).forEach(element => (element.status == "won") ? won = won + 1 : ((element.status == "lost") ? loss = loss + 1 : tie = tie + 1));
        localStorage.setItem("seriesD", [won, loss, tie]);
      });
    } catch (err) {
      alert(err.response);
    }
  }, []);


  return (
    <Grid container alignItems="center" className={classes.root}>
      <Sidebar />
      <Grid item className={classes.rightbar}>
        <Paper className={classes.rightContainer}>
          <UserHeader page="Dashboard" />
          {isAdmin ? <AdminDashboard /> : <UserDashboard />}
        </Paper>
      </Grid>
    </Grid>
  );
}
