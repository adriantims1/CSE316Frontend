import React, { useState, useEffect } from "react";
import Sidebar from "../components/SideBar";

import {
  Grid,
  Paper,
  makeStyles,
  Backdrop,
  Container,
} from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { getAllMessagesAPIMethod } from "../api/adminClient";

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
  contentContainer: {
    height: "85%",
    width: "100%",
  },
}));

export default function MessageCenter() {
  const columns = [
    { field: "id", headerName: "Id", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "date", headerName: "Send Date", width: 250 },
    { field: "message", headerName: "Message", width: 350, sortable: false },
  ];
  const [rows, setRows] = useState([]);

  useEffect(async () => {
    try {
      getAllMessagesAPIMethod((res) => {
        console.log(res.data.data.infos);
        var temp = [];
        res.data.data.infos.forEach((el) => {
          temp.push({
            id: el._id,
            name: el.name,
            email: el.email,
            date: el.date,
            message: el.message,
          });
        });
        setRows(temp);
      });
    } catch (err) {
      alert(err.response);
    }
  }, []);
  const classes = styles();
  return (
    <Grid container alignItems="center" className={classes.root}>
      <Sidebar />
      <Grid item className={classes.rightbar}>
        <Paper className={classes.rightContainer}>
          <UserHeader page="Message Center" />
          <Container className={classes.contentContainer}>
            <DataGrid rows={rows} columns={columns} pageSize={10} />
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
}
