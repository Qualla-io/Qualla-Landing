import { makeStyles } from "@material-ui/core";
import React from "react";
import Hero from "../components/Hero";
import Topbar from "../components/Topbar";
import CustomContainer from "./CustomContainer";

import LandingPageIcon from "../images/LandingVector.svg";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundImage: `url('${LandingPageIcon}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom 40px right 5px",
    borderBottomWidth: 10,
    borderBottomColor: theme.palette.primary.main,
    borderBottomStyle: "solid",
    [theme.breakpoints.down("xs")]: {
      backgroundSize: "50% 60%",
    },
    [theme.breakpoints.up("sm")]: {
      backgroundSize: "45% 90%",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <CustomContainer>
        {/* <Topbar /> */}
        <Hero />
      </CustomContainer>
    </div>
  );
}
