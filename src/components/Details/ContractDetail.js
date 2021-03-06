import React from "react";
import {
  Button,
  Grid,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { ReactComponent as SmartContractLogo } from "../../images/SmartContractPath.svg";
import useStyles from "../detailStyles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CustomContainer from "../../containers/CustomContainer";
import { useSnackbar } from "notistack";

const _useStyles = makeStyles((theme) => ({
  div: {
    // backgroundColor: "#B0B0B0",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

export default function ContractDetail() {
  const _classes = _useStyles();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("Coming Soon...");
  };
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
              <b>Unstoppable creativity</b>
            </Typography>
            <Typography className={classes.paragraph}>
              When you create a subscription  through Qualla, we launch an
              Ethereum smart contract on your behalf. No one can destroy or
              modify this contract without your approval, not even us! You
              control the rules and your subscribers pay directly to your
              contract. This allows you complete creative freedom without the
              worry of censorship or deplatforming.
            </Typography>
            <div className={classes.button}>
              <Tooltip title="Coming soon..." arrow>
                <Button
                  variant="contained"
                  color="secondary"
                  disableRipple
                  className={classes.btn}
                  onClick={handleClick}
                >
                  <Typography variant="h6" className={classes.buttonTxt}>
                    Smart Contracts 101
                  </Typography>
                  <ArrowForwardIosIcon className={classes.buttonIcon} />
                </Button>
              </Tooltip>
            </div>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.mediaContainer}>
            <SmartContractLogo className={classes.media} />
          </Grid>
        </Grid>
      </CustomContainer>
    </div>
  );
}
