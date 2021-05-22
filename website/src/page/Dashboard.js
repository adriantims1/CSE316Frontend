import React from "react";
import Sidebar from "../components/SideBar";
import TransactionCard from "../components/TransactionCard";
import {
  Grid,
  Paper,
  Box,
  makeStyles,
  Typography,
  Container,
  Card,
  CardContent,
} from "@material-ui/core";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import UserHeader from "../components/userHeader";

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

  title: {
    fontFamily: "Comfortaa",
    fontWeight: "bold",
    fontSize: "48px",
    color: theme.palette.secondary.main,
    alignSelf: "center",
  },
  cardContainer: {
    marginTop: "2%",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  card: {
    width: "45%",
    backgroundColor: theme.palette.secondary.main,
  },
  profileName: {
    fontFamily: "Comfortaa",
    fontSize: "16px",
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  fontBody: {
    fontFamily: "Comfortaa",
    fontWeight: "regular",
    fontSize: "12px",
  },
  fontSeparator: {
    fontFamily: "Comfortaa",
    fontWeight: "bold",
    fontSize: "24px",
    color: theme.palette.secondary.main,
    marginBottom: "1%",
  },
}));

export default function Dashboard() {
  const classes = styles();
  return (
    <div>
      <Grid container alignItems="center" className={classes.root}>
        <Sidebar />
        <Grid item className={classes.rightbar}>
          <Paper className={classes.rightContainer}>
            <UserHeader page="Dashboard" />
            <Container className={classes.cardContainer}>
              <Card className={classes.card}>
                <CardContent>
                  <Box
                    display="flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    <Typography className={classes.fontBody} color="primary">
                      My Balance
                    </Typography>
                    <Typography className={classes.fontBody} color="primary">
                      Withdraw
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-end",
                      height: "70px",
                    }}
                  >
                    <Typography
                      className={classes.fontBody}
                      style={{ fontSize: "32px", fontWeight: "bold" }}
                      color="primary"
                    >
                      {`USD 5,600.00`}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
              <Card
                className={classes.card}
                style={{ backgroundColor: "white" }}
              >
                <CardContent
                  className={classes.fontBody}
                  style={{ alignItems: "space-between" }}
                >
                  <Box display="flex">
                    <Typography
                      className={classes.fontBody}
                      color="secondary"
                      style={{ justifySelf: "flex-start" }}
                    >
                      Last 24 Hours
                    </Typography>
                  </Box>
                  <br />

                  <Box
                    display="flex"
                    style={{ justifyContent: "space-even" }}
                    direction="row"
                  >
                    <EqualizerOutlinedIcon
                      style={{
                        zIndex: "2",
                        alignSelf: "center",
                        justifySelf: "center",
                        height: "75px",
                        width: "75px",
                        left: "10",
                        backgroundColor: "#B0D2E8",
                        borderRadius: "50%",
                        padding: "12px",
                        boxSizing: "border-box",
                      }}
                      color="secondary"
                    />
                    <Box
                      display="flex"
                      style={{
                        flexDirection: "column",
                        justifyItems: "flex-start",
                        alignItems: "baselines",
                        marginLeft: "10%",
                      }}
                    >
                      <Box display="flex">
                        <ArrowUpwardIcon
                          style={{
                            color: "green",
                            backgroundColor: "lightgreen",
                            borderRadius: "50%",
                            marginRight: "12px",
                          }}
                        />
                        <Typography
                          className={classes.fontBody}
                          style={{
                            alignSelf: "flex-start",
                            fontSize: "18px",
                            color: "green",
                          }}
                        >
                          {`2.50%`}
                        </Typography>
                      </Box>

                      <br />
                      <Typography
                        style={{
                          alignSelf: "flex-start",
                          fontSize: "18px",
                          color: "green",
                        }}
                        className={classes.fontBody}
                      >
                        5.00 in profit
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Container>
            <Container display="flex" className={classes.cardContainer}>
              <Typography className={classes.fontSeparator}>
                Last 5 Transactions
              </Typography>
            </Container>
            <Box
              display="flex"
              style={{
                height: "50%",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {["", "", "", "", ""].map((element) => (
                <TransactionCard />
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
