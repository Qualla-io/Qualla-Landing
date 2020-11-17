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
  logoSm: {
    position: "fixed",
    top: 50,
    left: theme.spacing(2),
    zIndex: 1,
    height: "25px",
  },
}));

export default function QuallaLogo() {
  const classes = useStyles();
  return (
    <>
      <Hidden smDown>
        <QuallaLogoIcon className={classes.logo} />
      </Hidden>
      <Hidden mdUp>
        <QuallaLogoIcon className={classes.logoSm} />
      </Hidden>
    </>
  );
}
