import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Container,
} from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
// import { getAllMessagesAPIMethod } from "../../api/adminClient";


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
    { field: "date", headerName: "Date", width: 300 },
    { field: "Title", headerName: "Title", width: 250 },
    { field: "message", headerName: "Message", width: 450, sortable: false },
  ];
  const [rows, setRows] = useState([]);

  useEffect(async () => {
    try {
      // getAllMessagesAPIMethod((res) => {
      //   console.log(res.data.data.infos);
      //   var temp = [];
      //   res.data.data.infos.forEach((el) => {
      //     temp.push({
      //       date: el.date,
      //       title: el.title,
      //       message: el.message,
      //     });
      //   });
      //   setRows(temp);
      // });
    } catch (err) {
      alert(err.response);
    }
  }, []);
  const classes = styles();
  return (
    <Container className={classes.contentContainer}>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </Container>
  );

}
