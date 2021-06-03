import React, { useEffect, useState } from "react";
import Sidebar from "../components/SideBar";
import UserHeader from "../components/userHeader";
import Chart from "react-apexcharts";
import Masonry from 'react-masonry-css';

import {
  Grid,
  Paper,
  makeStyles,
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

  const [isAdmin, setIsAdmin] = useState(JSON.parse(localStorage.getItem("isAdmin")));
  const classes = styles();

  //BAR graph
  var users = JSON.parse(localStorage.getItem("users"));
  let month = {};
  (users).forEach(element => (month[new Date(element.joinedDate).getMonth()]) ? month[new Date(element.joinedDate).getMonth()] += 1 : month[new Date(element.joinedDate).getMonth()] = 1);
  let monthCategories = ["Jan", "Feb", "Mar",];
  let monthData = [4, 2, 6];
  let MonthLst = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  Object.keys(month).forEach(element => {
    monthCategories.push(MonthLst[element])
    monthData.push(month[element])
  });
  const [optionsB, setOptions] = useState({ chart: { id: "basic-bar" }, xaxis: { categories: monthCategories } });
  const [seriesB, setSeries] = useState([{ name: "User Joining size", data: monthData }]);


  //DONUT graph
  const [optionsD, setOptionsD] = useState({ labels: ['Win', 'Loss', 'Tie'] });
  let x = localStorage.getItem("seriesD")
  const [seriesD, setSeriesD] = useState([Number(x[0]), Number(x[2]), Number(x[4])]);


  const breakpoints = {
    default: 2,
    1100: 2,
    700: 1
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

            <div>{isAdmin ? "Admin-: " : "Profile-"}</div>

            <div>
              {isAdmin && <Chart
                options={optionsB}
                series={seriesB}
                type="bar"
                width="500"
              />}
            </div>

            <div>
              <Chart options={optionsD} series={seriesD} type="pie" width="380" />
            </div>
          </Masonry>

        </Paper>
      </Grid>
    </Grid>
  );
}
