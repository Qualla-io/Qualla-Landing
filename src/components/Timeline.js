import {
  Paper,
  Typography,
  makeStyles,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  Button,
} from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";

import { ReactComponent as PaintingIcon } from "../images/painting.svg";

import React from "react";
import { Link } from "react-router-dom";
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
  timelineItem: {
    paddingBottom: theme.spacing(4),
  },
  list: {
    padding: theme.spacing(1),
  },
  divider: {
    background: theme.palette.secondary.main,
  },
  callBtn: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    borderRadius: 15,
    padding: theme.spacing(2),
  },
  btnText: {
    marginRight: theme.spacing(2),
  },
  btnDiv: {
    display: "flex",
    justifyContent: "center",
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
      title: "Exclusive Digital Goods",
      description: ` 
        Create exclusive digital goods that your users can own, collect,
        and trade as non-fungible tokens (NFTs). Offer them as
        subscription perks or one time purchases. Think art, music, and
        more. Any digital asset can be made into a limited NFT that your
        followers will value.`,
    },
    {
      icon: <PeopleAltOutlinedIcon className={classes.icon} />,
      title: "Progressive Decentralization",
      description: ` 
        As the platform matures, we plan to incrementally turn control over to the
        community of creators and users who value it most. We want to radically reward 
        and include those who have an active stake in the future of the platform.`,
    },
  ];

  return (
    <div className={classes.container}>
      <CustomContainer>
        <Typography className={classes.heading} variant="h3">
          Road map
        </Typography>
        <Hidden smDown>
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
                  <TimelineContent className={classes.timelineItem}>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6">
                        <b>{step.title}</b>
                      </Typography>
                      <Typography>{step.description}</Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              </>
            ))}
          </Timeline>
        </Hidden>
        <Hidden mdUp>
          <List className={classes.list}>
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
        </Hidden>
        <div className={classes.btnDiv}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.callBtn}
            component={Link}
            to={"/survey"}
          >
            <Typography
              variant="h5"
              className={classes.btnText}
              color="inherit"
            >
              Get Creative Freedom
            </Typography>{" "}
            <ArrowForwardIosIcon />
          </Button>
        </div>
      </CustomContainer>
    </div>
  );
}
