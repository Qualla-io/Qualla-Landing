import "./App.css";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
//components
import QuallaLogo from "./components/QuallaLogo";
import Topbar from "./components/Topbar";

const font = "'Rubik', sans-serif";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3e7cb1",
    },
    secondary: {
      main: "#F16F55",
      contrastText: "#FFF",
    },
  },
  typography: {
    fontFamily: font,
    button: {
      textTransform: "none",
    },
  },
});

theme = responsiveFontSizes(theme);

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down("xs")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "3.75rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "4.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "5rem",
  },
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <SnackbarProvider
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            variant="info"
            autoHideDuration={2000}
            // hideIconVariant
          >
            <QuallaLogo />
            <Topbar />
            <BaseRouter />
          </SnackbarProvider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
