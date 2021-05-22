import React from "react";
import { Card, CardContent, makeStyles, Container } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  card: {
    width: "100%",
    background: theme.palette.primary.main,
    boxShadow: "5px",
  },
}));

export default function TransactionCard() {
  const classes = styles();
  return (
    <Container style={{ height: "18%" }}>
      <Card style={{ height: "80%" }} elevation={4} className={classes.card}>
        <CardContent></CardContent>
      </Card>
    </Container>
  );
}
