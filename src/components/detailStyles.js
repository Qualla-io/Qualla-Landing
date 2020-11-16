import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  containerDiv: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  container: {
    padding: theme.spacing(4),
  },
  mediaContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  media: {
    // margin: theme.spacing(4),
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  paragraph: {},
  button: {
    marginTop: theme.spacing(3),
  },
  buttonTxt: {
    marginRight: theme.spacing(1),
  },
  buttonIcon: {
    height: "20px",
    width: "20px"
  },
}));

export default useStyles;
