import { makeStyles } from "@material-ui/core";
import React from "react";
import CustomTimeline from "../components/Timeline";

const useStyles = makeStyles((theme) => ({
  footerDiv: {
    background: `linear-gradient(to top, #C2FFF2, ${theme.palette.background.default} 90%)`,
    paddingTop: theme.spacing(2)
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    height: "200px",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    // width: "98vw",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footerDiv}>
      <CustomTimeline />
      <div className={classes.footer}></div>
    </div>
  );
}
