import "./App.css";
import Landing from "./page/Landing Page";
import Live from "./page/Live Trades";
import Contact from "./page/Contact Page";
import About from "./page/About Page";
import Dashboard from "./page/Dashboard";
import Admin from "./page/Admin";
import Payment from "./page/Payment";
import Settings from "./page/Settings";
import Profile from "./page/Profile";
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
          <Route path="/profile" component={Profile} />
          <Route path="/settings" component={Settings} />
          <Route path="/payment" component={Payment} />
          <Route path="/admin" component={Admin} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/live" component={Live} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
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
