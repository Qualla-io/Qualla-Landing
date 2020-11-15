import { Typography, makeStyles, Grid, Button } from "@material-ui/core";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import React from "react";

const useStyles = makeStyles((theme) => ({
  headline: {
    marginTop: theme.spacing(8),
  },
  tagline: {
    marginTop: theme.spacing(2),
  },
  callBtn: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    borderRadius: 15,
    padding: theme.spacing(2),
  },
  btnText: {
    marginRight: theme.spacing(1),
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        component={Typography}
        item
        xs={8}
        variant="h1"
        className={classes.headline}
      >
        <b>A decentralized solution to creative freedom.</b>
      </Grid>
      <Grid
        component={Typography}
        item
        xs={6}
        variant="h5"
        className={classes.tagline}
      >
        Qualla puts the control directly into the hands of creators and those
        who support them.
      </Grid>
      <Button variant="contained" className={classes.callBtn}>
        <Typography variant="h5" className={classes.btnText}>
          <b>Get Creative Freedom </b>
        </Typography>{" "}
        <ArrowForwardRoundedIcon />
      </Button>
    </div>
  );
}
