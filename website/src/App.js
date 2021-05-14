import "./App.css";
import Landing from "./page/Landing Page";
import Live from "./page/Live Trades";
import Contact from "./page/Contact Page";
import Dashboard from "./page/Dashboard";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fdfeff",
      dark: "#f7f9fb",
    },
    secondary: {
      light: "#B0D2E8",
      main: "#0b4870",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/live" component={Live} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
