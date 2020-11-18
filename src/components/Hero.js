import { Typography, makeStyles, Grid, Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React from "react";


// import CustomButton from "./CustomButton";

const useStyles = makeStyles((theme) => ({
  heroRoot: {
    
  },
  headline: {
    marginTop: theme.spacing(8),
  },
  tagline: {
    marginTop: theme.spacing(2),
    background: theme.palette.background.default
  },
  callBtn: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    borderRadius: 15,
    padding: theme.spacing(2),
  },
  btnText: {
    marginRight: theme.spacing(2),
  },
  icon: {
    flexGrow: 1,
    direction: "row",
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.heroRoot}>
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
      <Button variant="contained" color="secondary" className={classes.callBtn}>
        <Typography variant="h5" className={classes.btnText} color="inherit">
          Get Creative Freedom
        </Typography>{" "}
        <ArrowForwardIosIcon />
      </Button>
      {/* <CustomButton /> */}
    </div>
  );
}
