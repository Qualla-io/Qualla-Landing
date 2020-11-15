import "./App.css";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";


//components
import Header from "./containers/Header";
import CardsSection from "./containers/HowItWorks";

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

  [theme.breakpoints.up("sm")]: {
    fontSize: "4rem",
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
        <CardsSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
