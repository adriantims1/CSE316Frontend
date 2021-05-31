import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import UserHeader from "../components/userHeader";
import Chart from "react-apexcharts";
import Masonry from 'react-masonry-css';
// import { postMessagesAPIMethod } from "../api/adminClient";

import {
  Grid,
  Paper,
  makeStyles,
  withStyles,
  Container,
} from "@material-ui/core";

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
  contentContainer: {
    height: "85%",
    width: "100%",
  },
}));

export default function ContactUserVAdmin() {
  const localUser = JSON.parse(localStorage.getItem("isAdmin"));
  const [isAdmin, setIsAdmin] = useState(localUser);
  const classes = styles();

  //BAR graph
  const [optionsB, setOptions] = useState({ chart: { id: "basic-bar" }, xaxis: { categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998] } });
  const [seriesB, setSeries] = useState([{ name: "series-1", data: [30, 40, 45, 50, 49, 60, 70, 91] }]);

  //DONUT graph
  const [optionsD, setOptionsD] = useState({});
  const [seriesD, setSeriesD] = useState([44, 55, 41, 17, 15]);
  const [labelsD, setLabelsD] = useState(['A', 'B', 'C', 'D', 'E']);
  // const breakpoints = {
  //   default: 3,
  //   1100: 3,
  //   300: 1
  // };

  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Grid container alignItems="center" className={classes.root}>
      <Sidebar />
      <Grid item className={classes.rightbar}>
        <Paper className={classes.rightContainer}>
          <UserHeader page=" Statistics" />

          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {isAdmin ? "Admin" : "USER"}
            <Chart
              options={optionsB}
              series={seriesB}
              type="bar"
              width="500"
            />
            <Chart options={optionsD} series={seriesD} type="donut" width="380" />

          </Masonry>


        </Paper>
      </Grid>
    </Grid>
  );
}
