import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { ReactComponent as DaiLogo } from "../images/daiLogo.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
  },
  media: {
    margin: theme.spacing(4)
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  paragraph: {},
  button: {
    marginTop: theme.spacing(3),
    width: "150px",
  },
}));

export default function DaiDetail() {
  const classes = useStyles();
  return (
    <Grid container direction="row" spacing={4} className={classes.container}>
      <Grid item xs={5}>
        <DaiLogo className={classes.media} />
      </Grid>
      <Grid item xs={7} className={classes.content}>
        <Typography variant="h4" className={classes.title}>
          Freedom of pure digital payments
        </Typography>
        <Typography className={classes.paragraph}>
          All of the subscriptions on Qualla are paid in Dai, a completely
          decentralized, stable crytocurrency pegged to the USD. Accept payments
          from anywhere in the world without worring about exchange rates or
          volatility. Transactions are settled instantly and securely.
        </Typography>
        <Button variant="contained" className={classes.button}>
          <b>Learn more</b>
        </Button>
      </Grid>
    </Grid>
  );
}
