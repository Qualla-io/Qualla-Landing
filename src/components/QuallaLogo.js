import { Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import { ReactComponent as QuallaLogoIcon } from "../images/QuallaLogo.svg";

const useStyles = makeStyles((theme) => ({
  logo: {
    position: "fixed",
    top: 38,
    left: theme.spacing(6),
    zIndex: 1,
    height: "50px",
  },
}));

export default function QuallaLogo() {
  const classes = useStyles();
  return (
    <>
      <Hidden smDown>
        <QuallaLogoIcon className={classes.logo} />
      </Hidden>
    </>
  );
}
