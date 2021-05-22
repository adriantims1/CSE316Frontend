import React, { useState, useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import ResultCard from "../components/ResultCard";
import { Paper, makeStyles, Grid, Typography, Box } from "@material-ui/core";
import useWebSocket from "react-use-websocket";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import axios from "axios";

const styles = makeStyles((theme) => ({
  bodyContainer: {
    height: "80vh",
    width: "95vw",
    backgroundColor: theme.palette.primary.main,
    alignItems: "inline",

    margin: "0px 2%",
    display: "flex",
  },
  leftContainer: {
    height: "100%",
    width: "80%",
  },
  rightContainer: {
    height: "100%",
    width: "30%",
  },
  predictor: {
    fontFamily: "Inter",
    fontWeight: "bold",
    fontSize: "36px",
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    marginRight: "5%",
  },
}));

const Live = () => {
  const [transHistory, setTransHistory] = useState([]);
  const [price, setCurrPrice] = useState(0);
  const fetchBinProfile = async () => {
    var temp = await axios.get("/api/binProfile/");
    temp = temp.data.data;
    console.log(temp);
    setTransHistory(temp);
  };
  useEffect(() => {
    var a = setInterval(async () => {
      var temp = await axios.get("/api/candles/");
      temp = temp.data.data;

      ApexCharts.exec("realtime", "updateSeries", [
        {
          data: temp,
        },
      ]);
    }, 5000);
    fetchBinProfile();
    var b = setInterval(() => {
      fetchBinProfile();
    }, 60000);
    return () => {
      clearInterval(a);
      clearInterval(b);
    };
  }, []);
  const [state, setState] = useState({
    series: [
      {
        data: [0, 0, 0, 0, 0],
      },
    ],
    options: {
      colors: ["#ffffff"],
      chart: {
        foreColor: "#fff",
        id: "realtime",
        height: 350,
        type: "line",
        animations: {
          enabled: true,
          easing: "linear",
          dynamicAnimation: {
            speed: 1000,
          },
        },
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "5 Last Candles",
        align: "left",
        style: {
          color: "#ffffff",
        },
      },
      markers: {
        size: 0,
      },

      legend: {
        show: false,
      },
    },
  });
  let intervalID;
  /*useEffect(async () => {
    intervalID = 
    return () => {
      console.log("testing");
      clearInterval(intervalID);
    };
  });*/

  const classes = styles();

  const { sendJsonMessage } = useWebSocket("wss://as.binomo.com/", {
    onOpen: () => {
      sendJsonMessage({ action: "subscribe", rics: ["Z-CRY/IDX"] });
    },
    shouldReconnect: () => true,
    onMessage: (e) => {
      e = JSON.parse(e.data);
      if ("assets" === e.data[0].action) {
        setCurrPrice(e.data[0].assets[0].rate);
      }
    },
  });

  return (
    <>
      <NavBar />
      <Paper elevation={0} className={classes.bodyContainer}>
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          direction="row"
          className={classes.leftContainer}
        >
          <Grid item>
            <Box display="flex">
              <Typography className={classes.predictor} color="secondary">
                Live Trades
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            style={{
              width: "100%",
              height: "88.5%",
            }}
            className={classes.secondary}
            id="chart"
          >
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="100%"
              height="100%"
            />
          </Grid>
        </Grid>
        <Grid container direction="column" className={classes.rightContainer}>
          <Grid item>
            <Box display="flex">
              <Typography className={classes.predictor} color="secondary">
                Result
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            style={{
              width: "100%",
              height: "88.5%",
            }}
          >
            <Box
              display="flex"
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                marginTop: "2vh",
                height: "100%",
              }}
            >
              {transHistory.map((el) => (
                <ResultCard
                  key={el.id}
                  amount={el.amount}
                  win={el.win}
                  trend={el.trend}
                  status={el.status}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Live;
