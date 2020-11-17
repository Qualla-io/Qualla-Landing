import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import Hero from "../components/Hero";
import Topbar from "../components/Topbar";
import CustomContainer from "./CustomContainer";

const useStyles = makeStyles((theme) => ({
  header: {
    // height: "90vh",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <CustomContainer>
        <Topbar />
        <Hero />
      </CustomContainer>
    </div>
  );
}
