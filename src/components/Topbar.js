import React from "react";


import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  topbar: {
    display: "flex",
    direction: "row",
    marginTop: theme.spacing(6),
    justifyContent: "bottom",
  },
  title: {
  },
  grow: {
    display: "flex",
    direction: "row",
    marginLeft: "auto",
    verticalAlign: "text-bottom",
  },
  content: {
    verticalAlign: "bottom",
  },
}));

export default function Topbar() {
  const classes = useStyles();
  return (
    <div className={classes.topbar}>
      <Typography className={classes.title} variant="h4">
        Qualla
      </Typography>
      <div className={classes.grow}>
        <Grid
          container
          spacing={4}
          className={classes.content}
          alignItems="flex-end"
        >
          <Grid item component={Typography} variant="h6">
            Try the demo
          </Grid>
          <Grid item component={Typography} variant="h6">
            Get creative freedom
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
