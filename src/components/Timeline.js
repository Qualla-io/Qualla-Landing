import { Container, Paper, Typography, makeStyles } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PaletteIcon from "@material-ui/icons/Palette";
import PeopleIcon from "@material-ui/icons/People";

import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6)
  },
  paper: {
    padding: theme.spacing(2),
  },
  heading:{
      textAlign: "center"
  },
  icon: {
    width: "50px",
    height: "50px",
  },
}));

export default function CustomTimeline() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.heading} variant="h3" >Road map</Typography>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <MonetizationOnIcon color="primary" className={classes.icon} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {" "}
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6">Subscriptions</Typography>
              <Typography>
                Gather support from your followers and reward them with access
                to exclusive content and other perks. You own the content and
                the smart contract. We take care of the rest.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <PaletteIcon color="primary" className={classes.icon} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {" "}
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6">Exclusive Digitial Goods</Typography>
              <Typography>
                Create exclusive digital goods that your users can own, collect,
                and trade as non-fungable tokens (NFTs). Offer them as
                subscription perks or one time purchases. Think art, music, and
                more. Any digital asset can be made into a limited NFT that your
                followers will value.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <PeopleIcon color="primary" className={classes.icon} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            {" "}
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6">Progressive Decentralization</Typography>
              <Typography>
                As the platform matures, we plan to turn control over to the
                community of creators and users who value it most. We want to
                make our community into stakeholders who are rewarded for using
                the platform and have a say in its future.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}
