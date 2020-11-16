import "./App.css";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

//components
import Header from "./containers/Header";
import HowItWorks from "./containers/HowItWorks";
import Details from "./containers/Detais";
import Timeline from "./components/Timeline";
import Footer from "./containers/Footer";

const font = "'Rubik', sans-serif";

let theme = createMuiTheme({
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <HowItWorks />
        <Details />
        <Timeline />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
