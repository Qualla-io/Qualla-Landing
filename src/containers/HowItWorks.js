import {
  Button,
  Grid,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React from "react";
import HowItWorksCard from "../components/HowItWorksCard";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CustomContainer from "./CustomContainer";
import { useSnackbar } from "notistack";
// import SmartContractCard from "../components/SmartContractCard";

const steps = [
  {
    num: 1,
    title: "Launch",
    description: `
    Subscriptions on Qualla are powered by an Ethereum smart contract that's owned by the creator. 
    Choose the subscriptions tiers you want to offer and the perks to go with them. 
    Invite your audience once you go live.`,
  },
  {
    num: 2,
    title: "Create",
    description: `
    Let those creative juices flow! Deliver the content that your fans love your for and 
    Qualla will handle the rest. We take the complexity out of accepting cryptocurrency 
    payments, allowing you the freedom to release your creative spirit.`,
  },
  {
    num: 3,
    title: "Collect",
    description: `
    Your subscription revenue goes straight from your fan's wallets to the smart contract you own.
    Transfer your balance at any time to your personal wallet or to an exchange and convert to the fiat 
    currency of your choice. Qualla takes a small percentage when you withdraw.`,
  },
];

// const extra = `
// All smart contracts on Qualla are paid in Dai, a stable coin pegged to the USD.
//     This means you don't have to worry about the typical volatility of cryptocurrencies.
// `;

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
  },
  containerGrid: {
    flexGrow: 1,
  },
  containerDiv: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
    flexGrow: 1,
    background: `linear-gradient(45deg, #C2FFF2, #EBFFFB)`,
    // backgroundColor: "#C2FFF2",
    alignContent: "center",
    borderBottomLeftRadius: 100
  },
  steps: {
    height: "100%",
    flexGrow: 1,
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
  },
  demoContainer: {
    flexGrow: 1,
    textAlign: "center",
  },
  demo: {
    marginTop: theme.spacing(6),
    flexGrow: 1,
    textAlign: "center",
    borderWidth: 5,
    borderRadius: 10,
    elevation: 5,
  },
  step: {
    // height: "100%",
  },
  demoText: {
    marginRight: theme.spacing(2),
  },
}));

export default function CardsSection() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("Coming Soon...");
  };
  return (
    <div className={classes.containerDiv}>
      <CustomContainer className={classes.container}>
        <Typography variant="h4" className={classes.sectionTitle}>
          How it works:
        </Typography>
        <Grid
          container
          spacing={2}
          alignItems="stretch"
          className={classes.containerGrid}
        >
          {steps.map((step) => (
            <Grid item s={12} md={4} key={step.num} style={{ display: "flex" }}>
              <HowItWorksCard step={step} className={classes.step} />
            </Grid>
          ))}
        </Grid>
        <div className={classes.demoContainer}>
          <Tooltip title="Coming Soon..." arrow>
            <Button
              variant="contained"
              color="secondary"
              disableRipple
              className={classes.demo}
              onClick={handleClick}
            >
              <Typography variant="h5" className={classes.demoText}>
                Try the Demo!
              </Typography>
              <ArrowForwardIosIcon />
            </Button>
          </Tooltip>
        </div>
      </CustomContainer>
    </div>
  );
}
