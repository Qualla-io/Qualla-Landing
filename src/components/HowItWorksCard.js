import { Typography, Card, makeStyles, CardContent } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(4),
    textAlign: "center",
  },
  content: {
    marginTop: theme.spacing(4),
  },
  number: {
    height: 75,
    width: 75,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    background: `linear-gradient(-45deg, #C2FFF2, #EBFFFB)`,
  },
  topDiv: {
    display: "flex",
    direction: "row",
    paddingTop: theme.spacing(4),
    justifyContent: "center",
  },
  grow: {
    margin: "auto",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    borderRadius: 12,
  },
}));

export default function HowItWorksCard(props) {
  const classes = useStyles();
  const step = props.step;
  return (
    <Card className={classes.card} raised>
      <CardContent>
        <div className={classes.topDiv}>
          <Typography variant="h2" className={classes.number}>
            {step.num}
          </Typography>
        </div>
        <Typography className={classes.title} variant="h4">
          <b>{step.title}</b>
        </Typography>

        <Typography className={classes.content}>{step.description}</Typography>
      </CardContent>
    </Card>
  );
}
