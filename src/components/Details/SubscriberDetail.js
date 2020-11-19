import React from "react";
import {
  Button,
  Grid,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import useStyles from "../detailStyles";
import { ReactComponent as DaiLogo } from "../../images/complex.svg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CustomContainer from "../../containers/CustomContainer";
import { useSnackbar } from "notistack";

const _useStyles = makeStyles((theme) => ({
  div: {
    background: `linear-gradient(225deg, #C2FFF2, #EBFFFB)`,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
}));

export default function SubscriberDetail() {
  const classes = useStyles();
  const _classes = _useStyles();
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
          <Grid item xs={12} sm={5} className={classes.mediaContainer}>
            <DaiLogo className={classes.media} />
          </Grid>
          <Grid item xs={12} sm={7} className={classes.content}>
            <Typography variant="h3" className={classes.title}>
              <b>Crypto made easy</b>
            </Typography>
            <Typography className={classes.paragraph}>
              Let use help you plant the seeds of your freedom. Decentralized
              applications have historically been complex and hard to use.
              Qualla puts the user experience in the front row seat. We make it
              easy for you to set up your contract, onboard users, and interact
              with your community. Our goal is to provide you with all the
              benefits that decentralization has to offer, while removing as
              much of the complexity as possible.
            </Typography>
            <div className={classes.button}>
              <Tooltip title="Coming Soon..." arrow>
                <Button
                  variant="contained"
                  color="secondary"
                  disableRipple
                  className={classes.btn}
                  onClick={handleClick}
                >
                  <Typography variant="h6" className={classes.buttonTxt}>
                    Try the demo!
                  </Typography>
                  <ArrowForwardIosIcon />
                </Button>
              </Tooltip>
            </div>
          </Grid>
        </Grid>
      </CustomContainer>
    </div>
  );
}
