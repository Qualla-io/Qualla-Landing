import { makeStyles } from "@material-ui/core";
import React from "react";

import { ReactTypeformEmbed } from "react-typeform-embed";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",

    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      padding: "50px",
      height: window.innerHeight - 88,
    },
    [theme.breakpoints.only("xs")]: {
      height: window.innerHeight - 78,
    },
  },
}));

export default function Survey() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ReactTypeformEmbed
        url="https://form.typeform.com/to/bmLNNWBy"
        style={{ width: "100%", height: "100%", position: "relative" }}
      />
      {/* <div
        className="typeform-widget"
        data-url="https://form.typeform.com/to/bmLNNWBy"
        style={{ width: "100%", height: "500px" }}
      ></div>
      <script> {`(function() {  } })() `}</script>{" "} */}
      {/* <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;">
        {" "}
        powered by{" "}
        <a
          href="https://admin.typeform.com/signup?utm_campaign=bmLNNWBy&utm_source=typeform.com-01EPFDF4KAYE0A7ARGE4XV59FV-free&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN"
          style="color: #999"
          target="_blank"
        >
          Typeform
        </a>{" "}
      </div> */}
    </div>
  );
}
