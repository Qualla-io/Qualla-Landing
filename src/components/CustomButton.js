import { ButtonBase, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 12,
  },
  btnText: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
    color: theme.palette.secondary.contrastText,
  },
  iconDiv: {
      height: 1
      
  },
  icon: {
    color: theme.palette.secondary.contrastText,
    height: "20px",
    width: "20px",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

export default function CustomButton() {
  const classes = useStyles();
  return (
    <ButtonBase className={classes.btn}>
      <Typography variant="h5" className={classes.btnText}>
        Test
      </Typography>
      <div>
        <ArrowForwardIosIcon className={classes.icon} />
      </div>
    </ButtonBase>
  );
}
