import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, Tooltip, Hidden } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";

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
  topbar: {
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
    marginLeft: 0,
  },
  center: {
    display: "flex",
    marginLeft: "auto",
  },
  grow: {
    display: "flex",
    direction: "row",
    marginRight: 0,
    verticalAlign: "text-bottom",
  },
  content: {
    verticalAlign: "bottom",
  },
}));

export default function Topbar() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("Coming Soon...");
  };

  return (
    <div className={classes.container}>
      <div className={classes.topbar}>
        <Typography
          component={Link}
          to={"/"}
          className={classes.title}
          variant="h4"
          color="inherit"
          style={{ textDecoration: "none" }}
        >
          <b>Qualla</b>
        </Typography>
        <div className={classes.center}></div>
        <div className={classes.grow}>
          <Hidden smDown>
            <Grid
              container
              spacing={4}
              className={classes.content}
              alignItems="flex-end"
            >
              <Grid item>
                <Tooltip title="Coming Soon..." arrow>
                  <Typography
                    component={Link}
                    variant="h6"
                    color="inherit"
                    onClick={handleClick}
                    style={{ textDecoration: "none" }}
                  >
                    Try the demo
                  </Typography>
                </Tooltip>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  component={Link}
                  to={"/survey"}
                  color="inherit"
                  style={{ textDecoration: "none" }}
                >
                  Get creative freedom
                </Typography>
              </Grid>
            </Grid>
          </Hidden>
        </div>
      </div>
    </div>
  );
}
