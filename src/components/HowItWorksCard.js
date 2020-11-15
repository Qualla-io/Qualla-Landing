import {
  Grid,
  Typography,
  Card,
  makeStyles,
  CardContent,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(4),
  },
  number: {
    marginTop: theme.spacing(4),
    zIndex: 1,
    boxSizing: "border-box",
    "&::before": {
      content: '""',
      zIndex: 0,
      boxSizing: "inherit",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "100%",
      background: "#2070ff",
      opacity: 0.1,
    },
  },
}));

export default function HowItWorksCard(props) {
  const classes = useStyles();
  const step = props.step;
  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <Typography className={classes.number} variant="h2">
          {step.num}
        </Typography>
        <Typography className={classes.content} variant="h4">
          <b>{step.title}</b>
        </Typography>
        <Typography className={classes.content}>{step.description}</Typography>
      </CardContent>
    </Card>
  );
}
