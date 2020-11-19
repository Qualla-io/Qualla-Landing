import { Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    direction: "column",
    justify: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      paddingRight: 146,
      paddingLeft: 146,
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: 50,
      paddingLeft: 50,
    },
  },
  footer: {
    display: "flex",
    direction: "row",
    margin: "auto",
    width: "100%",
    marginTop: theme.spacing(6),
    justifyContent: "bottom",
    [theme.breakpoints.up("lg")]: {
      maxWidth: 1280,
    },
    [theme.breakpoints.only("md")]: {
      maxWidth: 960,
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: 600,
    },
  },
  title: {
    color: theme.palette.secondary.contrastText,
  },
}));

export default function FooterGrid() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container className={classes.footer}>
        <Grid item container>
          <Typography variant="h4" className={classes.title}>
            Qualla
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
