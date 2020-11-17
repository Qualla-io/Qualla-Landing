import {  Hidden, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    direction: "column",
    justify: "center",
    alignItems: "center",
    paddingRight: 146,
    paddingLeft: 146,
  },
  rootSm: {
    display: "flex",
    direction: "column",
    justify: "center",
    alignItems: "center",
    paddingRight: 50,
    paddingLeft: 50,
  },
  constLg: {
    display: "inline",
    direction: "row",
    maxWidth: 1280,
    margin: "auto",
  },
  constMd: {
    display: "inline",
    direction: "row",
    maxWidth: 960,
    margin: "auto",
  },
  constSm: {
    display: "inline",
    direction: "row",
    maxWidth: 600,
    margin: "auto",
  },
}));

export default function CustomContainer(props) {
  const classes = useStyles();
  return (
    <>
      <Hidden only={["xs", "sm", "md"]}>
        <div className={classes.root}>
          <div className={classes.constLg}>{props.children}</div>
        </div>
      </Hidden>
      <Hidden only={["xs", "sm", "lg", "xl"]}>
        <div className={classes.root}>
          <div className={classes.constMd}>{props.children}</div>
        </div>
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <div className={classes.rootSm}>
          <div className={classes.constMd}>{props.children}</div>
        </div>
      </Hidden>
      {/* <Hidden only={["xs", "sm", "md", "xl"]}>
        <Container maxWidth="md">{props.children}</Container>
      </Hidden>
      <Hidden only={["lg", "xl"]}>
        <Container maxWidth="sm">{props.children}</Container>
      </Hidden> */}
    </>
  );
}
