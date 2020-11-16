import React from "react";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ReactComponent as SmartContractLogo } from "../images/SmartContract.svg";
import useStyles from "./detailStyles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function ContractDetail() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid
          container
          direction="row"
          spacing={6}
          className={classes.container}
        >
          <Grid item xs={12} sm={7} className={classes.content}>
            <Typography variant="h3" className={classes.title}>
              <b>Unstopable creativity</b>
            </Typography>
            <Typography className={classes.paragraph}>
              When you create a subscrition through Qualla, we launch an
              Ethereum smart contract on your behalf. No one can destroy or
              modify this contract without your approval, not even us! You
              control the rules and your subscribers pay directly to your
              contract. This allows you complete creative freedom without the
              worry of censorship or deplatforming.
            </Typography>
            <div className={classes.button}>
              <Button variant="contained">
                <Typography variant="subtitle1" className={classes.buttonTxt}>
                  <b>Learn more about Smart Contracts</b>
                </Typography>
                <ArrowForwardIosIcon className={classes.buttonIcon}/>
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.mediaContainer}>
            <SmartContractLogo className={classes.media} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
