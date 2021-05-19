import "./App.css";
import Landing from "./page/Landing Page";
import Live from "./page/Live Trades";
import Contact from "./page/Contact Page";
import Dashboard from "./page/Dashboard";
import Admin from "./page/Admin";
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
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/live" component={Live} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={Landing} />
          <Route path="*" exact={true}>
            <div>Not Found</div>
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
