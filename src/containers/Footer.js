import { makeStyles } from "@material-ui/core";
import React from "react";
import FooterGrid from "../components/FooterGrid";
import CustomTimeline from "../components/Timeline";

const useStyles = makeStyles((theme) => ({
  footerDiv: {
    background: `linear-gradient(to top, #C2FFF2, ${theme.palette.background.default} 90%)`,
    paddingTop: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    height: "200px",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    // width: "98vw",
  },
  title: {
    // paddingTop: theme.spacing(6),
    // paddingLeft: theme.spacing(6),
    color: theme.palette.secondary.contrastText,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footerDiv}>
      <CustomTimeline />
      <div className={classes.footer}>
        <FooterGrid />
      </div>
    </div>
  );
}
