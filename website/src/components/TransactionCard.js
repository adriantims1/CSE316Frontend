import React from "react";
import { Card, CardContent, makeStyles, Container } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  card: {
    width: "100%",
    background: theme.palette.primary.main,
    marginBottom: "1.5%",
    boxShadow: "5px",
  },
}));

export default function TransactionCard() {
  const classes = styles();
  return (
    <Container>
      <Card elevation={4} className={classes.card}>
        <CardContent></CardContent>
      </Card>
    </Container>
  );
}
