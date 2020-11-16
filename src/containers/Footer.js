import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    height: "200px",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return <div className={classes.footer}></div>;
}
