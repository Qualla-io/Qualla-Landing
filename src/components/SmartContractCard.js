import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(4),
  },
}));





export default function SmartContractCard() {
  const classes = useStyles();
  return (
    <Grid item md={10} component={Card} className={classes.card}>
      <CardContent>
        <Typography variant="h6">
          <b>You're In Control</b>
        </Typography>
        <Typography>
        Subscriptions on the Qualla platform are run by Ethereum smart contracts
        </Typography>
      </CardContent>
      <CardMedia></CardMedia>
    </Grid>
  );
}
