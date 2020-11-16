import React from "react";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import useStyles from "./detailStyles";
import { ReactComponent as DaiLogo } from "../images/daiLogo.svg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const _useStyles = makeStyles((theme) => ({
  div: {
    backgroundColor: "#B0B0B0",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

export default function SubscriberDetail() {
  const classes = useStyles();
  const _classes = _useStyles();
  return (
    <div className={_classes.div}>
      <Container>
        <Grid
          container
          direction="row"
          spacing={6}
          className={classes.container}
        >
          <Grid item xs={12} sm={5} className={classes.mediaContainer}>
            <DaiLogo className={classes.media} />
          </Grid>
          <Grid item xs={12} sm={7} className={classes.content}>
            <Typography variant="h3" className={classes.title}>
              <b>Crypto made easy</b>
            </Typography>
            <Typography className={classes.paragraph}>
              Decentralized applications have historically been complex and hard
              to use. Qualla puts the user experience in the front row seat. All
              you need to get started is an Ethereum wallet to sign
              transactions. You can get one for free by downloading the popular
              browser extension Metamask, or connect an exsisting wallet. We
              handle all the complexities of transactions so you don't have to.
              Just sign a message for each action you take to prove its you.
              Safe, simple, secure!
            </Typography>
            <div className={classes.button}>
              <Tooltip title="Coming Soon..." arrow>
                <Button variant="contained" disableRipple>
                  <Typography variant="subtitle1" className={classes.buttonTxt}>
                    <b>Try the demo!</b>
                  </Typography>
                  <ArrowForwardIosIcon className={classes.buttonIcon} />
                </Button>
              </Tooltip>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
