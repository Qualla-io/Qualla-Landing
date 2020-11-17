import {
  Button,
  Container,
  Grid,
  Tooltip,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { ReactComponent as DaiLogo } from "../../images/daiLogo.svg";

import useStyles from "../detailStyles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CustomContainer from "../../containers/CustomContainer";

const _useStyles = makeStyles((theme) => ({
  div: {
    // backgroundColor: "#B0B0B0",
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
}));

export default function DaiDetail() {
  const classes = useStyles();
  const _classes = _useStyles();
  return (
    <div className={_classes.div}>
      <CustomContainer>
        <Grid
          container
          direction="row"
          spacing={6}
          className={classes.container}
        >
          <Grid item xs={12} sm={7} className={classes.content}>
            <Typography variant="h3" className={classes.title}>
              <b>Expand your audience</b>
            </Typography>
            <Typography className={classes.paragraph}>
              All of the subscriptions on Qualla are paid in Dai, a completely
              decentralized, stable crytocurrency pegged to the USD. Dai is
              built on the Ethereum network and can be used by anyone in the
              world. Accept payments from anywhere without worring about
              exchange rates, high transaction fees, or volatility. Transactions
              are settled instantly and securely.
            </Typography>
            <div className={classes.button}>
              <Tooltip title="Coming Soon..." arrow>
                <Button variant="contained" color="secondary" disableRipple>
                  <Typography variant="h6" className={classes.buttonTxt}>
                   Learn more about Dai
                  </Typography>
                  <ArrowForwardIosIcon className={classes.buttonIcon} />
                </Button>
              </Tooltip>
            </div>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.mediaContainer}>
            <DaiLogo className={classes.media} />
          </Grid>
        </Grid>
      </CustomContainer>
    </div>
  );
}