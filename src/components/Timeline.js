import {
  Paper,
  Typography,
  makeStyles,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Divider,
  Card,
  ListItemIcon,
} from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
// import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";

import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";

import { ReactComponent as PaintingIcon } from "../images/painting.svg";

import React, { Fragment } from "react";
import CustomContainer from "../containers/CustomContainer";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
  },
  paper: {
    padding: theme.spacing(2),
  },
  heading: {
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
  icon: {
    width: "50px",
    height: "50px",
  },
  dot: {
    padding: 10,
    borderColor: theme.palette.secondary.main,
    borderWidth: 2,
  },
  list: {
    padding: theme.spacing(1),
  },
  divider: {
    background: theme.palette.secondary.main,
  },
}));

export default function CustomTimeline() {
  const classes = useStyles();

  const steps = [
    {
      icon: <PaymentOutlinedIcon className={classes.icon} />,
      title: "Subscriptions",
      description: ` 
        Gather support from your followers and reward them with access to
        exclusive content and other perks. You own the content and the
        smart contract. We take care of the rest.`,
    },
    {
      icon: <PaintingIcon className={classes.icon} />,
      title: "Exclusive Digitial Goods",
      description: ` 
        Create exclusive digital goods that your users can own, collect,
        and trade as non-fungable tokens (NFTs). Offer them as
        subscription perks or one time purchases. Think art, music, and
        more. Any digital asset can be made into a limited NFT that your
        followers will value.`,
    },
    {
      icon: <PeopleAltOutlinedIcon className={classes.icon} />,
      title: "Progressive Decentralization",
      description: ` 
        As the platform matures, we plan to turn control over to the
        community of creators and users who value it most. We want to make
        our community into stakeholders who are rewarded for using the
        platform and have a say in its future.`,
    },
  ];

  return (
    <div className={classes.container}>
      <CustomContainer>
        <Typography className={classes.heading} variant="h3">
          Road map
        </Typography>
        <Hidden xsDown>
          <Timeline align="alternate">
            {steps.map((step, i) => (
              <>
                <TimelineItem key={i}>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" className={classes.dot}>
                      {step.icon}
                    </TimelineDot>
                    {i < steps.length - 1 ? <TimelineConnector /> : null}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6">{step.title}</Typography>
                      <Typography>{step.description}</Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              </>
            ))}
          </Timeline>
        </Hidden>
        <Hidden smUp>
          <Card className={classes.list}>
            <List>
              {steps.map((step, i) => (
                <>
                  <ListItem alignItems="flex-start" key={i}>
                    <ListItemIcon>{step.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h6">
                          <b>
                            {i + 1}. {step.title}{" "}
                          </b>
                        </Typography>
                      }
                      secondary={<Typography>{step.description}</Typography>}
                    />
                  </ListItem>
                  {i < steps.length - 1 ? (
                    <Divider
                      variant="inset"
                      component="li"
                      classes={{ root: classes.divider }}
                    />
                  ) : null}
                </>
              ))}
            </List>
          </Card>
        </Hidden>
      </CustomContainer>
    </div>
  );
}
